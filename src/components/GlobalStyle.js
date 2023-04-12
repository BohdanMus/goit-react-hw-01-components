import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
}
div {
  display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
}
`;
