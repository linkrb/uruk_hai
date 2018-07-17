<template>
    <div>
        <search v-on:changeSearch="updateSearch($event)"></search>
        <facts
            v-for="fact in facts"
            v-bind:key="fact.id"
            v-bind:body="fact.value"
        ></facts>
    </div>
</template>

<script>
  import search from './components/search.vue';
  import facts from './components/facts.vue';

  export default {
    components: {search, facts},
    data: function () {
      return {
        facts : []
      }
    },
    methods: {
      updateSearch: function(searchQuery) {
        if (searchQuery.length > 2) {
          fetch('https://api.chucknorris.io/jokes/search?query='+searchQuery)
            .then(response => response.json())
            .then(json => {
                this.facts = json.result
              }
            )
        }
      }
    }
  }
</script>