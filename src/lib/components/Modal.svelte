<script>
	export let data;
	export let selectedMovie;
	export let closeModal;
</script>

<div class="modal">
	<div class="inner">
		<h3>{data[selectedMovie].title}</h3>
		<p>{@html data[selectedMovie].story}</p>
		<button class="btn btn-danger" on:click={closeModal}>닫기</button>
	</div>
</div>

<style>
	.modal {
		background: rgba(0, 0, 0, 0.7);
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal .inner {
		background: #fff;
		width: 80%;
		padding: 20px;
		border-radius: 10px;
	}
</style>
