import type { CSSProp } from 'styled-components';
import type { AppTheme } from 'theme/getAppTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

declare module 'react' {
  interface DOMAttributes {
    css?: CSSProp<AppTheme>;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      css?: CSSProp<AppTheme>;
    }
  }
}
