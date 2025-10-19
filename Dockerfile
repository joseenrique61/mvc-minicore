FROM richarvey/nginx-php-fpm:3.1.6

# Add npm
RUN apk add --update nodejs npm

WORKDIR /var/www/html

COPY . .
COPY .env.example .env

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER=1

# Image config
ENV SKIP_COMPOSER=1
ENV WEBROOT=/var/www/html/public
ENV PHP_ERRORS_STDERR=1
ENV RUN_SCRIPTS=1
ENV REAL_IP_HEADER=1

# Laravel config
ENV APP_ENV=production
ENV APP_DEBUG=false
ENV LOG_CHANNEL=stderr

# InstalL Composer dependencies
RUN composer install --no-dev

# Install node dependencies
RUN npm install
RUN npm run build

CMD ["/start.sh"]