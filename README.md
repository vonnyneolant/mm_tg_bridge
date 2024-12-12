# Mattermost Desktop (с возможностью отправки сообщений в Telegram bot)

[Mattermost](https://mattermost.com) is an open source platform for secure collaboration across the entire software development lifecycle. This repo is for the native desktop application that's built on [Electron](http://electron.atom.io/); it runs on Windows, Mac, and Linux.

Originally created as "electron-mattermost" by Yuya Ochiai.

![mm-desktop-screenshot](https://user-images.githubusercontent.com/52460000/146078917-e1ba8c1f-24e5-4613-8b4b-f3507422f4f2.png)

[![nightly-builds](https://github.com/mattermost/desktop/actions/workflows/nightly-builds.yaml/badge.svg)](https://github.com/mattermost/desktop/actions/workflows/nightly-builds.yaml)


# Требования

* NodeJS >= 18.0
* git 
* python3

# Установка

```
#branch tg!

git clone -b tg https://github.com/vonnyneolant/mm_tg_bridge
npm i
npm run build
```

# Запуск

```
run.bat
```

# Настройка

* Создать нового бота с [BotFather](https://timeweb.com/go?url=https%3A%2F%2Ft.me%2FBotFather&hash=cd9983e30a369b67a65802db524835fa3da74bbc)
* Добавить в файл конфигурации (`C:\Users\<ваш пользователь>\AppData\Roaming\Electron\config.json`) параметры подключения и фильтрации чатов

```json 
  "tg_token": "<ваш Telegram Token>",
  "tg_chat_id": <идентификатор вашего чата с ботом, можно получить отправив ему любое сообщение>,
  "mm_chats_wl": ["id1","id2"...],
  "mm_chats_bl": ["id1","id2"...],
```

Елси `mm_chats_wl` не пустой то уведомления будут приходить только от чатов из mm_chats_wl

Уведомления из чатов `mm_chats_bl` приходить не будут