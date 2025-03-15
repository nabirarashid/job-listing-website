import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'

const App = () => {
  const addJob = async (newJob) => {
    // Add the new job to the database
    const res = await fetch('/api/jobs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    })
    return;
  }

  // Delete a job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    })
    return;
  }
  
  
  // Not going to work without implementing the router provider
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        {/* this is the default child path */}
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={ deleteJob } />}/>
        {/* this is the catch-all route (wherever the page is not found)*/}
        <Route path="*" element={<NotFound />} />
      </Route>
      )
  )
  
  return <RouterProvider router={router}/>
};

export default App 