'use client'

import { useRouter } from 'next/navigation'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import useLogin from '@/queries/useLogin'
import useMe from '@/queries/useMe'
import SchemaLogin from './schema'
import errorMessage from '@/util/errorMessage'

type Values = {
  email: string
  password: string
}

export default function Login() {
  const { push } = useRouter()
  const { mutate, isPending, error } = useLogin()
  const { data: user } = useMe()

  const onSubmit = (values: Values) => {
    mutate(values, {
      onSuccess: () => {
        push('/')
      },
    })
  }

  if (user) {
    push('/')
  }

  return (
    <main className="flex justify-center pt-14">
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SchemaLogin}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="flex w-1/2 max-w-xl flex-col gap-4 ">
            <h1 className="mb-8 text-center">Login Page</h1>

            <div className="flex flex-col">
              <label htmlFor="email">Correo</label>
              <Field
                id="email"
                name="email"
                className="h-12 rounded border border-gray-400 px-6"
                placeholder="correo@email.com"
              />

              <ErrorMessage name="email">
                {(msg) => <div className="text-red-800">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Contraseña</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="h-12 rounded border border-gray-400 px-6"
                placeholder="Tu contraseña"
              />

              <ErrorMessage name="password">
                {(msg) => <div className="text-red-800">{msg}</div>}
              </ErrorMessage>
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
          </Form>
        )}
      </Formik>
    </main>
  )
}
