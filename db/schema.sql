DROP DATABASE IF EXISTS bathroom_app;

CREATE DATABASE bathroom_app;

\c bathroom_app;

CREATE TABLE bathroomreviews (
    review_id SERIAL PRIMARY KEY,
    bathroom_name VARCHAR(255) NOT NULL,
    bathroom_address VARCHAR(255) NOT NULL,
    description TEXT,
    rating INTEGER NOT NULL
);
