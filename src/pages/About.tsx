import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calendar, BarChart3, Shield, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }

    // Features cards animation
    if (featuresRef.current) {
      gsap.fromTo(featuresRef.current.children,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );
    }

    // Stats animation
    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          }
        }
      );
    }
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "For Attendees",
      description: "Seamless ticket purchasing with QR codes, real-time updates, and mobile-first experience.",
      benefits: ["Easy ticket purchase", "QR code validation", "Event reminders", "Mobile tickets"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "For Organizers", 
      description: "Complete event management with analytics, ticket sales tracking, and revenue insights.",
      benefits: ["Real-time analytics", "Revenue tracking", "Guest validation", "Admin dashboard"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Reliable",
      description: "Bank-level security with 99.9% uptime ensuring your events run smoothly.",
      benefits: ["Secure payments", "Data protection", "99.9% uptime", "24/7 support"]
    }
  ];

  const stats = [
    { number: "500K+", label: "Events Managed" },
    { number: "2M+", label: "Happy Attendees" }, 
    { number: "50+", label: "Countries" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--primary)_0%,_transparent_50%)] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              About StarrTix
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Transforming Event
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Management</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              We empower both attendees and organizers with cutting-edge technology, 
              making every event memorable and every experience seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're attending events or organizing them, StarrTix provides 
              the tools you need for success.
            </p>
          </div>

          <div ref={featuresRef} className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="blur-card border-border/20 hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Globally
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6">
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Making Events 
                <span className="text-primary"> Effortless</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We believe that organizing and attending events should be simple, secure, and enjoyable. 
                Our platform bridges the gap between organizers and attendees, creating seamless experiences 
                that everyone loves.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-primary mr-4" />
                  <span className="text-foreground">Streamlined event creation and management</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-primary mr-4" />
                  <span className="text-foreground">Enterprise-grade security and reliability</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 text-primary mr-4" />
                  <span className="text-foreground">Data-driven insights for better events</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="blur-card p-8 border-border/20">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">Event Excellence</h3>
                    <p className="text-muted-foreground">Connecting people through memorable experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;