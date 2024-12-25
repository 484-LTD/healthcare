import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

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
      // Here we would normally make the API call to OpenAI
      // For now, we'll simulate a response
      setTimeout(() => {
        const aiMessage = {
          role: "assistant",
          content: "I apologize, but I need an API key to provide medical assistance. Please provide your OpenAI API key in the project settings.",
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);

      toast({
        title: "API Key Required",
        description: "Please add your OpenAI API key in the project settings to enable the AI assistant.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response from AI assistant.",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="p-4 bg-white shadow-lg">
        <div className="h-[400px] overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-medical-primary text-white ml-auto"
                  : "bg-medical-accent text-gray-800"
              } max-w-[80%] ${message.role === "user" ? "ml-auto" : "mr-auto"}`}
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
          />
          <Button type="submit" disabled={isLoading} className="bg-medical-primary hover:bg-medical-primary/90">
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
          </Button>
        </form>
      </Card>
    </div>
  );
};