const stats = [
  {
    number: "500K+",
    label: "Events Managed",
    description: "Successfully organized events worldwide"
  },
  {
    number: "2M+",
    label: "Happy Attendees",
    description: "Seamless experiences delivered"
  },
  {
    number: "99.9%",
    label: "Uptime",
    description: "Reliable platform you can trust"
  },
  {
    number: "50+",
    label: "Countries",
    description: "Global reach and local expertise"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Event Leaders
            <span className="text-primary"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful event organizers who have transformed 
            their events with our platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;