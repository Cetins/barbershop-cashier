import React from "react";

const SelectService = ({services, onServiceSelected}) => {

    const handleChange = (event) => {
        const chosenService = services[event.target.value];
        onServiceSelected(chosenService);
    }
    const serviceOptions = services.map((service, index) => {
        return <option name="sales" key={service.id} value={index}>{service.title}</option>
    })

    return (
        <>
            <label>Select Service</label>
            <select defaultValue="" onChange={handleChange}>
                {serviceOptions}
            </select>
        </>
    )
}

export default SelectService;