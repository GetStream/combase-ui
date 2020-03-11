import { createGlobalStyle } from 'styled-components';

/* eslint no-unused-expressions: 0 */
export default createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  html {
    height: 100%;
    overflow: hidden;
  }
  
  body {
    display: flex;
    background-color: ${({ theme }) => theme.color.surface};
    margin: 0;
    height: 100vh;
    overflow: hidden;
    font-family: "Cerebri Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    user-select: none;
  }

  #root {
    position: relative;
    display: flex;
    align-items: stretch;
    overflow: hidden;
    flex: 1;
    height: 100%;
  }

  div, form {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
  }

  button {
    font-family: inherit;
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    background: none;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
  
  h1, h2, h3,
  h4, h5, h6 {
    margin: 0;
  }
  
  p,
  label {
    margin: 0;
  }
  
  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    border: 0;
    background: none;
    font-size: 16px;
    font-family: "Cerebri Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-input-placeholder {
        color: ${({ theme }) => theme.color.gray};
        font-weight: 500;
    }

    &:focus {
      outline-offset: 0;
    }
  }
`;
