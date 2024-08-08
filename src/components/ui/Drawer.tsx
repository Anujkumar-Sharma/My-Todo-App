import { useState } from 'react'

const SidebarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-4`}
      >
        <h2 className="text-xl font-bold mb-4">Sidebar</h2>
        <ul>
          <li className="mb-2">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="mt-4 p-2 bg-red-500 hover:bg-red-600 rounded"
          onClick={toggleDrawer}
        >
          Close
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <button
          className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={toggleDrawer}
        >
          Open Sidebar
        </button>
        <h1 className="text-3xl font-bold mt-4">Main Content</h1>
        <p className="mt-2">
          This is the main content area. Click the button above to toggle the
          sidebar.
        </p>
      </div>
    </div>
  )
}

export default SidebarDrawer
