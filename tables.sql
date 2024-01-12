CREATE TABLE `User` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `registrationDate` DATETIME NOT NULL,
  `lastActiveDate` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE (`email`)
) COLLATE='utf8mb4_0900_ai_ci';

CREATE TABLE `Session` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `startTime` DATETIME NOT NULL,
  `endTime` DATETIME NOT NULL,
  `studyPlan` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `User`(`id`)
);

CREATE TABLE `Topic` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `subjectArea` VARCHAR(500) NOT NULL,
  `masteryLevel` INT NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Progress` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `topicId` INT NOT NULL,
  `masteryScore` INT NOT NULL,
  `lastUpdated` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userId`) REFERENCES `User`(`id`),
  FOREIGN KEY (`topicId`) REFERENCES `Topic`(`id`)
);