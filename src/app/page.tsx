'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  Zap, 
  Globe, 
  TrendingUp, 
  Clock, 
  Users, 
  Microscope,
  Play,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600" />
            <span className="text-2xl font-bold">CogniLab</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/participant" className="text-sm font-medium hover:text-primary transition-colors">
              Participate
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                Start Research
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Millisecond-Accurate Research</span>
              </div>
              <h1 className="text-6xl font-bold leading-tight mb-6">
                Run Cognitive Experiments{' '}
                <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  From Anywhere
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Build, deploy, and analyze millisecond-accurate behavioral studies online. 
                Break free from lab constraints and reach global participant pools.
              </p>
              <div className="flex items-center space-x-4">
                <Link href="/register">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8">
                    Start Research
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/dashboard/experiments">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    <Play className="mr-2 w-5 h-5" />
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-violet-400/20 blur-3xl rounded-full" />
              <Card className="relative p-8 shadow-elevated">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 p-4 bg-muted rounded-lg">
                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">Stroop Effect Study</p>
                      <p className="text-sm text-muted-foreground">420ms avg reaction time</p>
                    </div>
                    <div className="text-green-600 text-sm font-semibold">Active</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">1,247</p>
                      <p className="text-xs text-muted-foreground">Participants</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">98.3%</p>
                      <p className="text-xs text-muted-foreground">Accuracy</p>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <p className="text-2xl font-bold">±2ms</p>
                      <p className="text-xs text-muted-foreground">Precision</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Research Challenge</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Traditional cognitive research faces critical barriers that limit scientific progress
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lab-Based Limitations</h3>
              <p className="text-muted-foreground">
                Expensive equipment, restricted access, and limited testing hours constrain research capacity
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Participant Pool Constraints</h3>
              <p className="text-muted-foreground">
                Local recruitment limits diversity and sample sizes, affecting generalizability
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-elevated transition-shadow">
              <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technical Complexity</h3>
              <p className="text-muted-foreground">
                Web experiments struggle with millisecond-accurate timing required for cognitive studies
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A Complete Research Ecosystem</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to conduct world-class cognitive research online
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Brain className="w-6 h-6" />, title: 'No-Code Builder', desc: 'Visual experiment designer with drag-and-drop blocks' },
              { icon: <Zap className="w-6 h-6" />, title: 'Precision Timing', desc: 'Sub-millisecond accurate event capture and display' },
              { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', desc: 'Access diverse participant pools worldwide' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Real-Time Analytics', desc: 'Live data visualization and statistical analysis' },
              { icon: <Check className="w-6 h-6" />, title: 'Device Compatibility', desc: 'Runs on any modern browser, any device' },
              { icon: <Sparkles className="w-6 h-6" />, title: 'Auto Export', desc: 'Export to SPSS, R, Python with one click' },
            ].map((feature, i) => (
              <Card key={i} className="p-6 hover:shadow-premium transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-elevated">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Research?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join leading researchers using CogniLab to conduct groundbreaking studies
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 hover:bg-white/20 text-white">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />
              <span className="text-lg font-bold">CogniLab</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CogniLab. Built for cognitive science research.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}