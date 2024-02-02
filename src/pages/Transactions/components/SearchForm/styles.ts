import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    color: ${(props) => props.theme['gray-300']};
    background: ${(props) => props.theme['gray-900']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: transparent;
    border-radius: 6px;
    font-weight: bold;
    padding: 1rem;
    color: ${(props) => props.theme['green-300']};
    border: 1px solid ${(props) => props.theme['green-300']};

    &:hover {
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      transition:
        color 0.2s,
        background-color 0.2s,
        border-color 0.2s;
    }
  }
`
