'use client';

import { DashboardNav } from '@/components/DashboardNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  ScatterChart,
  Scatter,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import { Download, Filter, TrendingUp, Clock, Target } from 'lucide-react';

const reactionTimeData = [
  { range: '200-300ms', count: 45 },
  { range: '300-400ms', count: 128 },
  { range: '400-500ms', count: 256 },
  { range: '500-600ms', count: 189 },
  { range: '600-700ms', count: 87 },
  { range: '700-800ms', count: 32 },
];

const accuracyTrendData = [
  { trial: 1, accuracy: 72 },
  { trial: 5, accuracy: 78 },
  { trial: 10, accuracy: 84 },
  { trial: 15, accuracy: 88 },
  { trial: 20, accuracy: 91 },
  { trial: 25, accuracy: 93 },
];

const scatterData = [
  { rt: 250, accuracy: 100 },
  { rt: 320, accuracy: 100 },
  { rt: 380, accuracy: 95 },
  { rt: 420, accuracy: 100 },
  { rt: 450, accuracy: 90 },
  { rt: 480, accuracy: 95 },
  { rt: 510, accuracy: 85 },
  { rt: 560, accuracy: 80 },
  { rt: 620, accuracy: 75 },
  { rt: 680, accuracy: 70 },
];

const trialData = [
  { trial: 1, participant: 'P10001', rt: 420, accuracy: 100, condition: 'congruent' },
  { trial: 2, participant: 'P10001', rt: 485, accuracy: 100, condition: 'incongruent' },
  { trial: 3, participant: 'P10001', rt: 398, accuracy: 100, condition: 'congruent' },
  { trial: 4, participant: 'P10002', rt: 512, accuracy: 0, condition: 'incongruent' },
  { trial: 5, participant: 'P10002', rt: 445, accuracy: 100, condition: 'congruent' },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Data Analytics</h1>
              <p className="text-muted-foreground">Stroop Effect Study</p>
            </div>
            <div className="flex items-center space-x-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter data" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Data</SelectItem>
                  <SelectItem value="congruent">Congruent Only</SelectItem>
                  <SelectItem value="incongruent">Incongruent Only</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mean RT</p>
                  <h3 className="text-3xl font-bold">452ms</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">SD: 89ms • Range: 210-780ms</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
                  <h3 className="text-3xl font-bold">87.3%</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">637 correct • 92 incorrect</p>
            </Card>
            <Card className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Effect Size</p>
                  <h3 className="text-3xl font-bold">d = 0.84</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-violet-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Large effect (Cohen&apos;s d)</p>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Reaction Time Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={reactionTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="range" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-6">Accuracy Over Trials</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accuracyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="trial" fontSize={12} />
                  <YAxis fontSize={12} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#8b5cf6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>

          <Card className="p-6 mb-6">
            <h3 className="text-lg font-semibold mb-6">Speed-Accuracy Tradeoff</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="rt" name="Reaction Time" unit="ms" fontSize={12} />
                <YAxis dataKey="accuracy" name="Accuracy" unit="%" fontSize={12} />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px'
                  }} 
                />
                <Scatter data={scatterData} fill="#14b8a6" />
              </ScatterChart>
            </ResponsiveContainer>
          </Card>

          {/* Raw Data Table */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Trial-by-Trial Data</h3>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-semibold">Trial</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Participant</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">RT (ms)</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Accuracy</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Condition</th>
                  </tr>
                </thead>
                <tbody>
                  {trialData.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-muted/50">
                      <td className="py-3 px-4 text-sm">{row.trial}</td>
                      <td className="py-3 px-4 text-sm font-mono">{row.participant}</td>
                      <td className="py-3 px-4 text-sm font-mono">{row.rt}</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs ${
                          row.accuracy === 100 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {row.accuracy}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm capitalize">{row.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}