/* AniLiberty TV — Tizen remote key registration */
(function () {
  'use strict';

  var KEYS = [
    'Return',           // 10009 — кнопка назад
    'MediaPlay',
    'MediaPause',
    'MediaPlayPause',
    'MediaFastForward',
    'MediaRewind',
    'MediaStop',
    'ColorF0Red',       // 403 — червона
    'ColorF1Green',     // 404 — зелена
    'ColorF2Yellow',    // 405 — жовта
    'ColorF3Blue',      // 406 — синя
    'Info',             // 457 — Info
    'Tools',
    'Menu',
    '0','1','2','3','4','5','6','7','8','9'
  ];

  function registerKeys() {
    if (!window.tizen || !tizen.tvinputdevice) return;
    KEYS.forEach(function (k) {
      try { tizen.tvinputdevice.registerKey(k); } catch (e) {}
    });
  }

  /* EXIT key = 10182 — виходимо з додатку */
  document.addEventListener('keydown', function (e) {
    if (e.keyCode === 10182) {
      try { tizen.application.getCurrentApplication().exit(); } catch (err) {}
    }
  });

  /* Вимкнути правий клік / системне контекстне меню */
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  /* Запуск */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', registerKeys);
  } else {
    registerKeys();
  }
})();
