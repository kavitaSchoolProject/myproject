const shopingCart=[
    {
        id: 1,
        name: 'Product A',
        price: 10.99,
        quantity: 2
    },
    {
        id: 2,
        name: 'Product B',
        price: 15.99,
        quantity: 1
    },
    {
        id: 3,
        name: 'Product C',
        price: 20.99,
        quantity: 3
    },
    {
        id: 4,
        name: 'Product D',
        price: 5.99,
        quantity: 4
    }
]
const totalPay=shopingCart.filter((item)=>(item.price >10)
    && item.quantity > 0).reduce((acc,item)=>(acc+item.price),0)
    console.log(totalPay);
    


