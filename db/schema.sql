DROP DATABASE IF EXISTS bathroom_app;

CREATE DATABASE bathroom_app;

\c bathroom_app;

CREATE TABLE bathroom (
    bathroom_id VARCHAR(250) PRIMARY KEY 
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    description TEXT,
    rating INTEGER NOT NULL,
    bathroom_id VARCHAR(250),
    FOREIGN KEY (bathroom_id) REFERENCES bathroom(bathroom_id) ON DELETE CASCADE
);
