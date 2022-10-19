import React from 'react'

const MenuList = () => {
  return (
    <div className="h-[100vh] p-4">
        <div>
           <ul className="list-disc leading-10 w-full">
           <li className="border-b mt-6">Starter</li>
            <li className="border-b mt-6">Noodles</li>
            <li className="border-b mt-6">Rice</li>
            <li className="border-b mt-6">Indian Curry</li>
            <li className="border-b mt-6">Chinese</li>
            <li className="border-b mt-6">Beverages</li>
           </ul>
        </div>
    </div>
  )
}

export default MenuList