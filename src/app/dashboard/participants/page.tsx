'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Filter, Download, Mail, Check, X } from 'lucide-react';

const participants = [
  { id: 'P10001', email: 'participant1@email.com', age: 28, gender: 'Female', country: 'USA', sessions: 3, status: 'Active', compensation: '$12.50' },
  { id: 'P10002', email: 'participant2@email.com', age: 45, gender: 'Male', country: 'USA', sessions: 5, status: 'Active', compensation: '$22.00' },
  { id: 'P10003', email: null, age: 32, gender: 'Non-binary', country: 'USA', sessions: 1, status: 'Pending', compensation: '$3.50' },
  { id: 'P10004', email: 'participant4@email.com', age: 19, gender: 'Female', country: 'USA', sessions: 2, status: 'Completed', compensation: '$8.00' },
  { id: 'P10005', email: 'participant5@email.com', age: 52, gender: 'Male', country: 'USA', sessions: 4, status: 'Active', compensation: '$18.50' },
  { id: 'P10023', email: 'participant23@email.com', age: 35, gender: 'Male', country: 'UK', sessions: 2, status: 'Active', compensation: '$7.00' },
  { id: 'P10024', email: 'participant24@email.com', age: 42, gender: 'Female', country: 'UK', sessions: 3, status: 'Completed', compensation: '$12.50' },
  { id: 'P10037', email: 'participant37@email.com', age: 28, gender: 'Female', country: 'Canada', sessions: 1, status: 'Active', compensation: '$4.00' },
];

export default function ParticipantsManagementPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Participants</h1>
              <p className="text-muted-foreground">Manage and track participant data</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Selected
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                <Download className="w-4 h-4 mr-2" />
                Export List
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Total Participants</p>
              <h3 className="text-3xl font-bold">1,247</h3>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Active</p>
              <h3 className="text-3xl font-bold text-green-600">892</h3>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Completed</p>
              <h3 className="text-3xl font-bold text-blue-600">305</h3>
            </Card>
            <Card className="p-6">
              <p className="text-sm text-muted-foreground mb-1">Pending</p>
              <h3 className="text-3xl font-bold text-orange-600">50</h3>
            </Card>
          </div>

          {/* Filters and Search */}
          <Card className="p-6 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by ID, email, or country..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  <SelectItem value="usa">USA</SelectItem>
                  <SelectItem value="uk">UK</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </Card>

          {/* Participants Table */}
          <Card className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-sm font-semibold">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">ID</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Age</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Gender</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Country</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Sessions</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Compensation</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {participants.map((participant) => (
                    <tr key={participant.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="py-3 px-4 text-sm font-mono font-semibold">
                        {participant.id}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        {participant.email || (
                          <span className="text-muted-foreground italic">No email</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm">{participant.age}</td>
                      <td className="py-3 px-4 text-sm">{participant.gender}</td>
                      <td className="py-3 px-4 text-sm">{participant.country}</td>
                      <td className="py-3 px-4 text-sm font-semibold">{participant.sessions}</td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          participant.status === 'Active' ? 'bg-green-100 text-green-700' :
                          participant.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {participant.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-green-600">
                        {participant.compensation}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Check className="w-4 h-4 text-green-600" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="w-4 h-4 text-red-600" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t">
              <p className="text-sm text-muted-foreground">
                Showing 1-10 of 1,247 participants
              </p>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}