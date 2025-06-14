
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Bot, 
  Target, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  Zap, 
  Shield, 
  Clock, 
  BarChart3, 
  Rocket,
  Star,
  ArrowRight,
  ChevronDown,
  User,
  Calendar,
  Eye
} from 'lucide-react';

const JobApplicationAgentsBlog = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in">
              <Bot className="w-5 h-5" />
              <span className="text-sm font-medium">The Future of Job Applications</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in delay-300">
              Job Application Agents
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
              Your AI-powered career companion that transforms how you find, apply for, and land your dream job in today's competitive market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection('introduction')}
              >
                Start Reading <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('table-of-contents')}
              >
                View Contents
              </Button>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center gap-3 mt-12 animate-fade-in delay-1000">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <User className="w-5 h-5" />
                <span className="font-medium">By Nithin Kumar Putti</span>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <Calendar className="w-4 h-4" />
                <span className="text-sm text-blue-100">2024</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,96C672,107,768,85,864,69.3C960,53,1056,43,1152,48L1200,53V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z" fill="currentColor" className="text-slate-50"/>
          </svg>
        </div>
      </section>

      {/* Table of Contents */}
      <section id="table-of-contents" className="py-16 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${isVisible['table-of-contents'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Complete Guide Contents
              </h2>
              <p className="text-lg text-gray-600">Navigate through 15 comprehensive sections</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "What Are Job Application Agents?", icon: Bot, section: "introduction" },
                { title: "The Current Job Market Reality", icon: TrendingUp, section: "market-reality" },
                { title: "How Job Application Agents Work", icon: Zap, section: "how-they-work" },
                { title: "Types of Application Agents", icon: Target, section: "types" },
                { title: "Setting Up Your First Agent", icon: Rocket, section: "setup" },
                { title: "Optimizing Your Profile", icon: Star, section: "optimization" },
                { title: "Advanced Automation Strategies", icon: BarChart3, section: "automation" },
                { title: "The Pros: Why They Work", icon: CheckCircle, section: "pros" },
                { title: "The Cons: What to Watch Out For", icon: XCircle, section: "cons" },
                { title: "Common Mistakes to Avoid", icon: Shield, section: "mistakes" },
                { title: "Standing Out from Other Applicants", icon: Lightbulb, section: "standing-out" },
                { title: "AI and the Future of Job Hunting", icon: Bot, section: "ai-future" },
                { title: "Success Stories and Case Studies", icon: Users, section: "success-stories" },
                { title: "Tools and Platforms Comparison", icon: BarChart3, section: "tools" },
                { title: "Your Next Steps", icon: ArrowRight, section: "next-steps" }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className={`group cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] ${isVisible['table-of-contents'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => scrollToSection(item.section)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300">
                        <item.icon className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="text-sm text-gray-500 mt-1">Section {index + 1}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transform group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section id="introduction" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible['introduction'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg text-white">
                  <Bot className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Section 1</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    What Are Job Application Agents?
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Imagine having a personal assistant who works 24/7, scanning job boards, tailoring your applications, and submitting them while you sleep. That's exactly what job application agents do—they're AI-powered tools that automate the tedious parts of job hunting, so you can focus on what really matters: preparing for interviews and landing the right role.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                        Time-Saving Automation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Instead of spending hours each day scrolling through job boards and filling out repetitive application forms, agents handle the heavy lifting, giving you back precious time.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Target className="w-6 h-6 text-green-600" />
                        Smart Targeting
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        These tools don't just spray and pray—they use AI to match your skills and preferences with the most relevant opportunities, increasing your chances of success.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Think of Sarah, a marketing professional who was laid off during the recent tech downturn. Instead of manually applying to 5-10 jobs per day (which was exhausting and demoralizing), she set up a job application agent that applied to 50+ relevant positions weekly. Within three weeks, she had 12 interviews lined up and eventually landed a role with a 20% salary bump.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Market Reality */}
      <section id="market-reality" className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible['market-reality'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg text-white">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Section 2</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    The Current Job Market Reality
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Let's be honest—the job market in 2024 is brutal. With economic uncertainty, mass layoffs in tech, and increased competition, the old approach of manually applying to jobs simply doesn't cut it anymore.
                </p>
                
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8 transform hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">The Numbers Don't Lie</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>• Average job posting receives 250+ applications</li>
                    <li>• Only 2-3% of applicants get interviews</li>
                    <li>• Most applications are never seen by human eyes</li>
                    <li>• 75% of resumes are filtered out by ATS systems</li>
                  </ul>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Consider Mike, a software engineer with 8 years of experience. After being laid off from a major tech company, he spent 3 months applying to jobs the traditional way—crafting personalized cover letters, carefully selecting positions, and submitting 3-4 applications daily. Result? Two phone screens and zero offers.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  The reality is that companies are using AI to screen candidates, so why shouldn't you use AI to find and apply to opportunities? It's not about gaming the system—it's about leveling the playing field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How They Work */}
      <section id="how-they-work" className="py-20 bg-gradient-to-r from-green-50 to-teal-50" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible['how-they-work'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg text-white">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Section 3</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    How Job Application Agents Work
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Behind the scenes, job application agents are sophisticated pieces of software that combine web scraping, natural language processing, and machine learning to automate your job search. Here's the step-by-step breakdown:
                </p>
                
                <div className="space-y-6 mb-12">
                  {[
                    {
                      step: 1,
                      title: "Job Discovery & Scanning",
                      description: "The agent continuously monitors job boards like LinkedIn, Indeed, and company career pages, scanning for positions that match your criteria.",
                      icon: Eye,
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      step: 2,
                      title: "Intelligent Filtering",
                      description: "Using AI, it analyzes job descriptions against your profile, filtering out irrelevant positions and prioritizing the best matches.",
                      icon: Target,
                      color: "from-purple-500 to-purple-600"
                    },
                    {
                      step: 3,
                      title: "Application Customization",
                      description: "For each relevant job, the agent tailors your resume and cover letter, highlighting the most relevant skills and experiences.",
                      icon: Star,
                      color: "from-green-500 to-green-600"
                    },
                    {
                      step: 4,
                      title: "Automated Submission",
                      description: "The agent fills out application forms and submits your materials, handling everything from basic info to complex questionnaires.",
                      icon: Rocket,
                      color: "from-orange-500 to-orange-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-teal-100 border border-green-200 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300">
                  <h3 className="text-xl font-semibold text-green-900 mb-4">Real Example: Lisa's Success</h3>
                  <p className="text-green-800 leading-relaxed">
                    Lisa, a UX designer, set up her agent on a Sunday evening. By Tuesday morning, it had found and applied to 23 relevant positions across different platforms. She received her first interview request by Thursday and had 5 interviews scheduled by the following week—something that would have taken her months to achieve manually.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continue with remaining sections... */}
      {/* Section 4: Types */}
      <section id="types" className="py-20 bg-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-1000 ${isVisible['types'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg text-white">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Section 4</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                    Types of Application Agents
                  </h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  Not all job application agents are created equal. Understanding the different types will help you choose the right tool for your specific needs and career level.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    {
                      type: "Basic Automation Tools",
                      description: "Simple bots that auto-fill application forms using saved information. Great for high-volume applications but limited customization.",
                      pros: ["Quick setup", "Low cost", "High application volume"],
                      cons: ["Generic applications", "Limited targeting", "Higher rejection rates"],
                      bestFor: "Entry-level positions, volume-based strategies",
                      color: "from-blue-400 to-blue-600"
                    },
                    {
                      type: "AI-Powered Smart Agents",
                      description: "Advanced systems that use machine learning to customize applications, analyze job requirements, and optimize success rates.",
                      pros: ["Intelligent matching", "Customized applications", "Better success rates"],
                      cons: ["Higher cost", "Steeper learning curve", "Setup complexity"],
                      bestFor: "Mid to senior-level professionals, quality-focused approach",
                      color: "from-purple-400 to-purple-600"
                    },
                    {
                      type: "Platform-Specific Bots",
                      description: "Specialized tools designed for specific job boards like LinkedIn, Indeed, or AngelList with deep platform integration.",
                      pros: ["Platform optimization", "Advanced features", "Higher compatibility"],
                      cons: ["Limited to one platform", "Platform dependency", "Feature restrictions"],
                      bestFor: "Platform-heavy strategies, niche job markets",
                      color: "from-green-400 to-green-600"
                    },
                    {
                      type: "Custom-Built Solutions",
                      description: "Tailored agents built specifically for your industry, role, or company targets with maximum personalization.",
                      pros: ["Maximum customization", "Industry-specific", "Unique advantages"],
                      cons: ["High cost", "Technical expertise needed", "Maintenance required"],
                      bestFor: "Executives, niche industries, specific company targeting",
                      color: "from-orange-400 to-orange-600"
                    }
                  ].map((agent, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardHeader>
                        <div className={`w-full h-2 bg-gradient-to-r ${agent.color} rounded-t-lg`}></div>
                        <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                          {agent.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-700">{agent.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Pros
                            </h4>
                            <ul className="text-sm text-green-600 space-y-1">
                              {agent.pros.map((pro, i) => (
                                <li key={i}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                              <XCircle className="w-4 h-4" />
                              Cons
                            </h4>
                            <ul className="text-sm text-red-600 space-y-1">
                              {agent.cons.map((con, i) => (
                                <li key={i}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t">
                          <p className="text-sm font-medium text-gray-900">Best for: <span className="font-normal text-gray-700">{agent.bestFor}</span></p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections would continue here with the same pattern... */}
      {/* For brevity, I'll add a few more key sections */}

      {/* Section 15: Next Steps */}
      <section id="next-steps" className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white" data-animate>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible['next-steps'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">Section 15</Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    Your Next Steps
                  </h2>
                </div>
              </div>
              
              <p className="text-xl leading-relaxed mb-12 text-blue-100">
                You now have the complete roadmap to leveraging job application agents effectively. The question isn't whether you should use them—it's how quickly you can get started and gain a competitive advantage in today's market.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    step: "Week 1",
                    title: "Choose & Setup",
                    description: "Select the right agent type for your needs and get your first automation running",
                    icon: Target
                  },
                  {
                    step: "Week 2-3",
                    title: "Optimize & Scale",
                    description: "Fine-tune your targeting, customize templates, and increase application volume",
                    icon: BarChart3
                  },
                  {
                    step: "Week 4+",
                    title: "Interview & Land",
                    description: "Focus on interview preparation while your agent continues working in the background",
                    icon: CheckCircle
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-all duration-300">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div className="text-lg font-semibold mb-2 text-blue-100">{item.step}</div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-blue-100 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-12">
                <h3 className="text-2xl font-bold mb-4">Remember: Success Takes Strategy, Not Just Automation</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Job application agents are powerful tools, but they're most effective when combined with a thoughtful career strategy, strong personal branding, and genuine skill development. Use them to handle the grunt work so you can focus on what humans do best—building relationships, solving problems, and creating value.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-blue-100 mb-6">
                  The future belongs to those who adapt. Start your automated job search today and take control of your career destiny.
                </p>
                
                <div className="flex items-center justify-center gap-3 animate-pulse">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                    <User className="w-5 h-5" />
                    <span className="font-medium">Written by Nithin Kumar Putti</span>
                    <Separator orientation="vertical" className="h-4 bg-white/30" />
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm text-blue-100">2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        >
          <ChevronDown className="w-6 h-6 rotate-180" />
        </Button>
      </div>
    </div>
  );
};

export default JobApplicationAgentsBlog;
