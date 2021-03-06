import {
  ThemePalette,
  NeatUITheme,
  Expressiveness,
} from '@/themes/presets/index';
import { defaultLayout, font } from '@/themes/presets/shared';

export const palette: ThemePalette = {
  grayscale_1: '#111',
  grayscale_2: '#333',
  grayscale_3: '#444',
  grayscale_4: '#666',
  grayscale_5: '#888',
  grayscale_6: '#999',
  grayscale_7: '#cacaca',
  grayscale_8: '#eaeaea',
  grayscale_9: '#fafafa',
  background: '#000',
  foreground: '#fff',
  error: '#e00',
  success: '#0070f3',
  warning: '#f5a623',
  border: '#fafafa',
};
export const expressiveness: Expressiveness = {
  transition: '.25s',
};
export const layout = defaultLayout;
export const themes: NeatUITheme = {
  type: 'dark',
  palette,
  font,
  layout,
  expressiveness,
};

export default themes;
