<template>
    <div>
        <div>
            <input v-model="message" placeholder="modifiez-moi">
        </div>

        <ul>
            <li v-for="fact in facts">
                {{ fact.value }}
            </li>
        </ul>
    </div>
</template>

<script>
  module.exports = {
    data: function () {
      return {
        facts : [],
        message: ''
      }

    },
    watch: {
        message : function (val) {
          if (val.length > 2) {
            fetch('https://api.chucknorris.io/jokes/search?query='+val)
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