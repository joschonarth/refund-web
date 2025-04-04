import { useActionState } from 'react'
import { z, ZodError } from 'zod'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

const signInSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z.string().trim().min(1, { message: 'Informe a senha.' }),
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null)

  async function signIn(_: unknown, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      })

      console.log(data)
    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      return { message: 'Não foi possivel fazer login!' }
    }
  }

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        name="password"
        legend="Senha"
        type="password"
        placeholder="Sua senha"
      />

      <p className="text-sm text-red-500 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  )
}
