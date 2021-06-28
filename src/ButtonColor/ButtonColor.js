import React, { useState } from 'react';

export function replaceCamelWithSpaces(collorName) {
    return collorName.replace(/\B([A-Z])\B/g, ' $1');
}


export const ButtonColor = () => {
    const [index, setIndex] = useState(0);
    const [checkBox, setCheckBox] = useState(false)

    return (<div style={{
        marginTop: '100px', display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"
    }}>
        <button style={{ backgroundColor: checkBox ? 'silver' : index ? 'MidnightBlue' : 'MediumVioletRed', color: 'pink' }
        } onClick={() => setIndex(checkBox ? index : index ? 0 : 1)}>{`Change to ${replaceCamelWithSpaces(index ? 'MediumVioletRed' : 'MidnightBlue')}`}</button>
        <br />
        <hr style={{ width: '400px' }} />
        <br />
        <div style={{ display: "block" }}>
            <input type="checkbox" id="disable-checkbox" onChange={(e) => setCheckBox(e.target.checked)} checked={checkBox} />
            <label htmlFor="disable-checkbox">disable button</label>
        </div>
        <hr style={{ width: '400px' }} />
        <p>{`info ${checkBox ? 'checked' : 'disable'}`}</p>
    </div >)
}