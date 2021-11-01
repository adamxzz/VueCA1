<template>
  <div>
    <div>
      <b-container>
        <b-row>
          <b-img
            center
            src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80"
            fluid
            alt="Responsive image">
          </b-img>
          <br />
        </b-row>
        <br/>
          <h1 class="hero">
            Rest Countries API Website CA for Front End Development
          </h1>
        <br/>
        <b-row>
            <SearchCountries/>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import SearchCountries from "@/components/SearchCountries";

export default {
  name: "home",
  components: {
    SearchCountries,
  },
};
</script>

<style scoped>
* {
  background: #d8f3dc;
}
.hero {
  text-align: center;
  color: #74c69d;
  font-weight: lighter;
  letter-spacing: 1px;
}
.searchtext{
    color: #74c69d;
  font-size: 18px;
}
</style>