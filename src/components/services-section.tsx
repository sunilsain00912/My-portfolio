import { Separator } from './ui/separator';

const services = [
  {
    title: 'FRONT-END DEVELOPMENT',
    description: 'Crafting responsive and dynamic user interfaces with modern frameworks.',
  },
  {
    title: 'BACK-END DEVELOPMENT',
    description: 'Building robust server-side applications, APIs, and services.',
  },
  {
    title: 'DATABASE ARCHITECTURE',
    description: 'Designing and managing scalable and efficient database solutions.',
  },
  {
    title: 'END-TO-END SOLUTIONS',
    description: 'Delivering complete web applications from concept to deployment.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
                <h3 className="font-bold text-sm uppercase tracking-wider">{service.title}</h3>
                <Separator />
                <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
