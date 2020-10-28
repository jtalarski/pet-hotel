-- create a database named 
-- pethotel

CREATE TABLE "owner" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "owner_id" INT NOT NULL,
    "name" VARCHAR (80) NOT NULL,
    "breed" VARCHAR (80) NOT NULL,
    "color" VARCHAR (20) NOT NULL,
    "checked_in" DATE
);