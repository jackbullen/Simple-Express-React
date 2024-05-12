import psycopg2
from psycopg2 import pool
import os
from dotenv import load_dotenv
load_dotenv()

host = os.getenv("DB_HOST")
port = os.getenv("DB_PORT")
dbname = os.getenv("DB_NAME")
user = os.getenv("DB_USER")
password = os.getenv("DB_PASS")
sslmode = "require"

# Build a connection string from the variables
conn_string = f"host={host} port={port} user={user} dbname={dbname} password={password} sslmode={sslmode}"

postgreSQL_pool = psycopg2.pool.SimpleConnectionPool(1, 20, conn_string)
if (postgreSQL_pool):
    print("Connection pool created successfully")

# Use getconn() to get a connection from the connection pool
conn = postgreSQL_pool.getconn()

cursor = conn.cursor()

# Create the tables
cursor.execute("CREATE TABLE course (pid VARCHAR(30) PRIMARY KEY, slug VARCHAR(200) UNIQUE, program_id VARCHAR(10), course_number VARCHAR(100), title VARCHAR(200), credit VARCHAR(100), hours VARCHAR(100), description VARCHAR(15000), notes VARCHAR(10000), link VARCHAR(200));")
cursor.execute("CREATE TABLE degree (code VARCHAR(100) PRIMARY KEY, cred VARCHAR(100), program_id VARCHAR(10), description VARCHAR(10000), link VARCHAR(200), requirements VARCHAR(50000), notes VARCHAR(10000));")
cursor.execute("CREATE TABLE meetinglocation (slug VARCHAR(200) PRIMARY KEY, building VARCHAR(100), room VARCHAR(10));")
cursor.execute("CREATE TABLE meetingtime (slug VARCHAR(200) PRIMARY KEY, term VARCHAR(6), start_time VARCHAR(6), end_time VARCHAR(6), monday BOOLEAN, tuesday BOOLEAN, wednesday BOOLEAN, thursday BOOLEAN, friday BOOLEAN, saturday BOOLEAN, sunday BOOLEAN);")
cursor.execute("CREATE TABLE program (subject_code VARCHAR(10) PRIMARY KEY, subject VARCHAR(100));")

# Import the data
with open('/tmp/courses_course.csv', 'r') as f:
    next(f) # skip header
    cursor.copy_expert("COPY course FROM STDIN DELIMITER ',' CSV HEADER", f)
    print("copying courses completed")

with open('/tmp/courses_degree.csv', 'r') as f:
    next(f)
    cursor.copy_expert("COPY degree FROM STDIN DELIMITER ',' CSV HEADER", f)
    print("copying degrees completed")

with open('/tmp/courses_meetinglocation.csv', 'r') as f:
    next(f)
    cursor.copy_expert("COPY meetinglocation FROM STDIN DELIMITER ',' CSV HEADER", f)
    print("copying meetinglocations completed")

with open('/tmp/courses_meetingtime.csv', 'r') as f:
    next(f)
    cursor.copy_expert("COPY meetingtime FROM STDIN DELIMITER ',' CSV HEADER", f)
    print("copying meetingtimes completed")

with open('/tmp/courses_program.csv', 'r') as f:
    next(f)
    cursor.copy_expert("COPY program FROM STDIN DELIMITER ',' CSV HEADER", f)
    print("copying programs completed")

# Clean up
conn.commit() # commit the transaction ;)
cursor.close()
conn.close()