import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, CreditCard, BarChart3, Settings, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Create Your Event",
      description: "Set up your event details, pricing, and ticket types in minutes using our intuitive dashboard.",
      icon: Calendar,
      features: ["Event details & description", "Multiple ticket types", "Pricing & capacity", "Custom branding"]
    },
    {
      step: "02", 
      title: "Customize & Launch",
      description: "Design your event page, set up payment processing, and publish to start selling tickets.",
      icon: Settings,
      features: ["Custom event pages", "Payment integration", "Social media sharing", "SEO optimization"]
    },
    {
      step: "03",
      title: "Sell Tickets",
      description: "Share your event and watch ticket sales roll in with our optimized checkout experience.",
      icon: CreditCard,
      features: ["Mobile-optimized checkout", "Multiple payment methods", "Instant confirmations", "Automated receipts"]
    },
    {
      step: "04",
      title: "Manage Attendees",
      description: "Track sales, manage attendees, and communicate with your audience all in one place.",
      icon: Users,
      features: ["Real-time sales tracking", "Attendee management", "Email communications", "Check-in tools"]
    },
    {
      step: "05",
      title: "Analyze & Grow",
      description: "Use detailed analytics to understand your audience and optimize future events.",
      icon: BarChart3,
      features: ["Sales analytics", "Attendee insights", "Revenue tracking", "Performance reports"]
    }
  ];

  const benefits = [
    {
      title: "Quick Setup",
      description: "Get your event live in under 10 minutes",
      icon: CheckCircle
    },
    {
      title: "No Hidden Fees",
      description: "Transparent 5% fee only on paid tickets",
      icon: CheckCircle
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it",
      icon: CheckCircle
    },
    {
      title: "Mobile Ready",
      description: "Optimized for all devices and screen sizes",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-alt to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How <span className="text-gradient">StarrTix</span> Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            From event creation to post-event analytics, here's how StarrTix makes event management simple and effective.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.step} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={`${isEven ? '' : 'lg:col-start-2'}`}>
                    <Card className="glass-card h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                        <p className="text-muted-foreground mb-6">{step.description}</p>
                        <ul className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                    <div className="relative">
                      <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-2xl flex items-center justify-center">
                        <Icon className="h-24 w-24 text-primary" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose StarrTix?
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run successful events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="glass-card">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of event organizers who trust StarrTix
              </p>
              <Button size="lg" className="text-lg px-8 py-6">
                Create Your First Event
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;