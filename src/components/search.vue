<template>
    <div>
        <label for="search">Hey enter query !</label>
        <input
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