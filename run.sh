#!/usr/bin/env bash

cd front && export $(cat .env.dist | xargs) && npm i && npm run prod
