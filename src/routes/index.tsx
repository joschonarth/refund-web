import { BrowserRouter } from 'react-router'

import { Loading } from '@/components/Loading'

import { AuthRoutes } from './AuthRoutes'
import { ManagerRoutes } from './ManagerRoutes'
import { EmployeeRoutes } from './EmployeeRoutes'

const isLoading = false

export function Routes() {
  if (isLoading) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  )
}
