'use client'

import Link from 'next/link'
import useMe from '@/queries/useMe'

export default function Nav() {
  const { data: user } = useMe()

  return (
    <nav className="flex gap-8 p-4">
      <Link href="/">Inicio</Link>
      {!user && <Link href="/login">Login</Link>}
      {user && <p>Hola {user.name}</p>}
    </nav>
  )
}
