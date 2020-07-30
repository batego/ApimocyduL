delimiter $$

CREATE TABLE `onbaseregister` (
  `ombaseid` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` varchar(100) NOT NULL,
  `event_name` varchar(200) NOT NULL,
  `send_date` varchar(30) NOT NULL,
  `order_id` varchar(200) NOT NULL,
  `url` text NOT NULL,
  `texto` text DEFAULT NULL,
  `host` varchar(200) NOT NULL,
  `port` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `clave` varchar(200) NOT NULL,
  `remotepath` varchar(200) NOT NULL,
  `filename` varchar(200) NOT NULL,
  `txtname` varchar(200) NOT NULL,
  `status` varchar(2) DEFAULT 'N',
  `creationdate` date DEFAULT curdate(),
  PRIMARY KEY (`ombaseid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4$$



CREATE DEFINER=`root`@`localhost` PROCEDURE `processonbase`(
in eventId varchar(100), 
in eventName varchar(200),
in sentDate varchar(500),
in orderId varchar(200), 
in url text,
in texto text, 
in hosting varchar(200), 
in ports varchar(200), 
in usuario varchar(200), 
in clave varchar(200), 
in remotePath varchar(200), 
in fileName varchar(200), 
in txtName varchar(200),
out valido varchar(200))
BEGIN
	declare _exist boolean default false;
	declare _event varchar(200);
    declare _status varchar(200) default 'false';
    
     IF eventId != "" THEN     
		SELECT event_id INTO _event FROM onbaseregister WHERE event_id = eventId ;        
		IF _event IS NOT NULL THEN        
		   SET _exist = TRUE;           
		ELSE        
			INSERT INTO onbaseregister (event_id, event_name, send_date, order_id, url, texto, host, port, usuario, clave, remotepath, filename, txtname, creationdate)
            VALUES (eventId, eventName, sentDate, orderId, url, texto, hosting, ports, usuario, clave, remotePath, fileName, txtName, now());
            SELECT 'true' INTO _status;            
		END IF;        
	 ELSE     
		SELECT 'false' INTO _status;	 
     END IF;
	-- SELECT 'some params fails' INTO resultado;	  
    SELECT _status;
END


SELECT * FROM onbaseregister;

call processonbase("AB1079AEDC237DFFE053EF02010AF7BD","biz:file:sftp:gdc","22-07-2020 17:45:02","38048078","https://s3.amazonaws.com/ludystorage-ludycom-cloud-01/200722174454-xEIhhFSgrNsPFvGQzHmPKVZaQZBdirju",
"38048078","186.118.160.163","22","LUDYCOM","Ludy2019","/reparaciones/17","38048078.pdf","reparaciones.txt","{}",@valid);