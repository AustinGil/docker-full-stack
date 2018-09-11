#!/bin/bash

certbot certonly --webroot -w /data/www -d "$DOMAIN" -d "www.$DOMAIN" --agree-tos --email "$EMAIL" --non-interactive --text

# cp /etc/letsencrypt/archive/"$DOMAIN"/cert1.pem /var/certs/cert1.pem
# cp /etc/letsencrypt/archive/"$DOMAIN"/privkey1.pem /var/certs/privkey1.pem
