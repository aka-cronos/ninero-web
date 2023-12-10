'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useLogin from '@/queries/useLogin'
import SchemaLogin from './schema'
import errorMessage from '@/util/errorMessage'

type Values = {
  email: string
  password: string
}

export default function Login() {
  const { mutate, isPending, error } = useLogin()
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(SchemaLogin),
  })

  const onSubmit = (values: Values) => {
    mutate(values, {
      onSuccess: () => {
        push('/')
      },
    })
  }

  return (
    <main className="flex justify-center pt-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 max-w-xl flex-col gap-4"
      >
        <h1 className="mb-8 text-center">Login Page</h1>

        <div className="flex flex-col">
          <label htmlFor="email">Correo</label>
          <input
            id="email"
            className="h-12 rounded border border-gray-400 px-6"
            placeholder="correo@email.com"
            {...register('email')}
          />

          {errors.email && (
            <span className="text-red-800">{errors.email?.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            className="h-12 rounded border border-gray-400 px-6"
            placeholder="Tu contraseña"
            {...register('password')}
          />

          {errors.password && (
            <span className="text-red-800">{errors.password?.message}</span>
          )}
        </div>

        {error && (
          <div className="text-red-800">
            {errorMessage(error.request.status)}
          </div>
        )}

        <button
          className="mt-6 h-12 rounded border border-gray-400 px-6"
          type="submit"
          disabled={isPending}
        >
          {isPending ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </main>
  )
}
