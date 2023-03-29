/**
 * HeaderProps interface for Header component
 * @interface HeaderProps
 * @property {boolean} isMain - is main page
 * @property {boolean} isWhite - is white header
 * @property {boolean} isCartActive - is cart active
 */
interface HeaderProps {
  isMain?: boolean;
  isWhite?: boolean;
  isCartActive: boolean;
}

export default HeaderProps;