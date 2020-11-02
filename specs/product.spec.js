import Product from '@/views/Product';
import {mount} from "@vue/test-utils";
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
Vue.use(Vuetify);
window.axios = axios;

// eslint-disable-next-line no-undef
test('Product Mount Component', () => {
    const wrapper = mount(Product);
    expect(wrapper.html());
});

// eslint-disable-next-line no-undef
test('Products data table', async () => {
    const testProduct = {
        "id": 53,
        "name": "NoteBook Dell",
        "price": 4000,
        "qtd": 3,
        "unit": "unid",
        "format": "int",
        "created_at": "2020-11-02T13:27:25.000000Z",
        "updated_at": "2020-11-02T13:28:01.000000Z",
        "qtd_to_show": "3 unid",
    };
    const wrapper = await mount(Product);
    await wrapper.setData({products: [testProduct],
        loading: false
    });
    await expect(wrapper.html().includes(testProduct.name)).toBe(true);
});
