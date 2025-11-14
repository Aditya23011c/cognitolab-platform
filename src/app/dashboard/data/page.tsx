'use client';

import { DashboardNav } from '@/components/DashboardNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database, Download, FileJson, FileSpreadsheet, Code } from 'lucide-react';

export default function DataManagementPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Data Management</h1>
              <p className="text-muted-foreground">Export and manage your research data</p>
            </div>
          </div>

          {/* Export Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 hover:shadow-premium transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export to CSV</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download raw data in CSV format for Excel, SPSS, or R
              </p>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-premium transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <FileJson className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Export to JSON</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Download structured data in JSON format for custom analysis
              </p>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export JSON
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-premium transition-shadow cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Python/R Scripts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate analysis scripts with pre-configured data loading
              </p>
              <Button className="w-full" variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Generate Script
              </Button>
            </Card>
          </div>

          {/* Database Info */}
          <Card className="p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Database Summary</h2>
                <p className="text-sm text-muted-foreground">Overview of stored data</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold mb-1">10</p>
                <p className="text-sm text-muted-foreground">Experiments</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold mb-1">55</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold mb-1">80</p>
                <p className="text-sm text-muted-foreground">Sessions</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <p className="text-3xl font-bold mb-1">250+</p>
                <p className="text-sm text-muted-foreground">Trials</p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
