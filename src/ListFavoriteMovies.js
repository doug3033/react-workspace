import React, { Component } from 'react'

class ListFavoriteMovies extends Component {
  render() {
    return (
      <ol className='favorite-movie'>
      {this.props.profiles.map((profile) => (
      	<li key={this.props.users[profile.id].id}>{this.props.users[profile.id].name} favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
		</li>
		))}
		</ol>
	)
}
}

export default ListFavoriteMovies
	 