const express = require('express')
const app = express()
const port = 3000

const products=
  [
  {
    "name": "Soft Cotton Night Pajama Set",
    "price": 1499,
    "size": ["S", "M", "L", "XL"],
    "brand": "LunaWear",
    "material": "100% Cotton",
    "color": "Pink",
    "style": "Regular Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Floral Printed Pajama",
    "price": 1699,
    "size": ["M", "L", "XL"],
    "brand": "DreamLady",
    "material": "Cotton Blend",
    "color": "Blue",
    "style": "Relaxed Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Silk Comfort Pajama Set",
    "price": 2499,
    "size": ["S", "M", "L"],
    "brand": "Silken",
    "material": "Silk",
    "color": "Maroon",
    "style": "Luxury Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Checked Winter Pajama",
    "price": 1899,
    "size": ["M", "L", "XL"],
    "brand": "CozyHome",
    "material": "Flannel",
    "color": "Red",
    "style": "Warm Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Stretch Lounge Pajama",
    "price": 1299,
    "size": ["S", "M", "L", "XL"],
    "brand": "FlexiWear",
    "material": "Cotton Spandex",
    "color": "Grey",
    "style": "Slim Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Printed Rayon Pajama",
    "price": 1399,
    "size": ["M", "L"],
    "brand": "UrbanSleep",
    "material": "Rayon",
    "color": "Green",
    "style": "Casual Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Classic Solid Pajama",
    "price": 1199,
    "size": ["S", "M", "L", "XL"],
    "brand": "EveryNight",
    "material": "Cotton",
    "color": "Black",
    "style": "Regular Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Satin Night Pajama",
    "price": 2299,
    "size": ["S", "M", "L"],
    "brand": "NightGlow",
    "material": "Satin",
    "color": "Purple",
    "style": "Elegant Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Polka Dot Pajama Set",
    "price": 1599,
    "size": ["M", "L", "XL"],
    "brand": "SweetDreams",
    "material": "Cotton Blend",
    "color": "White",
    "style": "Loose Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "High Waist Lounge Pajama",
    "price": 1799,
    "size": ["S", "M", "L"],
    "brand": "ComfortZone",
    "material": "Modal",
    "color": "Beige",
    "style": "Comfort Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Summer Breathable Pajama",
    "price": 1099,
    "size": ["S", "M", "L", "XL"],
    "brand": "AirSoft",
    "material": "Linen Cotton",
    "color": "Light Blue",
    "style": "Relaxed Fit",
    "category": "Women Pajamas"
  },
  {
    "name": "Velvet Winter Pajama",
    "price": 2699,
    "size": ["M", "L", "XL"],
    "brand": "WarmNest",
    "material": "Velvet",
    "color": "Navy Blue",
    "style": "Cozy Fit",
    "category": "Women Pajamas"
  }
]



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/womanproduct',(req,res)=>{
  res.json(products);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
