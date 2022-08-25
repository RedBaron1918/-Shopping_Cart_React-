import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "./CartItem";
import "./Details.css";
import { Button, Card } from "react-bootstrap"
function Details() {
    const { cartDetails,addToCart } = useContext(CartContext);
    console.log(cartDetails);
    
  return (
    <div className="flexing__Details">
         {cartDetails.map(item =>{
                return(
                    <>
                    <div>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="text__Details">
                        <h1>{item.name}</h1>
                        <p>{`$${item.price}`}</p>
                        <p>{item.description}</p>
                        <Button className="w-70" onClick={() => addToCart(item)}>
                    Add to cart
                </Button>
                    </div>

                    </>
                )
         })}



                                
    </div>
  )
}

export default Details