const products = [
    {id: '1a',
    price:30000, 
    names:'loader', 
    stock:4, 
    description:'the best loader'}, 

    {id: '1b',
    price : 2000, 
    names : 'spaek phone', 
    stock : 4, 
    description : 'spaek phone'}, 

    {id: '1c',
    price: 200, 
    names: 'head phone', 
    stock:4, 
    description:'head phone'}
]

  const promise = new Promise((resolve, reject) => {
    setTimeout (()=> {
      resolve(products)
    }, 2000)
  })

export default promise  