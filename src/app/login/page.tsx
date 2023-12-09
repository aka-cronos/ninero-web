'use client'
import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik'
import SchemaLogin from './schema'

type Values = {
  email: string
  password: string
}

export default function Login() {
  return (
    <main className="flex flex-col items-center	p-24">
      <h1 className="mb-8">Login Page</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SchemaLogin}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        {({ errors, touched }) => (
          <Form className="min-[300px]: flex flex-col gap-4">
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

            <button
              className="mt-6 h-12 rounded border border-gray-400 px-6"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </main>
  )
}
