DROP TABLE IF EXISTS EMPLOYEES;
 
CREATE TABLE EMPLOYEES (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  phone VARCHAR(12) NOT NULL,
  address VARCHAR(250) DEFAULT NULL,
  status VARCHAR(8)  NOT NULL
);