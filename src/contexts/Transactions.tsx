import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: string
  description: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createdAt: string
}

interface TransactionsContext {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface ProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContext)

export function TransactionsProvide({ children }: ProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(query?: string) {
    // const url = new URL('http://localhost:3333/transactions/')

    // if (query) url.searchParams.append('q', query)

    // const response = await fetch(url)
    // const data = await response.json()

    const response = await api.get('/transactions', {
      params: { q: query },
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions: loadTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
