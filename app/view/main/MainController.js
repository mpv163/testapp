Ext.define('TestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onLoadDataBtnHandler: function () {
        let me = this,
            vm = me.getViewModel(),
            customersStore = Ext.getStore('customers');

        customersStore.load();
        customersStore.on('load', function (store, recs) {
            let total = 0;

            Ext.Array.forEach(recs, function (rec) {
                total += rec.get('total');
            });

            vm.set('totalAmount', total);
        });
    },

    onCustomerSelected: function (table, record) {
        let me = this,
            view = me.getView(),
            grid = view.down('cartlist'),
            store = grid.getStore(),
            cartItems = record.get('cart'),
            cartData = [];

        Ext.Array.forEach(cartItems, function (item) {
            cartData.push({
                item: item.item.name,
                cost: item.item.price * item.amount,
                amount: item.amount,
                price: item.item.price
            });
        });

        store.loadData(cartData, false);
    }
});
