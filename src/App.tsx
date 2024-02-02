import { ThemeProvider } from 'styled-components'
import { TransactionsProvide } from './contexts/Transactions'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvide>
        <Transactions />
      </TransactionsProvide>
    </ThemeProvider>
  )
}
