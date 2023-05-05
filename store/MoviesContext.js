// React Hooks & API imports
import { createContext, useState, useEffect } from 'react';

// Utils
import { getItems } from '../utils/http';

// The backend url of the movies
const BACKEND_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f214b16171fc56615485b80f1d188763&page=1';

// The shared state schema
export const MoviesContext = createContext({
	movies: [],
	favorites: [],
	// Handlers
	setMovies: movies => {},
	setFavorites: favorites => {},
});

// The context provider of the store
const MoviesContextProvider = ({ children }) => {
	const [movies, setMovies] = useState([]);
	const [favorites, setFavorites] = useState([]);

	// Fetching the movies when the context mounts
	useEffect(() => {
		const fetchMovies = async () => {
			const data = await getItems(BACKEND_URL);
			console.log(data);
			setMovies(data.results);
		};
		fetchMovies();
	}, []);

	const value = {
		movies: movies,
		favorites: favorites,
		setMovies: setMovies,
		setFavorites: setFavorites,
	};
	return (
		<MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
	);
};

export default MoviesContextProvider;
