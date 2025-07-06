import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Shield, Lock, Award, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    volume: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send to your backend
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your demo.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      volume: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <section className="pt-24 pb-20 fintech-gradient-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Get Started Today</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to protect your business from fraud? Let's talk about your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Demo</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Corp"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Transaction Volume
                    </Label>
                    <Select value={formData.volume} onValueChange={(value) => handleInputChange("volume", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select volume" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under 10K</SelectItem>
                        <SelectItem value="10k-100k">10K - 100K</SelectItem>
                        <SelectItem value="100k-1m">100K - 1M</SelectItem>
                        <SelectItem value="over-1m">Over 1M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your fraud prevention needs..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full fintech-gradient text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                    Request Demo
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-fintech-blue rounded-lg p-3 mr-4">
                        <Mail className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">hello@fraudhunt.ai</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-fintech-purple rounded-lg p-3 mr-4">
                        <Phone className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <div className="text-gray-600">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-fintech-cyan rounded-lg p-3 mr-4">
                        <MapPin className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Office</div>
                        <div className="text-gray-600">San Francisco, CA</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Security & Compliance</h4>
                  <div className="grid grid-cols-2 gap-4 opacity-60">
                    <div className="text-center">
                      <Shield className="text-2xl text-fintech-blue mb-2 w-8 h-8 mx-auto" />
                      <div className="text-sm">SOC 2 Type II</div>
                    </div>
                    <div className="text-center">
                      <Lock className="text-2xl text-fintech-purple mb-2 w-8 h-8 mx-auto" />
                      <div className="text-sm">PCI DSS</div>
                    </div>
                    <div className="text-center">
                      <Award className="text-2xl text-fintech-cyan mb-2 w-8 h-8 mx-auto" />
                      <div className="text-sm">ISO 27001</div>
                    </div>
                    <div className="text-center">
                      <Globe className="text-2xl text-green-600 mb-2 w-8 h-8 mx-auto" />
                      <div className="text-sm">GDPR</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
