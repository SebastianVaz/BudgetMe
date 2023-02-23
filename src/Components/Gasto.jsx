import React from 'react'
import './Gasto.css'
import IconoSalud from '../assets/icono_salud.41ba3136.svg'
import IconAhorro from '../assets/icono_ahorro.ff2959d3.svg'
import IconoCasa from '../assets/icono_casa.1170ce11.svg'
import IconoComida from '../assets/icono_comida.db0a9016.svg'
import IconoGastos from '../assets/icono_gastos.e6dea3b0.svg'
import IconoOcio from '../assets/icono_ocio.ad5d0e9e.svg'
import IconoSuscripciones from '../assets/icono_suscripciones.97f04dc8.svg'


const renderSwitch = (categoria) => {
  switch (categoria) {
    case 'Ahorro':
      return IconAhorro;
    case 'Comida':
      return IconoComida;
    case 'Casa':
      return IconoCasa;
    case 'Gastos':
      return IconoGastos;
    case 'Ocio':
      return IconoOcio;
    case 'Salud':
      return IconoSalud;
    case 'Subscripciones':
      return IconoSuscripciones;
    default:
      return IconoGastos;
  }
}


const Gasto = ({ detalles }) => {
  return (
    <div className='Tarjeta-gasto sombra'>
      <div className='contenido-gasto'>
        <img src={renderSwitch(detalles.categoriaGasto)} alt='icono gasto' />
        <div className='info-gasto'>
          <p className='categoria'>{detalles.categoriaGasto}</p>
          <p className='nombre-gasto'>{detalles.descripcionGasto}</p>
          <p className='fecha-gasto'>Agregado el: <span>{detalles.fecha}</span></p>
        </div>
      </div>
      <p className='cantidad-gasto'>${detalles.cantidadGasto}</p>
    </div>
  )
}

export default Gasto