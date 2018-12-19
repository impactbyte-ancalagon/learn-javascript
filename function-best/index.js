const candidates = [
  "Tukul",
  "Ade Ray",
  "Agung Hercules",
  "Gal Gatot",
  "Roma Irama",
  "Gatotsaurus"
]

const superHeroes = [
  "Tony Stark",
  "Clark Kent",
  "Lady Diana",
  "Barry Alen",
  "Peter Parker"
]

const searchPartner = (partnerNames, partnerSearch) => {
  const filteredPartners = partnerNames.filter(partner => {
    return partner.toLowerCase().includes(partnerSearch)
  })
  return filteredPartners
}

const result = searchPartner(candidates, "ra")
const result2 = searchPartner(superHeroes, "ar")

console.log(result)
console.log(result2)
