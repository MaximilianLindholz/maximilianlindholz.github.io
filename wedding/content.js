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
        { time: "12:20", title: "Trauung", note: "Standesamt Charlottenburg", map: "Standesamt Charlottenburg-Wilmersdorf, Berlin" },
        { time: "Danach", title: "Schwarzes Café", note: "Kantstraße 148 · Charlottenburg", map: "Schwarzes Café, Kantstraße 148, Berlin" },
        { time: "", title: "Pause", note: "Durchatmen, ausruhen, umziehen." },
        { time: "19:00", title: "Lamm Bar", note: "Wisbyer Straße 1 · Prenzlauer Berg", map: "Lamm Bar, Wisbyer Straße 1, Berlin" },
        { day: "Samstag · 05.12." },
        { time: "18:00", title: "Gardine", note: "Bis 1:00 · Prenzlauer Berg", map: "Gardine, Prenzlauer Berg, Berlin" },
        { time: "Danach", title: "Clubbing", note: "Für alle, die noch Lust haben." },
      ],

      todo: [
        { kind: "Essen", title: "Julius", note: "Restaurant · Wedding", lat: 52.544969, lng: 13.3682112, map: "Julius, Gerichtstraße 31, Berlin" },
        { kind: "Essen", title: "Otto", note: "Restaurant · Prenzlauer Berg", lat: 52.5381702, lng: 13.41023, map: "Otto, Oderberger Straße 56, Berlin" },
        { kind: "Café", title: "Material", note: "Café · Prenzlauer Berg", lat: 52.5373669, lng: 13.4118821, map: "Material, Schönhauser Allee, Berlin" },
        { kind: "Café", title: "Acid", note: "Bäckerei · Mitte", lat: 52.5279759, lng: 13.4025418, map: "Acid Mitte, Rosenthaler Straße 9, Berlin" },
        { kind: "Café", title: "Sofi", note: "Bäckerei · Mitte", lat: 52.5261751, lng: 13.4008492, map: "Sofi, Sophienstraße 21, Berlin" },
        { kind: "Kunst", title: "Sammlung Boros", note: "Kunst im Bunker · nur mit Anmeldung", lat: 52.523509, lng: 13.38404, map: "Sammlung Boros, Reinhardtstraße 20, Berlin" },
        { kind: "Kunst", title: "Gropius Bau", note: "Ausstellungshaus · Kreuzberg", lat: 52.5066209, lng: 13.3819472, map: "Gropius Bau, Niederkirchnerstraße 7, Berlin" },
        { kind: "Kunst", title: "KW Institute", note: "Zeitgenössische Kunst · Mitte", lat: 52.5271636, lng: 13.3948218, map: "KW Institute for Contemporary Art, Auguststraße 69, Berlin" },
        { kind: "Shop", title: "Voo Store", note: "Concept Store · Kreuzberg", lat: 52.501215, lng: 13.4211502, map: "Voo Store, Oranienstraße 24, Berlin" },
        { kind: "Shop", title: "HHV", note: "Store · Friedrichshain", lat: 52.5117678, lng: 13.4559996, map: "HHV, Grünberger Straße 54, Berlin" },
      ],

      // optional: Link zu einer Google-Maps-Liste unter den Unternehmungen
      favorites: { title: "Unsere Berlin-Favoriten", url: "https://maps.app.goo.gl/mXASfD4yiwNQMYcEA" },

      letter: {
        greeting: "Liebe Familie, liebe Freunde,",
        body: [
          "Wir freuen uns sehr auf euch!",
          "Mehr Details folgen.",
        ],
        signoff: "Alles Liebe",
        signature: "Max und Eva",
      },
    },

    {
      id: "tegernsee",
      date: "2027-08-14",
      weekday: "Samstag",
      place: "[Location]",
      city: "Tegernsee",

      // dresscode ist optional – ohne ihn gibt es keinen Dresscode-Tab
      // tone: "schwarz" oder "hell" – danach prüft der Outfit-Check
      // icon: anzug, hemd, kleid, schuh, hut
      dresscode: {
        tone: "hell",
        text: [
          "Sommerlich, in Beige und Weiß.",
          "Wir zwingen niemanden, sich etwas Neues zu kaufen – aber wir würden uns sehr freuen, wenn ihr euch an diesen Farben orientiert.",
        ],
        note: "Im August: Leinen, leichte Stoffe und Schuhe, die auch auf Wiese funktionieren.",
        colors: [
          { name: "Weiß", hex: "#FAF8F3", icon: "hemd" },
          { name: "Creme", hex: "#E6E0D4", icon: "kleid" },
          { name: "Beige", hex: "#D6C6A8", icon: "anzug" },
          { name: "Sand", hex: "#BFA984", icon: "hut" },
        ],
      },

      itinerary: [
        { day: "Freitag · 13.08." },
        { time: "Abends", title: "Ankommen im Bräustüberl", note: "Herzogliches Bräustüberl · Schloßplatz 1, Tegernsee", map: "Herzogliches Bräustüberl Tegernsee, Schloßplatz 1" },
        { day: "Samstag · 14.08." },
        { time: "14:30", title: "Treffen im Mesner Gütl", note: "Gegenüber der Kirche · Seestraße 53, Rottach-Egern", map: "Mesner Gütl, Seestraße 53, Rottach-Egern" },
        { time: "15:30", title: "Trauung", note: "Kirche St. Laurentius · Rottach-Egern", map: "St. Laurentius, Kißlingerstraße 45, Rottach-Egern" },
        { time: "17:30", title: "Gut Kaltenbrunn", note: "Feier · Gmund am Tegernsee", map: "Gut Kaltenbrunn, Gmund am Tegernsee" },
      ],

      todo: [
        { kind: "Café", title: "Aran", note: "Schlosscafé · Tegernsee", lat: 47.7084847, lng: 11.7537806, map: "Aran Schlosscafé, Seestraße 8, Tegernsee" },
        { kind: "Essen", title: "Bräustüberl", note: "Herzogliches Bräustüberl · Tegernsee", lat: 47.7077857, lng: 11.7562223, map: "Herzogliches Bräustüberl Tegernsee" },
        { kind: "Berg", title: "Galaun", note: "Berggasthaus Riederstein · zu Fuß ab Tegernsee", lat: 47.7036675, lng: 11.7881413, map: "Berggasthaus Riederstein am Galaun, Tegernsee" },
        { kind: "Berg", title: "Tegernseer Hütte", note: "Zwischen Roß- und Buchstein · Kreuth", lat: 47.6327125, lng: 11.6783097, map: "Tegernseer Hütte, Kreuth" },
        { kind: "Baden", title: "Badeplatz Bad Wiessee", note: "Am Westufer", lat: 47.7336829, lng: 11.7185158, map: "47.7336829,11.7185158" },
      ],

      letter: {
        greeting: "Liebe Familie, liebe Freunde,",
        body: [
          "Wir freuen uns sehr auf euch!",
          "Mehr Details folgen.",
        ],
        signoff: "Alles Liebe",
        signature: "Max und Eva",
      },
    },
  ],
};
