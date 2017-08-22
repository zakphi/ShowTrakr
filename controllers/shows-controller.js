const Show = require('../models/show');

const showController = {};

showController.index = (req, res) => {
  Show.findAll()
    .then(shows => {
      res.json({
        message: 'ok',
        data: shows,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

showController.create = (req, res) => {
  Show.create({
    title: req.body.title,
    genre: req.body.genre,
    sched_time: req.body.sched_time,
    sched_day: req.body.sched_day,
    image_url: req.body.image_url,
    summary: req.body.summary,
  }, req.user.id).then(show => {
    res.json({
      message: 'Favorite added successfully!',
      data: show,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

showController.delete = (req, res) => {
  Show.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Favorite deleted successfully!',
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = showController;

