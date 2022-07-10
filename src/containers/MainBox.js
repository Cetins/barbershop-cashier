import React, { useEffect, useState } from "react";
import shop from "../data/ShopData";
import Turnover from "../components/Turnover";
import SelectBarber from "../components/SelectBarber";
import SelectService from "../components/SelectService";
import StaffButtons from "../components/StaffButtons";
import StaffSales from "../components/StaffSales";

const MainBox = () => {
    const [barbers, setBarbers] = useState(shop.staff);
    const [services, setServices] = useState(shop.services);
    const [sales, setSales] = useState(shop.sales);
    const [barberSelected, setBarberSelected] = useState({});
    const [serviceSelected, setServiceSelected] =useState({});
    const [filteredSales, setFilteredSales] = useState([]);

    useEffect(() => {}, [filteredSales])
    
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

    function filterByStaff(staff) {
        const salesForStaff = sales.filter((sale) => sale.staff === staff.name);
        setFilteredSales(salesForStaff);

    }

    return (
        <div className="main-box">
            <section className="column">
                <h1 className="main-title">&#128136; {shop.name}</h1>
                <article className="blue-container">
                    <Turnover sales={sales}/>
                </article>
                <form className="blue-container">
                    <SelectBarber barbers={barbers} onBarberSelected={onBarberSelected}/>
                    <SelectService services={services} onServiceSelected={onServiceSelected}/>
                    <button onClick={handleClick}>Add</button>
                </form>
                <article className="staff-button-article">
                    <StaffButtons className="staff-button" barbers={barbers} filterByStaff={filterByStaff}/>
                </article>
            </section>
            <section className="column">
                {filteredSales.length > 0 ? <StaffSales filteredSales={filteredSales}/> : null}
            </section>
        </div>
    )
}

export default MainBox;