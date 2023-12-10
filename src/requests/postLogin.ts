import axios from 'axios'

type Values = {
  email: string
  password: string
}

const postLogin = async (loginValues: Values) => {
  const { data } = await axios.post(`/payload/users/login`, loginValues)
  return data
}

export default postLogin
