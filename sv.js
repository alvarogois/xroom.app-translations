export default {
  self: 'xroom',
  on: 'på',
  off: 'av',
  title: 'Behövs ett konfrum?',
  buttons: {
    ok: 'OK',
    yes: 'Ja',
    no: 'Nej',
    cancel: 'Avbryt',
    retry: 'Igen',
    chooseWindow: 'Välj ett fönster',
    wholeScreen: 'Hela skärmen',
    install: 'Lägg till',
    uninstall: 'Ta bort',
    send: 'Skicka',
    close: 'Stäng',
    hide: 'Dölj',
    knock: 'Knack knack',
    allowIn: 'Låt in',
    deny: 'Neka',
  },
  mbox: {
    notSupported: 'Det känns som denna webläsare stöder inte XROOM eller WebRTC är inaktiverat. 😢',
    success: 'Åtgärden lyckades',
    failure: 'Åtgärden misslyckades',
    enterRoomName: 'Vänligen ange rumsnamnet',
    isCamOn: 'Är kameran på?',
    isCamOnText: 'Kontrollera att du inte har oavsiktligt blockerat din kamera / mikrofon på den här sidan och sedan tryck på "Igen".',
    isMicOn: 'Är mikrofonen på?',
    isMicOnText: 'Om du vill prata behöver vi ha tillgång till din mikrofon. Avblockera den på och denna sida och sedan tryck på "Igen".',
    iWillOnlyWatch: 'Jag ska bara titta',
    iWillOnlyListen: 'Jag ska bara lyssna',
    screenSharingText: 'Skärmdelning är inte tillåtet. Se till att det inte är blockerat för den här sidan.<br><br>Viktigt: funktionen stöds endast av moderna webbläsare som Chrome eller Firefox.',
    cannotFile: 'Eftersom vi inte ens berör dina filer kan vi inte leverera dem till någon efter en anslutar. Du behöver göra det online.',
    cannotMessage: 'Eftersom vi inte ens berör dina meddelanden kan vi inte leverera dem till någon efter en anslutar. Du behöver göra det online.',
    roomLockedText: 'Det här rummet är tyvärr låst.',
    oops: 'Oops',
    kickedOutText: 'Du har sparkats ut från det här rummet.',
    areYouSure: 'Är du säker?',
    doYouWantToLeave: 'Vill du verkligen lämna rummet?',
    restartRequiredText: 'Denna inställning påverkar så mycket att omstartet behövs. Det blir snabbt, vi lovar!',
    onlySafariOnIOS: 'On iOS only Safari is supported. "Thank you", Apple!',
    cannotLoadPlugin: 'Plugin "%s" stöds inte i din webbläsare',
    confirmFileSend: 'Vill du skicka detta?',
    whatIsYourName: 'Ange ett nytt namn',
    setVideoVolume: 'Ställ in ljudnivån',
    roomLockedTryKnockText: 'Rummet är låst. Du kan be om att gå in genom att "knacka".',
    knockingFailedText: 'Knackningsförsöket misslyckades',
    doYouWantToKick: 'Vill du sparka ut den här användaren?',
    deviceChanged: 'Du har anslutit eller tagit bort en input-enhet. Om det inte fungerar nu välj det gärna manuellt på inställningar.',
    allowCameraPlz: 'Efter du trycker på OK, <b>låt</b> xroom använda din kamera.<br><br>Oroa dig inte, du ska kunna stänga av det igen innan du går in i rummet från menyn längst ner om du vill stanna osynlig.',
    tooOldBrowser: 'Din webbläsare är för gammal eller tillverkad av Microsoft. Många funktioner kan saknas.',
    pluginsLoadFailed: 'Failed loading plugins',
  },
  home: {
    nisdos: 'Inga "cookies" används här',
    title: 'Ditt konferensrum "on steroids"',
    btnGo: 'Kör!',
    knowMore: 'Om xroom',
    nameRoom: 'namege rummet:',
    placeholder: 'skriv här',
    rejoinRoom: 'eller återvända till',
  },
  wl: {
    poweredBy: 'Drivs av ',
  },
  pre: {
    checkIt: 'Ser du bra ut?',
    btnGo: 'Börja',
    knockDenied: 'Din knock-begäran har nekats. Du kan inte komma in i rummet. :(',
    knockRequested: 'Vänta på tillstånd. Andra kan se dig genom en kikhull. 👀',
    noAudio: '⚠️ Vi känner inte din mikrofon',
  },
  videoMenu: {
    hint: 'Meny',
    expand: 'Förstora',
    fullscreen: 'Fullskärm',
    volume: 'Ljudnivå ±',
    restore: 'Återställa',
    kick: 'Kicka',
  },
  controls: {
    ss: 'Skärmdeln. %s',
    cam: 'Kam %s',
    mic: 'Mik %s',
    chat: 'Chatt %s',
    exit: 'Avsluta',
    xroom: 'Drivs av xroom',
    settings: 'Inställn.',
    plugins: 'Plug-in',
  },
  waiting: {
    invite: 'Bjud in dina kollegor',
    beforeCopy: 'klicka för att kopiera',
    afterCopy: 'kopierats!',
    webinar: 'Webinar har inte startat',
  },
  video: {
    you: 'Du',
    someone: 'Någon',
    knocking: 'knackar...',
    poorNet: 'dålig anslutning',
  },
  chat: {
    fileSending: 'Skickar en fil: ',
    fileReceived: 'En fil har tagits emot: ',
    inputPlaceholder: 'skriv ett meddelande ...',
    me: 'jag',
    dropMe: 'Släpp mig!',
  },
  webinar: {
    peersCount: '%s personer tittar',
  },
  settings: {
    experimental: '*) experimental, fungerar ostabilt',
    showCameraWithScreen: 'Använd kameran under skärmdelning *',
    qualityLevel: 'Hög kvalitet (bra bandbredd behövs)',
    autoGetIn: 'Starta chattar utan granskning',
    soundEffects: 'Ljudeffekter',
    noisyBackground: 'Jag på en högljudd plats',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Audio källor',
    videoDevices: 'Video källor',
  },
  plugins: {
    by: 'av',
    size: '%s kB',
    searchPlaceholder: 'söka...',
    add: {
      title: 'Add new plugin',
      descr: '⚙️ Developing a new plugin? Add it here to test. It is not saved, reloading the page removes it from memory. Plugins API manual is available <a href="https://github.com/punarinta/xroom-plugins" target="_blank">here</a>.',
      name: 'What\'s the plugin name?',
      rootUrl: 'Where is the plugin root?',
      loaded: 'Yaay! It\'s loaded!',
      loadFailed: 'Failed loading plugin',
    }
  },
  feedback: {
    header: 'Åh, en sekund bara...',
    question: 'Gick allting bra denna gång?',
    videoFroze: 'Nej, video frös',
    soundLagged: 'Nej, ljudet var försenat',
    cantConnect: 'Nej, någon kunde inte ansluta',
    smthElse: 'Något annat:',
    feedbackInput: 'lämna ditt feedback...',
    contactMe: 'Vänligen kontakta mig:',
    emailInput: 'mitt email...',
  },
  tips: {
    prefix: 'Dagens tips: ',
    lines:[
      'Mute/unmute often? There\'s a hot key "m" for that.',
      'Double click the remote video to make it full screen.',
      'Need to lock your room? Just add the room locking in plugins below.',
      'Use Slack and want to save more time? Try out our <a href="//about.xroom.app/en/library/slack-bot" target="_blank">Slack bot</a>.',
      'Miss video calls in Telegram? Our <a href="//about.xroom.app/en/library/telegram-bot" target="_blank">Telegram bot</a> is there to help.',
      'Need to share a copied image? Ctrl+V in the chat, we\'ll cover the rest.',
      'Lock your room in one click, use locking plugin',
      'Click your name to change it both locally and for your peers.',
      'Ever needed to record your screen with just a few clicks? Try our screen recording plugin.',
    ]
  },
}
