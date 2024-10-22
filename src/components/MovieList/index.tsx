import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './index.scss'
import { Movie } from '@/types/movie'
import MovieCard from '../MovieCard'



export default function MovieList() {

    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '5021d7d61f31d524d7db03d4bbb4cfcd',
                language: 'pt-BR'
            }
        }).then(response => {
            console.log(response.data)// Mostra os dados da resposta no console
            setMovies(response.data.results);
        }).catch(error => {
            console.error('Erro ao buscar filmes:', error); // Captura e exibe erros
        });
    }

    return (
        <ul className='movie-list'>
            {movies.map((movie) =>
                <MovieCard 
                key={movie.id}
                movie={movie}
                />
            )}
        </ul>
    )
}