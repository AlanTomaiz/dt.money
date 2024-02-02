import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { useTransactions } from '../../contexts/Transactions'
import { priceFormatter } from '../../utils/formater'
import { SummaryBox, SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
        return acc
      }

      acc.outcome += transaction.price
      acc.total -= transaction.price
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryBox>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income / 100)}</strong>
      </SummaryBox>

      <SummaryBox>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome / 100)}</strong>
      </SummaryBox>

      <SummaryBox variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total / 100)}</strong>
      </SummaryBox>
    </SummaryContainer>
  )
}
