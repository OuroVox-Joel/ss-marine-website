import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Ship } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Team Behind S&S Marine
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Decades of maritime expertise. Proven results on the world's most ambitious port projects.
            </p>
          </div>
        </div>
      </section>

      {/* Team Bios */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {/* Torbin Solmer */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-secondary p-8 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <img
                        src="/images/jcpdi-management-visit.jpg"
                        alt="Torbin Solmer at JCPDI"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Torbin Solmer, MNI</h3>
                    <p className="text-foreground/60 text-center">Senior Maritime Expert</p>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Current Role</h4>
                          <p className="text-foreground/80">
                            Subject Matter Expert (SME) to senior port leaders at JCPDI (Jazan Economic City 
                            for Primary and Downstream Industries), one of Saudi Arabia's most ambitious port 
                            development projects. Provides strategic advisory on operational architecture, 
                            VTS systems, and IMO/IALA compliance.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Ship className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Maritime Experience</h4>
                          <p className="text-foreground/80">
                            Former Captain at Maersk Supply Services with 4 years of operational command at sea. 
                            Extensive background in offshore operations, vessel traffic management, and maritime 
                            safety systems. Deep expertise in VTS design and optimization.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technical Background</h4>
                          <p className="text-foreground/80">
                            Force Technology simulation center background, specializing in advanced maritime 
                            simulation and training systems. Expert in operational risk assessment and 
                            regulatory compliance frameworks.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Certifications</h4>
                          <p className="text-foreground/80">
                            Member of the Nautical Institute (MNI). Certified in IMO/IALA standards for 
                            Vessel Traffic Services and port operations management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rui dos Santos */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-secondary p-8 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <img
                        src="/images/extracted_image_0.jpeg"
                        alt="Rui dos Santos"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Rui dos Santos, AFNI</h3>
                    <p className="text-foreground/60 text-center">Port Operations Specialist</p>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Industry Leadership</h4>
                          <p className="text-foreground/80">
                            Former Country Manager for Svitzer, a leading global marine service provider. 
                            Led national operations for towage services, terminal startups, and fleet management. 
                            Proven track record of scaling marine operations across multiple markets.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Ship className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Operational Expertise</h4>
                          <p className="text-foreground/80">
                            Specialist in towage operations, pilotage services, and terminal operational excellence. 
                            Expert in fleet optimization, tug deployment strategies, and marine service contract 
                            management. Deep understanding of port logistics and terminal efficiency.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Academic Contributions</h4>
                          <p className="text-foreground/80">
                            Lecturer in marine logistics and training programs. Combines real-world operational 
                            experience with academic rigor to develop workforce training curricula and 
                            nationalization strategies for port authorities.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Certifications</h4>
                          <p className="text-foreground/80">
                            Associate Fellow of the Nautical Institute (AFNI). Certified in marine operations 
                            management, towage operations, and port safety systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience That Matters When Stakes Are High
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Port projects are complex, expensive, and career-defining. When government officials 
            and infrastructure leaders need trusted advisors who have proven themselves on the 
            world's most challenging projects, they turn to S&S Marine.
          </p>
          <p className="text-lg text-foreground/80">
            We don't just provide recommendations—we've executed them. From offshore operations 
            to port startups, from VTS design to workforce nationalization, we bring real-world 
            expertise that prevents costly mistakes and ensures project success.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
