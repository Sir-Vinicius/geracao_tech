function BotaoDinamico (props) {
    const estiloBotao = {
        backgroundColor: props.cor,
        color: 'white',
        padding: '15px',
        margin: '10px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontSize: '16px'
    }

    

    return <button style={estiloBotao}>
        {props.children}
    </button>
}

export default BotaoDinamico;