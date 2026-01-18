import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Linkedin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start the Conversation
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Whether you're planning a new port, expanding operations, or facing operational 
              challenges, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>
                  <ConsultationForm source="website" variant="default" />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">WhatsApp</h3>
                      <p className="text-sm text-foreground/80 mb-2">
                        Prefer instant messaging? Connect with us on WhatsApp.
                      </p>
                      <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/90 text-sm font-medium"
                      >
                        Start Chat →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-sm text-foreground/80 mb-2">
                        Send us a detailed inquiry via email.
                      </p>
                      <a
                        href="mailto:contact@ssmarine.com"
                        className="text-accent hover:text-accent/90 text-sm font-medium"
                      >
                        contact@ssmarine.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">LinkedIn</h3>
                      <p className="text-sm text-foreground/80 mb-2">
                        Connect with us professionally on LinkedIn.
                      </p>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/90 text-sm font-medium"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Multilingual Support</h3>
                      <p className="text-sm text-foreground/80">
                        We communicate fluently in English, Danish, Portuguese, and Spanish to serve 
                        clients across Africa, Europe, South America, Southeast Asia, and the Middle East.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Happens After You Reach Out?
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Consultation (Free)</h3>
                <p className="text-foreground/80">
                  We'll schedule a call to understand your project scope, timeline, and specific 
                  challenges. No commitment required—just an honest conversation about your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tailored Proposal</h3>
                <p className="text-foreground/80">
                  Based on our discussion, we'll prepare a detailed proposal outlining our approach, 
                  timeline, and deliverables. Every project is unique, so we customize our services 
                  to your specific requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Execution & Support</h3>
                <p className="text-foreground/80">
                  Once engaged, we work closely with your team to deliver results. From strategic 
                  planning to operational execution, we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
