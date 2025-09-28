import { ContactForm } from "./contact-form";

export function ContactSection() {
    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">
                        Let's Work Together
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Have a project in mind? I'd love to hear about it.
                    </p>
                </div>
                <div className="max-w-xl mx-auto mt-12">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
