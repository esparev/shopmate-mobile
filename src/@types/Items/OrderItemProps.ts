/**
 * Order item props interface for OrderItem component
 * @interface OrderItemProps
 * @property {object} order - Order
 * @property {number} order.id - Order id
 * @property {string} order.store - Order store
 * @property {string} order.location - Order location
 * @property {number} order.total - Order total
 * @property {string} order.date - Order date
 * @property {string} order.paymentNetwork - Order payment network
 */
interface OrderItemProps {
  order: {
    id: number;
    store: string;
    location: string;
    total: number;
    date: string;
    paymentNetwork: string;
  };
}

export default OrderItemProps;
