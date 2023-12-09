import getMe from '@/requests/getMe'
import { useQuery } from 'react-query'

const useMe = () => {
  return useQuery(['me'], () => getMe(), {
    staleTime: Infinity,
    onError: (err) => console.error(err?.response?.data),
  })
}

export default useMe
