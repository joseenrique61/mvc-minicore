#!/usr/bin/env bash
cd /var/www/html

# echo "Clearing compiled services..."
# php artisan clear-compiled

# echo "Discovering packages..."
# php artisan package:discover --ansi

echo "Generating key"
php artisan key:generate

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force