import { mobileHTML, desktopHTML } from './paymentMethodsTemplates.js';
import setHTML from '../utils/setHTML.js'

if (window.innerWidth <= 400) {
  setHTML(document.body, mobileHTML);
  
} else {
  setHTML(document.body, desktopHTML);
}
