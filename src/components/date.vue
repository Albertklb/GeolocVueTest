<template>
	<div id="date">
    <br>
		<h5>Mes jours de fermeture : </h5>
    <br>
		<calendar-view
			:show-date="showDate"
			@setShowDate="setShowDate"
			class="holiday-us-traditional holiday-us-official"
		/>
    br
    <button class="btn waves-effect waves-light" type="submit" name="action">Suivant
    <i class="material-icons right">Horaires fermeture </i>
  </button>
	</div>
</template>
<script>
	import CalendarView from "vue-simple-calendar"
	require("vue-simple-calendar/dist/static/css/default.css")
	require("vue-simple-calendar/dist/static/css/holidays-us.css")

	export default {
		name: 'date',
		data: function() {
			return { showDate: new Date() }
		},
		components: {
			CalendarView
		},
		methods: {
			setShowDate(d) {
				this.showDate = d;
			},
		}
	}
</script>
<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		color: #2c3e50;
		height: 67vh;
		width: 90vw;
		margin-left: auto;
		margin-right: auto;
	}
</style>