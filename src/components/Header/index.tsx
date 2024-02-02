import * as Dialog from '@radix-ui/react-dialog'
import logoSvg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderButton, HeaderContainer, HeaderContent } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <HeaderButton>Nova transação</HeaderButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
