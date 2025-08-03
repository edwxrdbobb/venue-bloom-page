import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone } from "lucide-react";

const MobileExperienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-secondary/80 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get your ticket, receive timely reminders, and check in
                <span className="text-white/90"> without the wait</span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                StarrTix makes attending events simple and enjoyable. Our mobile-first 
                approach ensures you have everything you need right in your pocket.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
                <span className="text-lg">Receive your digital ticket instantly</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
                <span className="text-lg">Get smart reminders before the event</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
                <span className="text-lg">Quick QR code check-in at the venue</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="glass" size="lg" className="group">
                <Apple className="mr-2 h-5 w-5" />
                Download for iOS
              </Button>
              
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                <Download className="mr-2 h-5 w-5" />
                Get Android App
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Phone mockup with glowing effect */}
            <div className="relative mx-auto w-80 h-96 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-primary to-primary-glow rounded-[2.5rem] p-6 relative overflow-hidden">
                {/* Screen content simulation */}
                <div className="space-y-4">
                  <div className="h-20 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-32 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-24 bg-white/15 rounded-2xl backdrop-blur-sm"></div>
                  <div className="h-16 bg-white/10 rounded-2xl backdrop-blur-sm"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-glow to-secondary opacity-20 blur-2xl"></div>
              </div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/15 rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExperienceSection;