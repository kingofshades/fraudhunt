import { Shield, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="text-fintech-blue text-2xl mr-3 h-8 w-8" />
              <span className="text-xl font-bold">FraudHunt</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              AI-powered fraud detection to protect your business and unlock revenue.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/fraudhunt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/fraudhunt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/fraudhunt" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="https://docs.fraudhunt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://careers.fraudhunt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://blog.fraudhunt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://fraudhunt.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://fraudhunt.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="https://fraudhunt.ai/security" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="https://status.fraudhunt.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 FraudHunt. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ in San Francisco</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
