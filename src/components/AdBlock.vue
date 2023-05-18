<template>
	<section class="ad">
		<div class="ad__container">
			<h2 class="ad__text text-uppercase text-center">{{ ad }}</h2>
		</div>
	</section>
</template>
<script setup>
defineProps(['ad'])
</script>
<style lang="scss" scoped>
.ad {
	&__container {
		max-width: 1440px;
		height: 300px;
		background: #d9d9d9;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 470px) {
			width: 100vw;
			transform: translateX(-10px);
			height: 200px;
			padding: 20px 50px;
		}
	}

	&__text {
		color: #ffffff;
		font-weight: 600;
		font-size: 60px;
		line-height: 70px;

		@media (max-width: 470px) {
			font-size: 40px;
			line-height: 47px;
		}
	}
}
</style>