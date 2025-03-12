
import React, { useState } from 'react';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { toast } from "sonner";
import { cn } from '@/lib/utils';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: 'mailto:example@example.com', label: 'Email' },
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="section bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="opacity-0 animate-fade-in mb-4">Get In Touch</h2>
            <p className="opacity-0 animate-fade-in reveal-delay-1 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="opacity-0 animate-scale-in reveal-delay-2">
              <div className="bg-card rounded-xl border shadow-sm p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary/60 focus:outline-none transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary/60 focus:outline-none transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 bg-background border rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary/60 focus:outline-none transition-all duration-200 resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "group relative overflow-hidden rounded-full bg-primary w-full px-6 py-3 text-primary-foreground font-medium transition-all duration-300 ease-apple hover:bg-primary/90 hover:shadow-lg active:translate-y-[1px] flex items-center justify-center",
                        isSubmitting && "opacity-80 cursor-not-allowed"
                      )}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="opacity-0 animate-scale-in reveal-delay-3 lg:pl-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <p className="text-muted-foreground mb-6">
                    Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  
                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 group transition-colors duration-300 hover:text-primary"
                      >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          {link.icon}
                        </span>
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and open to discussing potential projects or collaborations.
                  </p>
                </div>
                
                <div className="bg-primary/5 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Looking forward to working together</h4>
                  <p className="text-sm text-muted-foreground">
                    Let's create something amazing that not only meets your needs but exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary/5 to-transparent rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Contact;
