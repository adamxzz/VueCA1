<template>
  <div>
    <h1 class="title">All Countries</h1>
    <div class="search-box center">
      <input type="text" v-model="term" v-on:keyup.enter="searchCountries()" />
      <b-button
        class="float-end"
        variant="outline-success"
        @click="searchCountries()"
        >Search</b-button
      >
    </div>
    <div class="center">
      <CountryViewer
        v-for="country in countries"
        :key="country.ccn3"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CountryViewer from "@/components/CountryViewer";
const REST_URL = "https://restcountries.com/v3.1/";

export default {
  name: "AllCountries",
  components: {
    CountryViewer,
  },
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        this.countries = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    searchCountries() {
      if (!this.term) {
        alert("Please enter a country name");
        this.$byToast.toast("Please enter a country name", {
          title: "Warning",
          variant: "danger",
          toaster: "b-toaster-top-center",
          autoHideDelay: 6900,
          solid: true,
        });
        return;
      }
      axios
        .get(`${REST_URL}/name/${this.term}`)
        .then((response) => {
          console.log(response.data);
          this.countries = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
.title {
  text-align: center;
  color: #74c69d;
}
.center {
  align-content: center;
}
</style>
