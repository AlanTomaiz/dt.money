import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: #00000075;
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;

    input {
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      background: ${(props) => props.theme['green-500']};
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      &:hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  background: transparent;
  line-height: 0;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0%.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme.white};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
