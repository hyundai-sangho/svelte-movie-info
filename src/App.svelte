<script>
	import SearchBar from './lib/components/SearchBar.svelte';
	import Movies from './lib/components/Movies.svelte';
	import Modal from './lib/components/Modal.svelte';
	import Navbar from './lib/components/Navbar.svelte';
	import Event from './lib/components/Event.svelte';
	import data from './lib/movies.js';

	let eventText = 'Netflix 강렬한 운명의 드라마, 서울크리처';
	let eventIndex = 0;
	// 반응형 선언
	let moviesData = data;

	const movieLikeIncrease = (id) => {
		// 특정 영화만 필터링하여 복사 후 likeCount를 증가시킴
		moviesData = moviesData.filter((movie) => {
			if (movie.id === id) {
				movie.likeCount += 1;
			}
			return true;
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
	<Event {handleClose} {eventText} {eventIndex} />
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
