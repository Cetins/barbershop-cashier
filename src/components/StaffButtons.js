import React from "react";
import styled from "styled-components";

const Button = styled.button`

    padding: 1rem 2rem;
    margin: 0 1em;
`

const StaffButtons = ({barbers, filterByStaff}) => {
    function handleClick(evt) {
        evt.preventDefault();
        const staff = barbers[evt.target.value];
        filterByStaff(staff);
    }

    const buttons = barbers.map((barber, index) => {
        return <Button className="staff-button" key={barber.id} value={index} onClick={handleClick}>{barber.name}</Button>
    })

    return buttons;
}

export default StaffButtons;