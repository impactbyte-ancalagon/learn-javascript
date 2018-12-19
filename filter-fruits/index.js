const fruits = [
  { name: "Orange", taste: "sour" }, // fruit
  { name: "Banana", taste: "sweet" },
  { name: "Tangan", taste: "tak-pernah-ada" },
  { name: "Apple", taste: "sweet" },
  { name: "kiwi", taste: "sour" },
  { name: "Jengkol", taste: "bitter" },
  { name: "Durian", taste: "sweet" },
  { name: "Pineapple", taste: "sour" },
  { name: "Cinta", taste: "tak-pernah-ada" }
]

const categorizeFruits = (fruits, taste) => {
  const result = fruits.filter(fruit => fruit.taste === taste)
  return result
}

const sweetFruits = categorizeFruits(fruits, "sweet")
const sourFruits = categorizeFruits(fruits, "sour")
const bitterFruits = categorizeFruits(fruits, "bitter")
const takpernahadaFruits = categorizeFruits(fruits, "tak-pernah-ada")

console.log(sweetFruits)
console.log(sourFruits)
console.log(bitterFruits)
console.log(takpernahadaFruits)
