
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { Theme } from '../types/note';

export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('notes-theme', {
    mode: 'light',
    color: 'blue'
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // Apply dark/light mode
    if (theme.mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Apply color theme
    root.classList.remove('theme-green', 'theme-blue', 'theme-yellow');
    root.classList.add(`theme-${theme.color}`);
  }, [theme]);

  const toggleMode = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  };

  const changeColor = (color: 'green' | 'blue' | 'yellow') => {
    setTheme(prev => ({
      ...prev,
      color
    }));
  };

  return {
    theme,
    toggleMode,
    changeColor
  };
}
