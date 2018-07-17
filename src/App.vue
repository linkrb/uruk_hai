<template>
    <div>
        <search v-on:changeSearch="updateSearch($event)"></search>
        <ul>
            <li v-for="fact in facts">
                {{ fact.value }}
            </li>
        </ul>
    </div>
</template>

<script>
  import search from './components/search.vue';

  export default {
    components: {search},
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