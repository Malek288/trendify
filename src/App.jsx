import { useState, useEffect } from "react";
import * as Spinners from "react-spinners";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="logo">
                        <h3>Trendify</h3>
                        <button className="sign-in">Get Started</button>
                    </div>
                </div>
            </nav>
            <main>
                {loading ? <p>Loading...</p> : <h1>Batee5</h1>}
                  <Spinners.BarLoader
                      color="#f43f5e" 
                      height={5}
                      width={145}
                      speedMultiplier={0.25}
                />
            </main>
        </>
    );
}


export default App;
