import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  TrendingDown,
  Ship,
  GraduationCap,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Case Studies | S&S Marine Consulting - Real Projects, Real Results"
        description="See how S&S Marine delivered measurable results: JCPDI zero-downtime transition, 90% reduction in South America insurance claims, and simulation-based training impact. Proven maritime consulting expertise."
        keywords="maritime case studies, port consulting results, JCPDI Saudi Arabia, marine incident reduction, VTS training, port operations success stories, maritime consulting ROI"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Projects. Real Results.
            </h1>
            <p className="text-xl text-primary-foreground/90">
              From seamless operational transitions to dramatic cost reductions, see how our 
              expertise has delivered measurable outcomes for port authorities and marine operators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl">
          <div className="space-y-16">
            {/* Case Study 1: JCPDI Seamless Transition */}
            <Link href="/case-study/jcpdi-transition">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center cursor-pointer hover:opacity-90 transition-opacity">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Ship className="w-4 h-4" />
                  Operational Excellence
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  JCPDI: Zero-Downtime Marine Services Transition
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  When JCPDI Port needed to transition from one marine service provider to another, 
                  the stakes were high. Any operational disruption would halt cargo operations, 
                  delay vessels, and cost millions in penalties.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Challenge</p>
                      <p className="text-sm text-foreground/70">
                        Seamlessly transfer operations between marine service providers with different 
                        vessels, operating procedures, and crew cultures—while maintaining 24/7 port operations 
                        for bulk carriers, container vessels, tankers, and SPM (Single Point Mooring) operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Our Approach</p>
                      <p className="text-sm text-foreground/70">
                        Comprehensive management of change process including crew training, vessel 
                        certification, operational procedure alignment, and coordination across multiple 
                        languages and organizational cultures.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Outcome</p>
                      <p className="text-sm text-foreground/70">
                        Zero delays. Zero stoppages. Zero incidents. The transition was executed so smoothly 
                        that port operations continued as if nothing had changed—a testament to meticulous 
                        planning and execution.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <p className="text-sm text-foreground/60 mb-2">Client Impact</p>
                  <p className="text-2xl font-bold text-accent">100% Operational Continuity</p>
                  <p className="text-sm text-foreground/70">
                    Seamless transition with no service interruptions, no safety incidents, 
                    and full regulatory compliance maintained throughout.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/FirstcontainershipJCPDI.jpg"
                  alt="JCPDI Port Operations"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            </Link>

            {/* Case Study 2: South America Incident Reduction */}
            <Link href="/case-study/south-america-incident-reduction">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/TorpedoanchorhandlingSantosBasinBrasil.jpg"
                  alt="South America River Operations"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <TrendingDown className="w-4 h-4" />
                  Cost Reduction
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  South America: 90% Reduction in Insurance Claims
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  A river transport operation spanning 3,000 kilometers across Paraguay, Bolivia, 
                  and Argentina was hemorrhaging money through preventable incidents and insurance claims.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Problem</p>
                      <p className="text-sm text-foreground/70">
                        Isolated crews with limited exposure to international maritime best practices 
                        were experiencing frequent groundings, collisions, and operational failures. 
                        Annual insurance claims exceeded $2 million.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Our Solution</p>
                      <p className="text-sm text-foreground/70">
                        Implemented comprehensive training programs focusing on communication protocols, 
                        navigation skills, crew performance management, and safety culture. Introduced 
                        international best practices adapted to local river conditions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Result</p>
                      <p className="text-sm text-foreground/70">
                        Insurance claims dropped from $2 million to $200,000 annually—a 90% reduction. 
                        Groundings and collisions decreased dramatically, and crew competency improved measurably.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <p className="text-sm text-foreground/60 mb-2">Financial Impact</p>
                  <p className="text-2xl font-bold text-accent">$1.8M Annual Savings</p>
                  <p className="text-sm text-foreground/70">
                    Direct reduction in insurance claims, plus indirect savings from reduced 
                    downtime, improved operational efficiency, and enhanced safety culture.
                  </p>
                </div>
              </div>
            </div>
            </Link>

            {/* Case Study 3: Bridge Resource Management Training */}
            <Link href="/case-study/bridge-resource-management">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <GraduationCap className="w-4 h-4" />
                  Training & Development
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Simulation-Based Training: From Compliance to Competence
                </h2>
                <p className="text-lg text-foreground/80 mb-6">
                  IMO requires pilots to complete Bridge Resource Management (BRM) training every five years. 
                  Most treat it as a compliance checkbox. We turned it into a transformational learning experience.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Gap</p>
                      <p className="text-sm text-foreground/70">
                        Traditional BRM training was theoretical and classroom-based. Pilots completed 
                        the requirement but gained little practical skill improvement. Real-world incidents 
                        continued to occur due to poor bridge communication and decision-making under pressure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Our Innovation</p>
                      <p className="text-sm text-foreground/70">
                        Developed simulation-based BRM training using advanced maritime simulators. 
                        Pilots practiced high-risk scenarios—equipment failures, extreme weather, 
                        communication breakdowns—in a safe, controlled environment with immediate feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">The Impact</p>
                      <p className="text-sm text-foreground/70">
                        Pilots reported dramatically improved confidence and decision-making under pressure. 
                        Incident rates decreased, and the training became highly sought-after—transforming 
                        from a compliance burden into a competitive advantage for port authorities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <p className="text-sm text-foreground/60 mb-2">Operational Impact</p>
                  <p className="text-2xl font-bold text-accent">Measurable Safety Improvement</p>
                  <p className="text-sm text-foreground/70">
                    Reduced incident rates, improved crew communication, and enhanced decision-making 
                    under pressure—validated through post-training assessments and operational metrics.
                  </p>
                </div>
              </div>

              <div>
                <img
                  src="/ChinaHarbourseniormanagementvisitJCPDI.jpg"
                  alt="Training and Development"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
            </Link>

            {/* Lessons Learned Section */}
            <div className="bg-primary text-primary-foreground p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                What These Projects Taught Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-3">Tunnel Vision Kills Projects</h3>
                  <p className="text-primary-foreground/90">
                    Internal teams often lack the perspective to identify systemic issues. 
                    External consultants bring fresh eyes and cross-industry best practices 
                    that internal teams simply cannot access.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Prevention Beats Reaction</h3>
                  <p className="text-primary-foreground/90">
                    Every major incident we've seen was preventable. Investing in proper 
                    planning, training, and operational frameworks costs far less than 
                    dealing with failures after they occur.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Culture Trumps Compliance</h3>
                  <p className="text-primary-foreground/90">
                    Checkbox compliance doesn't prevent incidents. Building a genuine safety 
                    culture through training, accountability, and leadership does.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Execution is Everything</h3>
                  <p className="text-primary-foreground/90">
                    Great strategies fail without proper execution. We don't just advise—we 
                    roll up our sleeves and implement alongside your team to ensure results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            These results aren't accidents—they're the outcome of decades of experience, 
            proven methodologies, and relentless focus on execution. Let's discuss how we 
            can deliver similar outcomes for your project.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              Request Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
