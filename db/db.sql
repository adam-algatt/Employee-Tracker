DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL 
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) NOT NULL, 
    salary DECIMAL(9,2) NOT NULL, 
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    -- if (name > 30) {return 'https://i.imgflip.com/3ra2ny.png'}
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
    manager_id INTEGER,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
)



