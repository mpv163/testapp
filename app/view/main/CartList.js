Ext.define('TestApp.view.main.CartList', {
    extend: 'Ext.grid.Panel',
    xtype: 'cartlist',

    requires: [
        'TestApp.store.Cart'
    ],

    store: {
        type: 'cart'
    },

    columns: [
        { text: 'Item',  dataIndex: 'item', flex: 1 },
        { text: 'Item cost', dataIndex: 'price', flex: 1 },
        { text: 'Amount', dataIndex: 'amount', flex: 1 },
        { text: 'Price $', dataIndex: 'cost', flex: 2 }
    ]
});
