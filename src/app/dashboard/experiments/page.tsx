'use client';

import Link from 'next/link';
import { DashboardNav } from '@/components/DashboardNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Flask, Plus, Search, Edit, Copy, Trash2, Play } from 'lucide-react';

const experiments = [
  { id: 1, title: 'Stroop Effect Study', status: 'Active', participants: 247, trials: 1420, created: '2024-01-15' },
  { id: 2, title: 'Visual Attention Task', status: 'Completed', participants: 180, trials: 980, created: '2024-01-10' },
  { id: 3, title: 'Memory Recall Experiment', status: 'Active', participants: 95, trials: 450, created: '2024-02-01' },
  { id: 4, title: 'Response Inhibition Test', status: 'Active', participants: 156, trials: 820, created: '2024-01-20' },
  { id: 5, title: 'Auditory Processing Study', status: 'Draft', participants: 0, trials: 0, created: '2024-02-10' },
  { id: 6, title: 'Spatial Working Memory', status: 'Active', participants: 203, trials: 1100, created: '2024-01-25' },
];

export default function ExperimentsListPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Experiments</h1>
              <p className="text-muted-foreground">Manage your research studies</p>
            </div>
            <Link href="/dashboard/experiments/builder">
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
                <Plus className="w-4 h-4 mr-2" />
                New Experiment
              </Button>
            </Link>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search experiments..." className="pl-10" />
            </div>
          </div>

          {/* Experiments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp) => (
              <Card key={exp.id} className="p-6 hover:shadow-elevated transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Flask className="w-6 h-6 text-primary" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.status === 'Active' ? 'bg-green-100 text-green-700' :
                    exp.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {exp.status}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">Created {exp.created}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b">
                  <div>
                    <p className="text-2xl font-bold">{exp.participants}</p>
                    <p className="text-xs text-muted-foreground">Participants</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{exp.trials}</p>
                    <p className="text-xs text-muted-foreground">Trials</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
