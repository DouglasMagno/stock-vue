import History from '@/views/History';
import {mount} from "@vue/test-utils";
import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
Vue.use(Vuetify);
window.axios = axios;

// eslint-disable-next-line no-undef
test('History Mount Component', () => {
    const wrapper = mount(History);
    expect(wrapper.html());
});

// eslint-disable-next-line no-undef
test('History data table', async () => {
    const testHistory = {
        "id": 13,
        "product_id": 53,
        "price": 4000,
        "previous_balance": 0,
        "movement": 5,
        "final_balance": 5,
        "created_at": "2020-11-02T13:27:25.000000Z",
        "updated_at": "2020-11-02T13:27:25.000000Z",
        "product_name": "NoteBook Dell"
    };
    const wrapper = await mount(History);
    await wrapper.setData({histories: [testHistory],
        loading: false
    });
    await expect(wrapper.html().includes(testHistory.product_name)).toBe(true);
});
