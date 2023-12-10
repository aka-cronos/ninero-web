import postLogin from '@/requests/postLogin'
import { useMutation, useQueryClient } from '@tanstack/react-query'

type Values = {
  email: string
  password: string
}

const useLogin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (loginValues: Values) => postLogin(loginValues),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })
}

export default useLogin
