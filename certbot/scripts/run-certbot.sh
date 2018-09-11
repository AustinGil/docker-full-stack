#!/bin/bash

# certbot certonly --webroot -w /etc/letsencrypt -d "$DOMAIN" -d "www.$DOMAIN" --agree-tos --email "$EMAIL" --non-interactive --text

# certbot certonly --webroot -w /data/letsencrypt --staging --agree-tos --register-unsafely-without-email --non-interactive --text -d "$DOMAIN" --force-renewal

# mkdir -p /data/certs/"$DOMAIN"
# cp /etc/letsencrypt/live/"$DOMAIN"/{cert.pem, privkey.pem} "$_"
