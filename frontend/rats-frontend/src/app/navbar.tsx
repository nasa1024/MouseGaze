import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 border-b bg-gray-900">
      <ul className="flex space-x-4 border-gray-700">
        <li className="text-x1 text-white hover:text-blue-600 font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-x1 text-white hover:text-blue-600 font-semibold">
          <Link href="/xgb">xgb</Link>
        </li>
      </ul>
    </nav>
  )
}