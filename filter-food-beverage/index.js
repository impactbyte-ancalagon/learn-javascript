const products = [
  "hot choco",
  "hot tea",
  "Cold soda",
  "cold tea",
  "spicy noodle",
  "spicy fried rice"
]

products.forEach((product, index) => {
  if (product.includes("spicy")) {
    console.log(`${index + 1}. ${product} (food)`)
  } else if (product.includes("hot")) {
    console.log(`${index + 1}. ${product} (drink)`)
  } else {
    console.log(`${index + 1}. ${product} (drink)`)
  }
})

const betterProducts = products.map(product => {
  if (product.toLowerCase().includes("spicy")) {
    return product + " (food)"
  } else if (product.toLowerCase().includes("hot")) {
    return product + " (beverage)"
  } else if (product.toLowerCase().includes("cold")) {
    return product + " (beverage)"
  } else {
    return product + " (unknown)"
  }
})

console.log(betterProducts)

betterProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product}`)
})
