<template>
  <div>
    <h1 class="title">Single Countries</h1>
    <b-container>
      <b-row class="header">
        <b-col>
          <img :src="country.flags.png" />
        </b-col>
        <b-col>
          <h1>{{ $route.params.country }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3>{{ $route.params.country }}</h3>
          <h4>Country Offical Name: {{ country.name.offical }}</h4>
          <h4>Region: {{ country.region }}</h4>
          <h4>Region: {{ country.subregion }}</h4>
          <h4>Population: {{ country.population }}</h4>
          <h4>Capital City: {{ country.capital }}</h4>
          <h4>Languages: {{ country.languages }}</h4>
          <h4>Currency: {{ country.currencies }}</h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SingleCountries",
  components: {},
  data() {
    return {
      country: [],
    };
  },
  mounted() {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`
      )
      .then((response) => {
        console.log(response.data);
        this.country = response.data[0];
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.title {
  text-align: center;
  color: #74c69d;
}
.header {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
