CREATE TABLE `consultation_requests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`country` varchar(255) NOT NULL,
	`region` varchar(255),
	`service_interest` text,
	`message` text,
	`source` varchar(50) NOT NULL DEFAULT 'website',
	`status` enum('new','contacted','qualified','closed') NOT NULL DEFAULT 'new',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `consultation_requests_id` PRIMARY KEY(`id`)
);
