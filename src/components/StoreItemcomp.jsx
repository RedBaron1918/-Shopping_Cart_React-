import { Button, Card } from "react-bootstrap"
import formatCurrency from "../utilities/formatCurrency"
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { NavLink } from "react-router-dom";
function StoreItem({ product }) {
    const { addToCart,cartItems,viewDetails } = useContext(CartContext);
    
 
  return (
    <Card className="h-100">
        <Card.Img variant="top" src={product.imgUrl} height="200px" style={{objectFit:"cover"}} />
        <Card.Body className="d-flex flex-column"> 
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{product.name}</span>
                <span className="ms-2 text-muted">{formatCurrency(product.price)}</span>
                
            </Card.Title>
            <div className="mt-auto">
                <Button className="w-100" onClick={() => addToCart(product)}>
                    Add to cart
                </Button>
               
                <NavLink  to='/about'>
                <Button className="w-50 mt-2 " onClick={() => viewDetails(product) } >
                    view details
                </Button>
                </NavLink>
                
               
            </div>
        </Card.Body>
    </Card>
  )
}

export default StoreItem