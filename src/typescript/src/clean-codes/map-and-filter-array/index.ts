interface IProduct {
  id: number;
  name: string;
  quantity: number;
}

interface IRequest {
  idToDecrement: number;
  products?: IProduct[];
}

const mockedProducts: IProduct[] = [
  {
    id: 1,
    name: 'Product 1',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Product 2',
    quantity: 0,
  },
  {
    id: 3,
    name: 'Product 3',
    quantity: 1,
  },
];

/**
 * @function decrementQuantityFromProduct
 *
 * @description Decrease by one the quantity from product and remove it from array if it reaches zero
 * @param {number} idToDecrement
 * @param {IProduct[]} products
 */
function mapAndFilterArray({
  idToDecrement,
  products = mockedProducts,
}: IRequest): IProduct[] {
  /*
    Common solving: You are going through the array 2 times and this is unnecessary
    and not performatic

    return products
    .map(product =>
      product.id === idToDecrement && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )
    .filter(product => product.quantity > 0 && product); */

  return products.reduce((result: IProduct[], product) => {
    const updatedProduct = { ...product };

    if (updatedProduct.id === idToDecrement) {
      updatedProduct.quantity -= 1;
    }

    if (updatedProduct.quantity > 0) {
      result.push(updatedProduct);
    }

    return result;
  }, []);
}

export default mapAndFilterArray;
