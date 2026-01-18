import Navigation from "@/components/Navigation";
import ConsultationForm from "@/components/ConsultationForm";
import LinkedInPixel from "@/components/LinkedInPixel";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Shield, Award, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* LinkedIn Pixel - Replace 'YOUR_PARTNER_ID' with actual Partner ID from LinkedIn Campaign Manager */}
      <LinkedInPixel partnerId="YOUR_PARTNER_ID" />
      
      <Navigation minimal />

      {/* Hero Section with Form */}
      <section className="py-12 md:py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Headline and Benefits */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Need Expert Support for Your Port Project?
              </h1>
              <p className="text-xl text-foreground/80 mb-8">
                We've advised the teams behind some of the world's most ambitious ports. 
                Let us help you avoid costly mistakes.
              </p>

              {/* Key Offerings */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Vessel Traffic System Design</p>
                    <p className="text-sm text-foreground/70">
                      IALA-compliant VTS systems that ensure safe, efficient vessel movements
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Port Rules & Compliance Alignment</p>
                    <p className="text-sm text-foreground/70">
                      Regulatory frameworks that meet IMO standards and local requirements
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Tug & Pilotage Optimization</p>
                    <p className="text-sm text-foreground/70">
                      Fleet strategies and operational excellence for marine services
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Workforce Training & Nationalization</p>
                    <p className="text-sm text-foreground/70">
                      Rapid capability building through simulation and on-the-job programs
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="border-t border-border pt-8">
                <p className="text-sm font-semibold text-foreground/60 mb-4">TRUSTED BY:</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <p className="text-sm">
                      <span className="font-semibold">JCPDI (Saudi Arabia)</span> - Advisors to one of the world's most ambitious port projects
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <p className="text-sm">
                      <span className="font-semibold">25+ Years Combined Experience</span> in maritime strategy, execution, and training
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-accent" />
                    <p className="text-sm">
                      <span className="font-semibold">Multilingual Experts</span> - English, Portuguese, Spanish
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <Card className="border-2 border-accent/20 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-2">Book Your Intro Call</h2>
                  <p className="text-foreground/70 mb-6">
                    No commitment. Just a conversation about your project and how we can help.
                  </p>
                  <ConsultationForm source="landing_page" variant="compact" />
                </CardContent>
              </Card>

              {/* Social Proof */}
              <div className="mt-6 text-center">
                <p className="text-sm text-foreground/60">
                  ✓ Free initial consultation &nbsp;&nbsp;•&nbsp;&nbsp; ✓ No obligation &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Message */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Safe Choices Now Prevent Expensive Disasters Later
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-4">
            Port projects are complex, expensive, and career-defining. Poor planning leads to 
            cost overruns, operational failures, and professional consequences.
          </p>
          <p className="text-lg text-primary-foreground/80">
            We help government officials and infrastructure leaders make the right decisions 
            from day one—backed by decades of real-world experience on the world's most 
            challenging maritime projects.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-secondary">
        <div className="container max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Discuss Your Port Project?
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Fill out the form above or contact us directly. We typically respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Confidential consultations</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Proven track record</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Global expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} S&S Marine Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
