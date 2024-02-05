import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { useTransactions } from '../../../../hooks/useTransactions'
import { FormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransactions()

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
