import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      	{directors.map((director, index) => (
      		<div key={index}>
      			<strong>Name: {director.name}</strong>
      				<p /> Movies:
      				<ul>
      					{director.movies.map((movie, index) => (
      						<li key={index}>{movie}</li>
      						))}
      				</ul>
      			</div>
      		))}
    </div>
  );
}

export default Directors
