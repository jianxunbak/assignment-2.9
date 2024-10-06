import styles from "./Table.module.css";

function Table({ list }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
