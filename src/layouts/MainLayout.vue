<template>
	<q-layout class="container">
		<q-header class="header">
			<nav class="nav"><a href="#">Главная</a> / <a href="#">Профиль пользователя Иванов Степан </a></nav>
			<nav class="nav-mobile"><a href="#">Главная</a> / <a href="#">Личный кабинет</a> / <a href="">Профиль
					пользователя</a>
			</nav>
		</q-header>
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
<style lang="scss" scoped>
.container {
	max-width: 1340px;
	padding: 0 20px;
	margin: 0 auto;

	@media (max-width: 470px) {
		padding: 0 10px;
	}
}

.header {
	background: #fffdfd;
	height: 80px;
	display: flex;
	align-items: center;
	padding: 10px 70px;

	@media (max-width: 768px) {
		height: 50px;
		padding: 10px 20px;
	}
}

.nav-mobile {
	display: none;
	color: #858585;
	white-space: nowrap;

	a {
		color: #858585;
		font-weight: 400;
		font-size: 12px;
		line-height: 14px;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}

	@media (max-width: 768px) {
		display: block;
		margin: 0 auto;
	}
}

.nav {
	color: gray;

	@media (max-width: 768px) {
		display: none;
	}

	a {
		color: #858585;
		font-weight: 400;
		font-size: 14px;
		line-height: 16px;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>