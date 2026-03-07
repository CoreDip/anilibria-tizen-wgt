# 🎌 AniLiberty TV
<img width="512" height="512" alt="icon" src="https://github.com/user-attachments/assets/407c0839-b1e4-42c7-866f-8ce6797173e3" />


> Неофициальный клиент [AniLibria](https://anilibria.tv) для **Samsung Smart TV (Tizen)** и **MediaStationX**

[![Release](https://img.shields.io/github/v/release/CoreDip/anilibria-tizen-wgt?label=скачать)](https://github.com/CoreDip/anilibria-tizen-wgt/releases/latest)

---

## ⬇️ Скачать

| Платформа | Ссылка |
|-----------|--------|
| **Samsung TV (.wgt)** | [Releases → AniLiberty.wgt](https://github.com/CoreDip/anilibria-tizen-wgt/releases/latest) |
| **MediaStationX / Web** | `https://coredip.github.io/anilibria-tizen-wgt/` |

---

## 📺 Установка на Samsung TV

### Вариант 1 — Developer Mode
1. На TV: **Настройки → Общие → Системный менеджер → Режим разработчика** → ввести IP ПК
2. Перезагрузить TV
3. В Tizen Studio: `Run As → Tizen Web Application` или установить `.wgt` через `Package Manager`

### Вариант 2 — MediaStationX
1. Открыть MediaStationX на TV
2. Добавить URL: `https://coredip.github.io/anilibria-tizen-wgt/`

---
![main](https://github.com/user-attachments/assets/e6cde226-fbb3-4a8c-8aee-735f3621fdac)
![anipage](https://github.com/user-attachments/assets/b930a04a-30d3-42f2-a484-f17a1a865517)


## ✨ Возможности

- 🏠 Главная с рядами: новые серии, онгоинги, топ по рейтингу
- 🔍 Каталог с поиском и фильтрами
- 📅 Расписание выхода серий
- 📂 Коллекции: Избранное, Смотрю, Запланировано, Просмотрено, Брошено, История
- ▶️ Плеер с HLS, выбором качества, скипом опенинга
- 💾 Сохранение прогресса (с синхронизацией аккаунта)
- 🎮 Полная поддержка пульта ДУ Samsung
- ⚡ Оптимизировано для Tizen (без тяжёлых анимаций)

---

## 🛠️ Разработка

```bash
# Клонировать
git clone https://github.com/CoreDip/anilibria-tizen-wgt.git

# Открыть index.html в браузере для разработки
# Или импортировать папку tizen/ в Tizen Studio как Existing Project
```

### Структура
```
anilibria-tizen-wgt/
├── index.html          ← всё приложение (single-file)
├── tizen/
│   ├── config.xml      ← Tizen манифест
│   └── icon.png
└── .github/workflows/
    └── build.yml       ← автосборка .wgt + GitHub Pages
```

---

## 📄 Лицензия

MIT — неофициальный проект, не связан с командой AniLibria
