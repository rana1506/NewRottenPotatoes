const Review = require('../models/review');
const User = require('../models/user');
const Comment = require('../models/comment')
auth=require('../middleware/isLoggedin')

module.exports = function(app) {

  // INDEX
  app.get('/api/reviews', (req, res) => {
    //const currentUser = req.user;

    Review.find().lean().populate('author')
      .then(reviews => {
        if (!reviews) {
          return res
            .status(404)
            .json({"message": "reviews not found"});
        } else {
          console.log("reviews found") 
          return res
            .status(200)
            .json(reviews);
        //res.render('reviews-index', { reviews, currentUser });
        }
      })
      .catch(err => {
        console.log(err);
        return res.status(404).json(err);
      })
  })



  // CREATE
  app.post('/api/reviews', auth, (req, res) => {
      const userId = req.user._id;
      const review = new Review(req.body);
      review.author = userId;
      Review.create(review).then((review) => {
        User.findById(userId).then(user=>{
          user.reviews.unshift(review);
          user.save()
          res
          .status(201)
          .json(location);
        //res.redirect(`/reviews/${review._id}`) // Redirect to reviews/:id
      })
      }).catch((err) => {
        console.log(err.message)
        return res.status(400).json(err);
      })
  })

  // SHOW
  app.get('/api/reviews/:id', (req, res) => {
    //const currentUser = req.user;
    Review.findById(req.params.id).lean().populate('comments').populate('author')
      .then((review) => {
        if (!review) {
          return res
            .status(404)
            .json({"message": "review not found"});
        } else {
          return res
            .status(200)
            .json(review);
        }
        //res.render('reviews-show', { review, currentUser })
      })
      .catch((err) => {
        console.log(err.message);
        return res.status(404).json(err);
      });
  });



  // UPDATE
  app.put('/api/reviews/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body).lean()
      .then(review => {
        res.redirect(`/reviews/${review._id}`)
      })
      .catch(err => {
        console.log(err.message)
        return res.status(404).json(err);
      })
  })

  // DELETE
  app.delete('/api/reviews/:id', function (req, res) {
    console.log("DELETE review")
    Review.findByIdAndRemove(req.params.id).lean().then((review) => {
      res
              .status(204)
              .json(null);
      //res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
      return res.status(404).json(err);
    })
  })
  
}