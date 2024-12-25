import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export const ChatInterface = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await supabase.functions.invoke('chat-with-ai', {
        body: {
          messages: [...messages, userMessage],
          userId: null
        },
      });

      if (response.error) {
        throw new Error(response.error.message);
      }

      // Handle the response properly, ensuring we get a string for content
      const aiMessageContent = typeof response.data === 'object' ? response.data.content : response.data;
      const aiMessage = { role: "assistant", content: aiMessageContent };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response from AI assistant.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="h-[400px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg ${
              message.role === "user"
                ? "bg-medical-primary text-white ml-auto"
                : "bg-gray-100 text-gray-800"
            } max-w-[80%] ${message.role === "user" ? "ml-auto" : "mr-auto"} break-words`}
          >
            {message.content}
          </div>
        ))}
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-32">
            Ask me anything about your health concerns!
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your health question here..."
          className="min-h-[50px] resize-none"
          maxLength={1000}
        />
        <Button 
          type="submit" 
          disabled={isLoading} 
          className="bg-medical-primary hover:bg-medical-primary/90 transition-colors duration-200"
          aria-label={isLoading ? "Sending message..." : "Send message"}
        >
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
        </Button>
      </form>
    </div>
  );
};