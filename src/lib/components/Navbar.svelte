<div class="navbars">
	<span>Home</span>
	<span>Movie</span>
	<span>About</span>
</div>

<style>
	.navbars {
		display: flex;
		justify-content: center;
		align-items: center; /* 수직으로 아이템을 가운데 정렬 */
		background-color: #333; /* 배경 색상 */
		padding: 10px 0; /* 상하 여백 */
	}

	.navbars span {
		margin-left: 20px;
		margin-right: 20px;
		color: white; /* 글자 색상 */
		font-size: 1.2rem; /* 글자 크기 */
		cursor: pointer; /* 커서 모양 */
		padding: 10px 20px; /* 아이템의 여백 */
		transition: background-color 0.3s ease; /* 배경 색상 전환 효과 */
	}

	.navbars span:hover {
		background-color: #555; /* 호버 시 배경 색상 */
		border-radius: 5px; /* 호버 시 둥근 모서리 */
	}
</style>
