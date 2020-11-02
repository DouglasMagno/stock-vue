<template>
  <v-container fluid>
    <v-card>
      <MyCustomForm
          v-for="(form, key) in viewForms"
          :inputs="form.inputs"
          :submit="formSubmit"
          :key="form.id"
          :last="(key+1) === viewForms.length"
      />
      <v-btn
          v-if="!customForm"
          color="blue"
          dark
          absolute
          bottom
          right
          fab
          @click="addForm"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import MyCustomForm from "@/components/MyCustomForm";

export default {
  name: "FormValidation",
  components: {
    MyCustomForm
  },
  data() {
    return {
      viewForms: []
    };
  },
  props: ["action", "inputs", "submit", "customForm"],
  methods: {
    addForm() {
      this.viewForms.push({
        inputs: this.inputs.map((input) => {
          return Object.assign({model: ""}, input);
        }),
      });
    },
    formSubmit() {
      this.submit(this.viewForms);
    }
  },
  mounted() {
    this.viewForms = [
      {
        inputs: this.inputs.map((input) => {
          return Object.assign({model: ""}, input);
        }),
      }
    ];

    if (this.customForm){
      this.viewForms = this.customForm;
    }
  }
}
</script>

<style scoped>

</style>
