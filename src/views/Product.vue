<template>
  <v-container fluid>
    <v-row>
      <v-col
          class="d-flex"
          cols="3"
          sm="3"
      >
        <v-select
            v-if="products.some((p) => p.selected === true)"
            :items="actions"
            v-on:change="changeAction"
            label="Actions"
        ></v-select>
        <v-dialog
            v-model="deleteDialog"
            persistent
            max-width="290"
        >
          <v-card>
            <v-card-title class="headline">
              Delete?
            </v-card-title>
            <v-card-text>Are you sure you want to delete {{productsToDelete}}.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="green darken-1"
                  text
                  @click="deleteDialog = false"
              >
                Disagree
              </v-btn>
              <v-btn
                  color="green darken-1"
                  text
                  @click="deletePrograms"
              >
                Agree
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>

    </v-row>
    <v-card>
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
      <v-simple-table v-else>
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              #
            </th>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Quantity
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(item) in products"
              :key="item.id"
          >
            <td>
              <v-checkbox
                  v-model="item.selected"
              ></v-checkbox>
            </td>
            <td>
              {{ item.id }}
            </td>
            <td>
              <div>{{ item.name }}</div>
            </td>
            <td>
              <div>{{ currency(item.price) }}</div>
            </td>
            <td>{{ item.qtd_to_show }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
      <br>
      <v-card>
        <v-btn
            color="blue"
            dark
            absolute
            bottom
            right
            fab
            @click="createProduct"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      products: [],
      loading: false,
      deleteDialog: false,
      productsToDelete: '',
      actions: [
          "Edit",
          "Delete"
      ]
    }
  },
  methods: {
    fetchProducts() {
      this.loading = true;
      window.axios.get(`${window.hostApi}/products`).then((response) => {
        this.$set(this, "products", response.data);
        this.loading = false;
      });
    },
    createProducts(programs){
      window.axios.post(`${window.hostApi}/products/create`, programs).then((response) => {
        if (response.status !== 200){
          alert("Fail to save programs");
        }
        this.$router.push({name: 'Product'});
      });
    },
    updateProducts(editPrograms){
      this.loading = true;
      window.axios.put(`${window.hostApi}/products/update`, editPrograms).then((response) => {
        if (response.status !== 200){
          alert("Fail to update programs");
        }
        // this.fetchProducts();
      });
    },
    openDeleteDialog(){
      this.deleteDialog = true;
      const listProductsToDelete = [];
      for (let field in this.products){
        if (this.products[field].selected){
          listProductsToDelete.push(this.products[field].name);
        }
      }
      this.productsToDelete = listProductsToDelete.join(', ');
    },
    deletePrograms(){
      this.loading = true;
      const programsToDelete = this.products.filter((p) => p.selected === true).map(p => p.id);
      window.axios.delete(`${window.hostApi}/products/delete`, {data: programsToDelete}).then((response) => {
        if (response.status !== 200){
          alert("Fail to delete programs");
        }
        this.deleteDialog = false;
        this.fetchProducts();
      });
    },
    changeAction(selected){
      const listenersChange = {
        delete: this.openDeleteDialog,
        edit: this.goToFormEditProduct
      };

      if (listenersChange[selected.toLowerCase()]){
        listenersChange[selected.toLowerCase()]();
      }
    },
    currency(value) {
      if (typeof value === "string"){
        value = parseFloat(value);
      }
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      }).format(value);
    },
    inputsFormProducts(){
      return [
        {
          id: 1,
          cols: "3",
          md: "4",
          rules: [],
          name: "name",
          label: "Name Of Product",
        },
        {
          id: 2,
          cols: "3",
          md: "4",
          rules: [],
          name: "price",
          label: "Price of product",
        },
        {
          id: 3,
          cols: "3",
          md: "4",
          rules: [],
          name: "unit",
          label: "Unit of Product",
        },
        {
          id: 4,
          cols: "3",
          md: "4",
          rules: [],
          name: "qtd",
          label: "Initial Quantity",
        },
        {
          id: 5,
          cols: "3",
          md: "4",
          rules: [],
          name: "format",
          label: "Format of product",
        },
      ];
    },
    createProduct(){
      const payload = {
        inputs: this.inputsFormProducts(),
        submit: (forms) => {
          const productsToSave = forms.map((form) => {

            let changes = form.inputs.map((input) => {
              return {
                [input.name]: input.model
              };
            });
            let productObject = {};
            for (let field in changes){
              productObject = {...productObject, ...changes[field]}
            }
            return productObject;
          });

          this.createProducts(productsToSave);

        },
        action: 'create'
      };
      this.$router.push({name: 'FormValidation', params: payload});
    },
    getFormEditProduct(){
      let formEditProduct = [];
      const selectedProducts = this.products.filter(p => p.selected);
      let inputsFormEdit = this.inputsFormProducts();
      inputsFormEdit.push({
        id: 6,
        cols: "3",
        md: "4",
        rules: [],
        name: "id",
        label: "#",
      });
      let inputs = [];
      let input = null;
      for (let key in selectedProducts){

        for (let field in selectedProducts[key]){
          input = Object.assign({}, inputsFormEdit.find(i => i.name === field));
          if (Object.keys(input).length){
            input.model = selectedProducts[key][field];
            inputs.push(input);
          }
        }
        formEditProduct.push({
          inputs: inputs
        });
        input = null;
        inputs = [];
      }
      return formEditProduct;
    },
    goToFormEditProduct(){
      const payload = {
        inputs: this.inputsFormProducts(),
        submit: (forms) => {
          const productsToSave = forms.map((form) => {

            let changes = form.inputs.map((input) => {
              return {
                [input.name]: input.model
              };
            });
            let productObject = {};
            for (let field in changes){
              productObject = {...productObject, ...changes[field]}
            }
            return productObject;
          });

          this.updateProducts(productsToSave);
          this.$router.push({name: 'Product'})
          this.fetchProducts();

        },
        customForm: this.getFormEditProduct(),
        action: 'edit'
      };
      this.$router.push({name: 'FormValidation', params: payload});
    },
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>
<style>

</style>
