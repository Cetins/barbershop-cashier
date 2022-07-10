import React from "react";

const SelectBarber = ({barbers, onBarberSelected}) => {

    const handleChange = (event) => {
        const chosenBarber = barbers[event.target.value];
        onBarberSelected(chosenBarber);
    }

    const barberOptions = barbers.map((barber, index) => {
        return <option key={barber.id} value={index}>{barber.name}</option>
    })

    return (
        <>
            <label>Staff</label>
            <select defaultValue="" onChange={handleChange}>
                {barberOptions}
            </select>
        </>
    )
}

export default SelectBarber;