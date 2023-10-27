import Menu from "../../itens/menu/menu"
import Rodape from "../../itens/rodape/rodape"
import Banner from "../../img/banner.png"
import Tama from "../../img/tamagotchi.png"
import Akiyoshi from "../../img/akiyoshiHongo.png"
import "../../geral.css"
import "./index.css"

function Home(){
    return(
        <>
            <Menu/>
            <img src={Banner} className="banner"/>


            <div className="hist">
                <div>
                    <h1> História da franquia </h1>
                </div>

                <div>
                    <img src={Akiyoshi}/>
                    <p className="p1">
                        A famosa franquia foi criada pelo grupo de pessoas nomeado peda Bandai de Akiyoshi Hongo. <br/> <br/>
                        Desse grupo de destacavam  Aki Maita, Hiroshi Izawa e Takeichi Hongo.
                    </p>
                </div>
                        <br/>
                        <br/>
                <div>
                    <img src={Tama}/>
                    <p className="p2">
                        A franquia teve seu início como uma espécie de bichinho virtual(tamagotchi) e ganhou sua
                        primeira animação em 1999. <br/> <br/>
                        A Toei Animations distribui as animações(popularmente conhecido como anime) e quadrinhos
                        (popularmente conhecido como mangá), enquanto a franquia de jogos é distribuida pela Bandai
                    
                    </p>
                </div>
            </div>

            

            <Rodape/>
        </>
    )
}


export default Home