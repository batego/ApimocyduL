CREATE TABLE `onbaseregister` (
  `ombaseid` int NOT NULL AUTO_INCREMENT,
  `event_id` varchar(200) NOT NULL,
  `event_name` varchar(200) NOT NULL,
  `send_date` varchar(200) NOT NULL,
  `order_id` varchar(200) NOT NULL,
  `url` text NOT NULL,
  `texto` text NOT NULL,
  `remotepath` varchar(200) NOT NULL,
  `filename` varchar(200) NOT NULL,
  `txtname` varchar(200) NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT 'N',
  `creationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creation_user` varchar(100) NOT NULL DEFAULT 'SYSTEM',
  PRIMARY KEY (`ombaseid`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


--npm  "promise-mysql": "^3.3.1"