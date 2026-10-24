/*
 * ─────────────────────────────────────────────────────────────
 *  ALLE TEXTE DER SEITE STEHEN HIER.
 *  Alles in [eckigen Klammern] ist ein Platzhalter.
 *
 *  Unternehmungen (todo):
 *    kind    – Kategorie; bestimmt die Form auf der Karte:
 *              Essen ●  Café ◔  Kunst ■  Shop ◆  Berg ▲  Baden ◓
 *    lat/lng – Koordinaten für den Punkt auf der Karte
 *    map     – Suchbegriff für „In Google Maps öffnen“
 * ─────────────────────────────────────────────────────────────
 */
window.WEDDING = {
  couple: "Max und Eva",

  // Outfit-Check im Dresscode: zufällige Strafe, wenn der Ton nicht getroffen ist
  outfitCheck: {
    penalties: [
      "Ein Schnaps mit dem Brautpaar.",
      "Du eröffnest die Tanzfläche.",
      "30 Sekunden Rede – spontan, jetzt.",
      "Du holst die nächste Runde.",
      "Ein Lied deiner Wahl, laut mitgesungen.",
      "Den ganzen Abend ein Accessoire, das wir dir aussuchen.",
    ],
  },

  events: [
    {
      id: "berlin",
      date: "2026-12-04",
      weekday: "Freitag",
      place: "[Location]",
      city: "Berlin",

      // { day: "…" } beginnt einen neuen Tag; "map" fügt einen Google-Maps-Link hinzu
      itinerary: [
        { day: "Freitag · 04.12." },
        { time: "12:30", title: "Treffen vor dem Standesamt", note: "Standesamt Charlottenburg · Rein dürfen nur die Trauzeugen und ein Teil der Familie.", map: "Standesamt Charlottenburg-Wilmersdorf, Berlin" },
        { time: "Danach", title: "Schwarzes Café", note: "Kantstraße 148 · Charlottenburg", map: "Schwarzes Café, Kantstraße 148, Berlin" },
        { time: "", title: "Pause", note: "Durchatmen, ausruhen, umziehen." },
        { time: "20:00", title: "Lamm Bar", note: "Wisbyer Straße 1 · Prenzlauer Berg", map: "Lamm Bar, Wisbyer Straße 1, Berlin" },
        { day: "Samstag · 05.12." },
        { time: "18:00", title: "Gardine", note: "Bis 1:00 · Prenzlauer Berg", map: "Gardine, Prenzlauer Berg, Berlin" },
        { time: "Danach", title: "Clubbing", note: "Für alle, die noch Lust haben." },
      ],

      // ohne todo gibt es keine Karte; favorites zeigt dann Text + Bild-Link (hier: unsere Google-Maps-Liste)
      favorites: {
        text: "Wir wollten euch das Wochenende nicht zu voll packen und hoffen, ihr findet auch ein paar Minuten, um Berlin zu erkunden. Damit das gut klappt, haben wir euch unsere Favoriten hier in eine Google-Maps-Liste gepackt – zum Erkunden :)",
        title: "Unsere Berlin-Favoriten",
        url: "https://maps.app.goo.gl/mXASfD4yiwNQMYcEA",
        image: "/img/berlin-6.jpg",
      },

      letter: {
        greeting: "Liebe Familie, liebe Freunde,",
        body: [
          "wir freuen uns sehr, mit euch unsere Hochzeit zu feiern! Neben den Terminen findet ihr hier auch ein paar unserer Lieblingsorte in Berlin und am Tegernsee. Vielleicht habt ihr Lust, zwischendurch etwas davon zu entdecken.",
          "Wir aktualisieren die Seite jeweils kurz vor den Events, schaut also gerne immer mal wieder rein.",
          "Mehr Details folgen!",
        ],
        signoff: "Alles Liebe",
        signature: "Eva und Max",
      },
    },

    {
      id: "tegernsee",
      date: "2027-08-14",
      weekday: "Samstag",
      place: "Gut Kaltenbrunn",
      city: "Tegernsee",

      // dresscode ist optional – ohne ihn gibt es keinen Dresscode-Tab
      // tone: "schwarz", "hell" oder "neutral" (Schwarz, Weiß, Beige, Grau) – danach prüft der Outfit-Check
      dresscode: {
        tone: "neutral",
        text: [
          "Sommerlich, in Weiß, Beige, Grau und Schwarz.",
          "Wir zwingen niemanden, sich etwas Neues zu kaufen, aber wir würden uns sehr freuen, wenn ihr euch an diesen Farben orientiert.",
        ],
        colors: [
          { name: "Weiß", hex: "#FAF8F3" },
          { name: "Creme", hex: "#E6E0D4" },
          { name: "Beige", hex: "#D6C6A8" },
          { name: "Sand", hex: "#BFA984" },
          { name: "Grau", hex: "#8E8F91" },
          { name: "Schwarz", hex: "#1C1C1C" },
        ],
      },

      itinerary: [
        { day: "Freitag · 13.08." },
        { time: "Abends", title: "Ankommen im Bräustüberl", note: "Herzogliches Bräustüberl · Schloßplatz 1, Tegernsee", map: "Herzogliches Bräustüberl Tegernsee, Schloßplatz 1" },
        { day: "Samstag · 14.08." },
        { time: "14:30", title: "Treffen im Mesner Gütl", note: "Gegenüber der Kirche · Seestraße 53, Rottach-Egern", map: "Mesner Gütl, Seestraße 53, Rottach-Egern" },
        { time: "15:30", title: "Trauung", note: "Kirche St. Laurentius · Rottach-Egern", map: "Kirche St. Laurentius, Seestraße 57, Rottach-Egern" },
        { time: "17:30", title: "Gut Kaltenbrunn", note: "Feier · Gmund am Tegernsee", map: "Gut Kaltenbrunn, Gmund am Tegernsee" },
      ],

      todo: [
        { kind: "Café", title: "Aran", note: "Schlosscafé · Tegernsee", lat: 47.7084847, lng: 11.7537806, map: "Aran Schlosscafé, Seestraße 8, Tegernsee" },
        { kind: "Essen", title: "Bräustüberl", note: "Herzogliches Bräustüberl · Tegernsee", lat: 47.7077857, lng: 11.7562223, map: "Herzogliches Bräustüberl Tegernsee" },
        { kind: "Berg", title: "Galaun", note: "Berggasthaus Riederstein · zu Fuß ab Tegernsee", lat: 47.7036675, lng: 11.7881413, map: "Berggasthaus Riederstein am Galaun, Tegernsee" },
        { kind: "Berg", title: "Tegernseer Hütte", note: "Zwischen Roß- und Buchstein · Kreuth", lat: 47.6327125, lng: 11.6783097, map: "Tegernseer Hütte, Kreuth" },
        { kind: "Baden", title: "Badeplatz Bad Wiessee", note: "Am Westufer", lat: 47.7336829, lng: 11.7185158, map: "47.7336829,11.7185158" },
        { kind: "Essen", title: "Naturkäserei", note: "Käserei mit Laden & Wirtschaft · Kreuth", lat: 47.6750077, lng: 11.7601696, map: "Naturkäserei Tegernseer Land, Reißenbichlweg, Kreuth" },
        { kind: "Essen", title: "Zum Zotzn", note: "Voitlhof 1532 · Rottach-Egern", lat: 47.6843421, lng: 11.7822887, map: "Voitlhof 1532 zum Zotzn, Feldstraße 9, Rottach-Egern" },
        { kind: "Berg", title: "Neureuth", note: "Berggasthof · Wanderung ab Tegernsee", lat: 47.7285792, lng: 11.7719924, map: "Berggasthof Neureuth, Tegernsee" },
        { kind: "Berg", title: "Aueralm", note: "Alm · über Bad Wiessee", lat: 47.6889271, lng: 11.6732413, map: "Aueralm, Bad Wiessee" },
        { kind: "Berg", title: "Wildbad Kreuth", note: "Ausflug ins Tal · Kreuth", lat: 47.6224766, lng: 11.7423962, map: "Wildbad Kreuth" },
      ],

      letter: {
        greeting: "Liebe Familie, liebe Freunde,",
        body: [
          "wir freuen uns sehr, mit euch unsere Hochzeit zu feiern! Neben den Terminen findet ihr hier auch ein paar unserer Lieblingsorte in Berlin und am Tegernsee. Vielleicht habt ihr Lust, zwischendurch etwas davon zu entdecken.",
          "Wir aktualisieren die Seite jeweils kurz vor den Events, schaut also gerne immer mal wieder rein.",
          "Mehr Details folgen!",
        ],
        signoff: "Alles Liebe",
        signature: "Eva und Max",
      },
    },
  ],
};
