import postLogin from '@/requests/postLogin'
import { useMutation, useQueryClient } from 'react-query'

const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation((loginValues) => postLogin(loginValues), {
    onError: (err) => console.error(err?.response?.data),
    onSettled: () => {
      queryClient.invalidateQueries('me')
    },
  })
}

export default useLogin
