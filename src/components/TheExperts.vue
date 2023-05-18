<template>
	<div class="choose__experts experts">
		<h3 class="choose__subtitle bold" style="margin-top: 0px;">Доступные эксперты</h3>
		<div class="experts__list" v-if="!isSmall">
			<div class="experts__item" v-for="expert in experts" :key="expert.name">
				<div class="experts__left">
					<div class="experts__name">{{ expert.name }}</div>
					<q-rating v-model="expert.rating" max="5" size="20px" color="#FFC107" icon="star_border"
						icon-selected="star" icon-half="star_half" no-dimming readonly>
					</q-rating>
					<q-tooltip anchor="top end" self="bottom end" class="text-black bg-white shadow-4"
						style="font-size: 14px; border: 1px solid #C0C0C0;" :offset="[130, 10]">
						Загруженность эксперта
					</q-tooltip>
				</div>
				<div class="experts__center">
					<q-btn color="secondary" class="text-weight-bold" label="Выбрать" />
				</div>
				<div class="experts__right">
					<a href="" class="experts__more text-uppercase">Подробная информация</a>
				</div>
			</div>
		</div>
		<div class="experts__list" v-else>
			<div class="experts__item-mob" v-for="expert in experts" :key="expert.name">
				<div class="experts__body-mob">
					<div class="experts__name-mob">{{ expert.name }}</div>
					<div class="experts__info-mob">
						<div class="experts__rating">
							<q-rating v-model="expert.rating" max="5" size="20px" color="#FFC107" icon="star_border"
								icon-selected="star" icon-half="star_half" no-dimming readonly />
							<div class="experts__rating-text">Загруженность эксперта</div>
						</div>
						<div class="experts__more-mob">
							<q-btn color="secondary" class="text-weight-bold" label="Подробнее" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
defineProps(['isSmall'])
const experts = [
	{
		name: 'Иванов Александр Дмитриевич',
		rating: 3
	},
	{
		name: 'Петров Евгений Дмитриевич',
		rating: 1
	},
	{
		name: 'Иванов Александр Дмитриевич',
		rating: 1
	},
]
</script>