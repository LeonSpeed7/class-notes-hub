import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Upload, Sparkles, CheckCircle, TrendingUp, MessageSquare, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate("/browse");
      }
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">StudyShare</span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/auth")}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Your Academic Success
              <br />
              Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              StudyShare is the ultimate student community where knowledge flows freely. 
              Upload your notes, discover resources from peers, and collaborate in real-time 
              with AI-powered recommendations tailored to your courses.
            </p>
          </div>
          
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")} 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Try It For Free Now! 🚀
          </Button>

          <p className="text-white/70 text-sm">No credit card required • Join thousands of students</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center text-white">
              <BookOpen className="w-12 h-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Browse Notes</h3>
              <p className="text-white/80 text-sm">
                Access thousands of student-shared notes across all subjects, classes, and topics
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center text-white">
              <Sparkles className="w-12 h-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
              <p className="text-white/80 text-sm">
                Get smart suggestions for notes that match your school, courses, and learning style
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center text-white">
              <Upload className="w-12 h-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Share Your Work</h3>
              <p className="text-white/80 text-sm">
                Upload your notes easily and help fellow students while building your reputation
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
            <CardContent className="p-6 text-center text-white">
              <MessageSquare className="w-12 h-12 mb-4 mx-auto text-accent" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Chat</h3>
              <p className="text-white/80 text-sm">
                Discuss notes, ask questions, and collaborate with students in live discussions
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose StudyShare */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Students Love StudyShare
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2">Free Forever</h3>
                <p className="text-white/80">No hidden fees, no premium tiers. All features available to every student.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2">Better Grades</h3>
                <p className="text-white/80">Learn from top students' notes and study strategies to improve your performance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2">School Communities</h3>
                <p className="text-white/80">Connect with students from your school and build your academic network.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div className="text-white">
                <h3 className="font-semibold text-lg mb-2">Quality Content</h3>
                <p className="text-white/80">Rate and review notes to ensure only the best resources rise to the top.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Ready to Transform Your Studies?
          </h2>
          <p className="text-xl text-white/90">
            Join the community of students succeeding together
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")} 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Try It For Free Now! 🎓
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-24 border-t border-white/10">
        <div className="text-center text-white/60 text-sm">
          <p>© 2025 StudyShare. Empowering students to succeed together.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
