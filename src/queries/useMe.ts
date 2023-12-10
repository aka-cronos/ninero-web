import getMe from '@/requests/getMe'
import { useQuery } from '@tanstack/react-query'

const useMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: () => getMe(),
    staleTime: Infinity,
  })
}

export default useMe
