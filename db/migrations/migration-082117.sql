\c tv_show_trackr_dev;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS shows (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    tv_network VARCHAR(255),
    web_channel VARCHAR(255),
    sched_time VARCHAR(255),
    sched_day VARCHAR(255),
    image_url TEXT,
    summary TEXT,
    user_id INT REFERENCES users(id)
);
