const Show = require('../models/show');

const showController = {};

showController.index = (req, res) => {
  Show.findUsersShows(req.params.id)
    .then(shows => {
      res.json(shows);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

showController.create = (req, res) => {
  Show.create({
    title: req.body.title,
    tv_network: req.body.tv_network,
    web_channel: req.body.web_channel,
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
