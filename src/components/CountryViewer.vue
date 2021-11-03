<template>
<!-- this component shows all the countries in the countries page and links country viewer to search counrtries -->
  <div>
    <b-card-group>
      <b-card class="center">
        <img :src="country.flags.png" />
        <p></p>
        <h4>
          <b>Name: </b>
          <router-link
            :to="{
              name: 'singlecountries',
              params: { country: country.name.official },
            }"
            >{{ country.name.common }}</router-link
          >
        </h4>
        <p><b>Capital: </b>{{ country.capital[0] }}</p>
        <p><b>Region: </b>{{ country.region }}</p>
        <p><b>Population: </b>{{ country.population }}</p>

        <hr />
      </b-card>
    </b-card-group>
  </div>
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
