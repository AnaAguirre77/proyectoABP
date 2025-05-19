function ProductList(props) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {props.products.map((p) => (
        <li key={p.id} className="bg-white p-2 rounded shadow">
          {p.title} ${p.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
