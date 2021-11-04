<template>
<!-- searchbar component -->
  <div>
    <b-container>
      <b-row>
        <b-col>
          <b-button pill variant="outline-secondary">
            <b-icon icon="search"></b-icon>
          </b-button>
        </b-col>
        <b-col>
          <p class="searchtext">Search Countries</p>
        </b-col>
        <b-col class="search-box">
          <b-form-input size="sm" class="" placeholder="Search" type="text" v-model="term" v-on:keyup.enter="SearchCountry()"></b-form-input>
        </b-col>
        <b-col>
          <b-button size="sm" class="" type="submit" variant="primary" @click="SearchCountries()">Search</b-button> <!-- when the button is clicked it will run the search countries function -->
        </b-col>
      </b-row>
    </b-container>
    </div>
</template>

<script>
import axios from "axios";
const REST_URL = "https://restcountries.com/v3.1/"; // rest countries api url
export default {
  name: "SearchCountries",
  data() {
    return {
      countries: [],
    };
  },
  mounted() {},
  methods: {
    searchCountries() {
      if (!this.term) { // function for when a term is not being entered into the search box
        alert("Please enter a search term");
        this.$byToast.toast("Please enter a search term", {
          title: "Warning",
          variant: "danger",
          toaster: "b-toaster-top-center",
          autoHideDelay: 5000,
          solid: true,
        });
        return;
      }
      axios // actual search function for when a term is entered
        .get(`${REST_URL}name/${this.term}`)
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
</style>