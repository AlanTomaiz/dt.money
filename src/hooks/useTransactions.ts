import { useContext } from 'react'
import { TransactionsContext } from '../contexts/Transactions'

export function useTransactions() {
  const context = useContext(TransactionsContext)

  if (!context) {
    throw new Error('Transactions context not found!')
  }

  return context
}
