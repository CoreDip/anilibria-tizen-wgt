# 🎌 AniLiberty — Samsung Tizen TV

> Неофициальный клиент [AniLibria](https://anilibria.tv) для **Samsung Smart TV (Tizen)** и **MediaStationX**

<img width="128" height="128" alt="icon" src="https://github.com/user-attachments/assets/407c0839-b1e4-42c7-866f-8ce6797173e3" />

[![Release](https://img.shields.io/github/v/release/CoreDip/anilibria-tizen-wgt?label=последняя+версия&color=red)](https://github.com/CoreDip/anilibria-tizen-wgt/releases/latest)
[![GitHub Pages](https://img.shields.io/badge/MediaStationX-открыть-blue)](https://coredip.github.io/anilibria-tizen-wgt/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ⬇️ Скачать / Открыть

| Платформа | |
|-----------|---|
| 📦 **Samsung TV (.wgt)** | [Скачать AniLiberty.wgt →](https://github.com/CoreDip/anilibria-tizen-wgt/releases/latest) |
| 🌐 **MediaStationX / Браузер** | `https://coredip.github.io/anilibria-tizen-wgt/` |

---

## 📸 Скриншоты

![main](https://github.com/user-attachments/assets/e6cde226-fbb3-4a8c-8aee-735f3621fdac)
![anipage](https://github.com/user-attachments/assets/b930a04a-30d3-42f2-a484-f17a1a865517)
![collections](https://github.com/user-attachments/assets/d1ae2dd7-ff49-4937-9ac8-578e03556f11)
![player](https://github.com/user-attachments/assets/8a2510ba-41b0-485e-a948-2229a3d384e2)

---

## ✨ Возможности

**🏠 Главная**
- Ряды: новые серии, онгоинги, популярное, топ по рейтингу
- Прогресс-бар просмотра прямо на карточке
- Ленивая подгрузка контента

**🔍 Каталог**
- Поиск по названию
- Фильтры: жанр, год, сезон, тип, статус
- Бесконечная подгрузка результатов

**📅 Расписание**
- Выход серий по дням недели с постерами

**📂 Коллекции**
- Вкладки: Избранное, Смотрю, Запланировано, Просмотрено, Брошено, История
- Добавление и удаление через контекстное меню

**▶️ Плеер**
- HLS-стриминг с нативной поддержкой на Tizen
- Выбор качества: 480p / 720p / 1080p
- Скип опенинга одной кнопкой
- Ускоренная перемотка зажатой стрелкой (5с → 10с → 30с)
- Список серий прямо в плеере, автопереход к следующей

**💾 Прогресс**
- Автосохранение позиции каждые 8 секунд
- Синхронизация с аккаунтом AniLibria
- Кнопка «Продолжить» с точного места остановки
- Сброс прогресса через контекстное меню

**👤 Аккаунт**
- Вход по логину и паролю
- Синхронизация коллекций с сервером

**🎮 Пульт ДУ**
- Полная навигация стрелками без мыши
- Двойное нажатие Back — меню выхода из приложения
- Долгое нажатие OK на карточке — контекстное меню
- Поддержка цветных кнопок (каталог, расписание, коллекции)

**⚡ Производительность**
- Оптимизировано для Tizen: без тяжёлых анимаций и blur-эффектов
- Виртуализация карточек в DOM
- Кэширование данных в памяти

---

## 📺 Установка

### Вариант 1 — Developer Mode (Tizen)
1. На TV: **Настройки → Общие → Системный менеджер → Режим разработчика** → ввести IP ПК
2. Перезагрузить TV
3. В Tizen Studio: `Run As → Tizen Web Application` или установить `.wgt` через `Package Manager`

### Вариант 2 — MediaStationX
1. Открыть MediaStationX на TV
2. Добавить URL: `https://coredip.github.io/anilibria-tizen-wgt/`

---

## 🛠️ Разработка

```bash
git clone https://github.com/CoreDip/anilibria-tizen-wgt.git
# Открыть index.html в браузере для разработки
# Или импортировать папку tizen/ в Tizen Studio как Existing Project
```

```
anilibria-tizen-wgt/
├── index.html           ← всё приложение (single-file)
├── tizen/
│   ├── config.xml       ← Tizen манифест
│   └── icon.png
└── .github/workflows/
    └── build.yml        ← автосборка .wgt + GitHub Pages
```

---

## 📄 Лицензия

MIT — неофициальный проект, не связан с командой AniLibria
