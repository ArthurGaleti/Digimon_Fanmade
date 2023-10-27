import Menu from "../../itens/menu/menu"
import Rodape from "../../itens/rodape/rodape"
import "./createLogin.css"

function Create(){
    return(
    <>
    <Menu/>
        <div className="back">
            <div className="escurecer">
                <br/><br/><br/>

                <div className="userForm">
                    <h1>Create</h1>

                    <label for="nome"> Nome</label>
                    <input type="text" id="nome" class="fundob" placeholder="Informe seu nome." required />
                        <br/>       
                    <label for="email"> E-mail</label>
                    <input type="email" id="email" class="fundob" placeholder="Informe seu email." required />
                        <br/>       
                    <label for="senha"> Senha</label>
                    <input type="password" id="senha" class="fundob" placeholder="Informe seu senha." required />
                        
                    <button className="submit">Submit</button>
                        <br/>
                    <a className="a" href="/login_user">Possuo uma conta</a>
                </div>

                <br/><br/><br/>
            </div>

        </div>
    <Rodape/>        
    </>
    )
}
function Login(){
    return(
    <>
    <Menu/>
        <div className="back">
            <div className="escurecer">
                <br/><br/><br/>

                <div className="userForm">
                    <h1>Login</h1>
                        <br/>
                    <label for="email"> E-mail</label>
                    <input type="email" id="email" class="fundob" placeholder="Informe seu email." required />
                        <br/>       
                    <label for="senha"> Senha</label>
                    <input type="password" id="senha" class="fundob" placeholder="Informe seu senha." required />
                        <br/><br/>
                    <button className="submit">Submit</button>
                        <br/>
                    <a className="a" href="/create_user">Não possuo uma conta</a>
                </div>

                <br/><br/><br/>
            </div>

        </div>
    <Rodape/>        
    </>
    )
}

export {Create, Login}