import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap, Ship, Users } from "lucide-react";

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
            {/* Torben Solmer */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-secondary p-8 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <img
                        src="/images/jcpdi-management-visit.jpg"
                        alt="Torben Solmer at JCPDI"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Torben Solmer, MNI</h3>
                    <p className="text-foreground/60 text-center">Master Mariner | Port Management Executive</p>
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
                            Deputy Harbour Master at JCPDI (Jazan City for Primary and Downstream Industries) Port Authority, Royal Commission, Saudi Arabia. Instrumental in building the regulatory framework for this greenfield port, overseeing marine operations, governance, and strategic development.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Ship className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Maritime & Leadership Experience</h4>
                          <p className="text-foreground/80">
                            Master Mariner with command experience at sea. Team Leader at FORCE Technology (2017-2020), managing the DanSim maritime training facility with 7 ship simulators and teams of Master Mariners and Engineers. Senior Marine Superintendent at Maersk Supply Service (2014-2017) with expertise in offshore operations and vessel traffic management.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Core Competencies</h4>
                          <p className="text-foreground/80">
                            Port Authority Management, VTS procedures and IALA compliance, Harbour Master instructions, Seafarer Mental Health & Crew Wellbeing, Operational Safety & Compliance, Maritime Training & Simulation, New Building & Commissioning, Offshore Operations (DP, torpedo anchor handling, subsea construction).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Languages & Certifications</h4>
                          <p className="text-foreground/80">
                            Member of the Nautical Institute (MNI). Languages: Danish (native), English (full proficiency), German (proficiency), Portuguese (basic). Certified in IMO/IALA standards and port operations management.
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
                    <p className="text-foreground/60 text-center">Master Mariner | Port Operations & Marine Services Expert</p>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Current & Recent Leadership</h4>
                          <p className="text-foreground/80">
                            Acting COO / Deputy COO at JCPDI Port Authority (Royal Commission, Saudi Arabia). Led the Human Elements - TEAM Programme at P&O Maritime Logistics, designing and deploying company-wide human factors and behavioral safety programs across worldwide operations. Extensive experience implementing marine services across multiple continents.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Ship className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Global Operational Expertise</h4>
                          <p className="text-foreground/80">
                            Master Mariner with command experience on multiple vessel types. Implemented marine services in Dominican Republic (Caucedo), Paraguay/Paraná Rivers (achieving ~90% reduction in insurance claims), Peru, Papua New Guinea, and Mozambique (Maputo, Nacala). Specialist in towage operations, pilotage services, fleet optimization, and terminal operational excellence.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Training & Development</h4>
                          <p className="text-foreground/80">
                            Maritime Education & Simulator Training at CPUT (Cape Peninsula University of Technology), Cape Town. Delivered navigation, ship handling, and IMO-mandated STCW courses. Specialized in Suez Canal ULCC passage training with advanced bank effect management and shallow water hydrodynamics.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Languages & Certifications</h4>
                          <p className="text-foreground/80">
                            Associate Fellow of the Nautical Institute (AFNI). Languages: Danish (mother tongue), English (full proficiency), German (proficiency), Portuguese (basic). Certified Lead Investigator (KELVIN TOPSET) and ISM Lead Auditor. Port Management Diploma (Lloyds Maritime Academy, 2023).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Miguel - Free Agent Consultant */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 bg-secondary p-8 flex flex-col items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <Users className="w-24 h-24 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-2">Miguel</h3>
                    <p className="text-foreground/60 text-center">Consultant & Network Strategist</p>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Strategic Role</h4>
                          <p className="text-foreground/80">
                            Free agent consultant and network strategist. Brings extensive high-level contacts and a robust professional network across the maritime and port industries. Identifies and engages with opportunities that align with S&S Marine's expertise and strategic direction.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Ship className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Network & Relationships</h4>
                          <p className="text-foreground/80">
                            Deep connections within the maritime consulting, port authority, and classification society sectors. Facilitates partnerships and opportunities with key industry players, including relationships with leading classification societies like DNV (Det Norske Veritas).
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <Award className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Approach</h4>
                          <p className="text-foreground/80">
                            Focuses on network-based growth and relationship-driven business development. Works collaboratively with Torben and Rui to identify projects that leverage the team's collective expertise and create meaningful impact in the maritime industry.
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
