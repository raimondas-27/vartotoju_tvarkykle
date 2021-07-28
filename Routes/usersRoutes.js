const express = require('express');
const UsersItem = require("../models/users")
const router = express.Router();

//get all data
router.get('/api/allUsers', async (req, res) => {
   try {
      const allOrders = await UsersItem.find()
      res.json(allOrders);
   } catch (err) {
      res.status(500).json('internal error');
   }
});

// post new data
// the main for database
router.post('/api/allUsers/new', (req, res) => {
   console.log(req.body);
   const newUser = new UsersItem(req.body)
   try {
      const newUserToMade = newUser.save()
      res.json(newUserToMade);
   } catch (err) {
      res.status(500).json(err);
   }
});

//for the testing purposes
// router.post('/api/allUsers/new', (req, res) => {
//    const newUser = new UsersItem({
//       name: "Gytis",
//       age: 15,
//       email: "gytis@yahoo.com",
//       password: "namas234",
//    })
//
//    newUser
//        .save()
//        .then((result) => res.json(result))
//        .catch((err) => res.status(400).json({success: false, err}))
// });


// delete data

router.delete('/api/allUsers/delete/:id', async (req, res) => {
   try {
      const deletingUser = await UsersItem.findByIdAndDelete({_id: req.params.id})
      res.json(deletingUser);
   } catch (err) {
      res.status(500).json(err);
   }
});

//update data

router.put('/api/allUsers/edit/:id', async (req, res) => {
   console.log("req body", req.body)
   try {
      const updatingUser = await UsersItem.findByIdAndUpdate({_id: req.params.id},
          req.body)
      res.json({success: true, msg: updatingUser});
   } catch (err) {
      res.json(err);
   }
});

module.exports = router;