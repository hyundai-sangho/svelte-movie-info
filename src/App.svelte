<script>
	import SearchBar from './lib/components/SearchBar.svelte';
	import Movies from './lib/components/Movies.svelte';
	import Modal from './lib/components/Modal.svelte';
	import Navbar from './lib/components/Navbar.svelte';
	import Event from './lib/components/Event.svelte';
	import data from './lib/movies.js';

	// 반응형 선언
	let moviesData = data;

	const handleLike = (i) => {
		moviesData[i].likeCount += 1;
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

	const handleMovieNumber = (i) => {
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
<SearchBar />

<Movies {moviesData} {handleLike} {openModal} {handleMovieNumber} />

{#if isModal}<Modal {data} {selectedMovie} {closeModal} />{/if}

<style>
</style>
