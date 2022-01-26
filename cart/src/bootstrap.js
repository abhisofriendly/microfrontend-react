import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

// context/condition 1
// we are running the file in development in isolation
// we are using our local.html file
// which will definitely have the div with id of cart-dev

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#cart-dev');
  // assuming out containr app does not have an elemenet with id cart-dev
  if (el) {
    mount(el);
  }
}

// context/situation 2
// we are running the file in production
// which does not gurantee the div with id cart-dev will available

export { mount };
