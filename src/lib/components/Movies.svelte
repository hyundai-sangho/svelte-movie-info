<script>
	export let moviesData;
	export let movieLikeIncrease;
	export let openModal;
	export let selectedMovieNumber;
</script>

<main class="container">
	<h1 style="margin-top: 10px">영화 정보</h1>
	{#each moviesData as movie, i}
		<div class="item">
			<figure>
				<img src={movie.imgUrl} alt={movie.title} />
			</figure>
			<div class="info">
				<h3 class="bg-yellow">{movie.title}</h3>
				<p>개봉: {movie.year}</p>
				<p>장르: {movie.category}</p>
				<button
					class="btn btn-danger"
					on:click={() => {
						movieLikeIncrease(i);
					}}>좋아요 {movie.likeCount}</button
				>
				<button
					class="btn btn-primary"
					on:click={() => {
						openModal();
						selectedMovieNumber(i);
					}}>상세보기</button
				>
			</div>
		</div>
	{/each}
</main>

<style>
	.bg-yellow {
		background: gold;
		padding: 10px;
		color: #333;
	}

	.item {
		width: 100%;
		border: 1px solid #ccc;
		display: flex;
		margin-bottom: 20px;
		padding: 1rem;
	}

	.item figure {
		width: 30%;
		margin-right: 1rem;
	}

	.item img {
		width: 100%;
	}

	.item .info {
		width: 100%;
	}
</style>
