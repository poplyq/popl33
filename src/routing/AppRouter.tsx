import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publickRoutes } from './routes'

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        {publickRoutes.map((route) => (
          <Route path={route.path} key={route.path} element={<route.component />} />
        ))}
      </Routes>
    </div>
  )
}
