import * as Yup from 'yup'

const SchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email('El correo debe de ser válido')
    .required('Correo electrónico requerido'),
  password: Yup.string()
    .required('Contraseña requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[A-Z]).*$/,
      'La contraseña debe contener al menos una mayuscula'
    ),
})

export default SchemaLogin
