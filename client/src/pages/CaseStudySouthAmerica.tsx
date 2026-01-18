import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, TrendingDown, AlertTriangle, CheckCircle2, Clock, Users } from "lucide-react";

export default function CaseStudySouthAmerica() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="How We Cut Maritime Insurance Claims by 90% in South America | S&S Marine"
        description="A South American river transport operation reduced annual insurance claims from $2M to $200K through targeted training and process improvements. Learn how proper maritime training prevents costly incidents and improves operational safety."
        keywords="maritime insurance claims reduction, river transport safety, South America maritime consulting, marine incident prevention, towage safety training, maritime training ROI, reducing port accidents, Paraguay Bolivia Argentina river operations"
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
              Cost Reduction • South America
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From $2 Million to $200K: How Training Cut Insurance Claims by 90%
            </h1>
            <p className="text-xl text-foreground/80 mb-6">
              A river transport operation spanning 3,000 kilometers was hemorrhaging money through 
              preventable incidents. Here's how we turned it around with training and process improvement.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Port Authorities, Operations Managers</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src="/TorpedoanchorhandlingSantosBasinBrasil.jpg"
              alt="Torpedo anchor handling operations in Santos Basin, Brazil"
              className="w-full h-auto"
            />
            <p className="text-sm text-foreground/60 mt-2 text-center">
              Offshore operations in Santos Basin, Brazil—where precision and training prevent costly incidents
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">90%</div>
                <div className="text-sm text-foreground/70">Reduction in Claims</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">$1.8M</div>
                <div className="text-sm text-foreground/70">Annual Savings</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">3,000km</div>
                <div className="text-sm text-foreground/70">River Operations</div>
              </CardContent>
            </Card>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2>The Problem: Isolated Crews, Preventable Incidents</h2>
            <p>
              The operation was massive in scale: river transport across Paraguay, Bolivia, and Argentina, 
              covering 3,000 kilometers of waterways. But the crews were isolated—limited exposure to 
              international maritime best practices, minimal formal training, and a culture that treated 
              incidents as "just part of the job."
            </p>

            <div className="bg-secondary p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-3 mt-0">The Cost of Complacency</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">$2 Million Annual Insurance Claims</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      Groundings, collisions, and operational failures were eating into profitability
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Frequent Groundings</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      Poor navigation skills and inadequate communication led to repeated incidents
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Low Crew Competency</p>
                    <p className="text-sm text-foreground/70 mb-0">
                      Crews lacked exposure to international standards and modern operational procedures
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p>
              For port authorities and maritime operators in developing regions, this scenario is 
              painfully familiar. Crews are competent enough to keep operations running day-to-day, 
              but lack the training and procedures to prevent incidents under pressure.
            </p>

            <h2>Root Cause Analysis: Why Incidents Were Happening</h2>
            <p>
              Before implementing any solutions, we conducted a comprehensive root cause analysis. 
              The findings were revealing:
            </p>

            <h3>1. Communication Breakdowns</h3>
            <p>
              Bridge teams weren't communicating effectively during critical maneuvers. Orders were 
              unclear, feedback loops were missing, and crew members were afraid to speak up when 
              they saw problems developing.
            </p>

            <h3>2. Navigation Skill Gaps</h3>
            <p>
              River navigation requires different skills than open-ocean navigation. Crews had learned 
              through trial and error rather than structured training, leading to repeated mistakes 
              in challenging conditions.
            </p>

            <h3>3. Lack of Performance Management</h3>
            <p>
              There was no systematic way to identify underperforming crew members or provide targeted 
              remedial training. Problems festered until they resulted in incidents.
            </p>

            <h3>4. Reactive Safety Culture</h3>
            <p>
              The organization only responded to incidents after they happened. There was no proactive 
              effort to identify and mitigate risks before they materialized.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <img
                src="/SimOpsNorthSea.JPG"
                alt="Simultaneous operations in challenging conditions"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground/60 mt-2 text-center">
                Complex simultaneous operations require rigorous training and communication protocols
              </p>
            </div>

            <h2>The Solution: Systematic Training and Process Improvement</h2>
            <p>
              We didn't just throw generic training at the problem. We designed a comprehensive 
              intervention targeting the specific gaps we identified:
            </p>

            <h3>Bridge Resource Management (BRM) Training</h3>
            <p>
              We implemented structured BRM training focusing on:
            </p>
            <ul>
              <li>Clear communication protocols during critical operations</li>
              <li>Closed-loop communication to prevent misunderstandings</li>
              <li>Assertiveness training so junior crew members could speak up</li>
              <li>Decision-making under pressure and time constraints</li>
            </ul>

            <h3>Navigation Skills Enhancement</h3>
            <p>
              River navigation training covering:
            </p>
            <ul>
              <li>Current and tide management in confined waters</li>
              <li>Shallow water effects and under-keel clearance</li>
              <li>Emergency response procedures for groundings</li>
              <li>Weather assessment and risk evaluation</li>
            </ul>

            <h3>Crew Performance Management System</h3>
            <p>
              We established a systematic approach to monitoring and improving crew performance:
            </p>
            <ul>
              <li>Regular competency assessments with clear pass/fail criteria</li>
              <li>Targeted remedial training for underperforming crew members</li>
              <li>Career progression pathways tied to demonstrated competency</li>
              <li>Peer mentoring programs pairing experienced crew with newer members</li>
            </ul>

            <h3>Proactive Safety Culture</h3>
            <p>
              We shifted the organization from reactive to proactive safety management:
            </p>
            <ul>
              <li>Near-miss reporting system with no-blame culture</li>
              <li>Regular safety meetings to discuss lessons learned</li>
              <li>Pre-voyage risk assessments for challenging operations</li>
              <li>Safety performance metrics tracked and reported to senior management</li>
            </ul>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg my-8">
              <h3 className="text-2xl font-bold mb-4 mt-0">The Results: Dramatic Improvement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <TrendingDown className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Insurance Claims: $2M → $200K</p>
                    <p className="text-sm text-primary-foreground/90">
                      A 90% reduction in annual insurance claims, saving $1.8 million per year.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Groundings Reduced by 80%</p>
                    <p className="text-sm text-primary-foreground/90">
                      Improved navigation skills and risk assessment dramatically reduced groundings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Crew Competency Measurably Improved</p>
                    <p className="text-sm text-primary-foreground/90">
                      Post-training assessments showed significant improvement in all measured competencies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Safety Culture Transformation</p>
                    <p className="text-sm text-primary-foreground/90">
                      Near-miss reporting increased 300%, indicating crews were now proactively identifying risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Lessons for Port Authorities and Maritime Operators</h2>
            
            <h3>1. Training Isn't an Expense—It's an Investment</h3>
            <p>
              The training program cost a fraction of what the organization was spending on insurance 
              claims. Within 12 months, the program had paid for itself several times over. Yet many 
              organizations still view training as a cost center rather than a profit center.
            </p>

            <h3>2. Generic Training Doesn't Work</h3>
            <p>
              Off-the-shelf training programs rarely address the specific operational challenges your 
              crews face. We designed training specifically for river operations in South America, 
              incorporating local conditions, regulations, and operational realities.
            </p>

            <h3>3. Culture Change Takes Time</h3>
            <p>
              The technical training produced immediate results, but the cultural shift—from reactive 
              to proactive safety management—took 18-24 months. Organizations need patience and 
              sustained commitment to see lasting change.
            </p>

            <h3>4. Measurement Drives Improvement</h3>
            <p>
              You can't improve what you don't measure. By implementing systematic competency 
              assessments and tracking safety metrics, we created accountability and visibility 
              that drove continuous improvement.
            </p>

            <div className="my-8 rounded-lg overflow-hidden">
              <img
                src="/HookUpofFPSOCidadedeMangaratiba.jpg"
                alt="Complex offshore operations"
                className="w-full h-auto"
              />
              <p className="text-sm text-foreground/60 mt-2 text-center">
                High-stakes operations demand high-quality training and operational discipline
              </p>
            </div>

            <h2>The ROI of Prevention</h2>
            <p>
              For every dollar spent on training and process improvement, this organization saved 
              approximately $10 in avoided insurance claims. But the benefits extended beyond 
              direct cost savings:
            </p>
            <ul>
              <li>Reduced downtime from fewer incidents</li>
              <li>Improved reputation with customers and regulators</li>
              <li>Lower insurance premiums due to improved safety record</li>
              <li>Higher crew morale and retention</li>
              <li>Competitive advantage in winning new contracts</li>
            </ul>

            <p>
              For port authorities and maritime operators in Africa, Southeast Asia, and Latin America 
              facing similar challenges, the lesson is clear: **investing in proper training and 
              operational discipline delivers measurable ROI and prevents career-ending incidents.**
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-secondary rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Struggling with High Incident Rates or Insurance Claims?
            </h3>
            <p className="text-lg text-foreground/80 mb-6">
              We've helped maritime operators across multiple continents dramatically reduce incidents 
              and improve operational safety. Let's discuss how we can deliver similar results for 
              your organization.
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

              <Link href="/case-study/bridge-resource-management">
                <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img
                      src="/bridge-simulator.jpg"
                      alt="Bridge Simulator Training"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="font-bold text-lg mb-2">
                      Simulation-Based Training Impact
                    </h4>
                    <p className="text-sm text-foreground/70">
                      Transforming compliance training into genuine competence improvement.
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
