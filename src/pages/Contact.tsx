
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-24 pb-12 bg-secondary/50">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold tracking-tight mb-6 animate-fade-in">Contact Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            I'm interested in freelance opportunities and collaborations. If you have any questions or would like to discuss a project, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <Card className="border border-border/50">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Moratuwa, Colombo, Sri Lanka
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Mail size={20} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <a
                          href="mailto:lingalingeswaran99@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          lingalingeswaran99@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Phone</h3>
                        <a
                          href="tel:+94774157029"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +94 774 157 029
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">Connect with me</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} className="text-muted-foreground" />
                      </a>
                      <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} className="text-muted-foreground" />
                      </a>
                      <a
                        href="mailto:lingalingeswaran99@gmail.com"
                        className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/10 transition-colors"
                        aria-label="Email"
                      >
                        <Mail size={20} className="text-muted-foreground" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
