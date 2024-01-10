import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="p-6">
      <ul className="flex space-x-4">
        <li className="text-left">
          <Link href="/">Home</Link>
        </li>
        <li className="text-left">
          <Link href="/xgb">xgb</Link>
        </li>
        <li className="text-left">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}