import { TranslationSet } from "./translation-set";

const russianTranslationSet: TranslationSet = {
  trayIconShow: "Открыть",
  trayIconSettings: "Настройки",
  trayIconQuit: "Выйти",

  userConfirmationProceed: "Выполнить?",

  noSearchResultsFoundDescription: "",
  noSearchResultsFoundTitle: "Ничего не найдено",

  refreshingIndexesPending: "Индексы обновляются",

  ueliCommandClearCaches: "Очистить кэш",
  ueliCommandClearCachesDescription: "Очищает кэш всех плагинов",
  ueliCommandEditSettingsFile: "Изменить файл настроек",
  ueliCommandEditSettingsFileDescription:
    "Изменить файл настроек текстовым редактором по умолчанию",
  ueliCommandExit: "Выйти",
  ueliCommandExitDescription: "Выйти из ueli",
  ueliCommandOpenSettings: "Настройки",
  ueliCommandOpenSettingsDescription: "Изменить настройки",
  ueliCommandRefreshIndexes: "Обновить индексы",
  ueliCommandRefreshIndexesDescription: "Обновить индексы всех плагинов",
  ueliCommandReload: "Перезагрузить",
  ueliCommandReloadDescription: "Перезагрузить ueli",

  generalErrorTitle: "Что-то пошло не так",
  generalErrorDescription: "Проверьте логи для получения большей информации",

  successfullyRefreshedIndexes: "Индексы успешно обновлены",
  successfullyClearedCaches: "Кэш успешно отчищен",
  successfullyUpdatedconfig: "Конфиг успешно обновлен",
  successfullyClearedExecutionLog: "Лог выполнения успешно очищен",

  commandlineSearchResultDescription: "Выполнить {{command}}",

  noFavoritesFoundDescription: "Лог выполнения пуст",
  noFavoritesFoundTitle: "Избранного не найдено",

  // settings
  settings: "Настройки",

  generalSettingsMenuSection: "Основное",
  pluginSettingsMenuSection: "Плагины",

  generalSettings: "Основное",
  generalSettingsLanguage: "Язык",
  generalSettingsLogExecution: "Лог выполнения",
  generalSettingsPersistentUserInput: "Сохранять пользовательский ввод",
  generalSettingsAutostartApp: "Запускать ueli вместе с Windows",
  generalSettingsShowTrayIcon: "Показывать иконку в трее",
  generalSettingsClearCachesOnExit: "Очищать кэш при выходе",
  generalSettingsHotKey: "Горячая главиша",
  generalSettingsRescanIntervalEnabled: "Переодическое сканирование включено",
  generalSettingsRescanInterval: "Интервал сканирования (в секундах)",
  generalSettingsShowAlwaysOnPrimaryDisplay:
    "Всегда показывать окно на главном экране",
  generalSettingsRememberWindowPosition: "Запомнить позицию окна",
  generalSettingsExportSettings: "Экспортировать настройки",
  generalSettingsSuccessfullyExportedSettings:
    "Настройки успешно экспортированы",
  generalSettingsImportSettings: "Импортировать настройки",
  generalSettingsImportFileFilterJsonFiles: "JSON файлы",
  generalSettingsImportErrorInvalidConfig:
    "Ошибка импорта: файл настроек содержит ошибки",
  generalSettingsResetAllSettings: "Восстановить все настройки по умолчанию",
  generalSettingsResetWarning:
    "Вы хотите вернуть все основные настройки по умолчанию. Вы уверены?",
  generalSettingsResetAllSettingsWarning:
    "Вы хотите вернуть ВСЕ настройки по умолчанию. Вы уверены?",
  generalSettingsClearExecutionLogWarning:
    "Вы хотите очистить лог выполнения. Вы уверены?",
  generalSettingsHideMainWindowAfterExecution: "Скрывать окно после выполнения",
  generalSettingsHideMainWindowOnBlur: "Скрывать окно при потере фокуса",
  generalSettingsDecimalSeparator: "Десятичный разделитель",
  generalSettingsCheckingForUpdate: "Проверка доступности обновления",
  generalSettingsDownloadUpdate: "Скачать обновление",
  generalSettingsDownloadingUpdate: "Обновление загружается",
  generalSettingsLatestVersion: "У вас самая последняя версия!",
  generalSettingsErrorWhileCheckingForUpdate: "Ошибка при поиске обновлений",
  clearExecutionLog: "Очистить лог выполнения",
  openDebugLog: "Открыть лог отладки",
  openTempFolder: "Открыть временную папку",

  hotkeyKeyBackspace: "Backspace",
  hotkeyKeyDelete: "Delete",
  hotkeyKeyDown: "Стрелка вниз",
  hotkeyKeyEnd: "End",
  hotkeyKeyEscape: "Escape",
  hotkeyKeyHome: "Home",
  hotkeyKeyInsert: "Insert",
  hotkeyKeyLeft: "Стрелка влево",
  hotkeyKeyPageDown: "PageDown",
  hotkeyKeyPageUp: "PageUp",
  hotkeyKeyPlus: "Плюс",
  hotkeyKeyReturn: "Return",
  hotkeyKeyRight: "Стрелка вправо",
  hotkeyKeySpace: "Space",
  hotkeyKeyTab: "Tab",
  hotkeyKeyUp: "Up",
  hotkeyModifierAlt: "Alt",
  hotkeyModifierAltGr: "AltGr",
  hotkeyModifierCommand: "Cmd",
  hotkeyModifierControl: "Ctrl",
  hotkeyModifierOption: "Option",
  hotkeyModifierShift: "Shift",

  appearanceSettings: "Внешний вид",
  appearanceSettingsWindowWidth: "Ширина окна (в пикселях)",
  appearanceSettingsMaxSearchResultsPerPage:
    "Максимальное кол-во результатов на страницу",
  appearanceSettingsSearchResultHeight: "Высота блока результатов (в пикселях)",
  appearanceSettingsSmoothScrolling: "Плавная прокрутка",
  appearanceSettingsUserInputHeight: "Ширина поля ввода (в пикселях)",
  appearanceSettingsShowDescriptionOnAllSearchResults:
    "Показывать описания результатов",
  appearanceSettingsShowSearchIcon: "Показывать иконку в поле ввода",
  appearanceSettingsShowSearchResultNumbers: "Показывать кол-во результатов",
  appearanceSettingsResetWarningMessage:
    "Вы хотите восстановить настройки внешнего вида по умолчанию. Вы уверены?",
  appearanceSettingsAllowTransparentBackground: "Прозрачность фона",
  appearanceSettingsFontFamily: "семейство шрифтов",
  appearanceSettingsUserInputBorderRadius:
    "Пользовательский радиус границы ввода",
  appearanceSettingsUserInputBottomMargin:
    "Нижнее поле пользовательского ввода (в пикселях)",
  appearanceSettingsSearchResultsBorderRadius:
    "Радиус границы результатов поиска",
  appearanceSettingsScrollbarBorderRadius: "Радиус полосы прокрутки",
  appearanceSettingsBorderRadiusDescription:
    "Это значение CSS, поэтому вам нужно добавить «px», например, «10px» или отдельные углы, например «10px 0px 10px 5px».",

  settingsUserInputTitle: "Пользовательский ввод",
  settingsSearchResultsBoxTitle: "Окно результатов поиска",
  settingsScrollbarTitle: "Полоса прокрутки",
  settingsGeneralTitle: "Основное",

  colorThemeSettings: "Цветовые темы",
  colorThemeSettingsImportColorTheme: "Импортировать тему",
  colorThemeSettingsExportColorTheme: "Экспортировать тему",
  colorThemeSettingsResetWarning:
    "Вы хотите вернуть тему по умолчанию. Вы уверены?",
  colorThemeExportSucceeded: "Тема успешно экспортирована",
  colorThemeExportFailed: "Экспортирование не удалось",
  colorThemeImportSucceeded: "Тема успешно импортирована",
  colorThemeImportFailed: "Импортирование не удалось",
  colorThemeInvalidColorTheme: "Не верная тема",
  colorThemePresets: "Пресеты",
  colorthemeUserInputBackgroundColor: "Фон поля ввода",
  colorThemeUserInputTextColor: "Цвет текста в поле ввода",
  colorThemeSearchResultsBackgroundColor: "Цвет поля с результатами",
  colorThemeSearchResultsItemActiveBackgroundColor:
    "Цвет фона активной строки результатов поиска",
  colorThemeSearchResultsItemActiveTextColor:
    "Цвет текста на выбранной строке результатов",
  colorThemeSearchResultsItemActiveDescriptionColor:
    "Цвет описания на выбранной строке результатов",
  colorThemeSearchResutlsItemNameTextColor:
    "Цвет имени активной строки результатов",
  colorThemeSearchResultsItemDescriptionTextColor:
    "Цвет описания результатов поиска",
  colorThemeScrollbarForegroundColor: "Основной цвет скролл-бара",
  colorThemeScrollbarBackgroundColor: "Фон скролл-бара",

  colorPicker: "Пипетка",

  applicationSearchSettings: "Поиск приложений",
  applicationSearchSettingsDescription: `Этот плагин позволяет искать приложения на компьютере. Вы можете указать папки, куда вы устанавливаете приложения и расширения файлов, которые необходимо расценивать как приложения.`,
  applicationSearchSettingsApplicationFolders: "Папки с приложениями",
  applicationSearchSettingsApplicationFolder: "Папка с приложениями",
  applicationSearchSettingsFolderPath: "Путь к папке",
  applicationSearchSettingsRemoveAction: "Удалить",
  applicationSearchSettingsAddApplicationFolder: "Добавить папку",
  applicationSearchSettingsApplicationFileExtensions: "Расширения приложений",
  applicationSearchSettingsApplicationFileExtension: "Расширение файла",
  applicationSearchSettingsAddApplicationFileExtension:
    "Добавить расширение файла",
  applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" не правильное расширение`,
  applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} не папка"`,
  applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} не существует"`,
  applicationSearchSettingsFolderValidationError: `Произошла ошибка в ходе проверки "{{value}}"`,
  applicationSearchSettingsUseNativeIcons:
    "Использовать нативные иконки (выключение может повысить производительность)",

  searchEngineSettings: "Система поиска",
  searchEngineSettingsDescription: `Система поиска необходима для индексации результатов как ярлыки, файлы и т.д.`,
  searchEngineSettingsFuzzyness: "Точность поиска",
  searchEngineSettingsFuzzynessDescription: "0 = точный, 1 = не точный",
  searchEngineSettingsStrict: "Точный",
  searchEngineSettingsFuzzy: "Не точный",
  searchEngineSettingsBlacklist: "Черный список",
  searchEngineSettingsMaxSearchResults: "Максимальное число результатов",
  searchEngineSettingsResetWarning:
    "Вы хотите вернуть все настройки по умолчанию. Вы уверены?",

  shortcutSettings: "Ярлыки",
  shortcutSettingsDescription: `Этот плагин позволяет быстро открывать файлы или сайты на вашем компьютере по средствам ярлыков.`,
  shortcutSettingsTableType: "Тип",
  shortcutSettingsTableName: "Имя",
  shortcutSettingsTableExecutionArgument: "Агрумент выполнения",
  shortcutSettingsTableDescription: "Описание",
  shortcutSettingsTableTags: "Теги",
  shortcutSettingsTableIcon: "Иконка",
  shortcutSettingsTableEdit: "Редактировать",
  shortcutSettingsTableDelete: "Удалить",
  shortcutSettingsAddShortcut: "Добавить ярлык",
  shortcutSettingsEditModalImageUrl: "URL картинки",
  shortcutSettingsEditModalSvgString: "строка SVG",
  shortcutSettingsEditModalColor: "Цвет",
  shortcutSettingsEditModalGoogleWebsite: "открывает Google",
  shortcutSettingsEditModalDownloadsFolder: "Папка загрузок",
  shortcutSettingsEditModalCommand: "Команда",
  shortcutSettingsInvalidShortcutErrorMessage: "Неправильный ярлык",
  shortcutSettingsTagPlaceholder: "Добавьте тег и нажмите enter",
  shortcutSettingsTypeUrl: "URL",
  shortcutSettingsTypeCommandlineTool: "Командная строка",
  shortcutSettingsEditModalCommandLinetoolDescription:
    "Редактировать файл в Visual Studio Code",
  shortcutSettingsNeedsUserConfirmation: "Необходимость подтверждения",

  translationSettingsTranslation: "Переводчик",
  translationSettingsDescription: `Этот плагин позволяет быстро переводить слова или короткие предложения. Исползуется неофициальное API перевод (https://github.com/imankulov/linguee-api) для Linguee (https://linguee.de), функция может быть не стабильна.`,
  translationSettingsDebounceDelay:
    "Задержка между запросами (в миллисекундах)",
  translationSettingsMinSearchTermLength:
    "Минимальное кол-во символов для запроса",
  translationSettingsPrefix: "Префикс",
  translationSettingsSourceLanguage: "Исходный язык",
  translationSettingsTargetLanguage: "Язык перевода",

  everythingSearch: "Поиск с Everything",
  everythingSearchSettingDescription: `Этот плагин позволяет использовать Everything для поиска файлов и папок на вашем компьютере. Для этого вы должны установить "Everything" и "интерфейс Everything для командной строки" from https://www.voidtools.com/ru-ru/downloads/. После установить, необходимо указать путь до файла 'es.exe' ниже.`,
  everythingSearchPathToBinary: `Путь к "es.exe"`,
  everythingSearchPrefix: "Префикс",
  everythingSearchMaxSearchResults: "Максимальное кол-во результатов",
  everythingSearchPathToBinaryFilterName: "Выполняемые файлы",

  mdfindSearch: "Поиск mdfind",
  mdfindSettingsDescription:
    "Этот плагин позволяет использовать встроенные средства macOS для поиска файлов и папков на вашем компьютере.",
  mdfindSearchDebounceDelay: "Задержка между запросами (в миллисекундах)",
  mdfindSearchPrefix: "Префикс",
  mdfindSearchMaxSearchResults: "Максимальное кол-во результатов",

  websearch: "Поисковые системы",
  websearchSettingDescription: `Этот плагин позволяет быстро пользоваться поиском в интернете, а при необходимости добавить свою поисковую систему.`,
  websearchEngines: "Поисковые системы",
  websearchEditingModalTitleAdd: "Добавить систему",
  websearchEditingModalTitleEdit: "Редактировать систему",
  websearchName: "Имя",
  websearchPrefix: "Префикс",
  websearchUrl: "URL",
  websearchSuggestionUrl: "Предложение URL",
  websearchIcon: "Иконка",
  websearchPriority: "Приоритет",
  websearchIsFallback: "Запасная",
  websearchEncodeSearchTerm: "Кодировать поисковой запрос",
  websearchInvalidWebsearchEngine: "Неправильная поисковая система",
  websearchDescription: `Искать "{{search_term}}" в {{websearch_engine}}`,

  fileBrowser: "Файловый браузер",
  fileBrowserSettingsDescription: `Этот плагин позволяет вам просматривать директории и их содержимое на вашем компьютере. Для поиска укажите абсолютный путь к директории, которую хотите просмотреть.`,
  fileBrowserSettingsMaxSearchResults: "Максимальное число результатов",
  fileBrowserOptionsShowHiddenFiles: "Показывать скрытые файлы",
  fileBrowserOptionsBlackList: "Черный список",
  fileBrowserOptionsBlackListPlaceholder: "Файл или имя папки",

  operatingSystemCommands: "Функции ОС",
  operatingSystemCommandsSettingsDescription: `Этот плагин позволяет быстро выполнять базовые функции ОС, например, выключить или перезагружить компьютер.`,

  operatingSystemSettings: "Настройки ОС",
  operatingSystemSettingsSettingsDescription:
    "Этот плагин позволяет быстро пользоваться настройками ОС.",

  macOsShutdown: "Выключить",
  macOsShutdownDescription: "Выключить компьютер",
  macOsRestart: "Перезагрузить",
  macOsRestartDescription: "Перезагрузить компьютер",
  macOsLogout: "Выйти",
  macOsLogoutDescription: "Выйти из учетной записи текущего пользователя",
  macOsSleep: "спать",
  macOsSleepDescription: "спать компьютер",
  macOsLock: "Заблокировать",
  macOsLockDescription: "Заблокировать компьютер",

  windowsShutdown: "Выключить",
  windowsShutdownDescription: "Выключить компьютер",
  windowsRestart: "Перезагрузить",
  windowsRestartDescription: "Перезагрузить компьютер",
  windowsSignout: "Выйти",
  windowsSignoutDescription: "Выйти из учетной записи Windows",
  windowsLock: "Заблокировать",
  windowsLockDescription: "Заблокировать компьютер",
  windowsSleep: "Сон",
  windowsSleepDescription: "Войти в режим сна",
  windowsHibernation: "Гибернация",
  windowsHibernationDescription: "Войти в режим гибернации",

  calcuator: "Калькулятор",
  calculatorCopyToClipboard: "Нажмите enter, чтобы скопировать",
  calculatorDescription:
    "Этот плагин позволяет быстро выполнять простые математические рассчеты.",
  calculatorPrecision: "Точность",

  openUrlWithBrowser: "Открыть в браузере",
  url: "URL",
  urlDescription: "Этот плагин позволяет быстро открывать сайты, вводя их URL.",
  urlDefaultProtocol: "Стандартный протокол",

  email: "Email",
  emailSettingsDescription:
    "Этот плагин позволяет быстро отправлять электронную почту.",
  openNewMail: "Открыть новое письмо",

  currencyConverter: "Конвертация валют",
  currencyConverterDescription:
    "Этот плагин позволяет быстро конвертировать валюты. Актуальные курсы валют предоставлены https://exchangeratesapi.io/.",
  currencyConverterPrecision: "Точность",
  currencyConverterCopyToClipboard: "Нажмите enter, чтобы скопировать",

  workflows: "Быстрое выполнение",
  workflowSettingsDescription:
    "Этот плагин позволяет выполнять выполнять несколько шагов одним действием.",
  workflowSettingsAddWorkflow: "Добавить ярлык",
  workflowName: "Имя",
  workflowNamePlaceholder: "Добавьте имя ярлыка",
  workflowDescription: "Описание",
  workflowDescriptionPlaceholder: "Добавьте описание тут",
  workflowTags: "Теги",
  workflowIcon: "Иконка",
  workflowExecutionSteps: "Шаги выполнения",
  workflowExecutionArgumentType: "Тип аргумента выполнения",
  wofkflowExecutionArgumentTypeCommandlineTool: "Командная строка",
  workflowExecutionArgumentTypeUrl: "URL",
  workflowInvalidExecutionStep: "Указан не верный шаг.",
  workflowInvalidWorkflow: "Неправельный ярлык",
  workflowNeedsUserConfirmationBeforeExecution:
    "Необходимость подтверждения перед выполнением",

  commandline: "Командная строка",
  commandlinePrefix: "Префикс",
  commandlineSettingsDescription:
    "Этот плагин позволяет быстро выполнять консольные команды.",
  commandlineShell: "Shell",

  simpleFolderSearch: "Простой поиск по директориям",
  simpleFolderSearchDescription:
    "Этот плагин позволяет быстро искать файлы или папки в указанных директориях.",
  simpleFolderSearchRecursive: "Рекурсивное сканирование файлов",
  simpleFolderSearchExcludeHiddenFiles: "Исключить скрытые файлы",
  simpleFolderSearchFolderPath: "Путь к папке",
  simpleFolderSearchAddFolder: "Добавить папку",
  simpleFolderSearchEditFolder: "Редактировать папку",

  uwpSettingsDescription:
    "Этот плагин позволяет искать установленные UWP приложения.",

  colorConverter: "Конвертер цветов",
  colorConverterDescription:
    "Этот плагин позволяет быстро конвертировать цвета в разные форматы.",
  colorConverterShowColorPreview: "Показывать превью цвета",

  dictionary: "Словарь",
  dictionaryDescription:
    "Этот плагин позволяет быстро искать значения слов и синонимы к ним. Он использует неофициальное API Google Dictionary (https://googledictionaryapi.eu-gb.mybluemix.net/)",
  dictionaryPrefix: "Префикс",
  dictionaryMinSearchTermLength: "Минимальная длинна запроса",
  dictionaryDebounceDelay: "Задержка между запросами (в миллисекундах)",

  browserBookmarks: "Закладки браузера",
  browserBookmarksDescription:
    "Этот плагин позволяет искать по закладкам в браузере.",
  browserBookmarksBrowser: "Браузер",
  browserBookmarksUseFavicons: "Использовать избранное",
  browserBookmark: "Закладка",

  cancel: "Отмена",
  save: "Сохранить",
  add: "Добавить",
  remove: "Удалить",
  edit: "Изменить",
  forExample: "Например",
  example: "Пример",
  iconType: "Тип иконки",
  iconTypeColor: "Цвет",
  showFullFilePath: "Показать полный путь",
  yes: "Да",
  no: "Нет",
  resetToDefault: "Вернуть настройки по умолчанию?",
  resetPluginSettingsToDefaultWarning:
    "Вы хотите восстановить все настройки по умолчанию для этого плагина. Вы уверены?",
  filePath: "Путь до файла",
  folderPath: "Путь до папки",
  chooseFile: "Выбрать файл",
  chooseFolder: "Выбрать папку",
  restartRequired: "Необходима перезагрузка",

  controlPanel: "панель управления",
  controlPanelSettingsDescription:
    "Этот плагин позволяет быстро находить элементы панели управления."
};

export default russianTranslationSet;
