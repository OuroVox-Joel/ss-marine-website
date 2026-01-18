import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, GraduationCap, CheckCircle2, Clock, Users, AlertTriangle } from "lucide-react";

export default function CaseStudyBRM() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="From Compliance to Competence: Simulation-Based Maritime Training | S&S Marine"
        description="Learn how S&S Marine transformed mandatory Bridge Resource Management (BRM) training from a compliance checkbox into a transformational learning experience using advanced maritime simulators. Measurable safety improvements through realistic scenario-based training."
        keywords="bridge resource management training, maritime simulation training, pilot training programs, VTS training, port pilot competency, maritime safety training, IMO BRM requirements, ship bridge simulator, maritime training ROI"
      />
      <Navigation />

      {/* Hero Section */}
      <article className="py-12 md:py-16">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/case-studies">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Case Studies
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Training & Development • Global
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From Compliance to Competence: How Simulation Training Transformed Maritime Safety
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              IMO requires pilots to complete Bridge Resource Management training every five years. 
              Most treat it as a compliance checkbox. We turned it into a transformational learning 
              experience that measurably improved safety outcomes.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Port Authorities, Training Managers</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/bridge-simulator.jpg"
              alt="Advanced maritime bridge simulator training"
              className="w-full h-auto"
            />
            <p className="text-sm text-foreground/60 mt-2 text-center">
              Advanced bridge simulator providing realistic training scenarios for maritime professionals
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">300%</div>
                <div className="text-sm text-foreground/70">Increase in Confidence</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">Measurable</div>
                <div className="text-sm text-foreground/70">Safety Improvement</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">High</div>
                <div className="text-sm text-foreground/70">Demand Training</div>
              </CardContent>
            </Card>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Problem: Compliance Theater</h2>
            <p>
              The International Maritime Organization (IMO) requires maritime pilots and bridge officers 
              to complete Bridge Resource Management (BRM) training every five years. It's a sensible 
              requirement—BRM focuses on teamwork, communication, and decision-making under pressure, 
              all critical skills for safe maritime operations.
            </p>

            <p>
              But here's the dirty secret: most BRM training is terrible.
            </p>

            <div className="bg-secondary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-3 mt-0">What Traditional BRM Training Looks Like</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Classroom-Based Theory</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      PowerPoint presentations about teamwork and communication with no practical application
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">No Realistic Scenarios</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      Participants discuss hypothetical situations but never practice under realistic pressure
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Checkbox Mentality</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      Pilots attend to maintain certification, not to genuinely improve their skills
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              The result? Pilots complete their mandatory training, get their certificate, and return 
              to work with essentially the same skills they had before. Real-world incidents continue 
              to occur due to poor bridge communication, inadequate teamwork, and flawed decision-making 
              under pressure.
            </p>

            <h2>The Gap: Theory vs. Reality</h2>
            <p>
              The fundamental problem with traditional BRM training is that it teaches theory without 
              practice. It's like learning to drive a car by reading a manual—you might understand the 
              concepts, but you haven't developed the muscle memory and decision-making skills needed 
              in real-world situations.
            </p>

            <p>
              Maritime operations are high-stakes environments where decisions happen in seconds and 
              mistakes can be catastrophic. Pilots need to practice:
            </p>
            <ul>
              <li>Communicating clearly under time pressure</li>
              <li>Making decisions with incomplete information</li>
              <li>Managing equipment failures during critical maneuvers</li>
              <li>Coordinating with bridge teams under stress</li>
              <li>Recognizing and recovering from developing emergencies</li>
            </ul>

            <p>
              You can't learn these skills in a classroom. You need realistic, high-pressure scenarios 
              where failure is safe but feels real.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <img
                src="/maritime-training-simulator.png"
                alt="Maritime training simulator setup"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground/60 mt-2 text-center">
                Full mission bridge simulator with realistic controls and visual systems
              </p>
            </div>

            <h2>The Solution: Simulation-Based BRM Training</h2>
            <p>
              We designed a simulation-based BRM training program using advanced maritime simulators. 
              Instead of talking about teamwork and communication, pilots practiced it in realistic, 
              high-pressure scenarios.
            </p>

            <h3>How the Training Works</h3>
            <p>
              Pilots work in teams on a full-mission bridge simulator that replicates the exact 
              environment they work in daily:
            </p>

            <h4>Scenario 1: Equipment Failure During Port Entry</h4>
            <p>
              A pilot is bringing a large container vessel into port when the main engine fails. 
              The pilot must:
            </p>
            <ul>
              <li>Immediately communicate the situation to the bridge team</li>
              <li>Assess available options (anchor, tugs, drift management)</li>
              <li>Coordinate with VTS and port authorities</li>
              <li>Make rapid decisions under time pressure</li>
              <li>Execute the chosen plan while managing team stress</li>
            </ul>

            <h4>Scenario 2: Communication Breakdown</h4>
            <p>
              A pilot is working with a bridge team where English is not the primary language. 
              Critical information is being misunderstood. The pilot must:
            </p>
            <ul>
              <li>Recognize the communication breakdown before it causes an incident</li>
              <li>Implement clear, unambiguous communication protocols</li>
              <li>Use closed-loop communication to verify understanding</li>
              <li>Manage cultural differences in communication styles</li>
            </ul>

            <h4>Scenario 3: Extreme Weather During Critical Maneuver</h4>
            <p>
              Weather conditions deteriorate rapidly during a complex berthing operation. The pilot must:
            </p>
            <ul>
              <li>Continuously reassess risk as conditions change</li>
              <li>Decide whether to abort or continue the maneuver</li>
              <li>Communicate changing plans clearly to all stakeholders</li>
              <li>Manage pressure from commercial interests to proceed despite risks</li>
            </ul>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4 mt-0">What Makes This Different</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Realistic Pressure</p>
                    <p className="text-sm text-primary-foreground/90">
                      Scenarios create genuine stress and time pressure, forcing pilots to practice 
                      decision-making under realistic conditions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Safe Failure</p>
                    <p className="text-sm text-primary-foreground/90">
                      Pilots can make mistakes and learn from them without real-world consequences.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Immediate Feedback</p>
                    <p className="text-sm text-primary-foreground/90">
                      Instructors provide real-time feedback and replay scenarios to analyze decisions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Measurable Outcomes</p>
                    <p className="text-sm text-primary-foreground/90">
                      Performance metrics track improvement in communication, decision-making, and teamwork.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>The Results: From Compliance to Competence</h2>
            <p>
              The impact was dramatic and measurable:
            </p>

            <h3>Pilot Confidence Increased 300%</h3>
            <p>
              Post-training surveys showed pilots felt significantly more confident in their ability 
              to handle equipment failures, communication breakdowns, and emergency situations. But 
              more importantly, this confidence was backed by demonstrated competency in simulated scenarios.
            </p>

            <h3>Incident Rates Decreased</h3>
            <p>
              Port authorities that implemented simulation-based BRM training saw measurable reductions 
              in incidents attributed to poor communication or decision-making. While it's difficult 
              to isolate training as the sole cause, the correlation was clear.
            </p>

            <h3>Training Became Sought-After</h3>
            <p>
              Perhaps the most telling indicator: pilots started requesting the training rather than 
              viewing it as a compliance burden. Word spread that the simulation-based program was 
              genuinely valuable, and pilots wanted access to it even when not required for certification.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <img
                src="/ChinaHarbourseniormanagementvisitJCPDI.jpg"
                alt="Training and briefing at JCPDI"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground/60 mt-2 text-center">
                Effective training creates competent teams capable of handling complex operations
              </p>
            </div>

            <h2>Lessons for Port Authorities and Training Managers</h2>
            
            <h3>1. Compliance Training Doesn't Prevent Incidents</h3>
            <p>
              Meeting regulatory requirements is necessary, but it's not sufficient. If your training 
              program exists solely to check a compliance box, it's not making your operations safer.
            </p>

            <h3>2. Simulation Delivers ROI</h3>
            <p>
              Yes, simulation-based training costs more than classroom training. But the ROI is clear: 
              fewer incidents, reduced insurance claims, improved operational efficiency, and enhanced 
              reputation. A single prevented incident can pay for years of simulation training.
            </p>

            <h3>3. Realistic Scenarios Are Critical</h3>
            <p>
              Generic scenarios don't work. We designed scenarios specific to each port's operational 
              environment—the vessels they handle, the weather conditions they face, the infrastructure 
              they work with. Realism drives learning.
            </p>

            <h3>4. Feedback Loops Accelerate Learning</h3>
            <p>
              The ability to replay scenarios, analyze decisions, and practice again with different 
              approaches accelerates learning far beyond what's possible in classroom settings or 
              on-the-job training.
            </p>

            <h2>The Broader Implication: Training as Competitive Advantage</h2>
            <p>
              Port authorities that invest in high-quality training create a competitive advantage:
            </p>
            <ul>
              <li>
                <strong>Attract Better Talent:</strong> Skilled pilots want to work for organizations 
                that invest in their development
              </li>
              <li>
                <strong>Win More Business:</strong> Shipping companies prefer ports with well-trained, 
                competent pilots
              </li>
              <li>
                <strong>Reduce Insurance Costs:</strong> Lower incident rates translate directly to 
                lower insurance premiums
              </li>
              <li>
                <strong>Build Reputation:</strong> Ports known for safety and operational excellence 
                attract more traffic
              </li>
            </ul>

            <p>
              For government officials and port authorities in developing regions, the lesson is clear: 
              **training is not a cost center—it's an investment in operational excellence and competitive 
              positioning.**
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Maritime Training Program?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              We've designed and implemented simulation-based training programs for port authorities 
              and maritime operators worldwide. Let's discuss how we can help you move from compliance 
              to genuine competence.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Request Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Related Case Studies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/case-study/jcpdi-transition">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src="/FirstcontainershipJCPDI.jpg"
                      alt="JCPDI Port Operations"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-bold text-lg mb-2">
                      Zero-Downtime Marine Services Transition
                    </h4>
                    <p className="text-sm text-foreground/70">
                      How JCPDI achieved a seamless provider transition with zero operational delays.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/case-study/south-america-incident-reduction">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src="/TorpedoanchorhandlingSantosBasinBrasil.jpg"
                      alt="South America Operations"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-bold text-lg mb-2">
                      90% Reduction in Insurance Claims
                    </h4>
                    <p className="text-sm text-foreground/70">
                      How training cut annual insurance claims from $2M to $200K in South America.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
