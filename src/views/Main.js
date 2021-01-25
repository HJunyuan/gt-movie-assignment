import { useContext, useEffect, useState } from "react";
import { Icon, IconButton, Panel } from "rsuite";
import styled from "styled-components";
import { isEqual } from "lodash";

import { MovieContext } from "../contexts/MovieContext";

import { MovieCard, MovieGrid } from "../components/Movie";
import { GenreFilter, YearFilter, TitleFilter } from "../components/Filter";
import { Container } from "../components/Container";

const DEFAULT_GENRE = ["All Genres"];

function Main() {
	const { isReady, movies, genres, years } = useContext(MovieContext);
	const [filterParams, setFilterParams] = useState({
		genres: DEFAULT_GENRE,
		title: "",
	});

	/* Initialise filterParams when isReady */
	useEffect(() => {
		if (isReady) {
			setFilterParams((o) => ({ ...o, yearStartEnd: [0, years.length - 1] }));
		}
	}, [isReady, years]);

	return (
		<Container>
			<h1 className="mt-4">Movies</h1>
			<Panel
				className="my-4"
				header="Filters"
				defaultExpanded={false}
				collapsible
				bordered
			>
				<PanelGrid>
					<div>
						<p className="mb-4">
							<b>By Year</b>
						</p>
						<YearFilter
							allYears={years}
							selected={filterParams.yearStartEnd}
							onChange={(selected) => {
								setFilterParams((o) => ({ ...o, yearStartEnd: selected }));
							}}
						/>
					</div>
					<div>
						<p className="mb-2">
							<b>By Genres</b>
						</p>
						<GenreFilter
							allGenres={genres}
							selected={filterParams.genres}
							onChange={(selected) => {
								setFilterParams((o) => ({ ...o, genres: selected }));
							}}
						/>
					</div>
					<div>
						<p className="mb-2">
							<b>By Title</b>
						</p>
						<TitleFilter
							value={filterParams.title}
							onChange={(value) =>
								setFilterParams((o) => ({ ...o, title: value }))
							}
						/>
					</div>
				</PanelGrid>
				<IconButton
					className="mt-5"
					icon={<Icon icon="refresh" />}
					placement="left"
					onClick={() => {
						setFilterParams({
							genres: DEFAULT_GENRE,
							yearStartEnd: [0, years.length - 1],
							title: "",
						});
					}}
					disabled={isEqual(filterParams, {
						genres: DEFAULT_GENRE,
						yearStartEnd: [0, years?.length - 1],
						title: "",
					})}
				>
					Reset filters
				</IconButton>
			</Panel>
			<MovieGrid>{filteredMovies(movies, filterParams, years)}</MovieGrid>
		</Container>
	);
}

function filteredMovies(movies, filterParams, years) {
	const { genres, yearStartEnd } = filterParams;
	if (!movies || !genres || !yearStartEnd) {
		return mockup();
	}

	const filtered = movies.filter((movie) => {
		const destructedYears = [];

		for (let i = yearStartEnd[0]; i <= yearStartEnd[1]; i++) {
			destructedYears.push(years[i]);
		}

		return (
			(genres.includes(movie.genre) || genres.includes("All Genres")) &&
			destructedYears.includes(movie.productionYear) &&
			movie.name.search(new RegExp(filterParams.title, "i")) !== -1
		);
	});
	return genMovieCards(filtered);
}

function genMovieCards(movies) {
	if (!movies || movies.length === 0) {
		return (
			<NoMovies>
				<p>Sorry, there are no movies that matches your filter.</p>
			</NoMovies>
		);
	}
	return movies.map((movie, i) => <MovieCard key={i} {...movie} />);
}

function mockup() {
	const count = 8;
	const mockups = [];

	for (let i = 0; i < count; i++) mockups.push(<MovieCard key={i} mockup />);

	return mockups;
}

const PanelGrid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-column-gap: 1rem;
	grid-row-gap: 2rem;
	overflow-x: auto;
`;

const NoMovies = styled.div`
	display: grid;
	place-items: center;
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	height: 30vh;
`;

export default Main;
