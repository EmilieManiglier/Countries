import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .header {
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};

    .switch {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export default GlobalStyles;
