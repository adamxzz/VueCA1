<template>
<!-- this component shows all the countries in the countries page and links country viewer to search counrtries -->
      <b-card class="center">
        <img :src="country.flags.png" /><!-- calling the flag from axios -->
        <h4>
          <b>Name: </b>
          <router-link
            :to="{
              name: 'singlecountries',
              params: { country: country.name.official },
            }"
            >{{ country.name.common }}</router-link
          ><!-- router link routes out country's name from axios asking for the offical name from the property -->
        </h4>
        <p><b>Capital: </b>{{ country.capital[0] }}</p><!-- grabs country capital  -->
        <p><b>Region: </b>{{ country.region }}</p><!-- grabs country region or continent  -->
        <p><b>Population: </b>{{ country.population }}</p> <!-- grabs countrys population  -->
        <hr />
      </b-card>
</template>

<script>
export default {
  name: "CountryViewer",
  props: {
    country: Object,
  },
};
</script>

<style>
.center {
  text-align: center;
}
</style>
