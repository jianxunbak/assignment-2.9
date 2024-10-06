import { useState } from "react";

const initialItemState = {
  name: "",
  quantity: "",
  price: "",
};

const AddForm = (handlerAddItem) => {
  const [item, setItem] = useState(initialItemState);
  const handlerItemChange = (e) => {
    setItem((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlerAddItem(item);
    setItem(initialItemState);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          onChange={handlerItemChange}
          value={item.name}
        ></input>
        <input
          name="quantity"
          placeholder="Quantity"
          onChange={handlerItemChange}
          value={item.quantity}
        ></input>

        <input
          name="price"
          placeholder="Price"
          onChange={handlerItemChange}
          value={item.price}
        ></input>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default AddForm;
