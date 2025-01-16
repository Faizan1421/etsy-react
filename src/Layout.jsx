import Navbar from "./components/Navbar"


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <div className=" ~mx-2/20 flex flex-col justify-around gap-10">
        {children}
        </div>
    </div>
  )
}

export default Layout