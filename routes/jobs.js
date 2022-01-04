
const axios = require('axios')
const express = require('express')
const router = express.Router()


router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const job = await axios.get(`https://torre.bio/api/bios/${id}`)
    res.status(200).json({...job.data})
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router