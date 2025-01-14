<script>
	let inputText = '';
	let alertText = '';
	let filteredMovies = [];

	export let moviesData;
	export let data;

	$: if (inputText.length > 16) {
		alertText = '입력한도 초과';
	} else {
		alertText = '';
	}

	const searchMovie = () => {
		moviesData = data;

		// 원본 moviesData를 변경하지 않도록 별도의 변수를 사용
		filteredMovies = moviesData.filter((movie) => {
			return movie.title.includes(inputText);
		});

		if (filteredMovies.length === 0 && inputText.length > 0) {
			alertText = '검색결과가 없습니다';
		}

		if (inputText.length === 0) {
			moviesData = data;
		}

		moviesData = filteredMovies;
	};
</script>

<div class="search-box">
	<div class="input-group">
		<input type="search" bind:value={inputText} on:keyup={searchMovie} />
		<button on:click={searchMovie}>검색</button>
	</div>
</div>

{#if alertText}
	<p class="text-center alert-text">{alertText}</p>
{/if}

<style>
	.alert-text {
		color: red;
	}

	.search-box {
		padding: 0 20px;
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.input-group {
		width: 100%;
		margin: 0 auto;
		border: 1px solid #ccc;
		position: relative;
		padding: 0 20px;
	}
	.search-box input {
		width: 100%;
		border: none;
		outline: none;
		padding: 10px;
	}

	.search-box button {
		position: absolute;
		right: 0;
		top: 0;
		border: none;
		outline: none;
		background: #666;
		color: #fff;
		width: 5em;
		height: 100%;
		margin: 0;
	}
</style>
