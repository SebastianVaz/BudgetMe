import { useState, useEffect } from 'react'
import './App.css'
import PresupuestoInicial from './Components/PresupuestoInicial';
import TarjetaResumen from './Components/TarjetaResumen';
import FiltroGastos from './Components/FiltroGastos';
import ListaGastos from './Components/ListaGastos';
import FormularioGastos from './Components/FormularioGastos';
import icono from './assets/nuevo-gasto.3ab385ce.svg'

function App() {
  const [inicio, setInicio] = useState(true);
  const [presupuesto, setPresupesto] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [listaGastos, setListaGastos] = useState([]);
  const [descripcionGasto, setDescripcionGasto] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [categoriaGasto, setCategoriaGasto] = useState("Ahorro");
  const [porcentaje, setPorcentaje] = useState(0);
  //Estado para mostrar o no formulario
  const [forumlarioON, setFormularioON] = useState(false);
  //estados para editar registro
  const [editando, setEditando] = useState(false);
  const [idActual, setIdActual] = useState(0);
  //estados para filtrar registros
  const [busqueda, setBusqueda] = useState([]);

  useEffect(() => {
    if (gastado !== 0) {
      const ReglaDeTres = (gastado * 100) / presupuesto;
      if(ReglaDeTres >= 100) {
        debugger;
        //document.getElementById('barraProgreso').style.stroke = "red";
      }
      setPorcentaje(ReglaDeTres.toFixed(2));
    } else {
      setPorcentaje(0);
    }
  }, [gastado])


  const ConfirmarPresupuesto = () => {
    if (presupuesto > 0) {
      setInicio(false);
      setDisponible(presupuesto)
    } else {
      alert("El presupuesto incial debe ser mayor a 0");
    }
  }

  const ReiniciarApp = () => {
    setInicio(true);
    setPresupesto(0);
    setListaGastos([]);
    setGastado(0);
    setDisponible(0);
    setDisponible(0);
  }

  const crearGastoNuevo = async (event) => {
    event.preventDefault();
    setFormularioON(false);
    if (editando) {
      guardarCambios();
      return;
    }
    let date = new Date().toLocaleDateString();
    setListaGastos([
      ...listaGastos, {
        id: listaGastos.length + 1,
        descripcionGasto: descripcionGasto,
        cantidadGasto: cantidadGasto,
        categoriaGasto: categoriaGasto,
        fecha: date,
      }
    ]);
    console.log(typeof (cantidadGasto));
    debugger;
    // event.target.reset(camposInvalidos);
    setGastado(prevGastado => prevGastado + cantidadGasto);
    setDisponible(prevDisponible => prevDisponible - cantidadGasto);
    ResetForm();
  }

  const ResetForm = () => {
    setDescripcionGasto("");
    setCantidadGasto(0);
    setCategoriaGasto("Ahorro")
  }

  const eliminar = (id, cantidad) => {
    setListaGastos(listaGastos.filter(gasto => gasto.id !== id));
    setGastado(prevGastado => prevGastado - cantidad);
    setDisponible(prevDisponible => prevDisponible + cantidad);
  }

  const editarRegistro = (id) => {
    const ElEditado = listaGastos.filter(gasto => gasto.id === id);
    const registro = ElEditado[0];
    setDescripcionGasto(registro.descripcionGasto);
    setCantidadGasto(registro.cantidadGasto);
    setCategoriaGasto(registro.categoriaGasto);
    //document.getElementById("categoria").value = registro.categoriaGasto;
    setIdActual(registro.id);
    setEditando(true);
    setFormularioON(true);
    //debugger;
  }

  const guardarCambios = () => {
    updateState();
    setEditando(false);
    setIdActual();
    ResetForm();
  }


  const updateState = () => {
    // 👇️ passing function to setData method
    let date = new Date().toLocaleDateString();
    setListaGastos(prevState => {
      const nuevoEstado = prevState.map(registro => {
        // 👇️ 
        if (registro.id === idActual) {
          debugger;
          setGastado(prevGastado => (prevGastado - registro.cantidadGasto) + cantidadGasto);
          setDisponible(prevDisponible => (prevDisponible + registro.cantidadGasto) - cantidadGasto);
          return {
            ...registro,
            descripcionGasto: descripcionGasto,
            cantidadGasto: cantidadGasto,
            categoriaGasto: categoriaGasto,
            fecha: date,
          };
        }

        // 👇️ otherwise return object as is
        return registro;
      });
      return nuevoEstado;

    });
  };
  return (
    <div>
      <header>
        <h1>Planificador de gastos</h1>
        {inicio && <PresupuestoInicial presupuesto={presupuesto} setPresupesto={setPresupesto} confirmar={ConfirmarPresupuesto} />}
        {!inicio && <TarjetaResumen presupuesto={presupuesto} ReiniciarApp={ReiniciarApp} disponible={disponible} gastado={gastado} porcentaje={porcentaje} />}
      </header>
       {!inicio && <div className='container-md'>
        <FiltroGastos datos={listaGastos} busqueda={busqueda} setBusqueda={setBusqueda} />
        <ListaGastos datos={listaGastos} eliminar={eliminar} editarRegistro={editarRegistro} editando={editando} busqueda={busqueda} setBusqueda={setBusqueda} />
        <div className='nuevo-gasto'>
          <img src={icono} alt="Boton nuevo gasto" onClick={e=> setFormularioON(true)}/>
        </div>
      </div>}
      {forumlarioON && <FormularioGastos
          descripcionGasto={descripcionGasto}
          setDescripcionGasto={setDescripcionGasto}
          cantidadGasto={cantidadGasto}
          setCantidadGasto={setCantidadGasto}
          categoriaGasto={categoriaGasto}
          setCategoriaGasto={setCategoriaGasto}
          crearGastoNuevo={crearGastoNuevo}
          editando={editando} 
          setFormularioON={setFormularioON}/>}
    </div>
  )
}

export default App
