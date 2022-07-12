CREATE TABLE scan_result (
  id UUID PRIMARY KEY,
  repository_name VARCHAR ( 50 ) NOT NULL,
  status VARCHAR ( 24 ) NOT NULL,
  findings JSONB,
  queued_at TIMESTAMP,
  scanning_at TIMESTAMP,
  finished_at TIMESTAMP
);

INSERT INTO scan_result (id, repository_name, status, findings, queued_at) 
VALUES ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'guardrails_demo', 'Queued', '[{"type":"sast","ruleId":"G402","location":{"path":"connectors/apigateway.go","positions":{"begin":{"line":60}}},"metadata":{"description":"TLS InsecureSkipVerify set true.","severity":"HIGH"}},{"type":"sast","ruleId":"G404","location":{"path":"util/util.go","positions":{"begin":{"line":32}}},"metadata":{"description":"Use of weak random number generator (math/rand instead of crypto/rand)","severity":"HIGH"}}]', current_timestamp);
