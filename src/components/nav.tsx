'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import useMe from '@/queries/useMe'
import useLogout from '@/queries/useLogut'

export default function Nav() {
  const { push } = useRouter()
  const { mutateAsync } = useLogout()
  const { data: user } = useMe()

  const handleLogout = () => {
    mutateAsync()
      .then((res) => push('/'))
      .catch((err) => console.error(err?.response?.data))
  }

  return (
    <nav className="flex gap-8 p-4">
      <Link href="/">Inicio</Link>
      {user ? <p>Hola {user.name}</p> : <Link href="/login">Login</Link>}

      {user && <button onClick={handleLogout}>Cerrar sesión</button>}
    </nav>
  )
}
