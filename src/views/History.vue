<template>
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
          Name
        </th>
        <th class="text-left">
          Price
        </th>
        <th class="text-left">
          Previous Balance
        </th>
        <th class="text-left">
          Movement
        </th>
        <th class="text-left">
          Final Balance
        </th>
        <th class="text-left">
          Date
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in histories"
          :key="item.id"
      >
        <td>{{ item.product_name }}</td>
        <td>{{ currency(item.price) }}</td>
        <td>{{ item.previous_balance }}</td>
        <td>{{ item.movement }}</td>
        <td>{{ item.final_balance }}</td>
        <td>{{ date_formatter(item.created_at) }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  name: "Dashboard",
  data () {
    return {
      histories: [],
      loading: false
    }
  },
  methods: {
    fetchProducts(){
      this.loading = true;
      window.axios.get(`${process.env.VUE_APP_ROOT_API}/history`).then((response) => {
        this.$set(this, "histories", response.data);
        this.loading = false;
      });
    },
    currency(value){
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      }).format(value);
    },
    date_formatter(dateString){
      return new Date(dateString).toLocaleString();
    }
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>
<style>

</style>
