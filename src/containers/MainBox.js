import React, { useState } from "react";
import shop from "../data/ShopData";
import SelectBarber from "../components/SelectBarber";
import SelectService from "../components/SelectService";

const MainBox = () => {
    const [barbers, setBarbers] = useState(shop.staff);
    const [services, setServices] = useState(shop.services);
    const [sales, setSales] = useState(shop.sales);
    const [sale, setSale] = useState({});
    const [barberSelected, setBarberSelected] = useState({});
    const [serviceSelected, setServiceSelected] =useState({});
    
    function onBarberSelected(barber) {
        setBarberSelected(barber);
    }

    function onServiceSelected(service) {
        setServiceSelected(service);
    }

    function handleClick(e) {
        e.preventDefault();
        addSale();
    }

    function addSale() {
        let newSale = {}
        newSale.staff = barberSelected.name;
        newSale.service = serviceSelected.title;
        newSale.duration = serviceSelected.duration;
        newSale.price = serviceSelected.price;
        const updatedSales = [...sales, newSale]
        setSales(updatedSales);
    }

    return (
        <>
            <h1>{shop.name}</h1>
            <SelectBarber barbers={barbers} onBarberSelected={onBarberSelected}/>
            <SelectService services={services} onServiceSelected={onServiceSelected}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default MainBox;