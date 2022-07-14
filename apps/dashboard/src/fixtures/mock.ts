export const mockOneResponse = [{
  "id": "bidkmt5c-2c00-4a46-ab83-188fd2632920",
  "repositoryName": "thach",
  "status": "Queued",
  "findings": [
    {
        "type": "sast",
        "ruleId": "G402",
        "location": {
            "path": "connectors/apigateway.go",
            "positions": {
                "begin": {
                    "line": 60
                }
            }
        },
        "metadata": {
            "severity": "HIGH",
            "description": "TLS InsecureSkipVerify set true."
        }
    },
    {
        "type": "sast",
        "ruleId": "G404",
        "location": {
            "path": "util/util.go",
            "positions": {
                "begin": {
                    "line": 32
                }
            }
        },
        "metadata": {
            "severity": "HIGH",
            "description": "Use of weak random number generator (math/rand instead of crypto/rand)"
        }
    }
],
  "queuedAt": "2022-07-12T20:52:09.138Z",
  "finishedAt": null,
  "scanningAt": null
}]

export const mockTwoResponse = [{
  "id": "bidkmt5c-2c00-4a46-ab83-188fd2632920",
  "repositoryName": "thach",
  "status": "Queued",
  "findings": [
    {
        "type": "sast",
        "ruleId": "G402",
        "location": {
            "path": "connectors/apigateway.go",
            "positions": {
                "begin": {
                    "line": 60
                }
            }
        },
        "metadata": {
            "severity": "HIGH",
            "description": "TLS InsecureSkipVerify set true."
        }
    },
    {
        "type": "sast",
        "ruleId": "G404",
        "location": {
            "path": "util/util.go",
            "positions": {
                "begin": {
                    "line": 32
                }
            }
        },
        "metadata": {
            "severity": "HIGH",
            "description": "Use of weak random number generator (math/rand instead of crypto/rand)"
        }
    }
],
  "queuedAt": "2022-07-12T20:52:09.138Z",
  "finishedAt": null,
  "scanningAt": null
}]
