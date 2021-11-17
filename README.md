# Чат на Ruby с использованием ActionCable

Ruby on Rails приложение и использованием технологий AplicationCable, кототое позволяет пользователем без регистрации подключаться к комнате, а так же её создавать и переписываться.

### Ссылка: https://chactlunst.herokuapp.com

## Конфигурация:

 * Rails version: 6.1.4
 * Bootstrap 4
 * Redis + redis gem
 * PostgreSQL (для продакшена)
 * 3 канала: Room, Status
 * Язык: Русский

## Развертывание:
 1. Склонировать репазиторий.
 2. Сбандлить.
```
$ bundle install
```
 3. Сделать миграцию БД.
```
$ rails db:migrate
```
 4. Подключить к Heroku Redis.
```
$ heroku addons:add redistogo
```
