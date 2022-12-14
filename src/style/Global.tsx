import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { KiwiTheme } from '@wdefifinancebsc/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends KiwiTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit',sans-serif;
  }

  .gMxwKD, .hJyVuu, .fDCRVA, .biqVeO{
    display:none !important;
  }

  body {
    background-color: transparent;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
