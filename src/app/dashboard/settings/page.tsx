'use client';

import { DashboardNav } from '@/components/DashboardNav';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Building2, Key, Bell, Shield, Save } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="lab">Lab Info</TabsTrigger>
              <TabsTrigger value="api">API Keys</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Profile Information</h2>
                    <p className="text-sm text-muted-foreground">Update your personal details</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name</Label>
                      <Input defaultValue="Dr. Sarah Chen" className="mt-2" />
                    </div>
                    <div>
                      <Label>Email Address</Label>
                      <Input defaultValue="sarah.chen@stanford.edu" type="email" className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label>Title/Position</Label>
                    <Input defaultValue="Associate Professor" className="mt-2" />
                  </div>
                  <div>
                    <Label>Bio</Label>
                    <Textarea 
                      defaultValue="Cognitive neuroscientist specializing in attention and perception research."
                      className="mt-2" 
                      rows={4}
                    />
                  </div>
                  <div className="flex justify-end pt-4 border-t">
                    <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Lab Info Tab */}
            <TabsContent value="lab">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Lab/Institution</h2>
                    <p className="text-sm text-muted-foreground">Manage your research organization details</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label>Institution Name</Label>
                    <Input defaultValue="Stanford University" className="mt-2" />
                  </div>
                  <div>
                    <Label>Department</Label>
                    <Input defaultValue="Department of Psychology" className="mt-2" />
                  </div>
                  <div>
                    <Label>Lab Name</Label>
                    <Input defaultValue="Cognitive Neuroscience Lab" className="mt-2" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>IRB Number</Label>
                      <Input defaultValue="IRB-2024-001" className="mt-2" />
                    </div>
                    <div>
                      <Label>Grant Number</Label>
                      <Input placeholder="Optional" className="mt-2" />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4 border-t">
                    <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* API Keys Tab */}
            <TabsContent value="api">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Key className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">API Keys</h2>
                    <p className="text-sm text-muted-foreground">Manage your API access credentials</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold">Production API Key</p>
                      <Button variant="outline" size="sm">Regenerate</Button>
                    </div>
                    <code className="text-xs font-mono bg-background px-3 py-2 rounded block">
                      sk_live_1234567890abcdefghijklmnopqrstuvwxyz
                    </code>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold">Development API Key</p>
                      <Button variant="outline" size="sm">Regenerate</Button>
                    </div>
                    <code className="text-xs font-mono bg-background px-3 py-2 rounded block">
                      sk_test_abcdefghijklmnopqrstuvwxyz1234567890
                    </code>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-sm text-blue-900">
                      <strong>Note:</strong> Keep your API keys secure. Never share them publicly or commit them to version control.
                    </p>
                  </div>
                  <div>
                    <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                      Generate New Key
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Notification Preferences</h2>
                    <p className="text-sm text-muted-foreground">Control how you receive updates</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">Experiment Completion</p>
                      <p className="text-sm text-muted-foreground">Get notified when participants complete experiments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">New Participant</p>
                      <p className="text-sm text-muted-foreground">Receive alerts for new participant enrollments</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">Data Threshold</p>
                      <p className="text-sm text-muted-foreground">Alert when reaching target sample size</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">Weekly Summary</p>
                      <p className="text-sm text-muted-foreground">Receive weekly reports of all activity</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex justify-end pt-4 border-t">
                    <Button className="bg-gradient-to-r from-blue-600 to-violet-600">
                      <Save className="w-4 h-4 mr-2" />
                      Save Preferences
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Privacy & Compliance</h2>
                    <p className="text-sm text-muted-foreground">Manage data privacy settings</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">Anonymous Data Collection</p>
                      <p className="text-sm text-muted-foreground">Collect data without personal identifiers</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">GDPR Compliance Mode</p>
                      <p className="text-sm text-muted-foreground">Enable EU data protection regulations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <p className="font-medium">Data Retention</p>
                      <p className="text-sm text-muted-foreground">Auto-delete participant data after 2 years</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                    <p className="text-sm text-red-900 font-medium mb-2">Delete Account</p>
                    <p className="text-sm text-red-800 mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <Button variant="destructive" size="sm">Delete My Account</Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}