import React from 'react';

type Settings = {
  controls: boolean;
  borderRadius: number;
  theme: string;
};

type SettingsContextProps = {
  settings: Settings;
  setSettings: React.Dispatch<any>;
};

const initialState: Settings = {
  controls: true,
  borderRadius: 3,
  theme: 'Ayu'
};

const SettingsContext = React.createContext<SettingsContextProps>({
  settings: initialState,
  setSettings: () => initialState
});

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = React.useState<Settings>({
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

export default function useSettings() {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }
  return context;
}
