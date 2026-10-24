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
        // aus unserer Google-Maps-Liste „Berlin“
        { kind: "Essen", title: "MIDAM", note: "Korean BBQ · Charlottenburg", lat: 52.5049905, lng: 13.3011462, map: "MIDAM Korean BBQ Restaurant, Stuttgarter Pl. 28, 10627 Berlin" },
        { kind: "Essen", title: "Bar Henrietta", note: "Bar · Wedding", lat: 52.5514018, lng: 13.3578209, map: "Bar Henrietta, Malplaquetstraße 28, 13347 Berlin" },
        { kind: "Essen", title: "Arirang Bulgogi", note: "Koreanisch · Prenzlauer Berg", lat: 52.5537081, lng: 13.4098947, map: "Arirang Bulgogi, Bornholmer Str. 85, 10439 Berlin" },
        { kind: "Essen", title: "Blumental", note: "Mitte", lat: 52.50584, lng: 13.4213038, map: "Blumental, Engeldamm 64, 10179 Berlin" },
        { kind: "Essen", title: "Machiko", note: "Sake-Bar · Prenzlauer Berg", lat: 52.539115, lng: 13.4208312, map: "〒10435 Berlin, Kollwitzstraße, machiko sake.shochu.bites" },
        { kind: "Essen", title: "Freya Fuchs", note: "Wedding", lat: 52.5420287, lng: 13.3567716, map: "Freya Fuchs, Tegeler Str. 34, 13353 Berlin" },
        { kind: "Essen", title: "monu", note: "Schöneberg", lat: 52.4879327, lng: 13.3749584, map: "monu, Berlin" },
        { kind: "Café", title: "Jones Ice Cream", note: "Eis · Prenzlauer Berg", lat: 52.5413919, lng: 13.4096274, map: "Jones ice cream Eberswalder, Eberswalder Str. 32, 10437 Berlin" },
        { kind: "Essen", title: "WeiDaoJia", note: "Chinesisch · Prenzlauer Berg", lat: 52.5401536, lng: 13.4060605, map: "WeiDaoJia, Oderberger Str. 27, 10435 Berlin" },
        { kind: "Essen", title: "Lamazère", note: "Brasserie · Charlottenburg", lat: 52.505102, lng: 13.3005401, map: "Lamazère Brasserie, Stuttgarter Pl. 18, 10627 Berlin" },
        { kind: "Shop", title: "Les Climats", note: "Weinhandlung · Tiergarten", lat: 52.5010244, lng: 13.3623347, map: "Weinhandlung Les Climats, Pohlstraße 75, 10785 Berlin" },
        { kind: "Essen", title: "Comedor", note: "Charlottenburg", lat: 52.5069511, lng: 13.2993503, map: "Comedor, Kantstraße 74, 10627 Berlin" },
        { kind: "Essen", title: "Ripieno Food Club", note: "Kreuzberg", lat: 52.4975347, lng: 13.4310362, map: "Ripieno Food Club, Wiener Str. 20, 10999 Berlin" },
        { kind: "Café", title: "Utopia Coffee", note: "Kaffee · Gesundbrunnen", lat: 52.5572253, lng: 13.3772107, map: "Utopia Coffee, Drontheimer Str. 1B, 13359 Berlin" },
        { kind: "Essen", title: "sabon", note: "Prenzlauer Berg", lat: 52.5393158, lng: 13.4071384, map: "sabon, Berlin" },
        { kind: "Essen", title: "Aroma Warschauer Str.", note: "Friedrichshain", lat: 52.5101512, lng: 13.4519592, map: "Aroma Warschauer Str., Warschauer Str. 62, 10243 Berlin" },
        { kind: "Café", title: "La Miche", note: "Bäckerei · Schöneberg", lat: 52.4867898, lng: 13.3583795, map: "La Miche, Crellestraße 2, 10827 Berlin" },
        { kind: "Essen", title: "Rüyam", note: "Kebab · Schöneberg", lat: 52.484503, lng: 13.3523488, map: "Rüyam Gemüse Kebab, Hauptstraße 36, 10827 Berlin" },
        { kind: "Essen", title: "MASTAN", note: "Kreuzberg", lat: 52.490378, lng: 13.4020653, map: "MASTAN, Gneisenaustraße 67, 10961 Berlin" },
        { kind: "Essen", title: "onette", note: "Schöneberg", lat: 52.4902952, lng: 13.3553222, map: "onette, Grunewaldstraße 11, 10781 Berlin" },
        { kind: "Essen", title: "Sword Master Noodle", note: "Nudeln · Prenzlauer Berg", lat: 52.5472359, lng: 13.4252276, map: "10439 Berlin, Dunckerstraße, SWORD MASTER NOODLE" },
        { kind: "Essen", title: "Le Balto", note: "Neukölln", lat: 52.4909767, lng: 13.426286, map: "Le Balto, Hobrechtstraße 28, 12047 Berlin" },
        { kind: "Café", title: "Café Schroeder", note: "Café · Mitte", lat: 52.5302922, lng: 13.392269, map: "Café Schroeder, Schröderstraße 15, 10115 Berlin" },
        { kind: "Essen", title: "ploetz", note: "Schöneberg", lat: 52.4873886, lng: 13.363207, map: "ploetz, Czeminskistraße 4, 10829 Berlin" },
        { kind: "Essen", title: "Vinscent", note: "Weinbar · Wedding", lat: 52.5535162, lng: 13.3442159, map: "Vinscent Weinstudio Wedding, Transvaalstraße 43, 13351 Berlin" },
        { kind: "Essen", title: "Almi", note: "Bistro · Mitte", lat: 52.5343555, lng: 13.4085351, map: "Almi Bistro, Schwedter Str. 18, 10119 Berlin" },
        { kind: "Essen", title: "Flatto Berlin", note: "Mitte", lat: 52.5233337, lng: 13.3846129, map: "Flatto Berlin, Reinhardtstraße 19, 10117 Berlin" },
        { kind: "Essen", title: "Boii Boii", note: "Kreuzberg", lat: 52.49521, lng: 13.4263622, map: "Boii Boii, Lausitzer Str. 25, 10999 Berlin" },
        { kind: "Essen", title: "Sfera", note: "Neukölln", lat: 52.4739211, lng: 13.4503267, map: "Sfera, Schudomastraße 44, 12055 Berlin" },
        { kind: "Kunst", title: "Kino International", note: "Kino · Mitte", lat: 52.5204707, lng: 13.4228445, map: "Kino International, Karl-Marx-Allee 33, 10178 Berlin" },
        { kind: "Essen", title: "U8 HAUS", note: "Neukölln", lat: 52.4773413, lng: 13.4230698, map: "U8 HAUS, Herrfurthstraße 9, 12049 Berlin" },
        { kind: "Essen", title: "Beef House", note: "Chinesisch · Kreuzberg", lat: 52.4936898, lng: 13.4219281, map: "牛稼莊 Beef House, Kottbusser Damm 94, 10967 Berlin" },
        { kind: "Essen", title: "Taka Fish House", note: "Fisch · Kreuzberg", lat: 52.4999783, lng: 13.4179115, map: "TAKA Fish House, Adalbertstraße 97, 10999 Berlin" },
        { kind: "Essen", title: "Lecker Song", note: "Chinesisch · Prenzlauer Berg", lat: 52.5441305, lng: 13.4204094, map: "Lecker Song, Schliemannstraße 19, 10437 Berlin" },
        { kind: "Essen", title: "Ringbar", note: "Bar · Neukölln", lat: 52.4729531, lng: 13.4543605, map: "Ringbar, Schwarzastraße 1, 12055 Berlin" },
        { kind: "Essen", title: "Nathanja & Heinrich", note: "Café & Bar · Neukölln", lat: 52.487383, lng: 13.4367616, map: "Nathanja & Heinrich, Berlin" },
        { kind: "Essen", title: "Sotto", note: "Pizza · Wedding", lat: 52.5428283, lng: 13.3763919, map: "Sotto, Neue Hochstraße 25, 13347 Berlin" },
        { kind: "Essen", title: "Omoni", note: "Koreanisch · Prenzlauer Berg", lat: 52.5490885, lng: 13.4090254, map: "OMONI 오 모 니, Kopenhagener Str. 14, 10437 Berlin" },
        { kind: "Essen", title: "Jómo", note: "Restaurant · Prenzlauer Berg", lat: 52.5366117, lng: 13.421101, map: "JÓMO Restaurant, Rykestraße 14, 10405 Berlin" },
        { kind: "Shop", title: "Terese", note: "Feinkost · Prenzlauer Berg", lat: 52.5481771, lng: 13.4096312, map: "Terese - Transalpine Feinkost, Rhinower Str. 10, 10437 Berlin" },
        { kind: "Shop", title: "ShaNiu's Market", note: "Asia-Markt · Wilmersdorf", lat: 52.4989791, lng: 13.3243978, map: "Berlin, Uhlandstraße, ShaNiu's Market傻妞便利店邮政编码: 10719" },
        { kind: "Essen", title: "Papa Johns", note: "Pizza · Moabit", lat: 52.5235821, lng: 13.3293461, map: "Papa Johns Pizza, Gotzkowskystraße 19, 10555 Berlin" },
        { kind: "Shop", title: "Knofi", note: "Feinkost · Kreuzberg", lat: 52.4896662, lng: 13.3908881, map: "Knofi Feinkost, Bergmannstraße 98, 10961 Berlin" },
        { kind: "Essen", title: "Ippai no Ramen", note: "Ramen · Friedrichshain", lat: 52.5097803, lng: 13.4581652, map: "IPPAI NO RAMEN Berlin, Gabriel-Max-Straße 2, 10245 Berlin" },
        { kind: "Essen", title: "Dozo Ramen", note: "Ramen · Charlottenburg", lat: 52.5046083, lng: 13.2984682, map: "Dozo Ramen, Leonhardtstraße 24, 14057 Berlin" },
        { kind: "Essen", title: "Gangnam", note: "Korean Chicken · Wedding", lat: 52.5488568, lng: 13.3607771, map: "13347 Berlin, Nazarethkirchstraße, Gangnam - Korean Chicken Restaurant" },
        { kind: "Essen", title: "Ramen Bones", note: "Ramen · Friedrichshain", lat: 52.5071843, lng: 13.4709994, map: "〒10245 Berlin, Neue Bahnhofstraße, RAMEN BONES 3" },
        { kind: "Essen", title: "Leylak", note: "Kreuzberg", lat: 52.4983862, lng: 13.4190417, map: "Leylak, Kottbusser Str. 25, 10999 Berlin" },
        { kind: "Essen", title: "Tacos el Rey", note: "Tacos · Kreuzberg", lat: 52.4950186, lng: 13.4195129, map: "Tacos el Rey, Graefestraße 92, 10967 Berlin" },
        { kind: "Café", title: "Acid P-Berg", note: "Bäckerei · Mitte", lat: 52.5322551, lng: 13.4101483, map: "ACID P-Berg, Christinenstraße 19a, 10119 Berlin" },
        { kind: "Essen", title: "Bamnat", note: "Koreanisch · Kreuzberg", lat: 52.4960784, lng: 13.4222205, map: "Bamnat Korean Restaurant, Paul-Lincke-Ufer 40, 10999 Berlin" },
        { kind: "Essen", title: "Aleppo Supper Club", note: "Syrisch · Prenzlauer Berg", lat: 52.5403954, lng: 13.4183563, map: "Aleppo Supper Club (Meat Hub), Danziger Str. 35, 10435 Berlin" },
        { kind: "Essen", title: "Han Factory", note: "Prenzlauer Berg", lat: 52.54548, lng: 13.41666, map: "Han Factory, Pappelallee 65, 10437 Berlin" },
        { kind: "Shop", title: "Purple Penny Records", note: "Plattenladen · Prenzlauer Berg", lat: 52.5441991, lng: 13.4232149, map: "Purple Penny Records, Stargarder Str. 29, 10437 Berlin" },
        { kind: "Essen", title: "Bertie", note: "Mitte", lat: 52.5338845, lng: 13.4096329, map: "Bertie, Schwedter Str. 13, 10119 Berlin" },
        { kind: "Essen", title: "merold", note: "Neukölln", lat: 52.48961, lng: 13.4339599, map: "merold, Pannierstraße 24, 12047 Berlin" },
        { kind: "Essen", title: "SWAY", note: "Neukölln", lat: 52.4905636, lng: 13.4349283, map: "SWAY, Pannierstraße 29, 12047 Berlin" },
        { kind: "Essen", title: "Teller", note: "Restaurant · Prenzlauer Berg", lat: 52.5453209, lng: 13.4171966, map: "Teller Berlin, Pappelallee 29, 10437 Berlin" },
        { kind: "Essen", title: "Zagros", note: "Kebab · Kreuzberg", lat: 52.4994662, lng: 13.4284868, map: "ZAGROS Gemüsekebap, Skalitzer Str. 100, 10997 Berlin" },
        { kind: "Essen", title: "Muca", note: "Kebab · Kreuzberg", lat: 52.5000668, lng: 13.444284, map: "Muca Kebap, Oranienpl. 2, 10999 Berlin" },
        { kind: "Essen", title: "Trio", note: "Mitte", lat: 52.5268607, lng: 13.4146264, map: "Trio, Linienstraße 13, 10178 Berlin" },
        { kind: "Essen", title: "SAN", note: "Mitte", lat: 52.5270479, lng: 13.4147854, map: "SAN, Weydingerstraße 22, 10178 Berlin" },
        { kind: "Essen", title: "Oka", note: "Onigiri · Mitte", lat: 52.52466, lng: 13.3936027, map: "OKA Onigiri, Oranienburger Str. 72, 10117 Berlin" },
        { kind: "Essen", title: "Les Valseuses", note: "Restaurant · Prenzlauer Berg", lat: 52.5412949, lng: 13.4108581, map: "Les Valseuses Restaurant, Eberswalder Str. 28, 10437 Berlin" },
        { kind: "Essen", title: "Modu", note: "Koreanisch · Prenzlauer Berg", lat: 52.5398548, lng: 13.4184252, map: "MODU - Koreanisches Bistro, Danziger Str. 36, 10435 Berlin" },
        { kind: "Essen", title: "OTSUKA", note: "Mitte", lat: 52.5329847, lng: 13.3877862, map: "OTSUKA, Gartenstraße 86, 10115 Berlin" },
        { kind: "Essen", title: "Fukagawa Ramen", note: "Ramen · Prenzlauer Berg", lat: 52.5356158, lng: 13.4211459, map: "Fukagawa Ramen P-Berg, Wörther Str. 22, 10405 Berlin" },
        { kind: "Essen", title: "Fischerei Löcknitz", note: "Räucherei · Treptow", lat: 52.4939936, lng: 13.4633545, map: "Fischerei Löcknitz - Hafenräucherei Treptow, Puschkinallee 16, 12435 Berlin" },
        { kind: "Essen", title: "Fischfabrik", note: "Fisch · Prenzlauer Berg", lat: 52.5400845, lng: 13.4169355, map: "Fischfabrik Berlin, Danziger Str. 24, 10435 Berlin" },
        { kind: "Café", title: "Gelato Disco", note: "Eis · Kreuzberg", lat: 52.4926956, lng: 13.3981577, map: "Gelato DISCO (artisanal ice cream), Schleiermacherstraße 9, 10961 Berlin" },
        { kind: "Essen", title: "stoke", note: "Kreuzberg", lat: 52.506478, lng: 13.3981085, map: "stoke, Lindenstraße 34, 10969 Berlin" },
        { kind: "Essen", title: "Haliflor", note: "Mitte", lat: 52.5353017, lng: 13.4071768, map: "Haliflor, Schwedter Str. 26, 10119 Berlin" },
        { kind: "Essen", title: "Bademeister", note: "Weißensee", lat: 52.5505973, lng: 13.4658753, map: "Bademeister, Bizetstraße 143, 13088 Berlin" },
        { kind: "Essen", title: "Migas", note: "Listening Bar · Wedding", lat: 52.5437279, lng: 13.3676313, map: "migas, a listening bar, Lindower Str. 19, 13347 Berlin" },
        { kind: "Essen", title: "Eschenbräu", note: "Brauerei · Wedding", lat: 52.5434732, lng: 13.3594853, map: "Eschenbräu, Triftstraße 67, 13353 Berlin" },
        { kind: "Essen", title: "Big Bascha", note: "Moabit", lat: 52.5277452, lng: 13.3272559, map: "Big Bascha, Huttenstraße 5, 10553 Berlin" },
        { kind: "Essen", title: "Pluto", note: "Prenzlauer Berg", lat: 52.5373618, lng: 13.4081661, map: "Pluto, Kastanienallee 27, 10435 Berlin" },
        { kind: "Café", title: "Café Pilz", note: "Café · Neukölln", lat: 52.478628, lng: 13.4237258, map: "Café Pilz, Weisestraße 58, 12049 Berlin" },
        { kind: "Essen", title: "Kaputter Heinrich", note: "Moabit", lat: 52.532143, lng: 13.350416, map: "Kaputter Heinrich, Rathenower Str. 49, 10559 Berlin" },
        { kind: "Essen", title: "Perlou", note: "Moabit", lat: 52.5325269, lng: 13.351094, map: "Perlou, Perleberger Str. 58, 10559 Berlin" },
        { kind: "Essen", title: "Gedeih & Verderb", note: "Gesundbrunnen", lat: 52.5556328, lng: 13.3837565, map: "Gedeih & Verderb, Prinzenallee 72, 13357 Berlin" },
        { kind: "Essen", title: "Ugur Imbiss", note: "Imbiss · Gesundbrunnen", lat: 52.554078, lng: 13.3833765, map: "Ugur Imbiss, Prinzenallee 14, 13357 Berlin" },
        { kind: "Shop", title: "Mimi Ferments", note: "Fermente · Wedding", lat: 52.5525689, lng: 13.3604206, map: "Mimi Ferments, Oudenarder Str. 16/Haus C7, 13347 Berlin" },
        { kind: "Essen", title: "Japan Plaza", note: "Japanisch · Mitte", lat: 52.5227918, lng: 13.4083859, map: "Japan Plaza Bistro, Rochstraße 14e, 10178 Berlin" },
        { kind: "Essen", title: "Al-Reda-Grill", note: "Grill · Moabit", lat: 52.5276624, lng: 13.3279795, map: "Al-Reda-Grill, Huttenstraße 2, 10553 Berlin" },
        { kind: "Essen", title: "Kajumi", note: "Prenzlauer Berg", lat: 52.5441872, lng: 13.4219242, map: "Kajumi, Dunckerstraße 73, 10437 Berlin" },
        { kind: "Essen", title: "OPEN HOUSE", note: "Prenzlauer Berg", lat: 52.5353007, lng: 13.4281594, map: "OPEN HOUSE, Christburger Str. 13, 10405 Berlin" },
        { kind: "Essen", title: "Mr. Noodle Chen", note: "Nudeln · Wedding", lat: 52.5441458, lng: 13.3602561, map: "Mr. Noodle Chen, Willdenowstraße 12, 13353 Berlin" },
        { kind: "Essen", title: "Salami Social Club", note: "Pizza · Friedrichshain", lat: 52.5150878, lng: 13.4633347, map: "Salami Social Club, Frankfurter Allee 43, 10247 Berlin" },
        { kind: "Essen", title: "Pinci", note: "Mitte", lat: 52.527113, lng: 13.3983458, map: "Pinci, Große Hamburger Str. 42, 10178 Berlin" },
        { kind: "Café", title: "Les Pâtisseries de Sébastien", note: "Patisserie · Mitte", lat: 52.5323781, lng: 13.3969477, map: "Les Pâtisseries de Sébastien, Invalidenstraße 157, 10115 Berlin" },
        { kind: "Essen", title: "Shiori", note: "Mitte", lat: 52.5255437, lng: 13.4079551, map: "Shiori, Max-Beer-Str. 13, 10119 Berlin" },
        { kind: "Essen", title: "Caravaggi", note: "Naturwein-Bistro · Prenzlauer Berg", lat: 52.5430208, lng: 13.420258, map: "Caravaggi Naturwein Bistro, Lettestraße 3, 10437 Berlin" },
        { kind: "Essen", title: "Örnek", note: "Lahmacun · Gesundbrunnen", lat: 52.5541836, lng: 13.3827605, map: "Örnek Lahmacun Evi, Prinzenallee 80-82, 13357 Berlin" },
        { kind: "Essen", title: "Sasaya", note: "Prenzlauer Berg", lat: 52.5442878, lng: 13.4186297, map: "Sasaya, Lychener Str. 50, 10437 Berlin" },
        { kind: "Essen", title: "Simsim", note: "Levantinisch · Prenzlauer Berg", lat: 52.5368957, lng: 13.4169018, map: "simsim levantine eatery, Husemannstraße 1, 10435 Berlin" },
        { kind: "Essen", title: "August Fengler", note: "Prenzlauer Berg", lat: 52.5417116, lng: 13.4150089, map: "August Fengler, Lychener Str. 11, 10437 Berlin" },
        { kind: "Essen", title: "Ushido", note: "Japanisches BBQ · Prenzlauer Berg", lat: 52.5422268, lng: 13.4162567, map: "Ushido - Japanese bbq, Lychener Str. 18, 10437 Berlin" },
        { kind: "Essen", title: "Wax On", note: "Bar · Neukölln", lat: 52.4881756, lng: 13.4298614, map: "Wax On Bar, Weserstr. 208, 12047 Berlin" },
        { kind: "Essen", title: "Atopia", note: "Prenzlauer Berg", lat: 52.541612, lng: 13.4252502, map: "Atopia, Prenzlauer Allee 187, 10405 Berlin" },
        { kind: "Essen", title: "KROM", note: "Prenzlauer Berg", lat: 52.5321197, lng: 13.4240981, map: "KROM, Winsstraße 9, 10405 Berlin" },
        { kind: "Shop", title: "Centro Italia", note: "Italienischer Supermarkt · Prenzlauer Berg", lat: 52.5391877, lng: 13.4384846, map: "Centro Italia | Supermarkt, Weinhandlung, Online Shop, Greifswalder Str. 80C, 10405 Berlin" },
        { kind: "Essen", title: "Lola Pizzaiola", note: "Pizza · Prenzlauer Berg", lat: 52.5344589, lng: 13.426114, map: "LOLA Pizzaiola, Winsstraße 21, 10405 Berlin" },
        { kind: "Café", title: "Café Bornträger", note: "Café · Prenzlauer Berg", lat: 52.5489855, lng: 13.4212576, map: "Café Bornträger, Stahlheimer Str. 3A, 10439 Berlin" },
        { kind: "Essen", title: "Mayflower", note: "Prenzlauer Berg", lat: 52.55096, lng: 13.4183836, map: "Mayflower, Greifenhagener Str. 27, 10437 Berlin" },
        { kind: "Essen", title: "Nemo", note: "Weißensee", lat: 52.5516493, lng: 13.43076, map: "Nemo, Gustav-Adolf-Straße 1, 13086 Berlin" },
        { kind: "Essen", title: "Dotori", note: "Korean Bar · Weißensee", lat: 52.5532884, lng: 13.4336227, map: "Dotori - Korean Anju Bar, Gustav-Adolf-Straße 159, 13086 Berlin" },
      ],

      // optional: Bild-Link unter den Unternehmungen (hier: unsere Berlin-Seite mit der Google-Maps-Liste)
      favorites: { title: "Unsere Berlin-Favoriten", url: "/berlin/", image: "/berlin/img/berlin-4.jpg" },

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
