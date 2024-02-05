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

type TransactionDTO = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContext {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: TransactionDTO) => Promise<void>
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
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createTransactions(data: TransactionDTO) {
    const { description, category, type, price } = data

    const response = await api.post('/transactions', {
      description,
      category,
      type,
      price,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions: loadTransactions,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
