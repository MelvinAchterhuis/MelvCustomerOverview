Shopware.Component.override('sw-customer-list', {
    computed: {
        customerColumns() {
            let columns = this.getCustomerColumns();

            columns.unshift({
                property: 'vatIds[0]',
                dataIndex: 'vatIds[0]',
                naturalSorting: true,
                label: 'sw-customer.card.labelVatId',
                allowResize: true,
                align: 'left'
            });

            columns.unshift({
                property: 'defaultBillingAddress.company',
                dataIndex: 'defaultBillingAddress.company',
                naturalSorting: true,
                label: 'sw-customer.detailAddresses.columnCompany',
                allowResize: true,
                align: 'left'
            });

            return columns;
        },
    },
});
