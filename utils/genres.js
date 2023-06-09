const GENRES = new Map([
	['28', 'Action'],
	['12', 'Adventure'],
	['16', 'Animation'],
	['35', 'Comedy'],
	['80', 'Crime'],
	['99', 'Documentary'],
	['18', 'Drama'],
	['10751', 'Family'],
	['14', 'Fantasy'],
	['36', 'History'],
	['27', 'Horror'],
	['10402', 'Music'],
	['9648', 'Mystery'],
	['10749', 'Romance'],
	['878', 'Science Fiction'],
	['10770', 'TV_Movie'],
	['53', 'Thrille'],
	['10752', 'War'],
	['37', 'Western'],
]);

export const displayGenres = genre_ids => {
	const genreNames = genre_ids
		.map(genreId => GENRES.get(`${genreId}`))
		.filter(genreName => genreName);
	return genreNames.join(', ');
};
