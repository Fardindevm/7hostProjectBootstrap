'use client';

import { useTheme } from '../context/ThemeContext';
import { Sun } from 'lucide-react';

export default function DarkLightButtons() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="d-flex align-items-center gap-2">
      <button
        type="button"
        className={`btn ${isDarkMode ? 'btn-outline-primary' : 'btn-primary'} d-flex align-items-center`}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'O-' : <Sun size={20} />}
      </button>
      
      <button
        type="button"
        className={`btn ${isDarkMode ? 'btn-primary' : 'btn-outline-primary'} `}
        onClick={toggleDarkMode}
        style={{ width: '44px', height: '38px', padding: 0 }}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? 'I' : 'O'}
      </button>
    </div>
  );
}
