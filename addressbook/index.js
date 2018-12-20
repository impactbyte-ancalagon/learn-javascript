console.log("Address Book")

const DATA_CONTACTS = [
  {
    name: "Arsyad Sukma Ramadhan",
    nick: "Grandmaster",
    gender: "male",
    emails: ["blacklistdark1987@gmail.com", "181111072@mhs.stiki.ac.id"],
    phones: ["+6281284863756", "+6285785510045"],
    address: {
      country: "Indonesia",
      province: "Jawa Timur",
      city: "Malang",
      zip: "65154"
    },
    username: "arsyadsr09",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/arsyadsr09"
      },
      {
        name: "instagram",
        url: "https://instagram.com/arsyadsr09"
      }
    ]
  },
  {
    name: "Azerino Yogananta Gatot Subroto",
    nick: "Gatot / Yoga",
    gender: "male",
    emails: ["azerino25@gmail.com"],
    phones: ["+62895360159807", "+6281332466763"],
    address: {
      country: "Indonesia",
      province: "Jawa Timur",
      city: "Malang",
      zip: "65123"
    }
  },
  {
    name: "Ipul Saepulloh",
    nick: "Ipul",
    gender: "male",
    emails: ["ipulsaepulloh9@gmail.com"],
    phones: ["+62-858-8837-5440", "+62-859-7546-5858"],
    address: {
      country: "Indonesia",
      province: "Jawa Barat",
      city: "Karawang",
      zip: "41374"
    }
  }
]

const addressBook = {
  getData: data => {
    return data
  },
  getNames: data => {
    return data.map(item => {
      return item.name
    })
  },
  getFullContacts: data => {
    return data.map(item => {
      return `${item.name} (${item.phones[0]}) <${item.emails[0]}>`
    })
  },
  getFullAddresses: data => {
    return data.map(item => {
      const { city, province, country } = item.address
      return `${item.nick} lives in ${city}, ${province}, ${country}`
    })
  },
  displayConsole: data => {
    data.forEach(item => {
      console.log(item)
    })
  },
  displayHTML: data => {
    data.forEach(item => {
      document.write(`<li>${item}</li>`)
    })
  }
}

console.log(addressBook.getData(DATA_CONTACTS))

const fullContacts = addressBook.getFullContacts(DATA_CONTACTS)
const fullAddresses = addressBook.getFullAddresses(DATA_CONTACTS)

addressBook.displayConsole(fullContacts)
addressBook.displayConsole(fullAddresses)

addressBook.displayHTML(fullContacts)
addressBook.displayHTML(fullAddresses)
