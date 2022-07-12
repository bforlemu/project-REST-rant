const router = require('express').Router()

// GET /places
app.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/salad-bowel.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/meat-board.jpg'
  }]  
      
      res.render('places/index', { places })

  })

module.exports = router
