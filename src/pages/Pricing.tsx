import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, BarChart3, Megaphone, Camera, Users, Tag, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const heroRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

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

    // Pricing card animation
    if (pricingRef.current) {
      gsap.fromTo(pricingRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pricingRef.current,
            start: "top 80%",
          }
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
          }
        }
      );
    }

    // Services animation
    if (servicesRef.current) {
      gsap.fromTo(servicesRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Types",
      items: [
        "Unlimited free events",
        "Unlimited paid events", 
        "Unlimited private (invite-only) events",
        "Recurring events"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Tracking And Management",
      items: [
        "No fee on free tickets",
        "5% fee per paid ticket",
        "Ability to manage ticket inventory",
        "Sales Summary Dashboard",
        "Check in analytics"
      ]
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Promotion And Growth", 
      items: [
        "Social Sharing Tools",
        "Emails To Attendees",
        "Automated Event Reminders",
        "Search Engine Optimisation",
        "Public Listing on StarrTix For Event Discovery",
        "Blog your Past Events and Share the Experience with Attendees"
      ]
    }
  ];

  const valueAddedServices = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Wristband",
      description: "Professional wristbands for seamless event access control and branding."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional event photography to capture your memorable moments."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Staffing", 
      description: "Experienced staff to help manage and coordinate your event."
    },
    {
      icon: <Tag className="w-8 h-8" />,
      title: "Event Tags",
      description: "Custom branded tags and materials for professional event presentation."
    }
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
              Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
              Simple pricing.
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Sign Up for free</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              There is no charge for hosting free events on StarrTix. If you're selling tickets, a fee will apply.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing Card */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div ref={pricingRef} className="relative">
            <Card className="blur-card border-border/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10" />
              <CardContent className="relative p-12 text-center">
                <div className="mb-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary mb-4">5%</div>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground">per paid ticket</div>
                </div>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Start organizing events for free. Only pay when you sell tickets, keeping your costs low and ROI high.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={featuresRef} className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="blur-card border-border/20 hover:border-primary/30 transition-all duration-300 group h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-4">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Value Added Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Value Added Services are available for a small fee. Reach out to our team for a tailored quote.
            </p>
          </div>

          <div ref={servicesRef}>
            <Card className="blur-card border-border/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20" />
              <CardContent className="relative p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {valueAddedServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 text-white group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-white/80 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <Button size="lg" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Contact US
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="blur-card border-border/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">When do I pay the 5% fee?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The 5% fee is only charged when you sell paid tickets. Free events have no charges whatsoever.
                </p>
              </CardContent>
            </Card>

            <Card className="blur-card border-border/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Are there any hidden costs?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No hidden costs! Our pricing is transparent - 5% per paid ticket and optional value-added services.
                </p>
              </CardContent>
            </Card>

            <Card className="blur-card border-border/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Can I cancel anytime?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes, you can stop using StarrTix anytime. There are no long-term contracts or cancellation fees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;