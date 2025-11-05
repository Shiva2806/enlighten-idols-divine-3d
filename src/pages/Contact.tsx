import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out for inquiries or blessings.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="font-serif text-3xl font-bold text-gradient-gold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="mt-2" />
                </div>
                <Button type="submit" size="lg" className="w-full font-semibold">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-foreground/80 mb-2">+91 7780391225</p>
                  <WhatsAppButton label="Chat Now" className="text-primary" />
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@theenlighthub.com" className="text-foreground/80 hover:text-primary transition-divine hover:underline">
                    info@theenlighthub.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
