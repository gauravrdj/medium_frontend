import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import {Blog} from "./pages/Blog"
import { Blogs } from "./pages/Blogs"
import { Publish } from "./pages/Publish"
import { LandingPage } from "./pages/Landing"
import { MyBlogs } from "./pages/PersonalBlogs"


function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/blog/:id" element={<Blog/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/publish" element={<Publish/>}/>
      <Route path="/myBlogs" element={<MyBlogs></MyBlogs>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
