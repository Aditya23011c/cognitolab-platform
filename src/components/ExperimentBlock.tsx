'use client';

import { Card } from '@/components/ui/card';
import { GripVertical } from 'lucide-react';

interface ExperimentBlockProps {
  id: string;
  type: string;
  label: string;
  icon: React.ReactNode;
  duration?: number;
  onSelect?: () => void;
}

export function ExperimentBlock({ type, label, icon, duration, onSelect }: ExperimentBlockProps) {
  return (
    <Card 
      className="p-4 cursor-move hover:shadow-md transition-shadow group"
      onClick={onSelect}
    >
      <div className="flex items-center space-x-3">
        <div className="text-muted-foreground group-hover:text-foreground transition-colors">
          <GripVertical className="h-4 w-4" />
        </div>
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-muted-foreground">{type}</p>
        </div>
        {duration && (
          <div className="text-xs text-muted-foreground">
            {duration}ms
          </div>
        )}
      </div>
    </Card>
  );
}