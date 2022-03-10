Ext.define('TestApp.view.main.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',

    title: 'Customer',
    store: Ext.create('TestApp.store.Customers'),
    allowDeselect: true,
    border: true,
    flex: 1,
    responsiveConfig: {
        'width >= 600': {
            maxWidth: 400
        },
        'width < 600': {
            maxWidth: 200,
            minWidth: 150
        }
    },

    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 1 },
        { text: 'Amount $', dataIndex: 'total', flex: 3 }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'label',
                    bind: {
                        text: 'Total: {totalAmount} $'
                    }
                }
            ]
        }
    ],

    listeners: {
        select: 'onCustomerSelected'
    }
});
