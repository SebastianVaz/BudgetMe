import React from 'react'
import './PresupuestoInicial.css'

const PresupuestoInicial = ({presupuesto,setPresupesto,confirmar}) => {
  return (
    <div className='ContenedorPresupuesto'>
      <div className='prespuestoInicial sombra'>
          <form onSubmit={confirmar} className="formaPresupesto">
          <label>Definir presupuesto</label>
            <input type='number' value={presupuesto} onChange={e => setPresupesto(e.target.value)}></input>
            <button type='submit'>Agregar</button>
          </form>

        </div>
    </div>
    
  )
}

export default PresupuestoInicial