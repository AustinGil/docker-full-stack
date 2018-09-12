#!/bin/bash

# -d "$DOMAIN" -d "www.$DOMAIN"   --non-interactive --text

certbot certonly --webroot -w /data/letsencrypt --agree-tos --non-interactive --text -d "$DOMAIN" --email "$EMAIL" --force-renewal
# Add --staging for testing purposes
# Add --force-renewal to force a renew

# Create directory with domain name within shared volume
mkdir -p /data/certs/"$DOMAIN"
# Move cert files to shared volume at folder name
cp /etc/letsencrypt/live/"$DOMAIN"/{cert.pem,privkey.pem} "$_"
