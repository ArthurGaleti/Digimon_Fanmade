import "./rodape.css";
import image from "../../img/icon2.png"

function Rodape(){
    return(
        <div className="rodape">
            <footer>
                <img src={image} className="rodimg"/>
                <span>Todos od direitos reservados ©</span>
                    <br/>
                <span>Desenvolvido por: Arthur Galeti</span>
                    <br/>
            </footer>
          
        </div>
    )
}

export default Rodape