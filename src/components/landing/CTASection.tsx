import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-secondary text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-white/90">Trusted by 10,000+ organizers</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform
            <span className="text-white/90"> Your Events?</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful event organizers who have streamlined their 
            processes and delighted their attendees with StarrTix.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="glass" size="lg" className="group text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-sm text-white/70 pt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;