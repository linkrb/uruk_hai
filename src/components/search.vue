<template>
    <div>
        <label class="u-h3" for="search">Hey enter query !</label>
        <input id="search" placeholder="3 charac please"
                v-bind:value="searchText"
                v-on:input="$emit('changeSearch', $event.target.value)"
        >
    </div>
</template>

<script>
  export default {
    data() {
      return {
        searchText: ''
      }
    }
  }
</script>