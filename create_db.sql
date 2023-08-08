create table students(
    rollno int primary key,
    s_name varchar(255) not null,
    dob varchar(255),
    s_address varchar(255),
    mobile int,
    gender varchar(30),
    email varchar(255),
    qualification varchar(255),
    hobbies varchar(255),
    category varchar(255)

)

create table admissions(
    id int primary key,
    admission_date date,
    joinning_date date,
    fees int,
    discount decimal
)

create table courses(
    id int primary key,
    name varchar(255),
    course_duration int,
    no_of_seats int,
    fees decimal
)

create table staff(
    id int primary key,
    name varchar(255),
    gender varchar(30),
    dob varchar(255),
    mobile int,
    email varchar(255),
    qualifications varchar(255),
    address varchar(255)
)

