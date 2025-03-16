import { create } from 'zustand';
import { TimerSettings, TimerState } from './types';

interface Store {
  settings: TimerSettings;
  timer: TimerState;
  updateSettings: (settings: Partial<TimerSettings>) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  tick: () => void;
}

export const useStore = create<Store>((set) => ({
  settings: {
    focusDuration: 25 * 60,
    breakDuration: 5 * 60,
    autoStartBreaks: true,
  },
  timer: {
    isRunning: false,
    mode: 'focus',
    timeLeft: 25 * 60,
    completedSessions: 0,
    totalFocusTime: 0,
  },
  updateSettings: (newSettings) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
  startTimer: () =>
    set((state) => ({
      timer: { ...state.timer, isRunning: true },
    })),
  pauseTimer: () =>
    set((state) => ({
      timer: { ...state.timer, isRunning: false },
    })),
  resetTimer: () =>
    set((state) => ({
      timer: {
        ...state.timer,
        isRunning: false,
        timeLeft: state.settings.focusDuration,
        mode: 'focus',
      },
    })),
  tick: () =>
    set((state) => {
      if (state.timer.timeLeft <= 0) {
        const newMode = state.timer.mode === 'focus' ? 'break' : 'focus';
        const newTimeLeft =
          newMode === 'focus'
            ? state.settings.focusDuration
            : state.settings.breakDuration;
        const newCompletedSessions =
          state.timer.mode === 'focus'
            ? state.timer.completedSessions + 1
            : state.timer.completedSessions;
        const newTotalFocusTime =
          state.timer.mode === 'focus'
            ? state.timer.totalFocusTime + state.settings.focusDuration
            : state.timer.totalFocusTime;

        return {
          timer: {
            ...state.timer,
            mode: newMode,
            timeLeft: newTimeLeft,
            isRunning: state.settings.autoStartBreaks,
            completedSessions: newCompletedSessions,
            totalFocusTime: newTotalFocusTime,
          },
        };
      }

      return {
        timer: {
          ...state.timer,
          timeLeft: state.timer.timeLeft - 1,
        },
      };
    }),
}));