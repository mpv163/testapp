Ext.define('TestApp.store.Customers', {
    extend: 'Ext.data.Store',
    storeId: 'customers',

    autoLoad: false,

    sorters: [
        {
            property: 'name',
            direction: 'ASC'
        }
    ],
    fields: [
        { name: 'name' },
        {
            name: 'total', convert: function (v, record) {
                let cart = record.get('cart'),
                    amount = 0;

                Ext.Array.forEach(cart, function (cartItem) {
                    amount += cartItem.item.price * cartItem.amount;
                });

                return amount;
            }
        }
    ],

    proxy: {
        url: '/data.json',
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
