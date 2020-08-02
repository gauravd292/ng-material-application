import { Mobile } from './products/mobiles/mobile.model';

export const MOBILE_LIST: Mobile[] = [
  {
    id: 1,
    name: 'Mobile Prod 1 from DB',
    price: 40000.501,
    color: 'red',
    inStock: 5,
    country: 'india',
    prodImg: '../../../assets/img/1.jpeg',
    qty: 0,
  },
  {
    id: 2,
    name: 'Mobile Prod 2 from DB',
    price: 45000.501,
    color: 'green',
    country: 'us',
    inStock: 60,
    prodImg: '../../../assets/img/2.jpeg',
    qty: 0,
  },
  {
    id: 3,
    name: 'Mobile Prod 3 from DB',
    price: 5000.401,
    color: 'blue',
    country: 'japan',
    inStock: 0,
    prodImg: '../../../assets/img/3.jpeg',
    qty: 0,
  },
];
