import React from "react";

const Turnover = ({sales}) => {

    const grandTotal = sales.reduce((total, sale) => total + sale.price, 0)

    return <p>Grand Turnover: £ {grandTotal}</p>
}

export default Turnover;