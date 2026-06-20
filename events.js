/* =====================================================================
   THE MOORE BEAT — DATA FILE
   This is the ONLY file you (or Claude) edit to add, remove, or change
   events, specials, restaurants, and featured businesses.

   HOW TO ADD SOMETHING: copy one { ... } block, paste it, and change the
   text between the quotation marks. Keep the commas. Dates = YYYY-MM-DD.
   Past events disappear from the site automatically.

   RECURRING EVENTS (e.g. a weekly market): add three optional fields to an
   event. "date" becomes the FIRST occurrence and sets the weekday:
       repeat: "weekly",
       repeatUntil: "2026-11-21",      // last date it repeats
       except: ["2026-10-03"]          // optional dates to skip (or omit)
   The homepage shows the next upcoming occurrence; the Calendar page shows
   every occurrence on its day.

   WANT CLAUDE TO UPDATE IT? Just ask, e.g.
     "Add this weekend's Moore County events to my site."
     "Pull the new shows from the Sunrise Theater calendar."

   Sources used for this real data: The Pilot (thepilot.com),
   Visit Pinehurst/Southern Pines/Aberdeen CVB (homeofgolf.com),
   Town of Southern Pines (southernpines.net), Moore County Farmers Market.
   Last updated: June 18, 2026.
   ===================================================================== */

const EVENTS = [
  {
    title: "Juneteenth Celebration",
    date: "2026-06-19",
    time: "4:00 PM – 9:00 PM",
    town: "Southern Pines",
    category: "Community",
    description: "Storytelling, music, and celebration at the West Southern Pines Cultural Arts Center. A warm community gathering to mark the day.",
    link: "https://homeofgolf.com/events/weekender/"
  },
  {
    title: "All-Nashville Roadshow",
    date: "2026-06-19",
    time: "5:30 PM",
    town: "Pinehurst",
    category: "Music",
    description: "The best of Music City comes to the Pinehurst Harness Track — a lineup of performers, Nashville-inspired eats, and craft brews.",
    link: "https://allnashvilleroadshow.com/",
    livemusic: true
  },
  { title: "Nick Theo at Red's Corner", date: "2026-06-19", time: "6–8 PM", town: "Southern Pines", category: "Music", description: "Live music in the beer garden to kick off the weekend, with food vendors on site: Tanglewood Farms, Xavi Davi's Taste of PR, Meat & Greek, Bare Baked Pizza, Cookies & Moore, and Impact Burger.", link: "https://www.instagram.com/redscornersp/", livemusic: true },
  { title: "Scott Grote Full Band at 1901 Lounge", date: "2026-06-19", time: "7:30–10:30 PM", town: "Southern Pines", category: "Music", description: "Full-band night at 1901 Lounge.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Tim Wilson at Wine Cellar", date: "2026-06-19", time: "7:30–10:30 PM", town: "Southern Pines", category: "Music", description: "Live music at the Wine Cellar.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Ramblin Roosters at 715", date: "2026-06-19", time: "8–11 PM", town: "Southern Pines", category: "Music", description: "Live music at 715.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Robert Alexander Smith at Railhouse (Penn Station)", date: "2026-06-19", time: "7–10 PM", town: "Southern Pines", category: "Music", description: "Live music downtown.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Karaoke at Rudino's", date: "2026-06-19", time: "8 PM–12 AM", town: "Southern Pines", category: "Music", description: "Grab the mic — karaoke night at Rudino's.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Dustin Day at Bell Tree", date: "2026-06-19", time: "9 PM–12 AM", town: "Southern Pines", category: "Music", description: "Late-night live music at the Bell Tree.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Dead City at Neville's", date: "2026-06-19", time: "10 PM–1 AM", town: "Southern Pines", category: "Music", description: "Late-night live music at Neville's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Whiskey Pines at O'Donnell's", date: "2026-06-19", time: "9:30 PM–1:30 AM", town: "Southern Pines", category: "Music", description: "Live music into the early hours at O'Donnell's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Pete O'Dea at Maxie's", date: "2026-06-19", time: "5:30–8:30 PM", town: "Pinehurst", category: "Music", description: "Early-evening live music at Maxie's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Amanda Acoustic at Villagio", date: "2026-06-19", time: "6:30–9:30 PM", town: "Pinehurst", category: "Music", description: "Acoustic music on the Villagio patio.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Clark Bennett at Drum & Quill", date: "2026-06-19", time: "8:30–11:30 PM", town: "Pinehurst", category: "Music", description: "Live music in the Village at Drum & Quill.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Jeremy & JD at Dugan's Pub", date: "2026-06-19", time: "9 PM–midnight", town: "Pinehurst", category: "Music", description: "Live music at Dugan's Pub.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Karaoke at Railhouse Brewery", date: "2026-06-19", time: "8–11 PM", town: "Aberdeen", category: "Music", description: "Friday karaoke at the Railhouse taproom.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Karaoke & Dance Party at Timeout Bar & Grill", date: "2026-06-19", time: "8 PM–midnight", town: "Carthage", category: "Music", description: "Karaoke and dancing in Carthage.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "DJ DeeJaye Wright at Black Dog Tavern", date: "2026-06-19", time: "Evening", town: "Robbins", category: "Music", description: "DJ night at Black Dog Tavern.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Jerry Daniels at DewBerry Cafe", date: "2026-06-19", time: "6–8 PM", town: "Cameron", category: "Music", description: "Live music at DewBerry Cafe.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },

  { title: "Tony Barnes Duo at Red's Corner", date: "2026-06-20", time: "5:30–8:30 PM", town: "Southern Pines", category: "Music", description: "Live music in the beer garden.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Corey Comer at 1901 Lounge", date: "2026-06-20", time: "7:30–10:30 PM", town: "Southern Pines", category: "Music", description: "Live music at 1901 Lounge.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Howard Buie at Wine Cellar", date: "2026-06-20", time: "7:30–10:30 PM", town: "Southern Pines", category: "Music", description: "Live music at the Wine Cellar.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "One Shot Left at 715", date: "2026-06-20", time: "8–11 PM", town: "Southern Pines", category: "Music", description: "Live music at 715.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "2 South at Bell Tree", date: "2026-06-20", time: "9 PM–12 AM", town: "Southern Pines", category: "Music", description: "Late-night live music at the Bell Tree.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Whiskey Pines at Legends", date: "2026-06-20", time: "9 PM–12 AM", town: "Southern Pines", category: "Music", description: "Live music at Legends.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Bad Habits at Neville's", date: "2026-06-20", time: "10 PM–1 AM", town: "Southern Pines", category: "Music", description: "Late-night live music at Neville's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Aftermath at O'Donnell's", date: "2026-06-20", time: "9:30 PM–1:30 AM", town: "Southern Pines", category: "Music", description: "Live music into the early hours at O'Donnell's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Matt Letch at Maxie's", date: "2026-06-20", time: "5:30–8:30 PM", town: "Pinehurst", category: "Music", description: "Early-evening live music at Maxie's.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Chelsea Davis at Villagio", date: "2026-06-20", time: "6:30–9:30 PM", town: "Pinehurst", category: "Music", description: "Live music on the Villagio patio.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Stone Dolls at Pinehurst Brewing", date: "2026-06-20", time: "7–10 PM", town: "Pinehurst", category: "Music", description: "Live music at the steam-plant brewery.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Scarlet Tantrum at Drum & Quill", date: "2026-06-20", time: "8:30–11:30 PM", town: "Pinehurst", category: "Music", description: "Live music in the Village at Drum & Quill.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "DJ Kyll Dyll at Dugan's Pub", date: "2026-06-20", time: "9 PM–midnight", town: "Pinehurst", category: "Music", description: "DJ night at Dugan's Pub.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Line Dancing + JD & Bill at Railhouse Brewery", date: "2026-06-20", time: "6–10 PM", town: "Aberdeen", category: "Music", description: "Line dancing at 6 PM, then JD & Bill live 7–10 PM.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Karaoke & Dance Party at Timeout Bar & Grill", date: "2026-06-20", time: "8 PM–midnight", town: "Carthage", category: "Music", description: "Karaoke and dancing in Carthage.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Pool Tournament & Karaoke at Black Dog Tavern", date: "2026-06-20", time: "7 PM", town: "Robbins", category: "Community", description: "Pool tournament at 7 PM, plus karaoke.", link: "https://www.instagram.com/sopinesscene/" },
  { title: "Music Bingo & Trivia at Lake House Tavern", date: "2026-06-20", time: "7 PM", town: "Seven Lakes", category: "Community", description: "Music bingo and trivia at the Lake House.", link: "https://www.instagram.com/sopinesscene/" },

  { title: "Celebrate Father's Day @ Red's", date: "2026-06-21", time: "1–6 PM", town: "Southern Pines", category: "Music", description: "A Father's Day celebration at Red's Corner with dad specials at the bar all day. Mini-Market 1–4 PM with vendors Eleven Under, Nomad Jax, The Distinguished Beast, and Tomorrow Sun. Live music 1–6 PM: Nolan Goodwin w/ Jonathan & Elijah Robinson (1–3), The Smoking Section (3–4), and Olivia Christian w/ Jake & Jess Christian (4–6).", link: "https://www.instagram.com/redscornersp/", livemusic: true },
  { title: "Mary Stone & Dear Old Dad at James Creek", date: "2026-06-21", time: "2–5 PM", town: "Cameron", category: "Music", description: "Sunday live music at James Creek Cider House.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Corey Comer at Railhouse", date: "2026-06-21", time: "2–5 PM", town: "Aberdeen", category: "Music", description: "Sunday afternoon live music at Railhouse.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "Tim Wilson at BHAWK Distillery", date: "2026-06-21", time: "5–8 PM", town: "Southern Pines", category: "Music", description: "Sunday live music at BHAWK Distillery.", link: "https://www.instagram.com/sopinesscene/", livemusic: true },
  { title: "DJ Brandon Cox & DJ Van Horton at 1901 Lounge", date: "2026-06-21", time: "1–7 PM", town: "Southern Pines", category: "Music", description: "Sunday DJ sets at 1901 Lounge.", link: "https://www.instagram.com/sopinesscene/" },
  {
    title: "Sandhills Bogeys vs. Cape Fear Ghost Crabs",
    date: "2026-06-19",
    time: "7:00 PM",
    town: "Moore County",
    category: "Sports",
    description: "Cheer on the Sandhills Bogeys under the lights at Bogeys Ballpark. Family-friendly summer baseball.",
    link: "https://sandhillsbogeys.com/"
  },
  {
    title: "A Night of SADE with Tonya Nicole",
    date: "2026-06-19",
    time: "7:30 PM",
    town: "Southern Pines",
    category: "Music",
    description: "Charleston-based jazz & R&B vocalist Tonya Nicole and her band perform the music of Sade at the historic Sunrise Theater.",
    link: "https://sunrisetheater.com/",
    livemusic: true
  },
  {
    title: "Moore County Farmers Market — Saturdays",
    date: "2026-06-20",
    time: "8:00 AM – 12:00 PM",
    town: "Southern Pines",
    category: "Market",
    description: "Local produce, eggs, baked goods, and crafts at Downtown Park every Saturday through Nov 21, with live music 10 AM–noon.",
    link: "https://www.moorecountyfarmersmarket.com/",
    repeat: "weekly",
    repeatUntil: "2026-11-21",
    except: ["2026-10-03"]
  },
  {
    title: "The Bad Dads Comedy Tour",
    date: "2026-06-20",
    time: "7:30 PM",
    town: "Southern Pines",
    category: "Arts",
    description: "A night of laughs as a group of buddies riff on life, growing up, and relationships at the Sunrise Theater.",
    link: "https://sunrisetheater.com/"
  },
  {
    title: "Father's Day at James Creek Cider House",
    date: "2026-06-21",
    time: "1:00 PM",
    town: "Cameron",
    category: "Food & Drink",
    description: "A farmers market, live music, special beer & cider flights, and a cornhole tournament to celebrate dad.",
    link: "https://homeofgolf.com/events/weekender/"
  },
  {
    title: "Picnic in the Park",
    date: "2026-06-24",
    time: "Evening",
    town: "Southern Pines",
    category: "Family",
    description: "A relaxed evening of community and music in the park, hosted by Southern Pines Recreation & Parks.",
    link: "https://www.southernpines.net/calendar.aspx?CID=31"
  },
  {
    title: "Moore County Farmers Market — Thursdays",
    date: "2026-06-25",
    time: "9:00 AM – 12:30 PM",
    town: "Southern Pines",
    category: "Market",
    description: "The year-round Thursday market at the Armory Sports Complex — fresh fruits, vegetables, eggs, and more from local farmers.",
    link: "https://www.moorecountyfarmersmarket.com/",
    repeat: "weekly",
    repeatUntil: "2026-12-31"
  },
  {
    title: "MMIA Fundraising @ Freddy's",
    date: "2026-06-25",
    time: "4:00 PM – 8:00 PM",
    town: "Southern Pines",
    category: "Community",
    description: "Eat at Freddy's (10757 US 15-501) and support Military Missions In Action — Freddy's donates 20% of event sales. Show the flyer or say \"I'm here for the fundraiser\" at checkout; online and mobile orders use promo code GIVEBACK.",
    link: "https://www.freddys.com/"
  },
  {
    title: "First Friday Concert on the Sunrise Lawn",
    date: "2026-07-03",
    time: "5:00 PM – 9:00 PM",
    town: "Southern Pines",
    category: "Music",
    description: "A free outdoor concert on the Sunrise Lawn with cold brews from R&D Brewing and local food trucks — bring the whole family.",
    link: "https://sunrisetheater.com/music"
  },
  {
    title: "Peach Week",
    date: "2026-07-18",
    time: "July 18 – 26",
    town: "Moore County",
    category: "Festival",
    description: "The CVB's countywide celebration of all things peach — a restaurant competition, food truck battle, 5K fun run, car show, specialty drinks, and kids' activities across the Sandhills.",
    link: "https://homeofgolf.com/peach-week/"
  },
  {
    title: "Peach Pathways Scavenger Hunt",
    date: "2026-07-18",
    time: "July 18 – 22",
    town: "Moore County",
    category: "Family",
    description: "Hunt for 20 handcrafted glass peaches hidden along trails throughout the Sandhills during the opening days of Peach Week.",
    link: "https://homeofgolf.com/peach-week/peach-pathways/"
  },
  {
    title: "Pista sa Nayon (Fiesta in the Village)",
    date: "2026-07-20",
    time: "3:00 PM – 8:00 PM",
    town: "Southern Pines",
    category: "Festival",
    description: "A summer fiesta hosted by the Filipino American Bayanihan Community of North Carolina at the Southern Pines Armory. Guests receive a boxed lunch of traditional Filipino foods, followed by an afternoon of dancing, music, and games. Event director: Sol Lalic.",
    link: "https://www.thepilot.com/"
  },
  {
    title: "Peach Week Restaurant Competition",
    date: "2026-07-22",
    time: "July 22 – 26",
    town: "Moore County",
    category: "Food & Drink",
    description: "Restaurants, breweries, bakeries, and coffee spots serve up peach-inspired dishes and drinks — try a few, then vote for your favorite.",
    link: "https://homeofgolf.com/peach-week/restaurant-competition/"
  },
  {
    title: "Cocktail Class with Brooke McClure",
    date: "2026-07-28",
    time: "6:00 PM",
    town: "Aberdeen",
    category: "Food & Drink",
    description: "Poplar Place's first Cocktail Making Class — learn the history and art of crafting two classics, the Mary Pickford and the Last Word. Includes a welcome glass of champagne and light snacks. Tickets $75.",
    link: "https://www.instagram.com/poplarplacenc/"
  },
  {
    title: "Autumnfest",
    date: "2026-10-03",
    time: "9:00 AM – 4:00 PM",
    town: "Southern Pines",
    category: "Festival",
    description: "Downtown Southern Pines' big fall street festival — arts & crafts vendors, food, music, a 5K road race, and youth fun runs.",
    link: "https://www.southernpines.net/586/Special-Events"
  },
  {
    title: "Trivia Night at Railhouse Brewery",
    date: "2026-06-23",
    time: "7:00 PM",
    town: "Aberdeen",
    category: "Community",
    description: "Weekly trivia hosted by 910 Comedy at Railhouse Brewery — gather a team, grab a pint, and play for prizes.",
    link: "https://www.railhousebrewery.com/",
    repeat: "weekly",
    repeatUntil: "2026-12-31"
  },
  {
    title: "Music Bingo at Railhouse Brewery",
    date: "2026-06-24",
    time: "7:00 PM",
    town: "Aberdeen",
    category: "Music",
    description: "Name-that-tune bingo hosted by Dye Entertainment every Wednesday — four rounds, four prizes.",
    link: "https://www.railhousebrewery.com/",
    repeat: "weekly",
    repeatUntil: "2026-12-31"
  },
  {
    title: "Live Music at The Rooster's Wife",
    date: "2026-06-21",
    time: "6:46 PM",
    town: "Aberdeen",
    category: "Music",
    description: "The beloved 100-seat listening room hosts touring and regional artists most Sunday evenings. Lineups change weekly — check the schedule for who's playing.",
    link: "https://www.songkick.com/venues/1152651-roosters-wife",
    repeat: "weekly",
    repeatUntil: "2026-12-31",
    livemusic: true
  }
];

/* =====================================================================
   HAPPY HOURS & DEALS  (homepage section + the Happy Hour by Day finder)
   days:  which day(s) the deal runs, e.g. ["Tuesday"] or ["Friday","Saturday"].
          Use ["Daily"] for an everyday deal. The finder filters on this.
   For a recurring weekly special, leave expires:"" (it always shows).
   For a one-time sale, set expires:"YYYY-MM-DD" and it auto-hides after.
   Note: bar/restaurant specials change — confirm before relying on them.
   ===================================================================== */

const SPECIALS = [
  {
    business: "Drum & Quill",
    town: "Pinehurst",
    days: ["Sunday"],
    offer: "$5 Bloody Marys & Mimosas with Sunday brunch.",
    expires: ""
  },
  {
    business: "Railhouse Brewery",
    town: "Aberdeen",
    days: ["Monday"],
    offer: "Meatless Mondays — rotating vegetarian specials all day.",
    expires: ""
  },
  {
    business: "Drum & Quill",
    town: "Pinehurst",
    days: ["Tuesday"],
    offer: "Taco Tuesday: 3 tacos for the price of 2 all day, plus $1 off all drafts.",
    expires: ""
  },
  {
    business: "Drum & Quill",
    town: "Pinehurst",
    days: ["Wednesday"],
    offer: "Wine Down Wednesday: half-price select wine bottles and half-price appetizers.",
    expires: ""
  },
  {
    business: "Drum & Quill",
    town: "Pinehurst",
    days: ["Thursday"],
    offer: "Thirsty Thursday: $1 off all drafts, $10 off domestic beer buckets, and $15 off select imports.",
    expires: ""
  }
];

/* =====================================================================
   RESTAURANT & BAR GUIDE  (the "Eat & Drink" section)
   Real Moore County spots. price: "$", "$$", or "$$$".
   vibe: short chips — "Date Night","Patio","Live Music","Family",
         "Brunch","Craft Beer","Late Night","Farm-to-Table","Outdoor"
   ===================================================================== */

const RESTAURANTS = [
  {
    name: "Ashten's",
    town: "Southern Pines",
    cuisine: "Southern",
    price: "$$$",
    vibe: ["Date Night", "Farm-to-Table"],
    happyhour: "",
    description: "Southern cooking with a global twist — farm-to-table, with daily deliveries from local farmers and standout vegetarian options.",
    link: "https://ashtens.com/"
  },
  {
    name: "Chef Warren's",
    town: "Southern Pines",
    cuisine: "French",
    price: "$$$",
    vibe: ["Date Night"],
    happyhour: "",
    description: "A French-style bistro with an open kitchen and a menu that changes with what's seasonal and local.",
    link: "https://www.chefwarrens.com/"
  },
  {
    name: "Southern Prime Steakhouse",
    town: "Southern Pines",
    cuisine: "Steakhouse",
    price: "$$$",
    vibe: ["Date Night"],
    happyhour: "",
    description: "A classic downtown steakhouse with an expansive wine cellar and 20+ wines by the glass.",
    link: "https://www.southernprimesteakhouse.net/"
  },
  {
    name: "Betsy's Crepes",
    town: "Southern Pines",
    cuisine: "Breakfast & Brunch",
    price: "$",
    vibe: ["Brunch", "Family"],
    happyhour: "",
    description: "The go-to downtown creperie for sweet and savory crepes, French toast, and breakfast cocktails.",
    link: ""
  },
  {
    name: "Red's Corner",
    town: "Southern Pines",
    cuisine: "Food Trucks",
    price: "$",
    vibe: ["Family", "Live Music", "Outdoor", "Craft Beer"],
    happyhour: "",
    description: "A food-truck park and beer garden with a rotating lineup, kids' play area, karaoke, and live music.",
    link: "https://www.redscornersp.com/"
  },
  {
    name: "SoPies Pizza",
    town: "Southern Pines",
    cuisine: "Pizza",
    price: "$",
    vibe: ["Family", "Late Night"],
    happyhour: "",
    description: "Authentic New York pizza by the slice or the pie — including the massive 28-inch Empire State.",
    link: "http://www.sopiespizza.com/"
  },
  {
    name: "Villagio Ristorante & Bar",
    town: "Pinehurst",
    cuisine: "Italian",
    price: "$$$",
    vibe: ["Date Night", "Patio", "Live Music"],
    happyhour: "",
    description: "Pasta and bread made fresh in-house daily, set in the historic Magnolia Inn with a patio and occasional live music. Reservations required.",
    link: "https://villaggioristorante.net/"
  },
  {
    name: "Drum & Quill",
    town: "Pinehurst",
    cuisine: "Tavern",
    price: "$$",
    vibe: ["Late Night", "Craft Beer", "Date Night"],
    happyhour: "",
    description: "An American tavern in the heart of the Village with the area's largest spirits collection — over 150 available.",
    link: "https://www.drumandquill.com/"
  },
  {
    name: "Pinehurst Track Restaurant",
    town: "Pinehurst",
    cuisine: "Breakfast & Brunch",
    price: "$",
    vibe: ["Brunch", "Family"],
    happyhour: "",
    description: "A locally owned, cash-only breakfast & lunch spot on the historic Harness Track — home to blueberry pancakes ranked among the country's best.",
    link: "https://www.pinehursttrackrestaurant.com/"
  },
  {
    name: "Roast",
    town: "Pinehurst",
    cuisine: "Sandwiches",
    price: "$",
    vibe: ["Farm-to-Table", "Family"],
    happyhour: "",
    description: "A farm-to-table sandwich shop supporting NC farms — with regular, vegetarian, and a standout vegan BBQ 'pulled pork' option.",
    link: "https://www.roastnc.com/"
  },
  {
    name: "San Felipe Mexican Restaurant",
    town: "Aberdeen",
    cuisine: "Mexican",
    price: "$",
    vibe: ["Family"],
    happyhour: "",
    description: "Local favorite for Mexican plates with, many say, the best margaritas and queso in the area.",
    link: "https://www.sanfelipenc.com/"
  },
  {
    name: "Mason's Restaurant & Grocery",
    town: "Aberdeen",
    cuisine: "Breakfast & Brunch",
    price: "$$",
    vibe: ["Brunch"],
    happyhour: "",
    description: "Downtown Aberdeen brunch spot with scratch-made biscuits, cocktails, and a small market of local goods. Gets busy — go early.",
    link: "https://www.eatatmasons.com/"
  },
  {
    name: "Pizzeria Grazia",
    town: "Aberdeen",
    cuisine: "Pizza",
    price: "$",
    vibe: ["Family"],
    happyhour: "",
    description: "Counter-service Neapolitan pizzeria with scratch dough fired in an 800° wood oven, plus vegan options.",
    link: "https://www.pizzeriagrazia.com/"
  },
  {
    name: "Railhouse Brewery",
    town: "Aberdeen",
    cuisine: "Brewery",
    price: "$",
    vibe: ["Craft Beer", "Family"],
    happyhour: "",
    description: "Veteran-owned Aberdeen brewery with a solid house lineup and a laid-back taproom.",
    link: "https://www.railhousebrewery.com/"
  }
];

/* =====================================================================
   FEATURED LOCAL BUSINESSES  (the "Shops & Services" section)
   Add real local shops & makers here. This is also where paying
   sponsors will eventually be featured.
   ===================================================================== */

const BUSINESSES = [
  {
    name: "The Country Bookshop",
    town: "Southern Pines",
    category: "Bookstore",
    description: "A beloved independent bookstore in downtown Southern Pines since 1953, with author events and staff picks.",
    link: "https://www.thecountrybookshop.biz/"
  },
  {
    name: "Cameron Antiques District",
    town: "Cameron",
    category: "Shopping",
    description: "The 'Antiques Capital of North Carolina' — a historic village of antique shops worth a slow afternoon of browsing.",
    link: ""
  }
];

/* =====================================================================
   LIVE MUSIC VENUES  (the "Where to find live music" guide)
   Venues known for regular live music. Specific dated shows go in EVENTS
   with  livemusic: true  so they show on the Live Music page automatically.
   ===================================================================== */

const MUSIC_VENUES = [
  {
    name: "The Rooster's Wife",
    town: "Aberdeen",
    when: "Most Sunday evenings",
    description: "An intimate 100-seat listening room hosting touring and regional songwriters and bands.",
    link: "https://www.songkick.com/venues/1152651-roosters-wife"
  },
  {
    name: "Red's Corner",
    town: "Southern Pines",
    when: "Weekly + weekends",
    description: "Food-truck park and beer garden with live music throughout the week, plus karaoke nights.",
    link: "https://www.redscornersp.com/"
  },
  {
    name: "Pinehurst Brewing Co.",
    town: "Pinehurst",
    when: "Weekends",
    description: "Live music on weekends at the historic steam-plant brewery, steps from the Village.",
    link: "https://www.pinehurstbrewing.com/"
  },
  {
    name: "James Creek Cider House",
    town: "Cameron",
    when: "Most weeks",
    description: "Live music, music bingo, or trivia most weeks, with rotating food trucks on site.",
    link: "https://homeofgolf.com/directory/james-creek-cider-house/"
  },
  {
    name: "Railhouse Brewery",
    town: "Aberdeen",
    when: "Fridays & weekends",
    description: "Local bands plus weekly karaoke (Fridays) and music bingo at the Aberdeen taproom.",
    link: "https://www.railhousebrewery.com/"
  },
  {
    name: "Villagio Ristorante & Bar",
    town: "Pinehurst",
    when: "Select evenings",
    description: "Occasional live music on the patio at the historic Magnolia Inn.",
    link: "https://villaggioristorante.net/"
  }
];
