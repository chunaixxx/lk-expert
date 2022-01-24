<template>
	<div class="search">
		<VInput class="search__input input_search" placeholder="Что вы ищете?" />
		<VButton class="button_secondary search__submit">Найти</VButton>
	</div>
	<section class="catalog">
		<VAside class="catalog__aside">
			<div class="categories">
				<h2 class="categories__title">Категории</h2>
				<VCollapsible title="Безопасность" count="274">
					<label class="categories__label">
						<VCheckbox />
						<span>Общественная безопаность</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Безопасность и охрана имущества</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Информационная безопасность</span>
					</label>
				</VCollapsible>
				<VCollapsible title="Строительство и капремонт" count="314">
					<label class="categories__label">
						<VCheckbox />
						<span>Общественная безопаность</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Безопасность и охрана имущества</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Информационная безопасность</span>
					</label>
				</VCollapsible>
				<VCollapsible title="ЖКХ" count="54">
					<label class="categories__label">
						<VCheckbox />
						<span>Общественная безопаность</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Безопасность и охрана имущества</span>
					</label>
					<label class="categories__label">
						<VCheckbox />
						<span>Информационная безопасность</span>
					</label>
				</VCollapsible>
			</div>
		</VAside>

		<div class="catalog__main">
			<h2 class="catalog__title">Безопасность</h2>

			<div class="catalog__filters">
				<div class="catalog__filter-wrapper">
					<VDropDown
						class="caralog__filter"
						title="Город"
						:options="['1', '2']"
					/>
				</div>

				<div class="catalog__filter-wrapper">
					<VDropDown
						class="caralog__filter"
						title="Технология"
						:options="['1', '2']"
					/>
				</div>
				<div class="catalog__filter-wrapper">
					<VDropDown
						class="caralog__filter"
						title="Рынок"
						:options="['1', '2']"
					/>
				</div>
				<div class="catalog__filter-wrapper">
					<VDropDown
						class="caralog__filter"
						title="Оценка"
						:options="['1', '2']"
					/>
				</div>
				<div class="catalog__filter-wrapper">
					<VDropDown
						class="caralog__filter"
						title="Очерёдность"
						:options="['1', '2']"
					/>
				</div>
			</div>

			<button class="catalog__filters-reset">Сбросить фильтры</button>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
.search {
	display: flex;
	padding: 0 40px;

	&__input {
		width: 90%;
	}

	&__submit {
		width: 10%;
		min-width: 200px;
	}
}

.categories {
	margin-top: 50px;

	&__title {
		text-transform: uppercase;
		font-size: 30px;
		margin-bottom: 20px;
	}

	&__label {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 15px;
		cursor: pointer;
	}
}

.catalog {
	display: flex;

	&__main {
		width: 100%;
		padding-right: 40px;
	}

	&__aside {
		margin-top: 50px;
	}

	&__title {
		font-size: 40px;
		font-weight: 400;
		text-transform: uppercase;
		margin: 30px 0;
		color: $primary-500;
	}

	&__filters {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border: 2px solid $primary-200;
		border-radius: 7px;
		padding: 0px 40px;
		margin-bottom: 10px;
	}

	&__filter-wrapper {
		width: 100%;
		height: 52px;
	}

	&__filter {
		height: 100%;
	}

	&__filters-reset {
		color: $primary-400;
		text-decoration: underline;
		font-size: 14px;
		background-color: transparent;
		outline: none;
		border: 0;
		cursor: pointer;
		font-weight: bold;
		text-transform: uppercase;
	}
}
</style>
