/*Creating table for storing chats*/
CREATE TABLE chat_messages (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  worker_id INTEGER,
  message TEXT,
  intent TEXT
);

-- Create a table to store chat messages
CREATE TABLE chat_messages (
  id SERIAL PRIMARY KEY,
  user_id INT,
  is_worker BOOLEAN,
  message_text TEXT,
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- Create a table to store intents
CREATE TABLE chat_intents (
  id SERIAL PRIMARY KEY,
  tag VARCHAR(255) NOT NULL,
  pattern TEXT[],
  response TEXT[]
);
