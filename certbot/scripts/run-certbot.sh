#!/bin/bash

# certbot certonly --webroot -w /etc/letsencrypt -d "$DOMAIN" -d "www.$DOMAIN" --agree-tos --email "$EMAIL" --non-interactive --text

certbot certonly --webroot -w /data/letsencrypt --agree-tos --register-unsafely-without-email --non-interactive --text --staging -d "$DOMAIN" -d "www.$DOMAIN"

# cp /etc/letsencrypt/archive/"$DOMAIN"/cert1.pem /var/certs/cert1.pem
# cp /etc/letsencrypt/archive/"$DOMAIN"/privkey1.pem /var/certs/privkey1.pem
