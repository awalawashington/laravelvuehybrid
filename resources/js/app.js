require('./bootstrap');

import { createApp } from 'vue';


let app=createApp({})

app.component('example-create', require('./components/ExampleCreate').default);
app.component('example-index', require('./components/ExampleIndex').default);
app.component('example-edit', require('./components/ExampleEdit').default);

app.mount("#app")
