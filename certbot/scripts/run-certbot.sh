#!/bin/bash

# certbot certonly --webroot -w /etc/letsencrypt -d "$DOMAIN" -d "www.$DOMAIN" --agree-tos --email "$EMAIL" --non-interactive --text

certbot certonly --webroot -w /data/letsencrypt --agree-tos --register-unsafely-without-email --non-interactive --text --staging -d "$DOMAIN"

cp /etc/letsencrypt/live/"$DOMAIN"/cert.pem /data/certs/"$DOMAIN"/cert.pem
cp /etc/letsencrypt/live/"$DOMAIN"/privkey.pem /data/certs/"$DOMAIN"/privkey.pem
