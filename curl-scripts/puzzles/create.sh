#!/bin/bash

API="http://localhost:4741"
URL_PATH="/puzzles"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "example": {
      "name": "'"${NAME}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

echo
