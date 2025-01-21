<script>
	import SearchBar from './lib/components/SearchBar.svelte';
	import Movies from './lib/components/Movies.svelte';
	import Modal from './lib/components/Modal.svelte';
	import Navbar from './lib/components/Navbar.svelte';
	import Event from './lib/components/Event.svelte';
	import data from './lib/movies.js';

	import { onMount, onDestroy } from 'svelte';

	let eventText = ['영화 정보 업데이트', '신규 영화 추가', '이벤트 진행중'];
	let eventIndex = 0;
	let timer = '';

	$: {
		clearInterval(timer);

		timer = setInterval(() => {
			eventIndex += 1;

			if (eventIndex >= eventText.length) eventIndex = 0;
		}, 1000);
	}
	onMount(() => {});

	onDestroy(() => {});

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

	let isModal = false;
	let selectedMovie = 0;
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
