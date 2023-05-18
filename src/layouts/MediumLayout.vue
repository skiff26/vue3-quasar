<template>
	<q-layout class="container">
		<q-page-container>
			<router-view />
		</q-page-container>
	</q-layout>
</template>
<style lang="scss" scoped>
.container {
	max-width: 1480px;
	padding: 0 20px;
	margin: 0 auto;

	@media (max-width: 470px) {
		padding: 0 10px;
	}
}
</style>