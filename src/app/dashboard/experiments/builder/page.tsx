'use client';

import { useState } from 'react';
import { DashboardNav } from '@/components/DashboardNav';
import { ExperimentBlock } from '@/components/ExperimentBlock';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Save, 
  Play, 
  Share2, 
  Eye, 
  Timer, 
  Type, 
  Image as ImageIcon,
  Volume2,
  Keyboard,
  Shuffle,
  Zap
} from 'lucide-react';

const experimentBlocks = [
  { id: 'stroop', type: 'Cognitive Task', label: 'Stroop Task', icon: <Zap className="w-5 h-5" /> },
  { id: 'reaction', type: 'Response Task', label: 'Reaction Time', icon: <Timer className="w-5 h-5" /> },
  { id: 'text', type: 'Stimulus', label: 'Text Display', icon: <Type className="w-5 h-5" /> },
  { id: 'image', type: 'Stimulus', label: 'Image Display', icon: <ImageIcon className="w-5 h-5" /> },
  { id: 'audio', type: 'Stimulus', label: 'Audio Playback', icon: <Volume2 className="w-5 h-5" /> },
  { id: 'keypress', type: 'Response', label: 'Key Capture', icon: <Keyboard className="w-5 h-5" /> },
  { id: 'randomizer', type: 'Logic', label: 'Randomizer', icon: <Shuffle className="w-5 h-5" /> },
];

const timelineBlocks = [
  { id: '1', type: 'text', label: 'Welcome Screen', duration: 2000 },
  { id: '2', type: 'stroop', label: 'Stroop Task Block', duration: 1500 },
  { id: '3', type: 'reaction', label: 'Response Window', duration: 3000 },
];

export default function ExperimentBuilderPage() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-muted/30">
      <DashboardNav />
      <main className="ml-64">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Input 
                defaultValue="Untitled Experiment" 
                className="text-xl font-semibold border-none shadow-none focus-visible:ring-0 px-0"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-violet-600">
                <Play className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>

        <div className="flex h-[calc(100vh-73px)]">
          {/* Left Sidebar - Blocks */}
          <div className="w-80 border-r bg-white p-6 overflow-y-auto">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">EXPERIMENT BLOCKS</h3>
            <div className="space-y-3">
              {experimentBlocks.map((block) => (
                <ExperimentBlock
                  key={block.id}
                  id={block.id}
                  type={block.type}
                  label={block.label}
                  icon={block.icon}
                  onSelect={() => setSelectedBlock(block.id)}
                />
              ))}
            </div>
          </div>

          {/* Center - Timeline */}
          <div className="flex-1 p-8 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Experiment Timeline</h2>
                <p className="text-sm text-muted-foreground">
                  Drag and drop blocks to build your experiment flow
                </p>
              </div>

              <Card className="p-6 mb-4 border-2 border-dashed border-primary/20 bg-primary/5">
                <div className="text-center py-8 text-muted-foreground">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-medium mb-2">Drop blocks here to start building</p>
                  <p className="text-sm">Select from the blocks on the left to create your experiment</p>
                </div>
              </Card>

              <div className="space-y-4">
                {timelineBlocks.map((block, index) => (
                  <Card 
                    key={block.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-md ${
                      selectedBlock === block.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedBlock(block.id)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{block.label}</h3>
                        <p className="text-sm text-muted-foreground">{block.type} • {block.duration}ms</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Delete</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Properties */}
          <div className="w-96 border-l bg-white p-6 overflow-y-auto">
            <h3 className="text-sm font-semibold text-muted-foreground mb-4">PROPERTIES</h3>
            {selectedBlock ? (
              <div className="space-y-6">
                <div>
                  <Label>Block Label</Label>
                  <Input placeholder="Enter block name" className="mt-2" />
                </div>
                <div>
                  <Label>Duration (ms)</Label>
                  <Input type="number" placeholder="1500" className="mt-2" />
                </div>
                <div>
                  <Label>Stimulus Text</Label>
                  <Textarea placeholder="Enter stimulus content" className="mt-2" rows={4} />
                </div>
                <div>
                  <Label>Response Keys</Label>
                  <Input placeholder="space, enter, escape" className="mt-2" />
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full">Apply Changes</Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-sm">Select a block to edit its properties</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}