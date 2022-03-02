BEGIN;
DROP TABLE IF EXISTS users,categories,bills CASCADE;



CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "user_name" varchar(100) NOT NULL,
  "password" varchar(20) NOT NULL
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar(100) NOT NULL
);

CREATE TABLE "bills" (
  "id" SERIAL PRIMARY KEY,
  "amount" numeric NOT NULL,
  "details" text NOT NULL,
  "user_id" int NOT NULL,
  "category_id" int NOT NULL
);

ALTER TABLE "bills" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "bills" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

COMMIT;


