import "./menu.css"
import image from "../../img/icon.png"


function Menu(){
    return(
        <>
            <header>
                <div>
                    <img src={image}/>
                </div>

                <div>
                    <ul>
                        <li><a href="/" className="lista">Home</a></li>
                        <li><a href="/" className="lista">Blog</a></li>
                        <li><a href="/" className="lista">Jogos</a></li>
                        <li><a href="/" className="lista">Animações</a></li>
                    </ul>
                </div>

                <div>         
                    <button className="button"><a href="/login_user">Login/Create</a></button>        
                </div>

                
            </header>
        </>
    )
}

export default Menu