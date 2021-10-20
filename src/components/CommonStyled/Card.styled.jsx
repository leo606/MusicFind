import styled from 'styled-components';

const CardStyled = styled.li`
  background-color: ${({ theme }) => theme.foreground};
  list-style: none;
  padding: .6em;
  margin: 1em auto;
  max-width: 96%;
  border-radius: .3em;
  transition: 150ms;

  &:hover {
    filter: opacity(93%);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.background};
  }

  h3 {
    color: ${({ theme }) => theme.accentGreen};
    font-size: 1.6em;
    margin-bottom: 0.4em;
  }
`;

export default CardStyled;
