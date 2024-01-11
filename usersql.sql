CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `registrationDate` DATETIME NOT NULL,
  `lastActiveDate` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`email`)
) COLLATE='utf8mb4_0900_ai_ci';satssats