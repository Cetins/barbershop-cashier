import React from "react";

const SelectBarber = ({barbers}) => {
    const barberOptions = barbers.map((barber) => {
        return <option key={barber.id} value={barber}>{barber.name}</option>
    })
    return (
        <>
            <label>Select Barber</label>
            <select>
                {barberOptions}
            </select>
        </>
    )
}

export default SelectBarber;