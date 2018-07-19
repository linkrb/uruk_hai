<template>
    <div class="u-1/4 u-1/1@mobile u-1/2@tablet">
        <div class="c-fact">
            <img class="c-fact__picto" :src="image" />
            <p class="c-fact__body">
                {{ body }}
            </p>
        </div>
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
      },
      image: {
        type: String
      }
    }
  }
</script>