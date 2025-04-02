import { Link } from 'react-router-dom'
import { AlertTriangle } from 'lucide-react'

export function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-400 text-gray-100">
      <AlertTriangle size={64} className="text-red-400 mb-6" />

      <h1 className="font-bold text-3xl mb-4">404 - Página não encontrada</h1>
      <p className="text-gray-100 mb-8">
        Opa! Parece que você se perdeu. Volte para a página inicial.
      </p>

      <Link
        to="/"
        className="bg-green-100 text-white px-6 py-2 rounded-lg font-semibold transition ease-linear
                   hover:bg-green-200"
      >
        Voltar para o início
      </Link>
    </div>
  )
}
