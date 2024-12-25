import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [username, setUsername] = useState("");
  const [phantomWallet, setPhantomWallet] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate("/login");
        return;
      }
      
      // Fetch user profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("username, phantom_wallet")
        .eq("id", user.id)
        .single();

      if (profile) {
        setUsername(profile.username || "");
        setPhantomWallet(profile.phantom_wallet || "");
      }
      setLoading(false);
    };

    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const connectPhantom = async () => {
    try {
      // @ts-ignore
      const provider = window.phantom?.solana;
      
      if (provider?.isPhantom) {
        const resp = await provider.connect();
        const wallet = resp.publicKey.toString();
        setPhantomWallet(wallet);
        toast({
          title: "Wallet Connected",
          description: "Your Phantom wallet has been connected successfully.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Phantom Not Found",
          description: "Please install Phantom wallet extension first.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Connection Failed",
        description: "Failed to connect to Phantom wallet.",
      });
    }
  };

  const updateProfile = async () => {
    try {
      setUpdating(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "You must be logged in to update your profile.",
        });
        return;
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          username,
          phantom_wallet: phantomWallet,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) throw error;

      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: "Failed to update profile.",
      });
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">User Profile</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Username</label>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phantom Wallet</label>
            <div className="flex gap-2">
              <Input
                value={phantomWallet}
                readOnly
                placeholder="Connect your Phantom wallet"
              />
              <Button onClick={connectPhantom}>
                Connect Wallet
              </Button>
            </div>
          </div>

          <Button 
            className="w-full" 
            onClick={updateProfile}
            disabled={updating}
          >
            {updating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;