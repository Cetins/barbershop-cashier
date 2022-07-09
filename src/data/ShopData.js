const shop = {
    name: "Brush Barbers",
    email: "brushbarbers@gmail.com",
    url: "https://www.brushbarbers.com",
    staff: [
        {
            id: 123,
            name: "Husso",
            sales: [
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Beard Trim", duration: 20, price: 15 },
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "VIP Pampering Package", duration: 90, price: 65 },
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Hot Towel Shave", duration: 30, price: 25 }
            ]
        },
        {
            id: 456,
            name: "Tracey",
            sales: [
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Beard Trim", duration: 20, price: 15 },
                { title: "Beard Trim", duration: 20, price: 15 },
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Cut & Style", duration: 30, price: 25 },
                { title: "Hot Towel Shave", duration: 30, price: 25 }
            ]
        }
    ],
    services: [
        { id:1, title: "Cut & Style", duration: 30, price: 25 },
        { id:2, title: "Beard Trim", duration: 20, price: 15 },
        { id:3, title: "VIP Pampering Package", duration: 90, price: 65 },
        { id:4, title: "Hot Towel Shave", duration: 30, price: 25 },
        { id:5, title: "Kids HairCut", duration: 20, price: 15 }
    ]
}

export default shop;