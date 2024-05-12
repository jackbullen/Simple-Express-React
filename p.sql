CREATE TABLE course (
    pid VARCHAR(30) PRIMARY KEY,
    slug VARCHAR(200) UNIQUE,
    program_id VARCHAR(10),
    course_number VARCHAR(100),
    title VARCHAR(200),
    credit VARCHAR(100),
    hours VARCHAR(100),
    description VARCHAR(15000),
    notes VARCHAR(10000),
    link VARCHAR(200)
);

CREATE TABLE degree (
    code VARCHAR(100) PRIMARY KEY,
    cred VARCHAR(100),
    program_id VARCHAR(10),
    description VARCHAR(10000),
    link VARCHAR(200),
    requirements VARCHAR(50000),
    notes VARCHAR(10000)
);

CREATE TABLE meetinglocation (
    slug VARCHAR(200) PRIMARY KEY,
    building VARCHAR(100),
    room VARCHAR(10)
);

CREATE TABLE meetingtime (
    slug VARCHAR(200) PRIMARY KEY,
    term VARCHAR(6),
    start_time VARCHAR(6),
    end_time VARCHAR(6),
    monday BOOLEAN,
    tuesday BOOLEAN,
    wednesday BOOLEAN,
    thursday BOOLEAN,
    friday BOOLEAN,
    saturday BOOLEAN,
    sunday BOOLEAN
);

CREATE TABLE program (
    subject_code VARCHAR(10) PRIMARY KEY,
    subject VARCHAR(100)
);

CREATE TABLE section (
    id SERIAL PRIMARY KEY,
    course_id VARCHAR(30),
    meetingtime_id VARCHAR(200),
    meetinglocation_id VARCHAR(200),
    term VARCHAR(6),
    section_number VARCHAR(100),
    crn VARCHAR(100),
    status VARCHAR(100),
    capacity VARCHAR(100),
    enrolled VARCHAR(100),
    waitlist_capacity VARCHAR(100),
    waitlist_enrolled VARCHAR(100),
    link VARCHAR(200)
);