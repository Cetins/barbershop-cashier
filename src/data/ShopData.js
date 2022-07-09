const shop = {
    name: "Brush Barbers",
    email: "brushbarbers@gmail.com",
    url: "https://www.brushbarbers.com",
    staff: [
        { id: 123, name: "Husso" },
        { id: 456, name: "Tracey" }
    ],
    services: [
        { id:1, title: "Cut & Style", duration: 30, price: 25 },
        { id:2, title: "Beard Trim", duration: 20, price: 15 },
        { id:3, title: "VIP Pampering Package", duration: 90, price: 65 },
        { id:4, title: "Hot Towel Shave", duration: 30, price: 25 },
        { id:5, title: "Kids HairCut", duration: 20, price: 15 }
    ],
    sales: [
        { staff: "Husso", service: "Cut & Style", duration: 30, price: 25 },
        { staff: "Husso", service: "Beard Trim", duration: 20, price: 15 },
        { staff: "Tracey", service: "Cut & Style", duration: 30, price: 25 },
        { staff: "Husso", service: "Beard Trim", duration: 20, price: 15 },
        { staff: "Tracey", service: "Cut & Style", duration: 30, price: 25 },
        { staff: "Tracey", service: "Cut & Style", duration: 30, price: 25 },
        { staff: "Husso", service: "Cut & Style", duration: 30, price: 25 },
        { staff: "Husso", service: "VIP Pampering Package", duration: 90, price: 65 }
    ]
}

export default shop;