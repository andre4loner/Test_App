
const axios = require('axios')
const express = require('express')
const router = express.Router()


router.get('/:username', async (req, res) => {
  console.log('user called')
  const username = req.params.username
  try {
    const user = await axios.get(`https://torre.bio/api/bios/${username}`)
    res.status(200).json({ ...user.data })
  } catch (err) {
    return res.status(500).json(err)
  }
})

module.exports = router