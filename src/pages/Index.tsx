import { ChatInterface } from "@/components/ChatInterface";
import { Heart, Brain, Stethoscope, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-medical-accent/20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-medical-primary mb-4">
            Healthcare AI Assistant
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your personal AI health companion. Get instant, AI-powered health information and guidance.
          </p>
        </div>

        <ChatInterface />

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <Heart className="w-12 h-12 text-medical-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Health Information</h3>
            <p className="text-gray-600">Get reliable information about symptoms, conditions, and treatments</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <Brain className="w-12 h-12 text-medical-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
            <p className="text-gray-600">AI-powered analysis of your health concerns and questions</p>
          </div>
          <div className="p-6 rounded-lg bg-white shadow-lg">
            <Stethoscope className="w-12 h-12 text-medical-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Medical Guidance</h3>
            <p className="text-gray-600">Get general medical guidance and health recommendations</p>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>
            Note: This AI assistant provides general information only and should not replace professional medical advice.
            Always consult with healthcare professionals for medical decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;