/**
 * Order array props interface for OrderList component
 * @interface OrderArrayProps
 * @property {object[]} orders - Order
 * @property {number} orders.id - Order id
 * @property {string} orders.store - Order store
 * @property {string} orders.location - Order location
 * @property {number} orders.total - Order total
 * @property {string} orders.date - Order date
 * @property {string} orders.paymentNetwork - Order payment network
 */
interface OrderArrayProps {
  orders: {
    id: number;
    store: string;
    location: string;
    total: number;
    date: string;
    paymentNetwork: string;
  }[];
}

export default OrderArrayProps;
