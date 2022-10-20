import React, { useState } from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;

const MenuList = () => {
    const [showStarter, setShowStarter] = useState(false)
    const [showNoodles, setShowNoodles] = useState(false)
    const [showRice, setShowRice] = useState(false)
    const [showCurry, setShowCurry] = useState(false)
    const [showChinese, setShowChinese] = useState(false)
    const [showBev, setShowBevv] = useState(false)

    const onChange = (key) => {
        console.log(key);
      };

    return (
        <div className="h-[100vh] p-4">
                <ul className="list-disc leading-10 w-full">
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowStarter(!showStarter)}>Starter</li>
                    {showStarter === true && (
                       <>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Tandoor Chicken</span>
                            <span>₹ 260/480</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Pork Rib</span>
                            <span>₹ 330/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Pork Belly</span>
                            <span>₹ 380/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Shreded Pork with black bean sauce</span>
                            <span>₹ 200/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Shreded chicken with black bean sauce</span>
                            <span>₹ 180/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Roasted Bean with pork</span>
                            <span>₹ 200/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-3">
                            <span className="col-span-2">Roasted Bean with chicken</span>
                            <span>₹ 180/-</span>
                        </li>
                       </>
                    )}
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowNoodles(!showNoodles)}>Noodles</li>
                    {showNoodles === true && (
                       <>
                        <li className="px-2 grid grid-cols-2">
                            <span>Veg Noodles</span>
                            <span>₹ 140/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chicken Noodles</span>
                            <span>₹ 180/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Pork Noodles</span>
                            <span>₹ 200/-</span>
                        </li>
                       </>
                    )}
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowRice(!showRice)}>Rice</li>
                    {showRice === true && (
                       <>
                        <li className="px-2 grid grid-cols-2">
                            <span>Veg</span>
                            <span>₹ 140/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chicken</span>
                            <span>₹ 180/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Pork</span>
                            <span>₹ 200/-</span>
                        </li>
                       </>
                    )}
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowCurry(!showCurry)}>Indian Curry</li>
                    {showCurry === true && (
                       <>
                        <li className="px-2 grid grid-cols-2">
                            <span>Aloo Matar Panner</span>
                            <span>₹ 160/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chicken Kosha</span>
                            <span>₹ 180/- (5 pieces)</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Pork Kosha</span>
                            <span>₹ 200/- (5 pieces)</span>
                        </li>
                       </>
                    )}
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowChinese(!showChinese)}>Chinese</li>
                    {showChinese === true && (
                       <>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chili Panner</span>
                            <span>₹ 180/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chili Chicken</span>
                            <span>₹ 200/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chili Pork</span>
                            <span>₹ 220/-</span>
                        </li>
                       </>
                    )}
                    <li className="border-b mt-6 cursor-pointer" onClick={() => setShowBevv(!showBev)}>Beverages</li>
                    {showBev === true && (
                       <>
                        <li className="px-2 grid grid-cols-2">
                            <span>Veg Noodles</span>
                            <span>₹ 140/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Chicken Noodles</span>
                            <span>₹ 180/-</span>
                        </li>
                        <li className="px-2 grid grid-cols-2">
                            <span>Pork Noodles</span>
                            <span>₹ 200/-</span>
                        </li>
                       </>
                    )}
                </ul>
                {/* <Collapse accordion className="w-full">
                    <Panel header="Starter" key="1">
                        <p>hello</p>
                    </Panel>
                    <Panel header="Noodles" key="2">
                        <ul>
                            <li>here</li>
                        </ul>
                    </Panel>
                    <Panel header="Rice" key="3">
                        <ul>
                            <li>here</li>
                        </ul>
                    </Panel>
                    <Panel header="Indian Curry" key="4">
                        <ul>
                            <li>here</li>
                        </ul>
                    </Panel>
                    <Panel header="Chinese" key="5">
                        <ul>
                            <li>here</li>
                        </ul>
                    </Panel>
                    <Panel header="Beverages" key="6">
                        <ul>
                            <li>here</li>
                        </ul>
                    </Panel>
                </Collapse> */}
        </div>
    )
}

export default MenuList