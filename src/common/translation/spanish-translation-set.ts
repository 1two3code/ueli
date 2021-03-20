import { TranslationSet } from "./translation-set";

const spanishTranslationSet: TranslationSet = {
  trayIconShow: "Mostrar",
  trayIconSettings: "Configuración",
  trayIconQuit: "Salir",

  userConfirmationProceed: "¿Proceder?",

  noSearchResultsFoundDescription: "",
  noSearchResultsFoundTitle: "No se encontraron resultados",

  refreshingIndexesPending: "Refrescar índices",

  ueliCommandClearCaches: "Borrar cachés",
  ueliCommandClearCachesDescription:
    "Borrar todas las cachés de todos los plugins",
  ueliCommandEditSettingsFile: "Editar archivo de configuración",
  ueliCommandEditSettingsFileDescription:
    "Editar el archivo de configuración con tu editor de texto por defecto",
  ueliCommandExit: "Salir",
  ueliCommandExitDescription: "Salir de ueli",
  ueliCommandOpenSettings: "Configuración",
  ueliCommandOpenSettingsDescription: "Cambiar configuración",
  ueliCommandRefreshIndexes: "Refrescar índices",
  ueliCommandRefreshIndexesDescription:
    "Refrescar todos los índices de todos los plugins",
  ueliCommandReload: "Recargar",
  ueliCommandReloadDescription: "Recargar ueli",

  generalErrorTitle: "Ha ocurrido un error",
  generalErrorDescription: "Revisa el log para más detalles",

  successfullyRefreshedIndexes: "Se han refrescado los índices con éxito",
  successfullyClearedCaches: "Se han borrado las cachés con éxito",
  successfullyUpdatedconfig: "Se ha actualizado la configuración con éxito",
  successfullyClearedExecutionLog:
    "Se ha borrado el log de ejecución con éxito",

  commandlineSearchResultDescription: "Ejecutar {{command}}",

  noFavoritesFoundDescription: "Tu log de ejecución está vacío",
  noFavoritesFoundTitle: "No se encontraron favoritos",

  // settings
  settings: "Configuración",

  generalSettingsMenuSection: "General",
  pluginSettingsMenuSection: "Plugins",

  generalSettings: "General",
  generalSettingsLanguage: "Idioma",
  generalSettingsLogExecution: "Log de ejecución",
  generalSettingsPersistentUserInput: "Persistir entrada de datos",
  generalSettingsAutostartApp:
    "Auto-iniciar la aplicación al arrancar el sistema",
  generalSettingsShowTrayIcon: "Mostrar icono en la barra",
  generalSettingsClearCachesOnExit: "Borrar cachés al salir",
  generalSettingsHotKey: "Combinación de teclas",
  generalSettingsRescanIntervalEnabled: "Re-escaneo periódico activado",
  generalSettingsRescanInterval: "Intervalo de re-escaneo (en seconds)",
  generalSettingsShowAlwaysOnPrimaryDisplay:
    "Mostrar siempre en pantalla principal",
  generalSettingsRememberWindowPosition: "Recordar posición de ventana",
  generalSettingsExportSettings: "Exportar configuración actual",
  generalSettingsSuccessfullyExportedSettings:
    "Se exportó la configuración con éxito",
  generalSettingsImportSettings: "Importar configuración",
  generalSettingsImportFileFilterJsonFiles: "Archivos JSON",
  generalSettingsImportErrorInvalidConfig:
    "La importación de la configuración falló: el contenido del archivo parece inválido",
  generalSettingsResetAllSettings:
    "Resetear todas las opciones a los valores por defecto",
  generalSettingsResetWarning:
    "Vas a resetear la configuración a los valores por defecto. ¿Quieres proceder?",
  generalSettingsResetAllSettingsWarning:
    "Vas a resetear TODAS las opciones a los valores por defecto. ¿Quieres proceder?",
  generalSettingsClearExecutionLogWarning:
    "Vas a borrar el log de ejecución. ¿Quieres proceder?",
  generalSettingsHideMainWindowAfterExecution:
    "Ocultar ventana después de la ejecución",
  generalSettingsHideMainWindowOnBlur:
    "Ocultar ventana cuando se pierda el foco",
  generalSettingsDecimalSeparator: "Separador para decimales",
  generalSettingsCheckingForUpdate:
    "Comprobando si hay actualizaciones disponibles",
  generalSettingsDownloadUpdate: "Descargar actualización",
  generalSettingsDownloadingUpdate: "Descargando actualización",
  generalSettingsLatestVersion: "¡Ya estás usando la última versión!",
  generalSettingsErrorWhileCheckingForUpdate:
    "Error tratando de comprobar actualizaciones",
  clearExecutionLog: "Borrar log de ejecución",
  openDebugLog: "Abrir log de depuración",
  openTempFolder: "Abrir directorio temporal",

  hotkeyKeyBackspace: "Retroceso",
  hotkeyKeyDelete: "Borrar",
  hotkeyKeyDown: "Abajo",
  hotkeyKeyEnd: "Fin",
  hotkeyKeyEscape: "Escape",
  hotkeyKeyHome: "Inicio",
  hotkeyKeyInsert: "Insertar",
  hotkeyKeyLeft: "Izquierda",
  hotkeyKeyPageDown: "PágArriba",
  hotkeyKeyPageUp: "PágAbajo",
  hotkeyKeyPlus: "Más",
  hotkeyKeyReturn: "Retorno",
  hotkeyKeyRight: "Derecha",
  hotkeyKeySpace: "Espacio",
  hotkeyKeyTab: "Tabulador",
  hotkeyKeyUp: "Arriba",
  hotkeyModifierAlt: "Alt",
  hotkeyModifierAltGr: "AltGr",
  hotkeyModifierCommand: "Cmd",
  hotkeyModifierControl: "Ctrl",
  hotkeyModifierOption: "Opción",
  hotkeyModifierShift: "Mayúsculas",

  appearanceSettings: "Apariencia",
  appearanceSettingsWindowWidth: "Ancho de la ventana (en píxeles)",
  appearanceSettingsMaxSearchResultsPerPage: "Núm max de resultados por página",
  appearanceSettingsSearchResultHeight:
    "Altura de los resultados de búsqueda (en píxeles)",
  appearanceSettingsSmoothScrolling: "Smooth scrolling",
  appearanceSettingsUserInputHeight: "Altura del campo de entrada (en píxeles)",
  appearanceSettingsShowDescriptionOnAllSearchResults:
    "Mostrar descripción en todos los resultados",
  appearanceSettingsShowSearchIcon: "Mostrar icono en el campo de búsqueda",
  appearanceSettingsShowSearchResultNumbers:
    "Mostrar número de resultados de búsqueda",
  appearanceSettingsResetWarningMessage:
    "Vas a resetear todas las opciones de apariencia a los datos por defecto. ¿Quieres proceder?",
  appearanceSettingsAllowTransparentBackground: "Permitir fondo transparente",
  appearanceSettingsFontFamily: "Fuente tipográfica",
  appearanceSettingsUserInputBorderRadius:
    "Radio del borde del campo de entrada",
  appearanceSettingsUserInputBottomMargin:
    "Margen inferior del campo de entrada (en píxeles)",
  appearanceSettingsSearchResultsBorderRadius:
    "Radio del borde del campo de entrada de los resultados de búsqueda",
  appearanceSettingsScrollbarBorderRadius:
    "Radio de borde de la barra de scroll",
  appearanceSettingsBorderRadiusDescription:
    "Esto es un valor CSS, así que necesitas añadir 'px' de esta manera '10px' o así para esquinas separadas '10px 0px 10px 5px'",

  settingsUserInputTitle: "Campo de entrada",
  settingsSearchResultsBoxTitle: "Caja de resultados de búsqueda",
  settingsScrollbarTitle: "Barra de scroll",
  settingsGeneralTitle: "General",

  colorThemeSettings: "Tema de color",
  colorThemeSettingsImportColorTheme: "Importar tema de color",
  colorThemeSettingsExportColorTheme: "Exportar tema de color",
  colorThemeSettingsResetWarning:
    "Vas a resetear todas las opciones de temas de color a la opción por defecto. ¿Quieres proceder?",
  colorThemeExportSucceeded: "Tema de color exportado con éxito",
  colorThemeExportFailed: "La exportación del tema de color falló",
  colorThemeImportSucceeded: "Tema de color importado con éxito",
  colorThemeImportFailed: "La importación del tema de color falló",
  colorThemeInvalidColorTheme: "Tema de color inválido",
  colorThemePresets: "Preajustes",
  colorthemeUserInputBackgroundColor: "Color de fondo del campo de entrada",
  colorThemeUserInputTextColor: "Color de texto del campo de entrada",
  colorThemeSearchResultsBackgroundColor:
    "Color de fondo de los resultados de búsqueda",
  colorThemeSearchResultsItemActiveBackgroundColor:
    "Color de fondo del resultado de búsqueda activo",
  colorThemeSearchResultsItemActiveTextColor:
    "Color de texto del resultado de búsqueda activo",
  colorThemeSearchResultsItemActiveDescriptionColor:
    "Color de texto de la descripción del resultado de búsqueda activo",
  colorThemeSearchResutlsItemNameTextColor:
    "Color de texto del nombre de los resultados de búsqueda",
  colorThemeSearchResultsItemDescriptionTextColor:
    "Color de texto de la descripción de los resultados de búsqueda",
  colorThemeScrollbarForegroundColor: "Color destacado de la barra de scroll",
  colorThemeScrollbarBackgroundColor: "Color de fondo de la barra de scroll",

  colorPicker: "Selector de color",

  applicationSearchSettings: "Búsqueda de aplicación",
  applicationSearchSettingsDescription: `Este plugin busca aplicaciones en tu equipo. Puedes especificar los directorios donde están instaladas tus aplicaciones y la extensión a usar para reconocer una aplicación`,
  applicationSearchSettingsApplicationFolders: "Directorios de aplicación",
  applicationSearchSettingsApplicationFolder: "Directorio de aplicación",
  applicationSearchSettingsFolderPath: "Ruta de directorio",
  applicationSearchSettingsRemoveAction: "Eliminar",
  applicationSearchSettingsAddApplicationFolder:
    "Añadir directorio de aplicación",
  applicationSearchSettingsApplicationFileExtensions:
    "Extensiones de aplicación",
  applicationSearchSettingsApplicationFileExtension: "Extensión",
  applicationSearchSettingsAddApplicationFileExtension: "Añadir extensión",
  applicationSearchSettingsInvalidFileExtensionErrorMessage: `"{{value}}" no es una extensión válida`,
  applicationSearchSettingsNotAFolderErrorMessage: `"{{value}} no es un directorio"`,
  applicationSearchSettingsDoesNotExistErrorMessage: `"{{value}} no existe"`,
  applicationSearchSettingsFolderValidationError: `Ha ocurrido un error mientras se trataba de validar "{{value}}"`,
  applicationSearchSettingsUseNativeIcons:
    "Usar iconos nativos (desactivarlo puede resultar en un mayor rendimiento)",

  searchEngineSettings: "Motor de búsqueda",
  searchEngineSettingsDescription: `El motor de búsqueda se usa para preindexar elementos como aplicaciones, accesos directos y opciones/comandos del sistema operativo.`,
  searchEngineSettingsFuzzyness: "Fuzzyness",
  searchEngineSettingsFuzzynessDescription: "0 = strict, 1 = fuzzy",
  searchEngineSettingsStrict: "Strict",
  searchEngineSettingsFuzzy: "Fuzzy",
  searchEngineSettingsBlacklist: "Lista de prohibidos",
  searchEngineSettingsMaxSearchResults: "Resultados de búsqueda máx",
  searchEngineSettingsResetWarning:
    "Vas a resetear todas las opciones de motor de búsqueda a la opción por defecto. ¿Quieres proceder?",

  shortcutSettings: "Accesos directos",
  shortcutSettingsDescription: `Este plugin te permite abrir de forma rápida archivos y sitios web a partir de tus propios accesos directos.`,
  shortcutSettingsTableType: "Tipo",
  shortcutSettingsTableName: "Nombre",
  shortcutSettingsTableExecutionArgument: "Argumento de ejecución",
  shortcutSettingsTableDescription: "Descripción",
  shortcutSettingsTableTags: "Etiquetas",
  shortcutSettingsTableIcon: "Icono",
  shortcutSettingsTableEdit: "Editar",
  shortcutSettingsTableDelete: "Borrar",
  shortcutSettingsAddShortcut: "Añadir acceso directo",
  shortcutSettingsEditModalImageUrl: "URL de la imagen",
  shortcutSettingsEditModalSvgString: "cadena de texto SVG",
  shortcutSettingsEditModalColor: "Color",
  shortcutSettingsEditModalGoogleWebsite: "Sitio web de Google",
  shortcutSettingsEditModalDownloadsFolder: "Directorio de descargas",
  shortcutSettingsEditModalCommand: "Comando",
  shortcutSettingsInvalidShortcutErrorMessage: "Acceso directo inválido",
  shortcutSettingsTagPlaceholder: "Añade una etiqueta y pulsa enter",
  shortcutSettingsTypeUrl: "URL",
  shortcutSettingsTypeCommandlineTool: "Herramienta de línea de comandos",
  shortcutSettingsEditModalCommandLinetoolDescription:
    "Editar archivo en Visual Studio Code",
  shortcutSettingsNeedsUserConfirmation:
    "Necesita confirmación antes de la ejecución",

  translationSettingsTranslation: "Traducción",
  translationSettingsDescription: `Este plugin te permite traducir de forma rápida palabras o frasees cortas. Usa un API no oficial (https://github.com/imankulov/linguee-api) de Linguee (https://linguee.de) y puede ser inestable.`,
  translationSettingsDebounceDelay: "Retraso de rebote (en milisegundos)",
  translationSettingsMinSearchTermLength:
    "Longitud mínima del término de búsqueda",
  translationSettingsPrefix: "Prefijo",
  translationSettingsSourceLanguage: "Idioma de origen",
  translationSettingsTargetLanguage: "Idioma de destino",

  everythingSearch: "Búsqueda Everything",
  everythingSearchSettingDescription: `Este plugin te permite usar Everything para encontrar archis y directorios en tu sistema de ficheros. Necesitas instalar "Everything" y "Everything Command-line Interface" desde https://www.voidtools.com/downloads/. Tras la instalación de ambos, debes especificar la ruta para el fichero 'es.exe' debajo.`,
  everythingSearchPathToBinary: `Ruta a "es.exe"`,
  everythingSearchPrefix: "Prefijo",
  everythingSearchMaxSearchResults: "Resultados de búsqueda máx",
  everythingSearchPathToBinaryFilterName: "Ficheros ejecutables",

  mdfindSearch: "Búsqueda mdfind",
  mdfindSettingsDescription:
    "Este plugin te permite usar la búsqueda nativa de macOS para encontrar archivos y directorios en tu sistema de ficheros.",
  mdfindSearchDebounceDelay: "Retraso de rebote (en milisegundos)",
  mdfindSearchPrefix: "Prefijo",
  mdfindSearchMaxSearchResults: "Resultados de búsqueda máx",

  websearch: "Búsqueda web",
  websearchSettingDescription: `Este plugin te permite buscar de forma rápida en internet con tu motor de búsqueda favorito o los que configures.`,
  websearchEngines: "Motores de búsqueda web",
  websearchEditingModalTitleAdd: "Añadir motor de búsqueda web",
  websearchEditingModalTitleEdit: "Editar motor de búsqueda web",
  websearchName: "Nombre",
  websearchPrefix: "Prefijo",
  websearchUrl: "URL",
  websearchSuggestionUrl: "URL de sugerencias",
  websearchIcon: "Icono",
  websearchPriority: "Prioridad",
  websearchIsFallback: "Fallback",
  websearchEncodeSearchTerm: "Codificar término de búsqueda",
  websearchInvalidWebsearchEngine: "Motor de búsqueda inválido",
  websearchDescription: `Buscar en {{websearch_engine}} para "{{search_term}}"`,

  fileBrowser: "Explorador de archivos",
  fileBrowserSettingsDescription: `Este plugin te permite buscar en tu sistema local de ficheros. Para comenzar debes introducir una ruta de archivo absoluta válida.`,
  fileBrowserSettingsMaxSearchResults: "Resultados de búsqueda máx",
  fileBrowserOptionsShowHiddenFiles: "Mostrar ficheros ocultos",
  fileBrowserOptionsBlackList: "Lista de prohibidos",
  fileBrowserOptionsBlackListPlaceholder: "Nombre de archivo o directorio",

  operatingSystemCommands: "Comandos del sistema operativo",
  operatingSystemCommandsSettingsDescription: `Los comandos del sistema operativo son comandos simples para controlar tu sistema operativo. Por ejemplo, apagar o reiniciar tu equipo.`,

  operatingSystemSettings: "Configuración del sistema operativo",
  operatingSystemSettingsSettingsDescription:
    "Este plugin te permite buscar de forma rápida en la configuración del sistema operativo.",

  macOsShutdown: "Apagar",
  macOsShutdownDescription: "Apagar equipo",
  macOsRestart: "Reiniciar",
  macOsRestartDescription: "Reiniciar equipo",
  macOsLogout: "Cerrar sesión",
  macOsLogoutDescription: "Cerrar sesión del usuario actual",
  macOsSleep: "Reposo",
  macOsSleepDescription: "Poner equipo en reposo",
  macOsLock: "Bloquear",
  macOsLockDescription: "Bloquear equipo",

  windowsShutdown: "Apagar",
  windowsShutdownDescription: "Apagar equipo",
  windowsRestart: "Reiniciar",
  windowsRestartDescription: "Reiniciar equipo",
  windowsSignout: "Cerrar sesión",
  windowsSignoutDescription: "Cerrar sesión del usuario actual",
  windowsLock: "Bloquear",
  windowsLockDescription: "Bloquear",
  windowsSleep: "Reposo",
  windowsSleepDescription: "Poner equipo en reposo",
  windowsHibernation: "Hibernar",
  windowsHibernationDescription: "Poner equipo a hibernar",

  calcuator: "Calculadora",
  calculatorCopyToClipboard: "Presiona enter para copiar al portapapeles",
  calculatorDescription:
    "Este plugin te permite resolver de forma rápida cálculos simples.",
  calculatorPrecision: "Precisión",

  openUrlWithBrowser: "Abrir con navegador web",
  url: "URL",
  urlDescription:
    "Este plugin te permite abrir de forma rápida sitios web escribiendo la URL.",
  urlDefaultProtocol: "Protocolo por defecto",

  email: "Email",
  emailSettingsDescription:
    "Este plugin te permite comenzar a escribir un email de forma rápida introduciendo una dirección de email.",
  openNewMail: "Abrir nuevo email",

  currencyConverter: "Conversor de divisa",
  currencyConverterDescription:
    "Este plugin te permite convertir divisa de forma rápida. Los últimos ratios de conversión están provistos por https://exchangeratesapi.io/.",
  currencyConverterPrecision: "Precisión",
  currencyConverterCopyToClipboard:
    "Presiona enter para copiar al portapapeles",

  workflows: "Flujos de trabajo",
  workflowSettingsDescription:
    "Este plugin te permite ejecutar de forma rápida múltiples acciones de una.",
  workflowSettingsAddWorkflow: "Añadir flujo de trabajo",
  workflowName: "Nombre",
  workflowNamePlaceholder: "Añade el nombre de tu flujo de trabajo aquí",
  workflowDescription: "Descripción",
  workflowDescriptionPlaceholder:
    "Añade una descripción de tu flujo de trabajo aquí",
  workflowTags: "Etiquetas",
  workflowIcon: "Icono",
  workflowExecutionSteps: "Etapas de ejecución",
  workflowExecutionArgumentType: "Tipo de argumento de ejecución",
  wofkflowExecutionArgumentTypeCommandlineTool:
    "Herramienta de línea de comandos",
  workflowExecutionArgumentTypeUrl: "URL",
  workflowInvalidExecutionStep: "Etapa de ejecución inválida",
  workflowInvalidWorkflow: "Flujo de trabajo inválido",
  workflowNeedsUserConfirmationBeforeExecution:
    "Necesita confirmación antes de la ejecución",

  commandline: "Línea de comandos",
  commandlinePrefix: "Prefijo",
  commandlineSettingsDescription:
    "Este plugin te permite ejecutar de forma rápida órdenes de la línea de comandos.",
  commandlineShell: "Terminal",

  simpleFolderSearch: "Búsqueda simple de directorios",
  simpleFolderSearchDescription:
    "Este plugin te permite buscar de forma rápida archivos o directorios",
  simpleFolderSearchRecursive: "Análisis de ficheros recursivo",
  simpleFolderSearchExcludeHiddenFiles: "Excluir ficheros ocultos",
  simpleFolderSearchFolderPath: "Ruta de directorio",
  simpleFolderSearchAddFolder: "Añadir directorio",
  simpleFolderSearchEditFolder: "Editar directorio",

  uwpSettingsDescription:
    "Este plugin te permite buscar aplicaciones UWP pre-instaladas.",

  colorConverter: "Conversor de color",
  colorConverterDescription:
    "Este plugin te permite convertir colores de forma rápida a diferentes formatos.",
  colorConverterShowColorPreview: "Mostrar previsualización de color",

  dictionary: "Diccionario",
  dictionaryDescription:
    "Este plugin te permite buscar de forma rápida en las deficiones y sinónimos de palabras. Usa un API no oficial de Google Dictionary (https://googledictionaryapi.eu-gb.mybluemix.net/)",
  dictionaryPrefix: "Prefijo",
  dictionaryMinSearchTermLength: "Longitud mínima del término de búsqueda",
  dictionaryDebounceDelay: "Retraso de rebote (en milisegundos)",

  browserBookmarks: "Marcadores del navegador",
  browserBookmarksDescription:
    "Este plugin te permite buscar en tus marcadores del navegador.",
  browserBookmarksBrowser: "Navegador",
  browserBookmarksUseFavicons: "Usar favicons",
  browserBookmark: "Marcador",

  cancel: "Cancelar",
  save: "Guardar",
  add: "Añadir",
  remove: "Eliminar",
  edit: "Editar",
  forExample: "Por ejemplo",
  example: "Ejemplo",
  iconType: "Tipo de icono",
  iconTypeColor: "Color",
  showFullFilePath: "Mostrar ruta de archivo completa",
  yes: "Sí",
  no: "No",
  resetToDefault: "¿Resetear al valor por defecto?",
  resetPluginSettingsToDefaultWarning:
    "Vas a resetear todas las opciones de este plugin a los valores por defecto. ¿Quieres proceder?",
  filePath: "Ruta de archivo",
  folderPath: "Ruta de directorio",
  chooseFile: "Elige un archivo",
  chooseFolder: "Elige un directorio",
  restartRequired: "Reinicio requerido",

  controlPanel: "Panel de control",
  controlPanelSettingsDescription:
    "Este plugin te permite encontrar rápidamente elementos del panel de control."
};

export default spanishTranslationSet;
