'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FlaskRound, Users, BarChart3, Settings, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Experiments', href: '/dashboard/experiments', icon: FlaskRound },
  { name: 'Participants', href: '/dashboard/participants', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
  { name: 'Data', href: '/dashboard/data', icon: Database },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-sidebar">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600" />
            <span className="text-xl font-bold">CogniLab</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-600" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Dr. Sarah Chen</p>
              <p className="text-xs text-muted-foreground truncate">Stanford University</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}