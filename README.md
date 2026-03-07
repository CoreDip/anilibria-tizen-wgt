# 🎌 AniLiberty TV

> Неофіційний клієнт [AniLibria](https://anilibria.tv) для **Samsung Smart TV (Tizen)**

[![Build](https://github.com/YOUR_USERNAME/aniliberty-tv/actions/workflows/build.yml/badge.svg)](https://github.com/YOUR_USERNAME/aniliberty-tv/actions)
[![Release](https://img.shields.io/github/v/release/YOUR_USERNAME/aniliberty-tv?label=download)](https://github.com/YOUR_USERNAME/aniliberty-tv/releases/latest)

---

## ⬇️ Завантажити

| Платформа | Посилання |
|-----------|-----------|
| **Samsung TV (.wgt)** | [Releases → AniLiberty.wgt](https://github.com/YOUR_USERNAME/aniliberty-tv/releases/latest) |
| **MediaStationX / Web** | `https://YOUR_USERNAME.github.io/aniliberty-tv/` |

---

## 📺 Встановлення на Samsung TV

### Варіант 1 — Developer Mode
1. На TV: **Налаштування → Загальні → Системний менеджер → Режим розробника** → ввести IP ПК
2. Перезавантажити TV
3. У Tizen Studio: `Run As → Tizen Web Application` або встановити `.wgt` через `Package Manager`

### Варіант 2 — USB (деякі моделі)
Скопіювати `AniLiberty.wgt` на USB-флешку, вставити в TV → Apps → встановити

### Варіант 3 — MediaStationX
1. Відкрити MediaStationX на TV
2. Додати URL: `https://YOUR_USERNAME.github.io/aniliberty-tv/`

---

## ✨ Можливості

- 🏠 Головна з рядами: нові серії, онгоінги, топ за рейтингом
- 🔍 Каталог з пошуком і фільтрами
- 📅 Розклад виходу серій
- 📂 Колекції: Обране, Дивлюся, Заплановано, Переглянуто, Закинуто, Історія
- ▶️ Плеєр з HLS, вибором якості, skip-опенінгу
- 💾 Збереження прогресу (з синхронізацією з акаунтом)
- 🎮 Повна підтримка пульта ДУ Samsung
- ⚡ Оптимізовано для Tizen (без важких анімацій)

---

## 🛠️ Розробка

```bash
# Клонувати
git clone https://github.com/YOUR_USERNAME/aniliberty-tv.git

# Відкрити index.html у браузері для розробки
# Або імпортувати папку tizen/ у Tizen Studio як Existing Project
```

### Структура
```
aniliberty-tv/
├── index.html          ← весь додаток (single-file)
├── tizen/
│   ├── config.xml      ← Tizen manifest
│   └── icon.png
└── .github/workflows/
    └── build.yml       ← автозбірка .wgt + GitHub Pages
```

---

## 📄 Ліцензія

MIT — неофіційний проєкт, не пов'язаний з командою AniLibria
