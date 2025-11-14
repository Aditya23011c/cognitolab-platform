import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Researcher table
export const researcher = sqliteTable('researcher', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  institution: text('institution'),
  createdAt: text('created_at').notNull(),
});

// Experiment table
export const experiment = sqliteTable('experiment', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  researcherId: integer('researcher_id').notNull().references(() => researcher.id),
  title: text('title').notNull(),
  description: text('description'),
  status: text('status').notNull().default('draft'),
  configuration: text('configuration', { mode: 'json' }),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

// Participant table
export const participant = sqliteTable('participant', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  email: text('email'),
  age: integer('age'),
  gender: text('gender'),
  country: text('country'),
  participantCode: text('participant_code').notNull().unique(),
  createdAt: text('created_at').notNull(),
});

// Experiment Session table (renamed from session to avoid conflict with auth session)
export const experimentSession = sqliteTable('experiment_session', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  experimentId: integer('experiment_id').notNull().references(() => experiment.id),
  participantId: integer('participant_id').notNull().references(() => participant.id),
  status: text('status').notNull().default('pending'),
  startedAt: text('started_at'),
  completedAt: text('completed_at'),
  demographics: text('demographics', { mode: 'json' }),
});

// Trial table
export const trial = sqliteTable('trial', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: integer('session_id').notNull().references(() => experimentSession.id),
  trialNumber: integer('trial_number').notNull(),
  trialType: text('trial_type').notNull(),
  stimulus: text('stimulus').notNull(),
  response: text('response'),
  reactionTime: integer('reaction_time'),
  accuracy: integer('accuracy', { mode: 'boolean' }),
  timestamp: text('timestamp').notNull(),
  metadata: text('metadata', { mode: 'json' }),
});


// Auth tables for better-auth
export const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: integer("email_verified", { mode: "boolean" })
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .$defaultFn(() => new Date())
    .notNull(),
});

export const session = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).notNull(),
});

export const verification = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$defaultFn(
    () => new Date(),
  ),
});