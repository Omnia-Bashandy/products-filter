
import React, {  useState, useEffect } from 'react';
import Product from './Product';

function Products() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products , setProducts] = useState([]);
    const [categories , setCategories] = useState([]);
    const apiUrl = 'https://fakestoreapi.com/Products';

    const getProducts = () => {
        fetch(apiUrl)
        .then(res=>res.json())
        .then(json=>{
            setIsLoaded(true);
            setProducts(json);
        },
            (error) => {
                setIsLoaded(true);
                setError(error);
        })
    
    }

    const getCategories = () => {
        fetch(`${apiUrl}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
        };
    
    const getProductInCategory = (catName) => {
        fetch(`${apiUrl}/category/${catName}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
        };
    useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    
    
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='title'>Filter by Category</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={()=>{
                        getProducts()
                    }}>ALL</button>
                    {categories.map((cat) => {
                        return(
                        <button onClick={()=>{
                            getProductInCategory(cat);
                        }}>{cat}</button>
                        )
                    })}
                </div>
                <div className="col">
                <ul class="cards">
                    {products.map((product) => {
                        return(
                            <li>
                            <Product item={product} />
                            </li>
                            // <h1>{product.title}</h1>
                        )
                    }) }
                </ul>
                </div>
            </div>
        </div>
        
        </>
    );
    }

    }
export default Products;