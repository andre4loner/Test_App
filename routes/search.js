
const express = require('express')
const router = express.Router()
const axios = require('axios')


router.post('/', async (req, res) => {
  const query = req.body.query
  selection = req.body.radio
  let feedback = {}
  let results = {}

  const data = {
    "name": {
      "term": query
    }
  }
  try {
    if (selection === "people") {
      feedback = await axios.post('https://search.torre.co/people/_search?size=10&lang=en&aggregate=false', data, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      results = feedback.data.results
      res.status(200).json({
        "selection": "people",
        "data": results
      })
    } else {
      feedback = await axios.post('https://search.torre.co/opportunities/_search/?size=20&aggregate=false', data, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      results = feedback.data.results
      res.status(200).json({
        "selection": "jobs",
        "data": results
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})

module.exports = router