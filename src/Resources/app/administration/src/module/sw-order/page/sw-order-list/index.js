Shopware.Component.override('sw-order-list', {
    computed: {
        orderColumns() {
            let columns = this.getOrderColumns();

            /* Add company before customerName column */
            const index = columns.map(function (e) {
                return e.property;
            }).indexOf('orderCustomer.firstName');

            columns.splice(index, 0, {
                property: 'billingAddress.company',
                dataIndex: 'billingAddress.company',
                naturalSorting: true,
                label: 'sw-customer.detailAddresses.columnCompany',
                allowResize: true,
                align: 'left'
            });

            return columns;
        },
    },
});
