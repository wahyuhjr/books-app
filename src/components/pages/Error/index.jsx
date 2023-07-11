import React from 'react'
import { useRouteError } from 'react-router-dom'


const ErrorPage = () => {
    const error = useRouteError();
    return (
    <div className="flex justify-center min-h-screen items-center flex-col">
        <h1 className="font-bold text-5xl mb-2">Oopss!!!</h1>
        <p className="text-2xl">Sorry, Unknown request</p>
        <p>
            {error.statusText || error.message}
        </p>
    </div>
  )
}

export default ErrorPage;