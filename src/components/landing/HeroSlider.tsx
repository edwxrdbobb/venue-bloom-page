import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Play, Users, Calendar } from "lucide-react";
import { gsap } from "gsap";

const slides = [
  {
    id: "organizers",
    title: "Built for Corporate Event Organizers",
    subtitle: "Take Control of Your Events",
    description: "Stop the stress of event visibility and ticket duplication. With StarrTix, you get visibility, secure tickets, and full control of managing invitations, ticketing, and RSVPs.",
    ctaPrimary: "Create Event",
    ctaSecondary: "Watch Demo",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1080&fit=crop&auto=format",
    gradient: "from-primary/90 via-primary-glow/80 to-secondary/70"
  },
  {
    id: "attendees",
    title: "Your Ultimate Event Experience",
    subtitle: "Discover Amazing Events",
    description: "Join exclusive corporate events, network with professionals, and enjoy seamless ticketing. Experience events like never before with real-time updates and social interaction.",
    ctaPrimary: "Find Events",
    ctaSecondary: "Learn More",
    icon: Users,
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop&auto=format",
    gradient: "from-secondary/90 via-primary/80 to-primary-glow/70"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    // GSAP animations for slide content
    const tl = gsap.timeline();
    
    if (titleRef.current && contentRef.current) {
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(contentRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
        "-=0.4"
      );
    }
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Carousel 
        setApi={setApi}
        className="w-full h-screen"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-screen">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}></div>
              </div>

              {/* Background pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-50"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-6 text-center text-white">
                  <div className="space-y-8">
                    {/* Icon */}
                    <div className="flex justify-center">
                      <div className="blur-card-strong p-4 rounded-full w-20 h-20 flex items-center justify-center">
                        <slide.icon className="w-10 h-10 text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <div ref={titleRef}>
                      <p className="text-lg md:text-xl text-white/80 mb-4">{slide.subtitle}</p>
                      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        {slide.title.split(' ').map((word, i) => (
                          <span key={i} className={i === slide.title.split(' ').length - 1 || i === slide.title.split(' ').length - 2 ? 
                            "bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent" : ""
                          }>
                            {word}{' '}
                          </span>
                        ))}
                      </h1>
                    </div>
                    
                    {/* Description and CTAs */}
                    <div ref={contentRef} className="space-y-8">
                      <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Button variant="hero" size="lg" className="group">
                          {slide.ctaPrimary}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <Button variant="glass" size="lg" className="text-white hover:bg-white/10">
                          <Play className="mr-2 h-5 w-5" />
                          {slide.ctaSecondary}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 blur-card-strong border-white/30 text-white hover:bg-white/20 z-20" />
        <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 blur-card-strong border-white/30 text-white hover:bg-white/20 z-20" />

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default HeroSlider;