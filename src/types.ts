export interface TimerSettings {
  focusDuration: number;
  breakDuration: number;
  autoStartBreaks: boolean;
}

export interface TimerState {
  isRunning: boolean;
  mode: 'focus' | 'break';
  timeLeft: number;
  completedSessions: number;
  totalFocusTime: number;
}

export interface Sound {
  name: string;
  url: string;
  icon: string;
}