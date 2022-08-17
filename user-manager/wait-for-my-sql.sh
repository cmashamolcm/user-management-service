#!/bin/bash

while ! exec ~/dev/tcp/${MYSQL_HOST}/3306; do
    echo "Trying to connect to MySQL..."
    sleep 40
done

echo "Got the MySQL connection"

exec "$@"