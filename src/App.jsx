import { BrowserRouter, Routes, Route } from "react-router-dom"

// import pages
import Home from "./pages/Home"
import SinglePost from "./pages/SinglePost"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/home" element={<AdminDashboard />} />
        <Route path="/admin/create-post" element={<CreatePost />} />
        <Route path="/admin/edit-post/:id" element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  )
}