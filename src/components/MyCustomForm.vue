<template>
  <v-form @submit.prevent="send">
    <v-container>
      <v-row>
        <v-col
            v-for="(input) in inputs"
            :cols="input.cols"
            :md="input.md"
            :key="input.id"
            v-show="input.name !== 'id'"
        >
          <v-text-field
              v-model="input.model"
              :rules="input.rules"
              :label="input.label"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-divider class="my-2"></v-divider>
      <v-btn
          v-if="last"
          class="mr-4"
          type="submit"
      >
        Submit
      </v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "MyCustomForm",
  props: ["inputs", "submit", "last"],
  methods: {
    send(){
      this.submit(this.inputs);
    }
  }
}
</script>

<style scoped>

</style>
