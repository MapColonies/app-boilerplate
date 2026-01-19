// Runtime configuration
declare global {
  interface Window {
    _env_?: {
      LANGUAGE?: string;
      API_URL?: string;
      MAP?: {
        center?: [number, number];
        zoom?: number;
      };
      LOGGER?: {
        level?: string;
      };
    };
    RUNTIME_CONFIG?: Record<string, unknown>;
  }
}

export interface Config {
  language: string;
  apiUrl: string;
  map: {
    center: [number, number];
    zoom: number;
  };
  logger: {
    level: string;
  };
}

const config: Config = {
  language: window._env_?.LANGUAGE || import.meta.env.VITE_LANGUAGE || 'en',
  apiUrl: window._env_?.API_URL || import.meta.env.VITE_API_URL || 'http://localhost:8080',
  map: {
    center: window._env_?.MAP?.center || [34.811, 31.908],
    zoom: window._env_?.MAP?.zoom || 14,
  },
  logger: {
    level: window._env_?.LOGGER?.level || import.meta.env.VITE_LOGGER_LEVEL || 'warn',
  },
};

export default config;
