import axios from 'axios'

const postLogout = async () => {
  const { data } = await axios.post(`/payload/users/logout`)
  return data
}

export default postLogout
