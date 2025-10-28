import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Homepage from './Pages/Homepage.jsx'
import About from './Pages/About.jsx'
import Experience from './Pages/Experience.jsx'
import Resume from './Pages/Resume.jsx'
import Github from './Pages/Github.jsx'
import { GetGithubData } from './Pages/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Homepage/>}/>
      <Route path='skills' element={<About/>}/>
      <Route path='works' element={<Experience/>}/>
      <Route path='projects' element={<Resume/>}/>
      <Route path='github' loader={GetGithubData} element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
