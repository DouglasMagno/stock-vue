<template>
  <v-container fluid>
    <v-sheet
        v-if="loading"
        color="grey"
        class="pa-3"
    >
      <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
      ></v-skeleton-loader>
    </v-sheet>
    <v-card v-else>
      <v-form @submit.prevent="send">
        <v-container>
          <v-card
              v-for="form in forms"
              :key="form.id"
          >
            <v-row>
              <v-col
                  cols="6"
              >
                <v-select
                    :items="products"
                    item-text="name"
                    item-value="id"
                    v-model="form.product_id"
                    v-on:change="changeAction"
                    label="Products"
                ></v-select>
              </v-col>
              <v-col
                  cols="6"
              >
                <v-text-field
                    v-model="form.movement"
                    type="number"
                    label="Movement"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-divider class="my-2"></v-divider>
          </v-card>
          <v-btn
              class="mr-4"
              type="submit"
          >
            Submit
          </v-btn>
        </v-container>
      </v-form>
      <v-btn
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
export default {
  name: "MovementForm",
  data() {
    return {
      movement: 0,
      selected: 0,
      loading: false,
      products: [],
      forms: [
        {
          id: 1,
          movement: 0,
          product_id: null
        }
      ]
    };
  },
  methods: {
    loadProducts() {
      this.loading = true;
      window.axios.get(`${window.hostApi}/products`).then((response) => {
        this.$set(this, "products", response.data);
        this.loading = false;
      });
    },
    changeAction(selected){
      this.selected = selected;
    },
    addForm() {
      this.forms.push({
        id: (this.forms.length + 1),
        movement: 0,
        product_id: null
      });
    },
    send(){
      this.loading = true;
      window.axios.post(`${window.hostApi}/history/create`, this.forms).then((response) => {
        if (response.status !== 200){
          alert("Fail to save movement");
        }
        this.loading = false;
        this.$router.push({name: 'History'});
      });
    }
  },
  mounted() {
    this.loadProducts();
  }
}
</script>

<style scoped>

</style>
