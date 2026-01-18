import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">S&S Marine Consulting</h3>
            <p className="text-primary-foreground/80 mb-4">
              Trusted advisors to port authorities and infrastructure leaders worldwide.
              Specializing in offshore marine projects and port operations safety excellence.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Multilingual Support</li>
              <li>English, Portuguese, Spanish</li>
              <li className="pt-2">
                <Link href="/contact">
                  <a className="text-accent hover:text-accent/90 transition-colors font-medium">
                    Get in Touch →
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} S&S Marine Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
