<script>
	import logo1 from './assets/svelte.svg';
	import logo2 from '/vite.svg';

	let title = '영화제목 1';
	let year = 2024;
	let category = '액션';

	let textRed = 'color: red;';

	const data = [
		{
			title: '고질라 X 콩: 뉴 엠파이어',
			year: 2024,
			category: '어드벤처, 액션, SF',
		},
		{
			title: '듄: 파트 2',
			year: 2024,
			category: '액션',
		},
	];
</script>

<mai>
	<h1>영화 정보</h1>
	<img src={logo1} alt="Svelte" />
	<img src={logo2} alt="Vite" />
	<div>
		{#each data as { title, year, category } (title)}
			<h3 class="bg-yellow" style={textRed}>{title}</h3>
			<p>개봉: {year}</p>
			<p>장르: {category}</p>
		{/each}
	</div>
</mai>

<style>
	.bg-yellow {
		background: gold;
		padding: 10px;
	}
</style>
