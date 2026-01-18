import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Shield, Anchor, Users, CheckCircle2, Globe, Award, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="S&S Marine Consulting | Trusted Advisors to Port Authorities"
        description="Expert maritime consulting for port authorities and infrastructure leaders. VTS systems, port operations, safety management, and offshore services. 25+ years experience on projects like JCPDI Saudi Arabia."
        keywords="maritime consulting, port consulting, VTS systems, vessel traffic services, port operations, marine safety, offshore consulting, port development, JCPDI, Saudi Arabia ports, maritime infrastructure"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/port-operations.jpg"
            alt="Port operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trusted Advisors to Port Authorities and Infrastructure Leaders
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Strategy. Solutions. Maritime Execution.
            </p>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
              Safe choices now prevent expensive disasters that can bankrupt a project and ruin careers. 
              We help you get it right from the start.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - Three Pillars */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Offshore Marine Projects & Port Operations Safety Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Anchor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Marine Service Project Management</h3>
                <p className="text-foreground/80">
                  Expert oversight of offshore support, anchor handling, and marine service operations. 
                  From planning to execution, we ensure operational excellence and safety compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Port & Terminal Operations</h3>
                <p className="text-foreground/80">
                  Strategic governance, VTS design, port rules, and terminal optimization. 
                  We architect safe, efficient port operations that scale with your ambitions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Safety & Operations Excellence</h3>
                <p className="text-foreground/80">
                  Workforce training, nationalization programs, and operational safety systems. 
                  Build capable teams that execute with precision and confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Government Leaders Trust S&S Marine
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Track Record on Major Projects</h3>
                <p className="text-foreground/80">
                  Currently advising JCPDI (Jazan Economic City for Primary and Downstream Industries), 
                  one of Saudi Arabia's most ambitious port development projects. Our expertise has been 
                  tested on the world stage.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">25+ Years Combined Experience</h3>
                <p className="text-foreground/80">
                  Decades of operational, educational, and regulatory expertise across maritime operations, 
                  VTS systems, port management, and offshore services. We've seen what works—and what fails.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multilingual & Multicultural</h3>
                <p className="text-foreground/80">
                  Fluent in English, Portuguese, and Spanish. We understand the cultural nuances and 
                  regulatory landscapes of Africa, South America, Southeast Asia, and the Middle East.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Risk Mitigation First</h3>
                <p className="text-foreground/80">
                  Poor planning leads to cost overruns, project failures, and career-ending consequences. 
                  We help you identify and eliminate risks before they become disasters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Projects. Real Results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/case-studies">
              <div className="relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img
                  src="/FirstcontainershipJCPDI.jpg"
                  alt="First container ship at JCPDI"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">JCPDI Port Operations</p>
                </div>
              </div>
            </Link>
            <Link href="/case-studies">
              <div className="relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img
                  src="/TorpedoanchorhandlingSantosBasinBrasil.jpg"
                  alt="Torpedo anchor handling operations"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">Offshore Anchor Handling</p>
                </div>
              </div>
            </Link>
            <Link href="/case-studies">
              <div className="relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img
                  src="/HookUpofFPSOCidadedeMangaratiba.jpg"
                  alt="FPSO hookup operations"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white font-semibold">FPSO Operations</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="bg-background">
                View Detailed Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Discuss Your Port Project
            </h2>
            <p className="text-lg text-foreground/80">
              Whether you're in the planning phase or facing operational challenges, 
              we're here to help you make the right decisions.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <ConsultationForm source="website" />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
