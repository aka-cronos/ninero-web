import { useMutation, useQueryClient } from '@tanstack/react-query'
import postLogout from '@/requests/postLogout'

const useLogout = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => postLogout(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['me'] })
      location.reload()
    },
  })
}

export default useLogout
