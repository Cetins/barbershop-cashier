import React from "react";

const StaffSales = ({filteredSales}) => {
    const list = filteredSales.map((sale, index) => {
        return (
            <tr key={index}>
                <td>{sale.service}</td>
                <td>{sale.duration} mins</td>
                <td>£ {sale.price}</td>
            </tr>
        )
    })
    const sumDuration = filteredSales.reduce((total, sale) => total + sale.duration, 0);
    const sumPrice = filteredSales.reduce((total, sale) => total + sale.price, 0);

    return (
        <article>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Duration</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
                <tfoot>
                    <tr>
                        <th>{filteredSales.length} services</th>
                        <th>{sumDuration} mins</th>
                        <th>£ {sumPrice}</th>
                    </tr>
                </tfoot>
            </table>
        </article>
    )
}

export default StaffSales;