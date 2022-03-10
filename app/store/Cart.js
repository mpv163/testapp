Ext.define('TestApp.store.Cart', {
    extend: 'Ext.data.Store',

    alias: 'store.cart',
    storeId: 'cart',

    data: [],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
