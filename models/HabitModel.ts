export type Habit = {
    id: string;
    name: string;
    description?: string;
    frequency: 'daily' | 'weekly' | 'monthly';
    completedDates: string[]; // Store dates in ISO format
  };