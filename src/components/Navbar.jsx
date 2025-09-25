import logo from "../images/sccLogo.webp"

function Navbar() {
  return (
    <>
    <div className="flex fixed right-3 top-3 justify-center">
      <button className="bg-[#034f4f] hover:bg-teal-600 text-white rounded-2xl shadow-lg p-2 md:p-2 cursor-pointer ">
        Book Demo
      </button>
    </div>
    {/* <span className="block w-[97vw] left-3 h-1 absolute top-13 bg-teal-400 mx-auto mt-2 rounded"></span> */}
    </>
  )
}

export default Navbar