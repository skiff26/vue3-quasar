<template>
	<section class="user">
		<div class="user__main">
			<div class="user__right">
				<div class="user__avatar">
					<img src="/icons/avatar.svg" alt="Avatar">
				</div>
				<div class="user__info">
					<h2 class="user__name"><span>Пользователь</span> Иванов Степан</h2>
					<h3 class="user__location">Россия, Москва</h3>
					<div class="user__btns">
						<q-btn no-wrap color="secondary" icon="mail" label="НАПИСАТЬ" />
						<q-btn no-wrap color="secondary" icon="phone" label="ПОЗВОНИТЬ" />
					</div>
				</div>
			</div>
			<div class="user__from">На сайте с: <time>22 мар. 2023 г</time></div>
		</div>
	</section>
</template>