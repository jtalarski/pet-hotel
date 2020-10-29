from app import app
from flask import jsonify, g


@app.route('/')
@app.route('/index')


def index():
    return "Hello, Justus!"

import psycopg2
#connect to db
con = psycopg2.connect(
  host="localhost",
  database="pethotel",
  user = "jman",
  password = "2e924da62788e899d42ed38349131c6557830233b1b1964542db4692dbf9a210"
)

#cursor
cur = con.cursor()

# cur.execute("INSERT INTO pet (owner_name, name, breed, color) VALUES(%s, %s, %s, %s)", (1, 'fido', 'lab', 'brown'))
#execute query
cur.execute("select * from pet")

rows = cur.fetchall()

for r in rows:
  print (f"id {r[0]} name {r[1]}")

#commit the transaction
con.commit()

#close the cursor
cur.close()

#close the connection
con.close()

@app.route('/pets', methods=["GET"])
def pets():
    index = 0
    while index < len(rows):
      return (rows[index])
      # change the condition (add one to the index)
      index = index + 1


