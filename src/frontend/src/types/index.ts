export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FactItem {
  id: number;
  category: string;
  title: string;
  description: string;
  stat?: string;
}

export interface TimelineEntry {
  year: string;
  team: string;
  teamAbbr: string;
  achievement: string;
  description: string;
  color: string;
}
