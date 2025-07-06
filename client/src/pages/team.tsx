import TeamMember from "@/components/ui/team-member";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Team() {
  return (
    <div>
      <section className="pt-24 pb-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-class experts in AI, fraud detection, and financial technology
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="John Smith"
                role="CEO & Co-Founder"
                description="Former VP at Stripe, 15+ years in fintech"
                imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                twitter="https://twitter.com"
                roleColor="text-fintech-blue"
              />
              <TeamMember
                name="Sarah Johnson"
                role="CTO & Co-Founder"
                description="PhD in Machine Learning, ex-Google AI"
                imageUrl="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                github="https://github.com"
                roleColor="text-fintech-purple"
              />
              <TeamMember
                name="Michael Chen"
                role="CFO"
                description="Former Goldman Sachs, MBA from Wharton"
                imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                twitter="https://twitter.com"
                roleColor="text-fintech-cyan"
              />
            </div>
          </div>

          {/* Engineering Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Engineering</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TeamMember
                name="David Park"
                role="Lead AI Engineer"
                description="Stanford PhD, ML Research"
                imageUrl="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                roleColor="text-fintech-blue"
                size="small"
              />
              <TeamMember
                name="Lisa Wang"
                role="Sr. Backend Engineer"
                description="Ex-Facebook, Distributed Systems"
                imageUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                roleColor="text-fintech-purple"
                size="small"
              />
              <TeamMember
                name="Alex Rodriguez"
                role="Frontend Engineer"
                description="UI/UX Expert, React Specialist"
                imageUrl="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                roleColor="text-fintech-cyan"
                size="small"
              />
              <TeamMember
                name="Tom Wilson"
                role="DevOps Engineer"
                description="AWS Expert, Security Focus"
                imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
                linkedin="https://linkedin.com"
                roleColor="text-green-600"
                size="small"
              />
            </div>
          </div>

          {/* Company Culture */}
          <div className="fintech-gradient rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="mb-6 opacity-90">
              We're always looking for talented individuals to help us fight fraud and protect businesses worldwide
            </p>
            <Link href="/contact">
              <Button className="bg-white text-fintech-blue px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
