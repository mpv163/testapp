Ext.define('TestApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'TestApp',
        totalAmount: 0
    },

    stores: {
        deliveryStore: {
            autoLoad: true,
            proxy: {
                url: '/delivery_types.json',
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});
