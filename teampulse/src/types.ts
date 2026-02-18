type Mood = "great" | "good" | "okay" | "tired" | "stressed";

type EnergyLevel = 1 | 2 | 3 | 4 | 5;

interface CheckIn {
  id: string;
  name: string;
  mood: Mood;
  energy: EnergyLevel;
  comment?: string;
  timestamp: Date;
}

interface DayStats {
  averageEnergy: number;
  moodDistrubition: Record<Mood, number>;
  totalCheckIns: number;
}

export type {CheckIn, DayStats, Mood}