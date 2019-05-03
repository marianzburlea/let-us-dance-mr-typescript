interface Movie {
  title: string;
  shortResolution: string;
  part?: number;
}
export class MovieList {
  movieList: Movie[] = []

  addMovie = (movie: Movie): Movie[] => {
    return [...this.movieList, movie]
  }

  findMoviesByTitle = (searchTerm: {title?: string; shortResolution?:string}):Movie[] => {
    return this.movieList
      .filter(movie => 
        // check to see if the search term is contained in the title
        ~movie.title
          .toLowerCase()
          .indexOf((searchTerm.title || '').toLowerCase()) || 
        // or if the short resolution matches
        movie.shortResolution
          .toLowerCase() === (searchTerm.shortResolution || '').toLowerCase())
  }
}

export const makeDateNice = (date: Date):string => {
  return date
    .toISOString()
    .replace(/[-:]+/g, '')
    .split('.')
    .reduce(value => value) + 'Z'
}

export const getFullTitle = (movie: Movie):string => {
  return [movie.title, movie.shortResolution, movie.part]
    .filter(Boolean)
    .join(' ')
}
