import './CampoTexto.css'
//let valor = '';

const CampoTexto = (props) => {
    //const placeholderModificada = `${props.placeholder}...`    

    const aoDigitar = (e) => {
        props.aoAlterado( e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{ props.label }</label>
            <input value={props.valor} onChange={aoDigitar} required={ props.required }  placeholder={ props.placeholder }/>
        </div>
    )
}

export default CampoTexto