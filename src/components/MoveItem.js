import React, { useState } from 'react';

import './moveitem.css';

const itemData = [
{ id: 1, item: "item1" },
{ id: 2, item: "item2" },
{ id: 3, item: "item3" },
{ id: 4, item: "item4" },
{ id: 5, item: "item5" },
{ id: 6, item: "item6" }
];

function MoveItem() {
    const [leftItem, setLeftItem] = useState(itemData);
    const [rightItem, setRightItem] = useState([]);

    const leftToRight = (element) => {
        const newItem = leftItem.filter((el) => el.id !== element.id);
        setLeftItem(newItem);
        const newRightItem = [...rightItem, element];
        setRightItem(newRightItem);
    };

    const rightToLeft = (element) => {
        const newItem = rightItem.filter((el) => el.id !== element.id);
        setRightItem(newItem);
        const newLeftItem = [...leftItem, element];
        setLeftItem(newLeftItem);
    };

  return (
    <div className='full-div'>
        <h1>Move Item</h1>

        <h3>Item List</h3>
        <div className="display" >
            <div className="left">
                <h2>left side</h2>
                {leftItem.map((e) => (
                <div key={e.id}>
                <p onClick={() => leftToRight(e)}> {e.item} </p>
                </div>
                ))}
            </div>
            <div className="right">
                <h2>right side</h2>
                {rightItem &&
                rightItem.map((e) => (
                <div key={e.id}>
                <p onClick={() => rightToLeft(e)}> {e.item} </p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MoveItem;

