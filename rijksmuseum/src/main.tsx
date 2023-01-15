import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

// Import routes
import Root from './routes/Root'
import Home from './routes/home/Home'
import Search from './routes/search/Search'

import './index.scss'
import { getCollection } from './common/utils'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter([
            {
                path: '/',
                element: <Root/>,
                children: [
                    {
                        path: '',
                        element: <Home/>,
                    },
                    {
                        path: "search",
                        element: <Search/>,
                        loader: async ({ request }) => {
                            let url = new URL(request.url)
                            let query = url.searchParams.get("query") as string
                            return getCollection(query, "nl", 1, 10);
                        },
                    },
                    {
                        path: "artPiece/:objectId",
                        element: <h1>Coming soon.</h1>
                    }
                ]
            }
        ])}/>
    </React.StrictMode>,
)
