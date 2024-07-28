import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import styles from "./GenrePage.module.css";
import defaultGenres from "../data/genres";
import defaultGenres2 from "../data/genres2";

function GenrePage() {
	const [error, setError] = useState();
	const { selectedGenres, setSelectedGenres } = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		if (selectedGenres.length >= 3) {
			setError(false);
		}
	}, [selectedGenres]);

	const handleSelectGenre = (genre) => {
		if (selectedGenres.includes(genre)) {
			//pop operation
			setSelectedGenres(
				selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
			);
		} else {
			//push operation
			setSelectedGenres([...selectedGenres, genre]);
		}
	};

	const handleNext = () => {
		if (selectedGenres.length < 3) {
			setError(true);
		} else {
			navigate("/carousel");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<h3 className={styles.heading}>Super app</h3>
				<h2 className={styles.subHeading}>
					Choose your entertainment category
				</h2>
				<div className={styles.selectedGenres}>
					{selectedGenres.map((genre, index) => (
						<div
							onClick={() => handleSelectGenre(genre)}
							key={index}
							className={styles.selectedGenre}
						>
							{genre}
							<span>X</span>
						</div>
					))}
				</div>
				{error && <p className={styles.error}>Minimum 3 category required</p>}
			</div>
			<div className={styles.right}>
				<div className={styles.genres}>
					{defaultGenres2.map((genre, index) => (
						<div
							key={index}
							className={styles.genre}
							style={{ backgroundColor:genre.bgcolor}}
							onClick={() => {
								handleSelectGenre(genre.name);
							}}
						>
							<div className={styles.genreTitle}>{genre.name}</div>
							<div className={styles.image}>
								<img src={genre.src}/>
							</div>
						</div>
					))}
				</div>
				<button onClick={handleNext}>Next</button>
			</div>
		</div>
	);
}

export default GenrePage;
