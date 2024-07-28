import { Outlet } from "react-router-dom"
import Header from "../Header"

const RootLayout = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-20">
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
