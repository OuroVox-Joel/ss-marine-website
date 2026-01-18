import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  FileText,
  Radio,
  Shield,
  Ship,
  Leaf,
  AlertTriangle,
  GraduationCap,
  Users,
  ClipboardCheck,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Maritime Consulting Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              From strategic governance to operational execution, we provide end-to-end support 
              for port authorities and infrastructure leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {/* Category 1: Strategic Governance & Compliance */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Strategic Governance & Compliance
                </h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  Establish the regulatory foundation and operational frameworks that ensure 
                  your port operates safely, efficiently, and in full compliance with international standards.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Technical Advisory to Harbour Masters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Strategic counsel on operational decision-making, regulatory compliance, 
                      and risk management. We help Harbour Masters navigate complex maritime 
                      regulations and operational challenges.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Port Rules & Safety Management Systems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Drafting comprehensive port rules, safety management systems (SMS), and 
                      operational procedures that align with IMO standards and local regulations. 
                      Ensure clarity and enforceability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Radio className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>VTS System Design & Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Design, implementation, and optimization of Vessel Traffic Services (VTS) 
                      systems. From initial planning to operational readiness, we ensure your 
                      VTS meets IALA standards and operational needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Category 2: Operational Excellence & Sustainability */}
            <div className="bg-secondary py-16 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16">
              <div className="container">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Operational Excellence & Sustainability
                  </h2>
                  <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                    Optimize day-to-day operations, reduce environmental impact, and build 
                    resilient systems that perform under pressure.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Ship className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>Tug & Pilotage Operations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">
                        Fleet optimization, tug deployment strategies, pilotage service design, 
                        and towage operations management. Ensure safe and efficient vessel movements 
                        in all conditions.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Leaf className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>Green Port Setup (OPS/Shore Power)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">
                        Design and implementation of onshore power supply (OPS) systems and 
                        sustainable port operations. Reduce emissions, meet environmental regulations, 
                        and future-proof your infrastructure.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <AlertTriangle className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>Crisis Response Planning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80">
                        Emergency response frameworks, incident management protocols, and crisis 
                        simulation exercises. Prepare your team to respond effectively when seconds matter.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Category 3: Capacity Building & Training */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Capacity Building & Training
                </h2>
                <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                  Build competent, confident teams through simulation-based training, 
                  nationalization programs, and human competency assessments.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Simulation-Based Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Advanced maritime simulation training programs for VTS operators, 
                      Harbour Masters, and operational teams. Practice high-risk scenarios 
                      in a safe, controlled environment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>On-the-Job Nationalization Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Structured workforce nationalization programs that transfer knowledge, 
                      build local capacity, and ensure operational continuity. Develop your 
                      national workforce without compromising safety or efficiency.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <ClipboardCheck className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Human Competency Audits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      Comprehensive assessments of team capabilities, skills gaps, and training needs. 
                      Identify weaknesses before they become operational risks and build targeted 
                      development plans.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every port project is unique. Let's talk about your specific challenges 
            and how we can help you succeed.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              Request Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
