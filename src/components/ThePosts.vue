<template>
	<section class="posts">
		<div class="posts__container">
			<div class="posts__header">
				<h2 class="posts__title">Все объявления<span> пользователя</span><strong>: 8</strong></h2>
				<a href="">Сортировать</a>
			</div>
			<div class="posts__body">
				<article class="posts__post card" v-for="i in 12" :key="i">
					<div class="card__image">
						<img class="img" src="/dog.png" alt="Dog">
						<a href="">
							<img src="/icons/heart.svg" alt="Heart">
						</a>
					</div>
					<div class="card__cont">
						<div class="card__type">Порода</div>
						<a href="" class="card__title text-uppercase">Заголовки в две строки</a>
						<div class="card__price">5000 ₽</div>
						<div class="card__info">
							<span>Город</span>
							<span>Дата</span>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>