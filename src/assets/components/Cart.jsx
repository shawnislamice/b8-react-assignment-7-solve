import { totalCredit } from "../../App";

const Cart = ({ carts }) => {
  const credit = carts.reduce((p, c) => p + c.credit, 0);
    return (
    <div>
      <p className="font-bold text-[#2F80ED] text-[18px]">
        Credit Hour Remaining {totalCredit-credit} hr
      </p>
      <hr className="border-[#1C1B1B33]" />
      <h2 className="text-xl text-[#1C1B1B]">Course Name</h2>
      <div>
        <ol>
          {carts.map((cart, index) => (
            <li key={index}>{cart.name}</li>
          ))}
        </ol>
      </div>
      <hr className="border-[#1C1B1B33]" />
      <p>Total Credit Hour : {carts.reduce((p, c) => p + c.credit, 0)}</p>
      <hr className="border-[#1C1B1B33]" />
      <p>Total Price : {carts.reduce((p, c) => p + c.price, 0)} USD</p>
    </div>
  );
};

export default Cart;
