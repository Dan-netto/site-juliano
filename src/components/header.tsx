import Link from "next/link"

export function Header() {
  return (
    <header className="w-full py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">
        Novais & Souza
      </h1>

      <nav className="space-x-6">
        <Link href="#servicos" className="text-gray-600 hover:text-indigo-600">
          Serviços
        </Link>
        <Link href="#contato" className="text-gray-600 hover:text-indigo-600">
          Contato
        </Link>
      </nav>
    </header>
  )
}
