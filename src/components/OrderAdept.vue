<template>
	<section class="order__adept adept">
		<div class="adept__container" v-if="!isMobile">
			<div class="adept__body">
				<div class="adept__avatar"><img src="/icons/expert.svg" alt="expert"></div>
				<div class="adept__content">
					<div class="adept__header">
						<div class="adept__name"><span>Эксперт</span> Иванов Александр Дмитриевич</div>
						<div class="adept__exchange"><button class="text-uppercase">Изменить</button></div>
					</div>
					<div class="adept__date">Дата выезда эксперта: <time>22 мар. 2023 г</time></div>
					<div class="adept__btns">
						<q-btn no-wrap color="secondary" icon="mail" label="НАПИСАТЬ" />
						<q-btn no-wrap color="secondary" icon="phone" label="ПОЗВОНИТЬ" />
					</div>
				</div>
			</div>
		</div>
		<div class="adept__container-mob" v-else>
			<div class="adept__body-mob">
				<div class="adept__header-mob">
					<div class="adept__title-mob text-uppercase">Эксперт</div>
					<div class="adept__exchange"><button class="text-uppercase"
							style="font-size: 14px; font-weight: 600;">Изменить</button>
					</div>
				</div>
				<div class="adept__content-mob">
					<div class="adept__text-mob">
						<div class="adept__name-mob">Иванов Александр Дмитриевич</div>
						<div class="adept__date-mob">Дата выезда эксперта: <span>22 мар. 2023 г</span></div>
					</div>
					<div class="adept__image-mob"><img src="/icons/avatar.svg" alt="expert"></div>
				</div>
				<div class="adept__btns-mob">
					<q-btn no-wrap color="secondary" icon="phone" label="ПОЗВОНИТЬ" />
					<q-btn no-wrap color="secondary" icon="mail" label="НАПИСАТЬ" />
				</div>
			</div>
		</div>
	</section>
</template>
<script setup>
defineProps(['isMobile'])
</script>