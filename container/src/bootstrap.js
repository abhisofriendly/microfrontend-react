import { mount as ProductMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'carts/CartShow';

console.log('container');
ProductMount(document.querySelector('#my-products'));
CartMount(document.querySelector('#my-cart'));
