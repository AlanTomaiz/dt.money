import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as z from 'zod'
import { TransactionsContext } from '../../../../contexts/Transactions'
import { FormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => context.fetchTransactions,
  )

  const { register, handleSubmit, formState } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input {...register('query')} placeholder="Busque por transações" />
      <button type="submit" disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </FormContainer>
  )
}
