<template>
	<div class="sellermenu">
		<router-link :to="{ name: 'SellerShops' }">
			<p v-show="lang === 'en'">Restaurants</p>
			<p v-show="lang === 'es'">Restaurantes</p>
			<p v-show="lang === 'gl'">Restaurantes</p>
		</router-link>

		<router-link :to="{ name: 'SellerPlates' }">
			<p v-show="lang === 'en'">Plates and menus</p>
			<p v-show="lang === 'es'">Platos y menús</p>
			<p v-show="lang === 'gl'">Pratos e menús</p>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'SellerMenu',
	computed: {
		lang() {
			return this.$route.params.lang;
		}
	}
};
</script>

<style scoped>
.sellermenu {
	width: 100%;
	min-height: 3rem;
	background: #6d9a73;

	box-shadow: 0.2px 0.2px 0.2px #8b8b8b;

	padding: 0 10rem;
	display: grid;
	grid-template-columns: repeat(2, auto) 1fr;

	position: -webkit-sticky;
	position: sticky;
	top: 61.19px;
	left: 0;
	bottom: 0;
	z-index: 7;
}

.sellermenu a {
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: bold;
	color: black;
	border-right: 1px solid grey;

	text-decoration: none;
}

.sellermenu a:first-child {
	border-left: 1px solid grey;
}

.sellermenu a.router-link-exact-active {
	background: #54805a;
	color: white;
}

@media (max-width: 600px) {
	.sellermenu {
		padding: 0 1rem;
		top: 49px;
	}
}
</style>
