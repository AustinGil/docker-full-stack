FROM nginx:latest

ARG domain

COPY ./template.conf /etc/nginx
RUN sed -i -e "s/TARGET_DOMAIN/$domain/" /etc/nginx/template.conf && mv /etc/nginx/template.conf /etc/nginx/nginx.conf
