import React from 'react'
import './FormularioGastos.css'
import icono from '../assets/cerrar.ab3aac92.svg'

const FormularioGastos = ({ descripcionGasto, setDescripcionGasto, cantidadGasto, setCantidadGasto, categoriaGasto, setCategoriaGasto, crearGastoNuevo, editando, setFormularioON }) => {
    return (
        <div className='ContenedorFormulario'>
            <div className='CerrarFormulario'>
            <img src={icono} alt="Boton cerrar" onClick={e=> setFormularioON(false)}/>
            </div>
            <div className='centrarFormulario'>
                <form autoComplete='off' className="row" onSubmit={crearGastoNuevo}>
                    <legend>Nuevo Gasto</legend>
                    <div className="renglonFormulario">
                        <label htmlFor='nombre'>Nombre Gasto: </label>
                        <input autoComplete='off' pattern="[A-Za-z].{3,20}" required type="text" placeholder="Descripcion del gasto" value={descripcionGasto} onInvalid={e => e.target.setCustomValidity('Error')} onInput={e => e.target.setCustomValidity('')}
                            onChange={e => setDescripcionGasto(e.target.value)} name="nombre" id="nombre" ></input>
                    </div>
                    <div className="renglonFormulario">
                        <label htmlFor='cantidad'>Cantidad: </label>
                        <input type='number' value={cantidadGasto} onChange={e => setCantidadGasto(parseFloat(e.target.value))} name="cantidad" id="cantidad"></input>
                    </div>
                    <div className="renglonFormulario">
                        <label htmlFor='categoria'>Categoria: </label>
                        <select required id="categoria" name='categoria' value={categoriaGasto} onChange={e => setCategoriaGasto(e.target.value)}>
                            <option value={"Ahorro"}>Ahorro </option>
                            <option value={"Comida"}>Comida</option>
                            <option value={"Casa"}>Casa</option>
                            <option value={"Gastos"}>Gastos</option>
                            <option value={"Ocio"}>Ocio</option>
                            <option value={"Salud"}>Salud</option>
                            <option value={"Subscripciones"}>Subscripciones</option>
                        </select>
                    </div>
                    {!editando && <button type="submit" className="botonFormulario">Agregar Gasto</button>}
                    {editando && <button type="submit" className="botonFormulario">Guardar Cambios</button>}
                </form>
            </div>

        </div>
    )
}

export default FormularioGastos