import * as React from 'react';

interface ISettings {
  controls: boolean;
  borderRadius: number;
  theme: string;
}

const SettingsContext = React.createContext({});

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = React.useState<ISettings>({
    controls: true,
    borderRadius: 3,
    theme: 'Ayu'
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export function useSettings() {
  const context = React.useContext(SettingsContext);
  return context;
}
