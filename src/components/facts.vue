<template>
    <div class="c-fact">
        <p class="c-fact__body">
            {{ body }}
        </p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        searchText: ''
      }
    },
    props: {
      body: {
        type: String
      }
    }
  }
</script>