CREATE TABLE `experiment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`researcher_id` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`status` text DEFAULT 'draft' NOT NULL,
	`configuration` text,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL,
	FOREIGN KEY (`researcher_id`) REFERENCES `researcher`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `participant` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text,
	`age` integer,
	`gender` text,
	`country` text,
	`participant_code` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `participant_participant_code_unique` ON `participant` (`participant_code`);--> statement-breakpoint
CREATE TABLE `researcher` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`institution` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `researcher_email_unique` ON `researcher` (`email`);--> statement-breakpoint
CREATE TABLE `session` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`experiment_id` integer NOT NULL,
	`participant_id` integer NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`started_at` text,
	`completed_at` text,
	`demographics` text,
	FOREIGN KEY (`experiment_id`) REFERENCES `experiment`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`participant_id`) REFERENCES `participant`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trial` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`trial_number` integer NOT NULL,
	`trial_type` text NOT NULL,
	`stimulus` text NOT NULL,
	`response` text,
	`reaction_time` integer,
	`accuracy` integer,
	`timestamp` text NOT NULL,
	`metadata` text,
	FOREIGN KEY (`session_id`) REFERENCES `session`(`id`) ON UPDATE no action ON DELETE no action
);
