import { Card, CardContent } from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  Users, 
  Calendar, 
  BarChart3, 
  CheckCircle 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Ticketing",
    description: "Advanced security measures prevent ticket duplication and fraud, ensuring authentic attendee experiences."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    description: "Get your ticket, receive timely reminders, and check in without the wait. Simple and enjoyable mobile experience."
  },
  {
    icon: Users,
    title: "Invitation Management",
    description: "Full control over guest lists, invitations, and RSVPs with real-time tracking and automated reminders."
  },
  {
    icon: Calendar,
    title: "Event Visibility",
    description: "Crystal clear event oversight with comprehensive dashboards showing all critical event metrics at a glance."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Deep insights into attendance patterns, engagement metrics, and event performance with actionable data."
  },
  {
    icon: CheckCircle,
    title: "Seamless Check-in",
    description: "Lightning-fast check-in process with QR codes, reducing wait times and improving attendee satisfaction."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for
            <span className="text-primary"> Perfect Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools designed specifically for corporate event organizers 
            who demand excellence and efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;