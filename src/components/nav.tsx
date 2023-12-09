import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex gap-8 p-4'>
      <Link href="/">Inicio</Link>
    </nav>
  )
}
