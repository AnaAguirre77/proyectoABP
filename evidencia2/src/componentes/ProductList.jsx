function ProductList(props) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      {props.products.map((p) => (
        <li
          key={p.id}
          className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition duration-200"
        >
          <h3 className="font-bold text-lg mb-2">{p.title}</h3>
          <p className="text-pink-600 font-semibold">${p.price}</p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
