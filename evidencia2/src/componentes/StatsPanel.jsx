function StatsPanel(props) {
  return (
    <div className="p-4 text-black font-bold">
      <h2 className="text-xl text-pink-700">Estadísticas</h2>
      <p>
        Producto más caro : {props.maxTitulo}, ${props.max}
      </p>
      <p>
        Producto más barato : {props.minTitulo}, ${props.min}
      </p>
      <p>Precio total de todos los productos : ${props.precioTotal}</p>
    </div>
  );
}

export default StatsPanel;
