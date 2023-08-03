import { ComponentType, lazy } from 'react'
import { MAIN_ROUTE } from './variebles'
const MainPage = lazy(() => import('../pages/Main.page'))

export interface RoutesType {
  path: string
  component: ComponentType
}

export const publickRoutes: RoutesType[] = [
  {
    path: MAIN_ROUTE,
    component: MainPage,
  },
]
