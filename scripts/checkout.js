import { renderCheckoutHeaderHtml } from "./checkout/checkoutHeader.js";
import { renderCartItemsHtml } from "./checkout/orderSummary.js";
import { renderPaymentSummaryHtml } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js'

renderCartItemsHtml();
renderPaymentSummaryHtml();
renderCheckoutHeaderHtml();