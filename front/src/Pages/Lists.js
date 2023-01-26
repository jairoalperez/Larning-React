import React, { useState } from 'react'

function Lists() {

    const allSpeakers = ['Scott Hanselman', 'John Papa', 'Scott Guthrie', 'Dan Wahlin',
        'Debora Kurata', 'Zoiner Tejada', 'Scott Allen', 'Elijah Manor',
        'Ward Bell', 'Todd Anglin', 'Saron Yitbare', 'Scott Hunter'];

    const [speakers, setSpeakers] = useState(allSpeakers)

    const onSortDescendClicked = () => {
        const sortedSpeakers = speakers.slice().sort();
        setSpeakers(sortedSpeakers)
    }

    const onSortAscendClicked = () => {
        const sortedSpeakers = speakers.slice().sort();
        const reversedSpeakers = sortedSpeakers.slice().reverse();
        setSpeakers(reversedSpeakers)
    }

    const onScottsClicked = () => {
        const onlyScotts = speakers.filter(name =>
            name.startsWith("Scott")
        );
        setSpeakers(onlyScotts);
    }

    const onResetClicked = () => {
        setSpeakers(allSpeakers);
    }

    const speakerListItems = speakers.map(speaker =>
        <li className='list-group-item' key={speaker}>{speaker}</li>
    )

    return (
        <div className='container'>
            <div className='container m-2 mt-5 border rounded text-center'>
                <button className='btn btn-primary m-3 p-2' onClick={onSortDescendClicked}>Sort Down List</button>
                <button className='btn btn-primary m-3 p-2' onClick={onSortAscendClicked}>Sort Up List</button>
                <button className='btn btn-primary m-3 p-2' onClick={onScottsClicked}>Scotts Only</button>
                <button className='btn btn-primary m-3 p-2' onClick={onResetClicked}>Reset List</button>
            </div>
            <div className='container m-2 mt-4 text-center'>
                <ul className='m-2 mt-4 list-group'>{speakerListItems}</ul>
            </div>
        </div>
    )
}

export default Lists