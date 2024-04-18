import{Product,taxCalculation} from './06-functions-destructuring'
const shoppingCart : Product[] = [
    {
        description:'Nokia',
        price:100.0
    },
    {
        description:'Iphone 8',
        price:500.0,
    }
]
const [total,tax] = taxCalculation({
    products:shoppingCart,
    tax:0.15
})
console.log('total',total)
console.log('tax',tax) 
