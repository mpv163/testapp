Ext.define('TestApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TestApp.view.main.MainController',
        'TestApp.view.main.MainModel',
        'TestApp.view.main.CustomerList',
        'TestApp.view.main.CartList'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',

    items: [
        {
            xtype: 'container',
            region: 'north',
            layout: 'hbox',
            margin: '5 10',
            items: [
                {
                    xtype: 'button',
                    width: 100,
                    text: 'Load Data',
                    handler: 'onLoadDataBtnHandler',
                    style: 'border-radius: 20px/10px;'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            region: 'center',
            defaults: {
                height: '100%',
                margin: 5,
                border: true
            },
            items: [
                {
                    xtype: 'customerlist',
                    reference: 'customer_list'
                },
                {
                    xtype: 'panel',
                    title: 'Cart',
                    layout: 'vbox',
                    responsiveConfig: {
                        'width >= 600': {
                            bodyPadding: 10,
                            defaults: {
                                width: '60%',
                                labelWidth: 60
                            }
                        },
                        'width < 600': {
                            bodyPadding: 5,
                            defaults: {
                                width: '100%',
                                labelWidth: 60
                            }
                        }
                    },
                    flex: 2,
                    bind: {
                        hidden: '{!customer_list.selection}',
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            bind: {
                                value: '{customer_list.selection.name}'
                            }
                        },
                        {
                            xtype: 'combobox',
                            queryMode: 'remote',
                            fieldLabel: 'Delivery',
                            displayField: 'name',
                            valueField: 'itemId',
                            editable: false,
                            bind: {
                                store: '{deliveryStore}',
                                value: '{customer_list.selection.delivery}'
                            }
                        },
                        {
                            xtype: 'cartlist',
                            width: '100%',
                            flex: 1,
                            border: true
                        }
                    ]
                }
            ]
        }
    ]
});
