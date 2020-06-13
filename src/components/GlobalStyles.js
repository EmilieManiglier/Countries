import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .header {
    background: ${({ theme }) => theme.header};
    box-shadow: 0px 5px 5px ${({ theme }) => theme.body};

    .switch {
      color: ${({ theme }) => theme.text};
    }
  }

  .search-select {
    .search-country-input {
      background: ${({ theme }) => theme.header};
      color: ${({ theme }) => theme.input};
      
      &::placeholder {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  .select-region {
    background: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
  }

  .card-container {
    background: ${({ theme }) => theme.header};
  }
`;

export default GlobalStyles;
