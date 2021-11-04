import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
`;

export default StyledHeader;
