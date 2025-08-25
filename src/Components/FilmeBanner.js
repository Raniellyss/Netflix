import "./FilmeBanner.css"
import FilmeBanner from '../Components/FilmeBanner';
import "../Imagens/stranger.jpg"


function FilmeBanner() {

    return(

        <div className="conteudo">

          
                <span className="titulo">Stranger Things</span>
                <span className="relevante">98% relevante</span>
                <span className="temporadas">5 temporadas 2016</span>

            <div className="Informacoes">

                <div className="resumo">

                    <span>Na década de 1980, um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. 
                        Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.</span>
                    
                </div>

                <div className="detalhes">
                    <span className="elenco">Elenco:  Matt Duffer, Ross Duffer, Kate Trefry, Justin Doble, Paul Dichter, Jessie Nickson-Lopez
                    </span>

                    <span className="duracao"> 42–142 minutos</span>
                    <span className="criacao"> The Duffer Brothers</span>

                    <span className="linha"></span>

                    <div className="episodio">
                        <span className="episodio">Episódios</span>

                        <span className="titulo">O Desaparecimento de Will Byers</span>
                        <span className="titulo">A estranha da Maple Street</span>
                        <span className="titulo">Caramba</span>
                        <span className="titulo">O Corpo</span>



                    </div>
                </div>

            </div>

        </div>


    );



}export default FilmeBanner;
