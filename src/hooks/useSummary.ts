import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/Transactions'

export function useSummary() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

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

  return summary
}
