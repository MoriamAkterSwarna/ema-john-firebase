import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async () =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database , we have to use async await

    const storedCart = getShoppingCart();
    const savedCart = []
    // console.log(storedCart)

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity= quantity;
                savedCart.push(addedProduct);
            }
        
    }

    // console.log(products);

    // if we need to send or return 2 things

    // return [products,savedCart] // option 1 - in an array

    // return {products, savedCart}  // option 2- in an object

    return savedCart;
}

export default cartProductsLoader;