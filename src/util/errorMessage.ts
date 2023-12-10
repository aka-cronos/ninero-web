type Status = 401

const errorMessage = (status: Status) => {
  switch (status) {
    case 401:
      return 'El correo electrónico o la contraseña son incorrectos'
    default:
      return 'Error desconocido'
  }
}

export default errorMessage
