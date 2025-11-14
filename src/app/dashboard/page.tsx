'use client';

import { DashboardNav } from '@/components/DashboardNav';
import { StatCard } from '@/components/StatCard';
import { MiniChart } from '@/components/MiniChart';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FlaskRound, Users, TrendingUp, Clock, Plus, PlayCircle } from 'lucide-react';

const activityData = [
  { name: 'Mon', value: 24 },
  { name: 'Tue', value: 38 },
  { name: 'Wed', value: 42 },
  { name: 'Thu', value: 35 },
  { name: 'Fri', value: 48 },
  { name: 'Sat', value: 31 },
  { name: 'Sun', value: 28 },
];

const reactionTimeData = [
  { name: 'Week 1', value: 450 },
  { name: 'Week 2', value: 425 },
  { name: 'Week 3', value: 410 },
  { name: 'Week 4', value: 395 },
];

const recentExperiments = [
  { id: 1, name: 'Stroop Effect Study', status: 'Active', participants: 247, completion: 82 },
  { id: 2, name: 'Visual Attention Task', status: 'Completed', participants: 180, completion: 100 },
  { id: 3, name: 'Memory Recall Experiment', status: 'Active', participants: 95, completion: 45 },
  { id: 4, name: 'Response Inhibition Test', status: 'Draft', participants: 0, completion: 0 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Dr. Sarah Chen</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700">
              <Plus className="w-4 h-4 mr-2" />
              New Experiment
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Active Experiments"
              value={12}
              icon={FlaskRound}
              trend={{ value: 8.2, label: 'vs last month' }}
            />
            <StatCard
              title="Total Participants"
              value="1,247"
              icon={Users}
              trend={{ value: 15.3, label: 'vs last month' }}
            />
            <StatCard
              title="Avg Response Time"
              value="420ms"
              icon={Clock}
              trend={{ value: -5.1, label: 'improvement' }}
            />
            <StatCard
              title="Data Points"
              value="45.2K"
              icon={TrendingUp}
              trend={{ value: 22.5, label: 'vs last month' }}
            />
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <MiniChart
              title="Weekly Activity"
              data={activityData}
              type="bar"
              color="#3b82f6"
            />
            <MiniChart
              title="Average Reaction Time Trend"
              data={reactionTimeData}
              type="line"
              color="#8b5cf6"
            />
          </div>

          {/* Recent Experiments */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Experiments</h2>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentExperiments.map((exp) => (
                <div
                  key={exp.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/50 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FlaskRound className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{exp.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.participants} participants • {exp.completion}% complete
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.status === 'Active' ? 'bg-green-100 text-green-700' :
                      exp.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {exp.status}
                    </div>
                    <Button variant="ghost" size="sm">
                      <PlayCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}