/**
 * Purchase item props interface for PurchaseItem component
 * @interface PurchaseItemProps
 * @property {object} purchase - Purchase
 * @property {number} purchase.id - Purchase id
 * @property {string} purchase.store - Purchase store
 * @property {string} purchase.location - Purchase location
 * @property {number} purchase.total - Purchase total
 * @property {string} purchase.date - Purchase date
 * @property {string} purchase.paymentNetwork - Purchase payment network
 */
interface PurchaseItemProps {
  purchase: {
    id: number;
    store: string;
    location: string;
    total: number;
    date: string;
    paymentNetwork: string;
  };
}

export default PurchaseItemProps;
