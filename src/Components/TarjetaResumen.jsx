import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './TarjetaResumen.css'

const TarjetaResumen = ({ presupuesto, ReiniciarApp, disponible, gastado, porcentaje }) => {

  const percentage = porcentaje;
  const colorGrafico = (valor) => {
    if (valor >= 100) {
      document.getElementById('textoDisponible').style["color"] = 'rgb(220, 38, 38)';
      document.getElementById('spanDisponible').style["color"] = 'rgb(220, 38, 38)';
      return 'rgb(220, 38, 38)'
    } else {

      try {
        document.getElementById('textoDisponible').style["color"] = '#64748b';
        document.getElementById('spanDisponible').style["color"] = '#3b82f6';
      } catch (error) {
        console.error(error);

      }

      return 'rgb(62, 152, 199)'
    }
  }

  return (
    <div className='tarjetaResumen '>
      <div className='ResumenFlex sombra'>
        <div className='ProgressBar' >
          <CircularProgressbar styles={{
            path: {
              // Path color
              stroke: colorGrafico(percentage),
            },
            text: {
              // Text color
              fill: colorGrafico(percentage),
            },
          }} value={percentage} text={`${percentage}% gastado`} />
        </div>
        <div className='cantidadesResumen'>
          <button onClick={() => ReiniciarApp()}>Reiniciar app</button>
          <p><span>Presupuesto</span>: ${presupuesto}</p>
          <p id="textoDisponible"><span id="spanDisponible">Disponible</span>: ${disponible}</p>
          <p><span>Gastado</span>: ${gastado}</p>
        </div>
      </div>
    </div>
  )
}

export default TarjetaResumen