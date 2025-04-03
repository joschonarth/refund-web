export function Loading() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-10 h-10 border-4 border-t-transparent border-gray-200 rounded-full animate-spin"></div>
      <span className="text-gray-200 font-semibold text-sm">Carregando...</span>
    </div>
  )
}
