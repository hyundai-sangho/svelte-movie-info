const data = [
	{
		title: '파묘',
		year: 2024,
		category: '미스터리, 공포',
		likeCount: 0,
		imgUrl: 'https://i.namu.wiki/i/EWdG2Jtlu36U1-03moAiO7Hmh1waKlbB0DIEvamksSTTzWCsqDXxUiiPSdcmpAQjh_tUFOwAGhR7LX7f6U0wXQ.webp',
		story: '기이한 병이 대물림되는 집안의 의뢰를 받은 무당 화림은<br>무속인 봉길, 풍수사 상덕, 장의사 영근과 함께 불길한 기운이 느껴지는 묘를<br>파내기로 하고 끔찍한 진실과 마주한다.',
	},
	{
		title: '고질라 X 콩: 뉴 엠파이어',
		year: 2024,
		category: '어드벤처, 액션, SF',
		likeCount: 0,
		imgUrl: 'https://i.namu.wiki/i/3RMK_J5aX64dwFrr7Y_4Emd0-_VhL9AoM1d26JdoXXgRdqg8r-VX_28G1oBFsyotJXEdKI-YAIFHjO7aB4ywtQ.webp',
		story: '고질라와의 대결 이후 할로우 어스에서 동족을 찾아낸 콩은 숨겨진 위협과 조우하게 된다.<br>스카 킹의 지배 아래 놓인 할로우 어스를 보게 된 고질라는<br>콩과 힘을 합치기로 한다.',
	},
	{
		title: '듄: 파트 2',
		year: 2024,
		category: '액션',
		imgUrl: 'https://i.namu.wiki/i/VxcEqMWsxyC8YMTUWSHBdqOl8kuHSKbf3K88X5x9stxH_ncMyMkP19OA0Tro2dVBW7hYpY20xn2Krpq3WjPWjw.webp',
		likeCount: 0,
		story: '한 소년이 스파이시를 보호하는 거대한 생명체를 가진 사막의 유목민들의 구원자가 된다.<br>그 스파이스는 사람들을 여행자, 신비주의자 혹은 미치광이로 만들어 버린다.',
	},
];

let filteredMovies = data.filter((movie) => {
	return movie.title.includes('파묘');
});

console.log(filteredMovies);
