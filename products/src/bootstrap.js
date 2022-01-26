import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// context/condition 1
// we are running the file in development in isolation
// we are using our local.html file
// which will definitely have the div with id of dev-products

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');
  // assuming out containr app does not have an elemenet with id dev-product
  if (el) {
    mount(el);
  }
}

// context/situation 2
// we are running the file in production
// which does not gurantee the div with id dev-products will available

export { mount };
