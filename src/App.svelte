<script>
	import SearchBar from './lib/components/SearchBar.svelte';
	import Movies from './lib/components/Movies.svelte';
	import Modal from './lib/components/Modal.svelte';
	import Navbar from './lib/components/Navbar.svelte';
	import Event from './lib/components/Event.svelte';
	import data from './lib/movies.js';

	// 반응형 선언
	let moviesData = data;

	const movieLikeIncrease = (id) => {
		// 기존 moviesData를 복사하여 수정한 후 다시 할당
		moviesData = moviesData.map((movie) => {
			if (movie.id === id) {
				return { ...movie, likeCount: movie.likeCount + 1 };
			}
			return movie;
		});
	};

	let isModal = false; // 모달창 변수
	let selectedMovie = 0; // 선택한 영화의 인덱스 변수
	let isShow = false;

	const openModal = () => {
		isModal = true;
	};

	const closeModal = () => {
		isModal = false;
	};

	const selectedMovieNumber = (i) => {
		selectedMovie = i;
	};

	const handleClose = () => {
		isShow = false;
	};

	const init = () => {
		isShow = true;
	};

	init();
</script>

<Navbar />
{#if isShow}
	<Event {handleClose} />
{/if}
<SearchBar bind:moviesData {data} />
<div class="container">
	<button
		class="btn btn-info"
		on:click={() => {
			moviesData = data;
		}}>전체보기</button
	>
	<button
		class="btn btn-info"
		on:click={() => {
			moviesData = moviesData.sort((a, b) => b.likeCount - a.likeCount);
		}}>좋아요순</button
	><button
		class="btn btn-info"
		on:click={() => {
			window.location.reload();
		}}>새로고침</button
	>
</div>
<Movies bind:moviesData {movieLikeIncrease} {openModal} {selectedMovieNumber} />

{#if isModal}<Modal {data} {selectedMovie} {closeModal} />{/if}

<style>
	.container {
		display: flex;
		justify-content: center;
	}
</style>
