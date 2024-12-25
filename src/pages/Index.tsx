import { ChatInterface } from "@/components/ChatInterface";
import { Heart, Brain, Stethoscope, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-medical-accent/20">
      <div className="container mx-auto px-4 py-8">
        <div className="relative text-center mb-8">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/")}
              className="absolute left-0 top-0"
            >
              <Home className="h-5 w-5" />
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-medical-primary">
            Your Healthcare AI Assistant
          </h1>
          <p className="text-gray-600 mt-2">
            Get instant AI-powered health information and guidance
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Chat Section */}
          <div className="md:col-span-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Chat with Health AI</h2>
              <ChatInterface />
            </div>
          </div>

          {/* Dashboard Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-medical-primary">
                  <Brain className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600">AI Interactions</p>
                    <p className="font-semibold">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-medical-primary">
                  <Heart className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600">Health Topics</p>
                    <p className="font-semibold">Comprehensive Coverage</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-medical-primary">
                  <Stethoscope className="w-5 h-5" />
                  <div>
                    <p className="text-sm text-gray-600">Medical Guidance</p>
                    <p className="font-semibold">Professional Information</p>
                  </div>
                </div>
                <div className="mt-4 border-t pt-4">
                  <h3 className="text-lg font-semibold mb-3">Latest Updates</h3>
                  <div className="twitter-embed">
                    <blockquote className="twitter-tweet">
                      <a href="https://twitter.com/ODUMx/status/1769786414389698997"></a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Important Notice</h2>
              <p className="text-sm text-gray-600 mb-4">
                This AI assistant provides general information only and should not replace
                professional medical advice. Always consult healthcare professionals for
                medical decisions.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Website Status</span>
                    <span>99.9% Uptime</span>
                  </div>
                  <Progress value={99.9} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Folding@Home Servers</span>
                    <span>98.5% Operational</span>
                  </div>
                  <Progress value={98.5} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Total Website Hits</span>
                    <span>124,567</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>AI Inquiries Made</span>
                    <span>45,892</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Heart className="w-12 h-12 text-medical-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Health Information</h3>
              <p className="text-gray-600">
                Access reliable information about symptoms, conditions, and treatments
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Brain className="w-12 h-12 text-medical-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Analysis</h3>
              <p className="text-gray-600">
                Get AI-powered analysis of your health concerns and questions
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Stethoscope className="w-12 h-12 text-medical-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Medical Guidance</h3>
              <p className="text-gray-600">
                Receive general medical guidance and health recommendations
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>© 2024 ODUM AI. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;