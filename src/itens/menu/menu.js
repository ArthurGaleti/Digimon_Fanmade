import "./menu.css"
// import image from "../../img/icon2.png"


function Menu(){
    return(
        <>
            <header>
                <div>
                    {/* <img src={image}/> */}
                </div>

                <div>
                    <ul>
                        <li><a href="/" className="lista">Home</a></li>
                        <li><a href="/" className="lista">mi</a></li>
                        <li><a href="/" className="lista">gtr</a></li>
                        <li><a href="/" className="lista">Produtos</a></li>
                    </ul>
                </div>

                <div>         
                    <button className="botao"><a>Login/Create</a></button>        
                </div>

                
            </header>
        </>
    )
}

export default Menu