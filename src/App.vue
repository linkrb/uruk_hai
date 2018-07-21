<template>
    <div class="u-centered u-margin-top--lg u-align--center">

        <div class="c-dance-floor"></div>
        <h1 class="u-h3">Ready fo Vue ?</h1>

        <div class="c-search-bar">
            <search v-on:changeSearch="updateSearch($event)"></search>
            <BeatLoader :color="color" class="c-spinner c-search-bar__spinner" :loading="loading"></BeatLoader>
        </div>

        <transition-group class="o-grid o-grid--equal-height u-margin-top--md" name="c-fact-transition" tag="div">
            <facts
                v-for="fact in randomList(facts.slice(0, 12))"
                v-bind:key="fact.id"
                v-bind:body="fact.value"
                v-bind:image="fact.icon_url"
            ></facts>
        </transition-group>
    </div>
</template>

<script>
  import search from './components/search.vue';
  import facts from './components/facts.vue';
  import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

  const uruk =
  {
    "icon_url" : "https://cdnb.artstation.com/p/assets/images/images/000/230/531/large/carlos-cruz-urukhaifanart01.jpg",
    "id" : "1",
    "value" : "kra kru roooo krrrraaaaaaa krrrruuuuuuu !!! kkkrooooo rrraaaaaah"
  }

  export default {
    components: {search, facts, BeatLoader},
    data: function () {
      return {
        facts: [],
        loading: false,
        color: "#323335"
      }
    },
    methods: {
      updateSearch: function(searchQuery) {

        // hide facts animation
        this.facts = [];
        if (searchQuery.length > 2) {
          // loader visibility component
          this.loading = true;
          fetch('https://api.chucknorris.io/jokes/search?query='+searchQuery)
            .then(response => response.json())
            .then(json => {
                let arrayFacts = json.result;
                arrayFacts.unshift(uruk);
                this.facts = arrayFacts;
                this.loading = false;
              }
            )
        }
      },
      randomList: function(array){
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;
        var myRandomizedList;

        myRandomizedList = array.slice(0)

        while (0 !== currentIndex) {

          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          temporaryValue = myRandomizedList[currentIndex];
          myRandomizedList[currentIndex] = myRandomizedList[randomIndex];
          myRandomizedList[randomIndex] = temporaryValue;
        }

        return myRandomizedList;
      }
    }
  }
</script>