<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="6">
          <b-card-group>
            <b-card class="center">
              <img :src="country.flag">
              <p>
                <b>Flag: </b>{{ country.flag }}
              </p>
              <h4>
                <b>Name: </b>
                <router-link :to="{name: 'country',params: { country: country.name.official },}">{{ country.name.common }}</router-link>
              </h4>
              <p>
                <b>Capital: </b>{{ country.capital[0] }}
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
