'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Brain, 
  Clock, 
  Users, 
  Award,
  Play,
  CheckCircle2
} from 'lucide-react';

const availableStudies = [
  {
    id: 1,
    title: 'Stroop Effect Study',
    description: 'Measure cognitive interference in color-word naming tasks',
    duration: 15,
    compensation: '$3.50',
    participants: 247,
    status: 'Active'
  },
  {
    id: 2,
    title: 'Visual Attention Task',
    description: 'Assess selective attention using visual search paradigms',
    duration: 20,
    compensation: '$4.00',
    participants: 180,
    status: 'Active'
  },
  {
    id: 3,
    title: 'Memory Recall Experiment',
    description: 'Test short-term memory capacity and recall accuracy',
    duration: 25,
    compensation: '$5.00',
    participants: 95,
    status: 'Active'
  },
];

export default function ParticipantPortalPage() {
  const [showConsent, setShowConsent] = useState(false);
  const [showDemographics, setShowDemographics] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  if (showDemographics) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
        <nav className="border-b bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600" />
              <span className="text-2xl font-bold">CogniLab</span>
            </div>
          </div>
        </nav>

        <div className="max-w-2xl mx-auto px-6 py-12">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2">Demographics Survey</h1>
            <p className="text-muted-foreground mb-8">
              Please provide some basic information about yourself. This helps us understand our participant pool.
            </p>

            <div className="space-y-6">
              <div>
                <Label>Age</Label>
                <Input type="number" placeholder="Enter your age" className="mt-2" />
              </div>
              <div>
                <Label>Gender</Label>
                <Input placeholder="e.g., Male, Female, Non-binary, Prefer not to say" className="mt-2" />
              </div>
              <div>
                <Label>Country</Label>
                <Input placeholder="Enter your country" className="mt-2" />
              </div>
              <div>
                <Label>Education Level</Label>
                <Input placeholder="e.g., High School, Bachelor's, Master's" className="mt-2" />
              </div>
              <div>
                <Label>Handedness</Label>
                <Input placeholder="e.g., Right, Left, Ambidextrous" className="mt-2" />
              </div>
            </div>

            <Button 
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
              onClick={() => window.location.href = '/experiment/1'}
            >
              Continue to Experiment
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (showConsent) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
        <nav className="border-b bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600" />
              <span className="text-2xl font-bold">CogniLab</span>
            </div>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-6 py-12">
          <Card className="p-8">
            <h1 className="text-3xl font-bold mb-2">Informed Consent</h1>
            <p className="text-muted-foreground mb-8">
              Please read the following information carefully before participating.
            </p>

            <div className="prose prose-sm max-w-none mb-8 space-y-4 text-sm">
              <h3 className="font-semibold text-base">Study Purpose</h3>
              <p className="text-muted-foreground">
                This study investigates cognitive processing in visual attention tasks. 
                You will be asked to respond to visual stimuli presented on the screen.
              </p>

              <h3 className="font-semibold text-base">Procedures</h3>
              <p className="text-muted-foreground">
                The experiment will take approximately 15 minutes. You will see words or colors 
                displayed on screen and will be asked to respond by pressing keys on your keyboard.
              </p>

              <h3 className="font-semibold text-base">Risks and Benefits</h3>
              <p className="text-muted-foreground">
                There are no known risks associated with this study beyond those of everyday computer use. 
                You will be compensated for your time and will contribute to scientific knowledge.
              </p>

              <h3 className="font-semibold text-base">Confidentiality</h3>
              <p className="text-muted-foreground">
                All data collected will be anonymized and stored securely. Your personal information 
                will not be shared with third parties.
              </p>

              <h3 className="font-semibold text-base">Voluntary Participation</h3>
              <p className="text-muted-foreground">
                Your participation is completely voluntary. You may withdraw at any time without penalty.
              </p>
            </div>

            <div className="flex items-start space-x-3 mb-6 p-4 bg-muted rounded-lg">
              <Checkbox 
                id="consent" 
                checked={consentGiven}
                onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
              />
              <label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                I have read and understood the above information. I voluntarily agree to participate 
                in this research study and understand that I can withdraw at any time.
              </label>
            </div>

            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setShowConsent(false)}
              >
                Go Back
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                disabled={!consentGiven}
                onClick={() => setShowDemographics(true)}
              >
                I Consent
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600" />
            <span className="text-2xl font-bold">CogniLab</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Button variant="outline" size="sm">Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Participant Portal</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Contribute to <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Scientific Research</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in cutting-edge cognitive science studies and earn compensation for your time
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Flexible Timing</h3>
              <p className="text-sm text-muted-foreground">Participate whenever and wherever you want</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Fair Compensation</h3>
              <p className="text-sm text-muted-foreground">Earn money for your valuable time</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-violet-100 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="font-semibold mb-2">Advance Science</h3>
              <p className="text-sm text-muted-foreground">Help researchers make new discoveries</p>
            </Card>
          </div>

          {/* Available Studies */}
          <h2 className="text-3xl font-bold mb-8">Available Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableStudies.map((study) => (
              <Card key={study.id} className="p-6 hover:shadow-elevated transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {study.status}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.description}</p>
                <div className="flex items-center justify-between text-sm mb-4 pb-4 border-b">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration} min
                    </span>
                    <span className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {study.participants}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">{study.compensation}</span>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                    onClick={() => setShowConsent(true)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Study
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}