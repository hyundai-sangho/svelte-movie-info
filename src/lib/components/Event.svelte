<script>
	import { fly, fade } from 'svelte/transition';
	export let handleClose;
</script>

<div class="event show" in:fly={{ y: -400, duration: 1000 }} out:fade>
	<p>Netflix 강렬한 운명의 드라마, 경기크리처</p>
	<button on:click={handleClose} aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.751 3h3.067l-6.7 7.625L22 21h-6.172l-4.833-6.293L5.464 21h-3.07l7.167-8.155L2 3h6.328l4.37 5.752zm-1.076 16.172h1.7L7.404 4.732H5.58z" /></svg></button>
</div>

<style>
	.event {
		width: 100%;
		background: #666;
		padding: 5px 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		text-align: center;
		margin-bottom: 1em;
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: all 0.4s ease-in-out;
	}

	.show {
		opacity: 1;
		max-height: 100px;
	}

	.event button {
		padding: 2px;
	}

	.event p,
	.event button {
		margin: 0;
	}

	.event p {
		width: 100%;
	}
</style>
