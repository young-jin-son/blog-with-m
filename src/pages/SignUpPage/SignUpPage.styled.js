import styled from 'styled-components';

export const SignUpPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  input {
    padding: 6px 10px;
    font-size: 1rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 3px;
  }
`