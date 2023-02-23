import React from 'react'
import Gasto from './Gasto'
import './ListaGastos.css'
import {  SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

const ListaGastos = ({ datos, eliminar, editarRegistro, editando, busqueda, setBusqueda }) => {

  let DatosAMostrar;

  if (busqueda.length !== 0) {
    DatosAMostrar = busqueda;
  } else {
    DatosAMostrar = datos;
  }


  return (
    <div>
      <div className='contenedorGastos'>

        <div className='Lista_Gastos'>
          <div className='contenedorTitulo'>
            <div className='TituloGastos'>{datos.length === 0 && <h2>No hay gastos aun</h2>}</div>
            <div className='TituloGastos'>{datos.length !== 0 && <h2>Gastos</h2>}</div>
          </div>


          {DatosAMostrar.map(gasto => (
            <div className='CartaGasto' key={gasto.id}>
              <SwipeableListItem
                swipeLeft={{
                  content: <div className='eliminarSwipe'>ELIMINAR</div>,
                  action: () => eliminar(gasto.id, gasto.cantidadGasto)
                }}
                swipeRight={{
                  content: <div className='editarSwipe'>EDITAR</div>,
                  action: () => editarRegistro(gasto.id)
                }}
                onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
              >
                <Gasto detalles={gasto} />
              </SwipeableListItem>
              

              {/* <div className='botonesPaciente'>
                {!editando && <button id="editar" onClick={() => editarRegistro(gasto.id)}>Editar</button>}
                {!editando && <button id="eliminar" onClick={() => eliminar(gasto.id, gasto.cantidadGasto)}>Borrar</button>}
              </div> */}
            </div>
          ))}

        </div>
      </div>
    </div>

  )
}

export default ListaGastos