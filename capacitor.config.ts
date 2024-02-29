import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nzd.app',
  appName: 'NzD',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
