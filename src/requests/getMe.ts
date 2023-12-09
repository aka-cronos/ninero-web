import axios from 'axios'

const getMe = async () => {
  const { data } = await axios.get(`/payload/users/me`)
  return data.user
}

export default getMe
