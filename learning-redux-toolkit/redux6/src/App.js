import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import PostsLists from './features/posts/PostsLists'
import AddPostForm from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsLists />
              </React.Fragment>
            )}
          />
          <Navigate to="/" />
        </Routes>
      </div>
    </Router>
  )
}

export default App