import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Package2, MapPin, FileCheck, DollarSign, Users, Send } from "lucide-react";
import LocationSearch from "@/components/LocationSearch";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#0D1742]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0D1742]/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Package2 className="h-6 w-6 text-[#21edc6]" />
              <span className="hidden font-bold sm:inline-block text-[#21edc6]">
                Zeus Connect AI
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link to="/" className="transition-colors hover:text-[#21edc6] text-white/60">Home</Link>
              <Link to="/features" className="transition-colors hover:text-[#21edc6] text-white/60">Features</Link>
              <a href="#pricing" className="transition-colors hover:text-[#21edc6] text-white/60">Pricing</a>
              <a href="#contact" className="transition-colors hover:text-[#21edc6] text-white/60">Contact Us</a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <Button variant="ghost" className="text-base text-[#21edc6]">Login</Button>
            <Button className="bg-[#21edc6] hover:bg-[#1bd6b1] text-[#0D1742]">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#0D1742]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#21edc6]">
                Welcome to Zeus Connect AI
              </h1>
              <p className="mx-auto max-w-[700px] text-[#21edc6] md:text-xl">
                Connecting Hauliers with Contracts Effortlessly
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-[#21edc6] hover:bg-[#1bd6b1] text-[#0D1742]">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#0D1742]">Benefits of Zeus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <DollarSign className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">Access to £8bn of Freight</h3>
              <p className="text-[#0D1742]">Without the cost of normal haulier platforms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FileCheck className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">2 Clicks to Relevant Freight</h3>
              <p className="text-[#0D1742]">Get freight returned with benchmark price indicators.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">AI-Powered Route Optimization</h3>
              <p className="text-[#0D1742]">Ensures realistic routes and can sense check against existing telematics of hauliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Search Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0D1742]">
        <div className="container px-4 md:px-6">
          <LocationSearch />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#0D1742]">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">Find Contracts Nearby</h3>
              <p className="text-[#0D1742]">Easily locate available contracts within your proximity.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">Join for Exclusive Benefits</h3>
              <p className="text-[#0D1742]">Access exclusive contracts and opportunities.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FileCheck className="h-12 w-12 mb-4 text-[#21edc6]" />
              <h3 className="text-xl font-bold mb-2 text-[#0D1742]">Tender on Your Behalf</h3>
              <p className="text-[#0D1742]">Let us handle the tendering process for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-[#0D1742]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21edc6]">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0D1742]">Basic</h3>
              <p className="text-4xl font-bold mb-6 text-[#0D1742]">$10<span className="text-base font-normal">/month</span></p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-[#21edc6]" />
                  <span className="text-[#0D1742]">Access to basic features</span>
                </li>
              </ul>
              <Button className="mt-auto bg-[#21edc6] hover:bg-[#1bd6b1] text-[#0D1742]">Choose Plan</Button>
            </div>
            <div className="flex flex-col p-6 bg-[#21edc6] rounded-lg shadow-lg border-2 border-[#1bd6b1]">
              <h3 className="text-2xl font-bold mb-4 text-[#0D1742]">Pro</h3>
              <p className="text-4xl font-bold mb-6 text-[#0D1742]">$20<span className="text-base font-normal">/month</span></p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-[#0D1742]" />
                  <span className="text-[#0D1742]">Access to all features</span>
                </li>
              </ul>
              <Button className="mt-auto bg-[#0D1742] hover:bg-[#0a1130] text-[#21edc6]">Choose Plan</Button>
            </div>
            <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#0D1742]">Enterprise</h3>
              <p className="text-4xl font-bold mb-6 text-[#0D1742]">Contact Us</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-[#21edc6]" />
                  <span className="text-[#0D1742]">Customized solutions for large fleets</span>
                </li>
              </ul>
              <Button className="mt-auto bg-[#21edc6] hover:bg-[#1bd6b1] text-[#0D1742]">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#0D1742]">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <img src={`https://i.pravatar.cc/150?img=${i}`} alt={`User ${i}`} className="w-24 h-24 rounded-full mb-4" />
                <p className="text-lg font-medium mb-2 text-[#0D1742]">John Doe</p>
                <p className="text-[#0D1742]">"Zeus Connect AI has revolutionized how I find and manage contracts. It's a game-changer for hauliers!"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#0D1742]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#21edc6]">Get in Touch</h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <Input placeholder="Name" className="border-[#21edc6] focus:border-[#1bd6b1] bg-white text-[#0D1742]" />
              <Input type="email" placeholder="Email" className="border-[#21edc6] focus:border-[#1bd6b1] bg-white text-[#0D1742]" />
              <Textarea placeholder="Message" className="border-[#21edc6] focus:border-[#1bd6b1] bg-white text-[#0D1742]" />
              <Button className="w-full bg-[#21edc6] hover:bg-[#1bd6b1] text-[#0D1742]">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#0D1742] text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-[#21edc6]">Home</Link></li>
                <li><Link to="/features" className="hover:text-[#21edc6]">Features</Link></li>
                <li><a href="#pricing" className="hover:text-[#21edc6]">Pricing</a></li>
                <li><a href="#contact" className="hover:text-[#21edc6]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#21edc6]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#21edc6]">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#21edc6]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#21edc6]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#21edc6]">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-[#21edc6] pt-8 text-center">
            <p>&copy; 2023 Zeus Connect AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;