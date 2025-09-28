import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 'client-1',
    name: 'Jane Doe',
    company: 'Tech Solutions',
    quote: "Dominic's design sense is impeccable. He transformed our outdated platform into a modern, user-friendly experience that our clients love. The results speak for themselves.",
  },
  {
    id: 'client-2',
    name: 'John Smith',
    company: 'Creative Minds',
    quote: "Working with Dominic was a breeze. He's a true professional who listens to feedback and delivers exceptional results. I couldn't be happier with our new brand identity.",
  },
  {
    id: 'client-3',
    name: 'Emily White',
    company: 'Innovate Co.',
    quote: "The attention to detail and creative vision Dominic brought to our project was outstanding. He took our ideas and elevated them to a level we hadn't imagined.",
  },
  {
    id: 'client-4',
    name: 'Michael Brown',
    company: 'Startup Hub',
    quote: 'Dominic is a game-changer. His ability to blend aesthetics with functionality is second to none. Our user engagement has skyrocketed since the redesign.',
  },
  {
    id: 'client-5',
    name: 'Sarah Johnson',
    company: 'Future Ventures',
    quote: 'From concept to launch, Dominic delivered a flawless experience. He is a strategic thinker and a creative powerhouse. I highly recommend him.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                What My Clients Say
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Discover how my design expertise has helped businesses elevate their brand and user experience.
            </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
                const testimonialImage = PlaceHolderImages.find(img => img.id === testimonial.id);
                return (
                    <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 group">
                        <div className="p-1 h-full">
                        <Card className="h-full flex flex-col transition-transform duration-300 ease-in-out group-hover:scale-105">
                            <CardContent className="flex flex-col items-start justify-between p-6 flex-1">
                                <div>
                                    <div className="flex mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                    "{testimonial.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 mt-6">
                                    {testimonialImage && (
                                        <Image
                                            src={testimonialImage.imageUrl}
                                            alt={testimonial.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                            data-ai-hint={testimonialImage.imageHint}
                                        />
                                    )}
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  )
}
