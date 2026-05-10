export interface DateRange {
  start: number;
  end: number;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  date: number | DateRange;
  era: string;
  century: number;
  country: string;
  summary: string;
  narrative: string;
  headerImage?: string;
  figures: string[];
  sources?: string[];
}

export interface HistoricalFigure {
  id: string;
  name: string;
  birth: number | null;
  death: number | null;
  era: string;
  role: string;
  description?: string;
  events: string[];
  countries?: string[];
}

export interface Country {
  id: string;
  name: string;
  code: string;
  isInteractive: boolean;
  eventCount?: number;
}
