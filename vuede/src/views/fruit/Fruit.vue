<template>
  <div id="watch-example" v-bind:class="{active: isActive}">
    <p>苹果: $<input type="number" v-model="fruit[0]"></p>
    <p>雪梨: $<input type="number" v-model="fruit[1]"></p>
    <p>西瓜: $<input type="number" v-model="fruit[2]"></p>
    <p>提子: $<input type="number" v-model="fruit[3]"></p>
    <p>总价: ${{countTotalPrice}}</p>
  </div>
</template>


<script>
  export default {
    name: 'Fruit',
    data() {
      return {
        fruit: [50,60,70,80]
      }
    },
    computed: {
      countTotalPrice: function () {
         return this.fruit.reduce((sum,currentValue) => 
           { return sum += currentValue}
         )
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
  $isTrue: true;
  #watch-example {
    overflow: hidden;
  }
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
