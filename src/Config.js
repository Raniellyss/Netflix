import FilmeBanner from '../Components/FilmeBanner';
import FilmeComentarios from '../Components/FilmeComentarios';
import FilmeHeader from '../Components/FilmeHeader';
import FilmeDetalhes from '../Components/FilmeDetalhes';
import FilmePlaylist from '../Components/FilmePlaylist';
import FilmesRelacionados from '../Components/FilmesRelacionados';


export default function FilmePage({ filme }) {
  return (
    <div className="bg-white shadow-md rounded-2xl max-w-3xl mx-auto p-4 space-y-4">
      {/* Cabeçalho */}
      <div className="flex gap-4">
        <img src={filme.image} alt={filme.title} className="w-40 rounded-xl" />
        <div>
          <h2 className="text-2xl font-bold">{filme.title}</h2>
          <p><strong>Data:</strong> {filme.releaseDate}</p>
          <p><strong>Duração:</strong> {filme.duration}</p>
          <p><strong>Avaliação:</strong> {filme.rating}</p>
        </div>
      </div>

  
      <FilmeBanner bannner={filme.banner} />
      <FilmeComentarios comentarios={filme.cometarios} />
      <FilmeHeader header={filme.header} />
      <FilmeDetalhes detalhes={filme.detalhes} />
      <FilmePlaylist playlist={filme.playlist} />
      <FilmesRelacionados relacionados={filme.relacionados} />
    </div>
  )
}
 