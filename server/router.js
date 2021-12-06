const express = require('express');
const { adminId, Article } = require('./api/posts');
const router = express.Router()
const posts =require('./api/posts');
const db = require('./db');
const { check, validationResult} = require("express-validator/check");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


//文章
router.get("/add/:id", (req, res) => {
 posts.Article.findOne( {_id: req.params.id})
    .then(Article => {
      res.json(Article);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/add", (req, res) => {
   posts.Article.find({} )
  .then(Article =>{
    res.json(Article);
  }).catch(err =>{
    res.json(err);
  });
});
  router.post('/add', (req, res,next) => {
      const Article = new posts.Article({
      title: req.body.title,
      postTime: req.body.postTime,
      content: req.body.content,
     });
    Article.save((err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    });
  });

  // 删除文章
  router.delete("/delete/:id", (req, res) => {
    Article.findOneAndRemove({
      _id: req.params.id
    })
      .then(Article => res.json({
        status:"success",
        message:"删除成功"
      }))
      .catch(err => res.json({
        status:"fail",
        message:"删除失败"
      }));
  });

  // 管理员
router.post(
  "/signup",
  [
      check("username", "Please Enter a Valid Username")
      .not()
      .isEmpty(),
      check("password", "Please enter a valid password").isLength({
          min: 6
      })
  ],
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({
              errors: errors.array()
          });
      }
      const {
          username,
          password
      } = req.body;
      try {
          let user = await posts.user.findOne({
              username
          });
          if (user) {
              return res.status(400).json({
                  msg: "User Already Exists"
              });
          }

          user = new posts.user({
              username,
              password
          });
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(password, salt);
          await user.save();
          const payload = {
              user: {
                  id: user.id
              }
          };
          jwt.sign(
              payload,
              "randomString", {
                  expiresIn: 10000
              },
              (err, token) => {
                  if (err) throw err;
                  res.status(200).json({
                      token
                  });
              }
          );
      } catch (err) {
          console.log(err.message);
          res.status(500).send("Error in Saving");
      }
  }
);

router.post(
  "/login", async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, password } = req.body;
    try {
      let user = await posts.user.findOne({
        username
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);


 module.exports = router;