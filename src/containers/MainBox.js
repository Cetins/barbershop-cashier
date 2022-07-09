import React from "react";
import shop from "../data/ShopData";
import SelectBarber from "../components/SelectBarber";
import SelectService from "../components/SelectService";
import AddServiceButton from "../components/AddServiceButton";

const MainBox = () => {
    return (
        <>
            <h1>{shop.name}</h1>
            <form>
                <SelectBarber/>
                <SelectService/>
                <AddServiceButton/>
            </form>
        </>
    )
}

export default MainBox;