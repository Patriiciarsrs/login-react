export function Login(){
    return(
        <div className="login-container">
            <div className="login-titulo">Entrar no Sistema</div>
            <form className="login-form">
                <input type="text" className="login-input" />
                <input type="password" className="login-input"/>
                <button className="login-btn">Entrar</button>
            </form>
        </div>
    )
}