import React from "react";

const SelectService = ({services}) => {
    const serviceOptions = services.map(service => {
        return <option key={service.id} value={service}>{service.title}</option>
    })

    return (
        <>
            <label>Select Service</label>
            <select>
                {serviceOptions}
            </select>
        </>
    )
}

export default SelectService;