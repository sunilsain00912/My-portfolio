import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "./contact-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-photo");

  return (
    <section className="relative pt-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-lg">
            <p className="text-lg">Hey. I'm Sunil,</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter uppercase break-words">
              full stack developer
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Building seamless digital experiences from front-end to back-end.
              I create modern, scalable, and high-performance web applications
              that bring your ideas to life.
            </p>

            {/* Buttons Row */}
            <div className="flex gap-2 mt-8 flex-nowrap">
              {/* Contact Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full text-xs px-3 py-2 sm:text-base sm:px-6 sm:py-3">
                    CONTACT ME{" "}
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Me</DialogTitle>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>

              {/* Download Resume Button */}
              <a href="/resume.pdf" download>
                <Button
                  variant="outline"
                  className="rounded-full text-xs px-3 py-2 sm:text-base sm:px-6 sm:py-3 whitespace-nowrap"
                >
                  DOWNLOAD RESUME
                  <Download className="ml-2 h-3 w-3 sm:h-5 sm:w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="h-full flex items-center justify-start">
            {heroImage && (
              <div className="w-full max-w-xs md:max-w-sm aspect-[4/5] mx-auto md:ml-auto relative">
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  priority
                  className="object-cover object-top rounded-full"
                  data-ai-hint={heroImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
