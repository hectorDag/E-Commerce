import { useCartContext } from '@/hooks/useCart'

const Cart = () => {
  const { cart } = useCartContext()

  return (
    <div>
      {cart & cart.map((product) => (
        <p key={product.id}>{product.product_name}</p>
      ))}
    </div>
  )
}
export default Cart
