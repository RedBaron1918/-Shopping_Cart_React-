import { Col,Row } from 'react-bootstrap'
import StoreItem from '../components/StoreItemcomp'
import products from '../data/items.js'
function Store() {
  
  return (
   <>
   <h1>Store</h1>
   <Row md={2} xs={1} xl={3} className="g-3">
   {products.map((atr)=>{
    return(
      <Col key={atr._id}>
      <StoreItem product={atr} />
      </Col>
    )
   })}
     
   </Row>
   </>
  )
}

export default Store