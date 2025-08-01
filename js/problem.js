let price = 6700;

if (price <= 6700) {
  //10% discount
  let discountPrice = (price * 10) / 100;
  let payAmount = price - discountPrice;
  console.log(`you got 10% discount.You will pay  ${payAmount}`);
} else {
  console.log(`you have to pay ${price}`);
}
