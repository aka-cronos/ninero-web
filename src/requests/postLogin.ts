import axios from 'axios'

const postLogin = async (loginValues) => {
  const { data } = await axios.post(`/payload/users/login`, loginValues)
  return data
}

export default postLogin
