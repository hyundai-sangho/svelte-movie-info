<script>
	let inputText = '';
	let alertText = '';

	$: if (inputText.length > 16) {
		alertText = '입력한도 초과';
	} else {
		alertText = '';
	}
</script>

<div class="search-box">
	<div class="input-group">
		<input type="search" bind:value={inputText} />
		<h2>{inputText}</h2>
	</div>
</div>
<p class="text-center">inputText: {inputText}</p>
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
