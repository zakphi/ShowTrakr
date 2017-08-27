const db = require('../db/config');

const Show = {};

Show.findUsersShows = (userid) => {
  return db.manyOrNone(`SELECT * FROM shows
  WHERE user_id = $1`, [userid])
}

Show.create = (show, userid) => {
  return db.one(`
    INSERT INTO shows
    (title, tv_network, web_channel, sched_time, sched_day, image_url, summary, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `, [show.title, show.tv_network, show.web_channel, show.sched_time, show.sched_day, show.image_url, show.summary, userid]);
}

Show.destroy = (id) => {
  return db.none(`
    DELETE FROM shows
    WHERE id = $1
  `, [id]);
}

module.exports = Show;
