FROM nginx:1.23.0

WORKDIR /usr/share/nginx/html

COPY ./dist/apps/dashboard .
COPY ./apps/dashboard/nginx.conf /etc/nginx/nginx.conf
