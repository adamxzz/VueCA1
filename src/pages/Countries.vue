<template>
  <div>
    <h1 class="title">All Countries</h1>
    <div class="search-box center">
      <input type="text" v-model="term" v-on:keyup.enter="searchCountries()" />
      <!-- applies search countries function -->
      <b-button
        class="float-end"
        variant="outline-success"
        @click="searchCountries()"
        >Search Country</b-button>
    </div>
    
      <b-card-group columns>
        <!--displays the country viewer component-->
      <CountryViewer
        v-for="country in countries"
        :key="country.ccn3"
        :country="country"
      />
      </b-card-group>
  </div>
</template>

<script>
// importing libraries
import axios from "axios";
import CountryViewer from "@/components/CountryViewer";
const REST_URL = "https://restcountries.com/v3.1/"; // getting rest api using const

export default {
  name: "AllCountries",
  components: {
    CountryViewer, // using countryviewer component
  },
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    axios // this axios function getsa ll the countries from the api
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        console.log(response.data);
        this.countries = response.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    // search countries function
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
      //gets said countries from the search term given
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
