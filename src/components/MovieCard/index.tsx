import './index.scss'
import { Movie } from '@/types/movie'
import StarRating from '../StarRating';

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {

    const movie = props.movie;

    return (
        <li className='movie-card'>
            <div className='movie-poster'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="movie-infos">
                <p className='movie-title'>{movie.title}</p>
                <StarRating rating={movie.vote_average} />
                <div className='hidden-content'>
                    <p className='description'>
                        {movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}
                    </p>
                    <button type="button" className='btn-default'>ver mais</button>
                </div>
            </div>
        </li>
    )
}