// React Hooks & API imports
import { createContext, useState, useEffect } from 'react';

// Utils
import { getItems } from '../utils/http';

// The backend url of the tvShows
const BACKEND_URL =
	'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=f214b16171fc56615485b80f1d188763&page=1';

// The shared state schema
export const TvShowsContext = createContext({
	tvshows: [],
	favorites: [],
	// Handlers
	setTvshows: tvshows => {},
	setFavorites: favorites => {},
});

// The context provider of the store
const TvshowsContextProvider = ({ children }) => {
	const [tvshows, setTvshows] = useState([]);
	const [favorites, setFavorites] = useState([]);

	// Fetching the tvShows when the context mounts
	useEffect(() => {
		const fetchTvshows = async () => {
			const data = await getItems(BACKEND_URL);
			setTvshows(data.results);
		};
		fetchTvshows();
	}, []);

	const value = {
		tvshows: tvshows,
		favorites: favorites,
		setTvshows: setTvshows,
		setFavorites: setFavorites,
	};
	return (
		<TvShowsContext.Provider value={value}>{children}</TvShowsContext.Provider>
	);
};

export default TvshowsContextProvider;
