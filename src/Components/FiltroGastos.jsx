import React from 'react';
import './FiltroGastos.css'

const FiltroGastos = ({ datos, busqueda, setBusqueda }) => {

  const filtrarResultados = (categoria) => {
    if (categoria === "Todo") {
      setBusqueda([]);
      return;
    }
    const resultados = datos.filter(gasto => {
      return gasto.categoriaGasto.includes(categoria);
    });
    debugger;
    console.log(resultados);

    setBusqueda(resultados)
  }

  return (
    <div className='contendor'>
      <div className='filtroContainer sombra'>
        <label htmlFor='filtro'>Filtrar gastos</label>
        <select id="filtro" name='filtro' onChange={e => filtrarResultados(e.target.value)}>
          <option value={"Todo"}>--Todas las categorias--</option>
          <option value={"Ahorro"}>Ahorro</option>
          <option value={"Comida"}>Comida</option>
          <option value={"Casa"}>Casa</option>
          <option value={"Gastos"}>Gastos</option>
          <option value={"Ocio"}>Ocio</option>
          <option value={"Salud"}>Salud</option>
          <option value={"Subscripciones"}>Subscripciones</option>
        </select>
      </div>
    </div>

  )
}

export default FiltroGastos