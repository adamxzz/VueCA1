<template>
  <div>
    
    <b-container>
      <b-row>
        <b-col class="">
          <b-card-group>
            <b-card class="center">
              <img :src="country.flags.png">
              <p>
              </p>
              <h4>
                <b>Name: </b>
                <router-link :to="{name: 'singlecountries',params: { country: country.name.official },}">{{ country.name.common }}</router-link>
              </h4>
              <p>
                <b>Capital: </b>{{ country.capital[0] }}
              </p>
              <p>
                <b>Population: </b>{{ country.population }}
              </p>
              <hr />
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
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
.center{
  text-align: center;
}
</style>
