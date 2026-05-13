// VolleyHub NTX - app.js
// UPDATE THESE BEFORE GOING LIVE:
var ADMIN_PW = 'VH_Admin_2026!';
var SHEET_WEBHOOK = 'YOUR_WEBHOOK_URL';
var VENMO_URL = 'https://venmo.com/u/VolleyHubNTX';
var PAYPAL_URL = 'https://paypal.me/VolleyHubNTX';
var ZELLE_EMAIL = 'info.volleyhubntx@gmail.com';
var CONTACT_EMAIL = 'info.volleyhubntx@gmail.com';
var TODAY = new Date('2026-05-04');

var CLUBS = [
  {id:1,name:'Madfrog',rank:1,dir:'Stefanie Samuels',ph:'214-233-6167',city:'Dallas',loc:'MADSPORTS Training Facility, Dallas TX',dues:'$1,500-$7,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','10'],pl:'10-12',prac:'2-3/wk',com:'Cooperative',gen:'Female',web:'madfrogsports.com',pts:209,lev:'All levels through Open National',note:'2026-27 evals open now. Check madfrogsports.com for schedule.',evals:[{a:'All 10s-18s',d:'Check website',t:'See madfrogsports.com',f:'TBD',n:'Confirm at madfrogsports.com/evaluations'}]},
  {id:2,name:'Skyline Juniors',rank:2,dir:'Jodie Rye',ph:'972-675-1448',city:'Dallas',loc:'SouthWest Athletic Center, Dallas TX',dues:'See Website',fund:'Optional',trav:'None',ps:'Yes',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (top), Coop (others)',gen:'Female',web:'skylinejuniors.com',pts:200,lev:'Recreational through Open National',note:'Check skylinejuniors.com for 2026-27 eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See skylinejuniors.com',f:'TBD',n:'Multiple sessions per age group'}]},
  {id:3,name:'Texas Advantage',rank:3,dir:'Corinne Atchison',ph:'See website',city:'Lewisville',loc:'The MAC, 200 Continental Dr, Lewisville TX',dues:'$3,000-$8,000',fund:'Optional',trav:'None',ps:'Yes',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (top 14s-18s), Coop (others)',gen:'Female',web:'tavvolleyball.com',pts:181,lev:'All levels through Open National',note:'Check tavvolleyball.com for current schedule.',evals:[{a:'All 10s-18s',d:'Check website',t:'See tavvolleyball.com',f:'TBD',n:'Multiple sessions at The MAC'}]},
  {id:4,name:'Excel Volleyball',rank:4,dir:'Sherri Hausner',ph:'469-319-9150',city:'Lewisville',loc:'Courtside Sports Center, Lewisville TX',dues:'$2,000-$5,800',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Both',web:'excelvbc.com',pts:176,lev:'Beginner through National',note:'Check excelvbc.com for 2026-27 evals. Coed programming available.',evals:[{a:'All ages',d:'Check website',t:'See excelvbc.com',f:'TBD',n:'Coed programming available'}]},
  {id:5,name:'1 United Volleyball',rank:5,dir:'See website',ph:'N/A',city:'Dallas',loc:'North Texas area',dues:'See website',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11'],pl:'10-12',prac:'2/wk',com:'Cooperative',gen:'Female',web:'ntrvb.com',pts:112,lev:'Competitive',note:'Visit ntrvb.com for current evaluation info.',evals:[{a:'All ages',d:'Check website',t:'See ntrvb.com',f:'TBD',n:''}]},
  {id:6,name:'Arete Athletics',rank:6,dir:'Krista Gibson',ph:'214-223-5969',city:'McKinney',loc:'Arete Athletics Center, 1720 Bray Central Dr, McKinney TX 75069',dues:'$1,500+',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Both',web:'areteathletics.com',pts:73,lev:'All levels through Open National',note:'EVAL WINDOW OPEN NOW. Verbal offers May 19 2026. Signing day July 8 2026. 28-30 girls teams + 8 club prep teams. See areteathletics.com/tryouts.',evals:[{a:'9s-12s',d:'Open now',t:'Multiple sessions - see website',f:'Clinic fee - see site',n:'Earlier sessions = more opportunities'},{a:'13s-18s',d:'Open now',t:'Multiple sessions - see website',f:'Clinic fee - see site',n:'Verbal offers May 19; binding offers July 8'},{a:'Boys teams',d:'Check website',t:'See areteathletics.com',f:'TBD',n:'Boys programming available'}]},
  {id:7,name:'Dallas Premier',rank:7,dir:'Geoff Kiessling',ph:'832-549-0532',city:'Dallas',loc:'Premier Volleyball Center, Dallas TX',dues:'$3,500-$6,500',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (top 14s-18s), Coop (others)',gen:'Both',web:'dallaspremier.org',pts:71,lev:'Competitive through National',note:'Check dallaspremier.org for 2026-27 eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See dallaspremier.org',f:'TBD',n:'Coed programming'}]},
  {id:8,name:'Fieldhouse Volleyball',rank:8,dir:'Fieldhouse VBC Staff',ph:'972-584-7944',city:'Frisco',loc:'Fieldhouse Sports Complex, Frisco TX',dues:'$4,000-$6,350',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'fieldhousevolleyballclub.com',pts:56,lev:'Competitive through National',note:'Check fieldhousevolleyballclub.com for eval schedule.',evals:[{a:'All 10s-18s',d:'Check website',t:'See website',f:'TBD',n:'Top competitive club in Frisco'}]},
  {id:9,name:'Drive Nation Volleyball',rank:9,dir:'Kori Graham',ph:'443-867-0389',city:'Dallas',loc:'Drive Nation Sports Complex, Dallas TX',dues:'$2,000-$6,000',fund:'Optional',trav:'Hotel & Air included',ps:'Yes',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2/wk',com:'Full (all)',gen:'Female',web:'elite.drivenationsports.com',pts:55,lev:'Competitive through National',note:'Hotel & air built into dues. Post-season included.',evals:[{a:'All ages',d:'Check website',t:'See drivenationsports.com',f:'TBD',n:'Travel & post-season in dues - rare benefit'}]},
  {id:10,name:'NRG VBC',rank:10,dir:'Brandy Bryan',ph:'817-805-3733',city:'Mansfield',loc:'1855 Lone Star Rd, Mansfield TX',dues:'$1,750-$6,500',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Both',web:'nrgvbc.com',pts:54,lev:'Beginner through National',note:'Check nrgvbc.com for eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See nrgvbc.com',f:'TBD',n:'Coed all ages Mansfield'}]},
  {id:11,name:'360 Volleyball Club',rank:11,dir:'Clarence Nevels',ph:'817-681-9711',city:'Arlington',loc:'The Arena, Arlington TX',dues:'$850-$4,300',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Both',web:'360volleyball.com',pts:48,lev:'Recreational through National',note:'Most affordable competitive club in NTR.',evals:[{a:'All ages',d:'Check website',t:'See 360volleyball.com',f:'TBD',n:'Widest dues range in NTR'}]},
  {id:12,name:'Tejas Volleyball Club',rank:11,dir:'Philip Anderson',ph:'817-996-7825',city:'Grapevine',loc:'Grapevine Fieldhouse, Grapevine TX',dues:'$3,000-$6,000',fund:'Optional',trav:'None',ps:'No',ages:['17','16','15','14','13','12','11'],pl:'10-12',prac:'2-3/wk',com:'Full (top), Coop (others)',gen:'Female',web:'tejasvolleyball.com',pts:48,lev:'Competitive through National',note:'Check tejasvolleyball.com for eval schedule.',evals:[{a:'11s-17s',d:'Check website',t:'See tejasvolleyball.com',f:'TBD',n:'Grapevine area'}]},
  {id:13,name:'Eagle Mountain Volleyball',rank:13,dir:'Krista McCormick',ph:'817-404-7647',city:'Fort Worth',loc:'Alliance Sportsplex, Fort Worth TX',dues:'$1,500-$5,000',fund:'None',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'1-2/wk',com:'Full (top), Coop (others)',gen:'Female',web:'eaglemountainvolleyball.com',pts:41,lev:'Beginner through National',note:'Check eaglemountainvolleyball.com for eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See website',f:'TBD',n:'Fort Worth NW area'}]},
  {id:14,name:'Frisco Flyers VBC',rank:14,dir:'Jason Rogers',ph:'469-421-8800',city:'Frisco',loc:'6300 Flyers Way, Frisco TX 75033',dues:'$1,250-$4,500',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'ffvbc.com',pts:31,lev:'Beginner through Competitive',note:'Own dedicated courts at 6300 Flyers Way.',evals:[{a:'All 10s-18s',d:'Check website',t:'See ffvbc.com',f:'TBD',n:'Own facility no gym sharing'}]},
  {id:15,name:'Untouchables VBC',rank:14,dir:'Ty Jenkins',ph:'615-995-4405',city:'Plano',loc:'Elite Performance Academy, 2621 Summit Ave Suite 500, Plano TX',dues:'$3,250-$4,500',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (top 15s-18s), Coop (others)',gen:'Female',web:'untouchablesepa.com',pts:31,lev:'Competitive through National',note:'Based at EPA in Plano.',evals:[{a:'All ages',d:'Check website',t:'See untouchablesepa.com',f:'TBD',n:'Strong 12s-15s programs'}]},
  {id:16,name:'Integrity VBC',rank:16,dir:'Rafael Lopez',ph:'787-525-4869',city:'N. Richland Hills',loc:'NYTEX Sports Centre, North Richland Hills TX',dues:'$1,000-$4,400',fund:'Optional',trav:'Hotel',ps:'No',ages:['17','16','15','14','13','12','11','10'],pl:'12',prac:'1-2/wk',com:'Full (all)',gen:'Female',web:'IntegrityVBC.com',pts:26,lev:'Beginner through Competitive',note:'Check IntegrityVBC.com for eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See IntegrityVBC.com',f:'TBD',n:'NRH area'}]},
  {id:17,name:'Athletic Performance VB',rank:17,dir:'Nicholas Gay',ph:'817-692-1175',city:'Aledo',loc:'Aledo TX',dues:'$2,000-$4,500',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11'],pl:'10',prac:'1-2/wk',com:'Full (top), Coop (others)',gen:'Female',web:'athleticperformancevb.com',pts:26,lev:'Competitive',note:'Check athleticperformancevb.com for schedule.',evals:[{a:'All ages',d:'Check website',t:'See website',f:'TBD',n:'West FW / Aledo area'}]},
  {id:18,name:'Peak Volleyball Academy',rank:18,dir:'Peak VB Staff',ph:'479-357-9224',city:'Fort Worth',loc:'Game On Sports Complex, Fort Worth TX',dues:'$4,350-$7,000',fund:'Optional',trav:'None',ps:'Yes',ages:['17','16','15','14','13','12','11'],pl:'12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'Peakvolleyballtx.com',pts:20,lev:'Competitive through National',note:'Check Peakvolleyballtx.com. Post-season included in dues.',evals:[{a:'11s-17s',d:'Check website',t:'See Peakvolleyballtx.com',f:'TBD',n:'Post-season nationals included'}]},
  {id:19,name:'VICTORY VBC',rank:18,dir:'Karen Wright',ph:'214-476-2281',city:'Dallas',loc:'Net Results Sport Center, Dallas TX',dues:'$2,900-$5,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11'],pl:'10-12',prac:'2-3/wk',com:'Cooperative',gen:'Female',web:'victoryvbc.org',pts:20,lev:'Competitive',note:'Check victoryvbc.org for eval dates.',evals:[{a:'All ages',d:'Check website',t:'See victoryvbc.org',f:'TBD',n:''}]},
  {id:20,name:'AmeriSports VBC',rank:20,dir:'Maggie Younger',ph:'972-740-5546',city:'Rockwall',loc:'AmeriSports, Rockwall TX',dues:'$3,700-$4,700',fund:'Optional',trav:'None',ps:'No',ages:['16','15','14','13','12','11'],pl:'10',prac:'2-3/wk',com:'Cooperative',gen:'Female',web:'amerisports.net',pts:17,lev:'Competitive',note:'Check amerisports.net for eval schedule.',evals:[{a:'11s-16s',d:'Check website',t:'See amerisports.net',f:'TBD',n:'Rockwall East DFW'}]},
  {id:21,name:'Elevate VBC',rank:21,dir:'Nathan Quillan',ph:'972-359-7777',city:'Allen',loc:'Cottonwood Creek Church, Allen TX',dues:'$2,600-$4,600',fund:'Optional',trav:'None',ps:'No',ages:['17','16','15','14','13','12','11'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'elevatevolleyball.org',pts:16,lev:'Competitive',note:'Check elevatevolleyball.org for eval dates.',evals:[{a:'11s-17s',d:'Check website',t:'See elevatevolleyball.org',f:'TBD',n:'Allen / Collin County'}]},
  {id:22,name:'DIG VBC',rank:22,dir:'Jason Crispin',ph:'972-385-5416',city:'Dallas',loc:'5702 Alpha Rd, Dallas TX',dues:'$1,200-$3,300',fund:'None',trav:'None',ps:'No',ages:['16','15','14','13','12','11','10'],pl:'10',prac:'1-2/wk',com:'Full (top), Coop (others)',gen:'Both',web:'DIGVBC.com',pts:11,lev:'Beginner through Competitive',note:'Check DIGVBC.com for eval schedule.',evals:[{a:'10s-16s',d:'Check website',t:'See DIGVBC.com',f:'TBD',n:'Affordable coed programming'}]},
  {id:23,name:'Instinct VBC',rank:23,dir:'Eduardo Drewnick',ph:'469-964-9144',city:'Carrollton',loc:'Carrollton TX',dues:'$1,200-$3,500',fund:'N/A',trav:'None',ps:'No',ages:['17','16','15','14','13','12','10'],pl:'10',prac:'2/wk',com:'Full (all)',gen:'Female',web:'instinctvbc.com',pts:10,lev:'Competitive',note:'Check instinctvbc.com for schedule.',evals:[{a:'Various',d:'Check website',t:'See instinctvbc.com',f:'TBD',n:'Carrollton area'}]},
  {id:24,name:'Summit Volleyball',rank:24,dir:'Andy Reitinger',ph:'972-562-2226',city:'McKinney',loc:'SWAC, McKinney TX',dues:'$2,000-$4,750',fund:'None',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11'],pl:'10-12',prac:'1-2/wk',com:'Cooperative',gen:'Female',web:'summitvolleyball.com',pts:10,lev:'Competitive',note:'Check summitvolleyball.com for schedule.',evals:[{a:'11s-18s',d:'Check website',t:'See summitvolleyball.com',f:'TBD',n:'McKinney area'}]},
  {id:25,name:'Muscle Volleyball',rank:24,dir:'Catherine Foerster',ph:'806-683-1812',city:'Decatur',loc:'Fit N Wise, Decatur TX',dues:'$1,500-$5,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','14','13','12','11','10'],pl:'10',prac:'1-2/wk',com:'Full (top), Coop (others)',gen:'Female',web:'musclevolleyball.com',pts:10,lev:'Competitive',note:'Check musclevolleyball.com for schedule.',evals:[{a:'Various',d:'Check website',t:'See website',f:'TBD',n:'NW DFW Decatur area'}]},
  {id:26,name:'No Limits VBC',rank:26,dir:'Taylor Cooper',ph:'817-455-2371',city:'Hurst',loc:'First Assembly of God DFW, Hurst TX',dues:'$2,900-$5,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'nolimitsvbc.com',pts:7,lev:'Competitive through National',note:'Check nolimitsvbc.com for eval dates.',evals:[{a:'All ages',d:'Check website',t:'See nolimitsvbc.com',f:'TBD',n:'Mid-Cities HEB area'}]},
  {id:27,name:'Storm VBC',rank:27,dir:'Shelley Brewster',ph:'972-208-3887',city:'Plano',loc:'PSA, 601 Seabrook, Plano TX',dues:'$3,000-$4,000',fund:'None',trav:'None',ps:'No',ages:['16','15','14','13','12','11','10'],pl:'10',prac:'2/wk',com:'Cooperative',gen:'Female',web:'stormvolleyball.net',pts:3,lev:'Competitive',note:'Check stormvolleyball.net for schedule.',evals:[{a:'10s-16s',d:'Check website',t:'See stormvolleyball.net',f:'TBD',n:'Plano based'}]},
  {id:28,name:'Dallas Arsenal VBC',rank:28,dir:'Carlos Rosado',ph:'972-589-2263',city:'McKinney',loc:'Sport Cabana at Craig Ranch, McKinney TX',dues:'$2,500-$7,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'11',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'dallasarsenal.com',pts:6,lev:'Competitive through National',note:'Check dallasarsenal.com for schedule.',evals:[{a:'All ages',d:'Check website',t:'See dallasarsenal.com',f:'TBD',n:'Craig Ranch McKinney'}]},
  {id:29,name:'NFW Ryze Volleyball',rank:28,dir:'RoShal Voss',ph:'410-404-7832',city:'Haslet',loc:'293 County Road 4841, Haslet TX',dues:'$3,800-$5,400',fund:'Optional',trav:'None',ps:'Yes',ages:['18','16','15','14','13'],pl:'10-12',prac:'2-3/wk',com:'Cooperative',gen:'Female',web:'nfwryze.com',pts:6,lev:'Competitive through National',note:'Check nfwryze.com. Post-season nationals in dues.',evals:[{a:'13s-18s',d:'Check website',t:'See nfwryze.com',f:'TBD',n:'Post-season in dues'}]},
  {id:30,name:'Vision Volleyball Club',rank:29,dir:'Heather Woolen',ph:'214-799-0158',city:'McKinney',loc:'465 Industrial Blvd Ste 200, McKinney TX',dues:'$2,700-$3,500',fund:'Optional',trav:'None',ps:'Yes',ages:['14','13','12','11'],pl:'10',prac:'1-2/wk',com:'Cooperative',gen:'Female',web:'visionvolleyballclub.net',pts:4,lev:'Beginner through Competitive',note:'Check visionvolleyballclub.net for eval dates.',evals:[{a:'11s-14s',d:'Check website',t:'See website',f:'TBD',n:'Younger age groups focus'}]},
  {id:31,name:'Rockwall Heat VBC',rank:30,dir:'Yvette Prado',ph:'972-772-9061',city:'Rockwall',loc:'RISE, Rockwall TX',dues:'$1,500-$3,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (top), Coop (others)',gen:'Female',web:'riserockwall.com',pts:4,lev:'Beginner through Competitive',note:'Check riserockwall.com for eval schedule.',evals:[{a:'All ages',d:'Check website',t:'See riserockwall.com',f:'TBD',n:'Rockwall East Dallas'}]},
  {id:32,name:'Volley Pro Juniors',rank:31,dir:'Oleksiy Gutor',ph:'972-757-1132',city:'Plano',loc:'2621 Summit Ave Suite 500, Plano TX',dues:'$6,000-$7,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12','11','10'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Both',web:'vpjuniors.com',pts:1,lev:'Elite National level',note:'Check vpjuniors.com. Highest dues in NTR elite national programming.',evals:[{a:'All ages',d:'Check website',t:'See vpjuniors.com',f:'TBD',n:'Elite national highest dues in NTR'}]},
  {id:33,name:'Texas Titans VBC',rank:32,dir:'Lise Morrow',ph:'214-507-1445',city:'Plano',loc:'Collin Creek Community Church, Plano TX',dues:'$2,700-$2,900',fund:'None',trav:'None',ps:'No',ages:['17','16','15','14','13','12','11'],pl:'10',prac:'2/wk',com:'Full (all)',gen:'Female',web:'texastitansvbc.com',pts:1,lev:'Competitive',note:'Check texastitansvbc.com for schedule.',evals:[{a:'11s-17s',d:'Check website',t:'See texastitansvbc.com',f:'TBD',n:'Plano based'}]},
  {id:34,name:'Volleylab',rank:33,dir:'Kali Parkins',ph:'817-320-3466',city:'Hurst',loc:'Nytex Sports Centre, Hurst TX',dues:'$4,000-$6,000',fund:'Optional',trav:'None',ps:'No',ages:['18','17','16','15','14','13','12'],pl:'10-12',prac:'2/wk',com:'Cooperative',gen:'Female',web:'volleylabtexas.com',pts:0,lev:'Competitive through National',note:'Check volleylabtexas.com for schedule.',evals:[{a:'12s-18s',d:'Check website',t:'See volleylabtexas.com',f:'TBD',n:'Mid-Cities Hurst'}]},
  {id:35,name:'Power Volleyball Club',rank:34,dir:'Anthony Duenas',ph:'972-322-4647',city:'McKinney',loc:'The Beach at Craig Ranch, McKinney TX',dues:'Under $3,800',fund:'Optional',trav:'None',ps:'No',ages:['17','16','15','14','13','12'],pl:'10-12',prac:'2-3/wk',com:'Full (all)',gen:'Female',web:'powervolleyballclub.com',pts:0,lev:'Competitive',note:'Tryouts 5/4-5/5/2026 per NTR. Verify 2026-27 dates at powervolleyballclub.com.',evals:[{a:'18s-17s',d:'5/5/2026',t:'Check website',f:'See website',n:'Per NTR VStarVolleyball.com'},{a:'12s-11s',d:'5/4/2026',t:'Check website',f:'See website',n:'Per NTR VStarVolleyball.com'}]}
];

var COACHES = [
  {n:'Stefanie Samuels',club:'Madfrog',title:'Club Director / Head Coach',init:'SS',link:'https://clubcoachconnect.com',hist:['Texas Advantage','Madfrog (current)'],bullets:['#1 ranked NTR club director with multiple national bid seasons','Built Madfrog into the dominant force in North Texas volleyball','Known for developing players earning D1-D3 scholarships','Strong emphasis on compete level and mental toughness','Highly communicative with families throughout the club process']},
  {n:'Jodie Rye',club:'Skyline Juniors',title:'Club Director',init:'JR',link:'https://clubcoachconnect.com',hist:['DFW junior programs','Skyline Juniors (current)'],bullets:['Consistently led Skyline to top-3 NTR rankings','Whole-athlete development philosophy','Strong collegiate placement track record at all levels','Experience across all age groups 10s through 18s','Known for building a family-first club culture']},
  {n:'Corinne Atchison',club:'Texas Advantage',title:'Club Director',init:'CA',link:'https://clubcoachconnect.com',hist:['Multiple DFW clubs','Texas Advantage (current)'],bullets:['Secures 10+ national qualifier bids per season consistently','Deep network of collegiate coaching contacts nationwide','Fundamentals-first volleyball IQ development approach','Transparent communication with club families','Programming for 10U through 18U at all competitive levels']},
  {n:'Sherri Hausner',club:'Excel Volleyball',title:'Club Director',init:'SH',link:'https://clubcoachconnect.com',hist:['North Texas programs','Excel Volleyball (current)'],bullets:['Built Excel into a consistent top-5 NTR club','Strong training at Courtside Sports Center Lewisville','Coed programming girls and boys welcome','Known for coach retention and staff stability','Highly competitive at national qualifiers annually']},
  {n:'Krista Gibson',club:'Arete Athletics',title:'Club Director / Head Coach',init:'KG',link:'https://clubcoachconnect.com',hist:['North Texas coaching','Arete Athletics (current)'],bullets:['Runs the 77000 sq ft Arete Athletics Center in McKinney','Official practice home of Dallas PULSE professional volleyball','28-30 girls teams + 8 club prep teams for 2026-27','Both girls and boys programming available','Athlete-centered philosophy with long-term development focus']},
  {n:'Geoff Kiessling',club:'Dallas Premier',title:'Club Director',init:'GK',link:'https://clubcoachconnect.com',hist:['College volleyball coaching','Dallas Premier (current)'],bullets:['Elite programming at Premier Volleyball Center Dallas','Coed programming across most age groups','Higher dues reflect premium training environment','Strong 14s-18s national qualifier presence','Full commitment required for top-level teams']},
  {n:'Jason Rogers',club:'Frisco Flyers VBC',title:'Club Director',init:'JR2',link:'https://clubcoachconnect.com',hist:['NTR programs','Frisco Flyers VBC (current)'],bullets:['Own courts at 6300 Flyers Way in Frisco no gym sharing','One of the largest dedicated club facilities in region','Serves all age groups 10U through 18U','Consistent development pathway beginner to competitive','Strong presence in Frisco Allen McKinney corridor']},
  {n:'Ty Jenkins',club:'Untouchables VBC',title:'Club Director',init:'TJ',link:'https://clubcoachconnect.com',hist:['Various NTR programs','Untouchables VBC (current)'],bullets:['Trains at Elite Performance Academy in Plano','Longtime presence in North Texas volleyball','Known for strong 12s through 15s programs','Focused on individual skill development','Full commitment expected for 15s and above']},
  {n:'Kori Graham',club:'Drive Nation Volleyball',title:'Club Director',init:'KG2',link:'https://clubcoachconnect.com',hist:['Elite volleyball programs','Drive Nation Volleyball (current)'],bullets:['One of few NTR clubs with hotel & air in season dues','Post-season nationals built in no surprise costs','Full commitment required at all age levels','Trains at Drive Nation Sports Complex Dallas','Strong pipeline to national-level exposure and recruiting']},
  {n:'Nathan Quillan',club:'Elevate VBC',title:'Club Director',init:'NQ',link:'https://clubcoachconnect.com',hist:['North Texas volleyball','Elevate VBC (current)'],bullets:['Community-based culture in Allen / Collin County','Consistent NTR rankings in 13s through 17s','Full commitment expected of all teams','Accessible dues compared to larger clubs','Home at Cottonwood Creek Church Allen']}
];

var age = 'all';
var favs = JSON.parse(localStorage.getItem('vh_f') || '[]');
var cmp = JSON.parse(localStorage.getItem('vh_c') || '[]');
var tier = localStorage.getItem('vh_t') || 'free';
var selTV = 'essential';
var secs = 300, tInt = null, tGo = false, openDet = null;
var AD = JSON.parse(localStorage.getItem('vh_ad') || '{"visits":0,"cviews":{},"cuses":0,"fuses":0,"pays":[]}');
AD.visits = (AD.visits || 0) + 1;
saveAD();

function saveAD() { localStorage.setItem('vh_ad', JSON.stringify(AD)); }

function dU(s) {
  if (!s || s.toLowerCase().indexOf('check') === 0 || s.toLowerCase().indexOf('open') === 0) return 9999;
  var p = s.split('/');
  if (p.length < 3) return 9999;
  return Math.round((new Date(parseInt(p[2]), parseInt(p[0]) - 1, parseInt(p[1])) - TODAY) / 86400000);
}
function pC(d) { return d < 0 ? 'past' : d <= 7 ? 'hot' : d <= 30 ? 'warm' : 'cool'; }
function pL(d) { return d === 9999 ? 'See Site' : d < 0 ? 'Past' : d === 0 ? 'TODAY' : d + 'd'; }

function startTimer() {
  if (tGo || tier !== 'free') return;
  tGo = true;
  var el = document.getElementById('unlock-d');
  if (el) el.style.display = 'block';
  tInt = setInterval(function () {
    secs--;
    var m = Math.floor(secs / 60), s = secs % 60, txt = m + ':' + (s < 10 ? '0' : '') + s;
    ['tval-d', 'tval-m'].forEach(function (id) { var e = document.getElementById(id); if (e) e.textContent = txt; });
    if (secs <= 60) { ['tval-d', 'tval-m'].forEach(function (id) { var e = document.getElementById(id); if (e) e.className = 'tv w'; }); }
    if (secs <= 0) {
      clearInterval(tInt);
      ['tval-d', 'tval-m'].forEach(function (id) { var e = document.getElementById(id); if (e) { e.textContent = 'Expired'; e.className = 'tv e'; } });
      ['tlbl-d', 'tlbl-m'].forEach(function (id) { var e = document.getElementById(id); if (e) e.textContent = 'Preview Ended'; });
      go('pw');
    }
  }, 1000);
}

function updateTierUI() {
  if (tier === 'pro' || tier === 'essential') {
    var lbl = tier === 'pro' ? 'Pro Access' : 'Essential';
    ['tlbl-d', 'tlbl-m'].forEach(function (id) { var e = document.getElementById(id); if (e) e.textContent = lbl; });
    ['tval-d', 'tval-m'].forEach(function (id) { var e = document.getElementById(id); if (e) e.textContent = 'Unlocked'; });
    var u = document.getElementById('unlock-d'); if (u) u.style.display = 'none';
    if (tInt) clearInterval(tInt);
  }
}

function go(v) {
  document.querySelectorAll('.view').forEach(function (x) { x.classList.remove('on'); });
  ['home', 'clubs', 'coaches', 'compare', 'dash'].forEach(function (n) {
    var d = document.getElementById('tab-' + n);
    var m = document.getElementById('tab-m-' + n);
    if (d) d.classList.remove('on');
    if (m) m.classList.remove('on');
  });
  var ve = document.getElementById('view-' + v);
  if (ve) ve.classList.add('on');
  var te = document.getElementById('tab-' + v);
  var mte = document.getElementById('tab-m-' + v);
  if (te) te.classList.add('on');
  if (mte) mte.classList.add('on');
  var hero = document.getElementById('hero');
  var cdb = document.getElementById('cdbanner');
  if (v === 'home') { if (hero) hero.style.display = ''; if (cdb) cdb.style.display = ''; }
  else { if (hero) hero.style.display = 'none'; if (cdb) cdb.style.display = 'none'; }
  if (v === 'clubs') renderClubs();
  else if (v === 'coaches') renderCoaches();
  else if (v === 'dash') renderDash();
  else if (v === 'compare') { renderSlots(); buildCmp(); }
  else if (v === 'home') renderHome();
  window.scrollTo(0, 0);
  if (!tGo && tier === 'free') startTimer();
}

function heroSearch() {
  var q = document.getElementById('hero-in').value.trim();
  var cs = document.getElementById('club-search');
  if (cs && q) cs.value = q;
  go('clubs');
}

document.getElementById('hero-in').addEventListener('keydown', function (e) { if (e.key === 'Enter') heroSearch(); });

function doRefresh() {
  document.querySelectorAll('.rfbtn, .mob-rf').forEach(function (b) { b.style.opacity = '0.5'; b.disabled = true; });
  setTimeout(function () {
    var ts = new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
    var fts = document.getElementById('fts'); if (fts) fts.textContent = ts;
    document.querySelectorAll('.rfbtn').forEach(function (b) { b.style.opacity = '1'; b.innerHTML = '&#8635; Refresh Data'; b.disabled = false; });
    document.querySelectorAll('.mob-rf').forEach(function (b) { b.style.opacity = '1'; b.innerHTML = '&#8635; Refresh'; b.disabled = false; });
    if (document.getElementById('view-home').classList.contains('on')) renderHome();
  }, 1500);
}

function renderHome() {
  var items = [];
  CLUBS.forEach(function (c) { (c.evals || []).forEach(function (ev) { items.push({ c: c, ev: ev, d: dU(ev.d) }); }); });
  items.sort(function (a, b) { return a.d - b.d; });
  var seen = new Set(), grouped = [];
  items.forEach(function (i) {
    if (!seen.has(i.c.id)) {
      seen.add(i.c.id);
      grouped.push({ c: i.c, first: i, all: items.filter(function (x) { return x.c.id === i.c.id; }) });
    }
  });
  var cdbEl = document.getElementById('cdb-items');
  if (cdbEl) {
    cdbEl.innerHTML = grouped.slice(0, 6).map(function (g) {
      return '<div class="cdb-item" onclick="go(\'clubs\')">' +
        '<span class="cdb-days ' + pC(g.first.d) + '">' + pL(g.first.d) + '</span>' +
        '<div><div class="cdb-n">' + g.c.name + '</div><div class="cdb-c">' + g.c.city + '</div></div>' +
        '</div>';
    }).join('');
  }
  var cdEl = document.getElementById('cd-list');
  if (!cdEl) return;
  cdEl.innerHTML = grouped.map(function (g) {
    var c = g.c, all = g.all;
    var sessHtml = all.length > 1
      ? '<button onclick="toggleS(\'s' + c.id + '\',this)" style="font-size:10px;color:#1A5FA8;font-weight:700;cursor:pointer;background:none;border:none;padding:0;margin-bottom:4px">&#9660; See all ' + all.length + ' sessions</button>' +
        '<div id="s' + c.id + '" style="background:#f0f4f8;border-radius:7px;padding:7px 10px;margin:4px 0;display:none">' +
        all.map(function (x) {
          return '<div style="font-size:11px;padding:4px 0;border-bottom:0.5px solid #e2e8f0;display:flex;justify-content:space-between;gap:8px">' +
            '<div><strong>' + x.ev.a + '</strong><div style="color:#6b7280;font-size:10px">' + x.ev.n + '</div></div>' +
            '<div style="text-align:right;color:#6b7280;font-size:10px"><strong style="color:#1a1f2e">' + x.ev.d + '</strong><br>' + x.ev.t + '<br>' + x.ev.f + '</div>' +
            '</div>';
        }).join('') + '</div>'
      : '';
    return '<div style="background:#fff;border-radius:12px;border:0.5px solid #e2e8f0;overflow:hidden">' +
      '<div style="background:#1a1f2e;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;gap:8px">' +
        '<div><div style="font-weight:800;font-size:15px;color:#fff">' + c.name + '</div>' +
        '<div style="font-size:10px;color:rgba(255,255,255,0.4);font-weight:600">NTR #' + c.rank + ' &middot; ' + c.city + '</div></div>' +
        '<div style="font-weight:800;font-size:14px;padding:3px 9px;border-radius:5px;color:#fff;background:' + (g.first.d <= 7 ? '#E24B4A' : g.first.d <= 30 ? '#BA7517' : '#1D9E75') + '">' + pL(g.first.d) + '</div>' +
      '</div>' +
      '<div style="padding:10px 14px">' +
        '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:6px">' +
          '<span style="background:#E6F1FB;color:#0C447C;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">' + c.ages.join(', ') + 's</span>' +
          '<span style="background:#f0f4f8;color:#6b7280;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">' + c.city + '</span>' +
          '<span style="background:#EAF3DE;color:#3B6D11;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">' + c.dues + '</span>' +
          '<span style="background:#EEEDFE;color:#3C3489;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700">' + all.length + ' session' + (all.length > 1 ? 's' : '') + '</span>' +
        '</div>' +
        '<div style="font-size:11px;color:#6b7280;margin-bottom:6px;line-height:1.5">' + c.note + '</div>' +
        sessHtml +
        '<a href="https://' + c.web + '" target="_blank" style="display:inline-block;background:#1A5FA8;color:#fff;padding:6px 14px;border-radius:6px;font-size:12px;font-weight:700;text-decoration:none;margin-top:6px">Register / Info &rarr;</a>' +
      '</div>' +
    '</div>';
  }).join('');
}

function toggleS(id, btn) {
  var el = document.getElementById(id);
  var o = el.style.display === 'block';
  el.style.display = o ? 'none' : 'block';
  btn.innerHTML = o ? '&#9660; See all sessions' : '&#9650; Hide sessions';
}

function setAge(el, a) {
  age = a;
  document.querySelectorAll('#age-chips .chip').forEach(function (c) { c.classList.remove('on'); });
  el.classList.add('on');
  renderClubs();
}

function renderClubs() {
  var qEl = document.getElementById('club-search');
  var q = qEl ? qEl.value.toLowerCase() : '';
  var list = CLUBS.filter(function (c) {
    return (age === 'all' || c.ages.indexOf(age) > -1) &&
      (!q || c.name.toLowerCase().indexOf(q) > -1 || c.dir.toLowerCase().indexOf(q) > -1 || c.city.toLowerCase().indexOf(q) > -1 || c.loc.toLowerCase().indexOf(q) > -1);
  });
  var el = document.getElementById('club-list');
  if (!el) return;
  if (!list.length) { el.innerHTML = '<div class="empty"><p>No clubs match your search.</p></div>'; return; }
  el.innerHTML = list.map(function (c) {
    var iF = favs.indexOf(c.id) > -1;
    var iC = cmp.indexOf(c.id) > -1;
    var isFull = c.com.toLowerCase().indexOf('full') > -1;
    return '<div class="cc">' +
      '<div class="cc-top"><div style="flex:1"><div class="cc-name">' + c.name + '</div><div class="cc-dir">' + c.dir + '</div></div>' +
      (c.rank <= 10 ? '<div class="rnk">#' + c.rank + '</div>' : '') +
      '</div><div class="cc-body">' +
      '<span class="cob ' + (isFull ? 'full' : 'coop') + '">' + (isFull ? 'Full Commitment' : 'Cooperative') + '</span>' +
      '<div class="ig">' +
        '<div><div class="lbl">Dues</div><div class="val">' + c.dues + '</div></div>' +
        '<div><div class="lbl">Practice</div><div class="val">' + c.prac + '</div></div>' +
        '<div><div class="lbl">City</div><div class="val">' + c.city + '</div></div>' +
        '<div><div class="lbl">NTR Rank</div><div class="val">' + (c.pts ? '#' + c.rank + ' (' + c.pts + 'pts)' : 'Unranked') + '</div></div>' +
      '</div>' +
      '<div class="ages">' + c.ages.map(function (a) { return '<span class="ab">' + a + 's</span>'; }).join('') + '</div>' +
      '<div class="btns">' +
        '<button class="bd" onclick="toggleDet(' + c.id + ')">View Details</button>' +
        '<button class="bo" onclick="addCmp(' + c.id + ')">' + (iC ? '&#10003; In Compare' : '+ Compare') + '</button>' +
        '<button class="bfav' + (iF ? ' on' : '') + '" onclick="toggleFav(' + c.id + ')">' + (iF ? '&#10084;' : '&#9825;') + '</button>' +
      '</div></div></div>';
  }).join('');
  if (openDet) renderDet(openDet);
}

function toggleDet(id) {
  var cont = document.getElementById('det-container');
  if (openDet === id) { openDet = null; cont.innerHTML = ''; return; }
  openDet = id;
  renderDet(id);
  setTimeout(function () { cont.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, 100);
}

function renderDet(id) {
  var c = CLUBS.filter(function (x) { return x.id === id; })[0];
  if (!c) return;
  AD.cviews = AD.cviews || {};
  AD.cviews[c.name] = (AD.cviews[c.name] || 0) + 1;
  saveAD();
  var iF = favs.indexOf(c.id) > -1;
  var rows1 = [['Director', c.dir], ['Phone', '<a href="tel:' + c.ph + '" style="color:#1A5FA8">' + c.ph + '</a>'], ['City', c.city], ['NTR Rank', '#' + c.rank + ' (' + c.pts + ' pts)'], ['Level', c.lev], ['Gender', c.gen], ['Website', '<a href="https://' + c.web + '" target="_blank" style="color:#1A5FA8">' + c.web + '</a>']];
  var rows2 = [['Season Dues', c.dues], ['Practice/Wk', c.prac], ['Players/Team', c.pl], ['Commitment', c.com], ['Fundraising', c.fund], ['Travel in Dues', c.trav], ['Post-Season $', c.ps === 'Yes' ? 'Included' : 'Extra if qualify']];
  var cont = document.getElementById('det-container');
  cont.innerHTML = '<div style="background:#fff;border-radius:12px;border:2px solid #1A5FA8;padding:20px;margin-bottom:16px">' +
    '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:16px">' +
      '<div><div style="font-size:24px;font-weight:800">' + c.name + '</div><div style="font-size:13px;color:#6b7280;margin-top:3px">' + c.loc + '</div></div>' +
      '<button onclick="toggleDet(' + c.id + ')" style="background:#f0f4f8;border:none;border-radius:50%;width:32px;height:32px;font-size:18px;cursor:pointer;flex-shrink:0">&#215;</button>' +
    '</div>' +
    '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px">' +
      '<div><div style="font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Club Info</div>' +
        rows1.map(function (r) { return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid #e2e8f0;font-size:13px;gap:8px"><span style="color:#6b7280">' + r[0] + '</span><span style="font-weight:600;text-align:right">' + r[1] + '</span></div>'; }).join('') +
      '</div>' +
      '<div><div style="font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Costs & Commitment</div>' +
        rows2.map(function (r) { return '<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:0.5px solid #e2e8f0;font-size:13px;gap:8px"><span style="color:#6b7280">' + r[0] + '</span><span style="font-weight:600;text-align:right">' + r[1] + '</span></div>'; }).join('') +
      '</div>' +
      '<div><div style="font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#6b7280;margin-bottom:8px">Evaluations</div>' +
        '<div style="background:#E6F1FB;border:0.5px solid #1A5FA8;border-radius:7px;padding:8px 10px;margin-bottom:8px;font-size:11px;color:#0C3D6B">' + c.note + '</div>' +
        (c.evals || []).map(function (ev) {
          return '<div style="background:#f0f4f8;border-radius:7px;padding:8px 10px;margin-bottom:5px">' +
            '<div style="font-weight:800;font-size:13px">' + ev.a + '</div>' +
            '<div style="font-size:11px;color:#6b7280;margin-top:2px;line-height:1.5">' + ev.d + ' &nbsp; ' + ev.t + '<br>' + ev.f + (ev.n ? '<br>' + ev.n : '') + '</div>' +
            '</div>';
        }).join('') +
        '<a href="https://' + c.web + '" target="_blank" style="display:inline-block;background:#1A5FA8;color:#fff;padding:8px 16px;border-radius:7px;font-size:13px;font-weight:700;text-decoration:none;margin-top:6px">Register on Club Website &rarr;</a>' +
      '</div>' +
    '</div>' +
    '<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">' +
      '<button onclick="toggleFav(' + c.id + ');renderDet(' + c.id + ')" style="background:#1a1f2e;color:#fff;border:none;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer">' + (iF ? '&#10084; Remove from My Clubs' : '&#9825; Save to My Clubs') + '</button>' +
      '<button onclick="addCmp(' + c.id + ')" style="background:transparent;color:#1a1f2e;border:1.5px solid #e2e8f0;border-radius:8px;padding:10px 20px;font-size:13px;font-weight:700;cursor:pointer">+ Add to Compare</button>' +
    '</div>' +
  '</div>';
}

function renderCoaches() {
  var qEl = document.getElementById('coach-search');
  var q = qEl ? qEl.value.toLowerCase() : '';
  var list = COACHES.filter(function (c) { return !q || c.n.toLowerCase().indexOf(q) > -1 || c.club.toLowerCase().indexOf(q) > -1; });
  var el = document.getElementById('coach-list');
  if (!el) return;
  el.innerHTML = list.map(function (c) {
    return '<div class="coc">' +
      '<div class="coc-hdr">' +
        '<div class="ava">' + c.init + '</div>' +
        '<div style="flex:1">' +
          '<div class="cn">' + c.n + '</div>' +
          '<div class="cs">' + c.title + ' &mdash; ' + c.club + '</div>' +
          '<a class="cl" href="' + c.link + '" target="_blank">View Reviews on Club Coach Connect &rarr;</a>' +
        '</div>' +
      '</div>' +
      '<div class="coc-body">' +
        c.bullets.map(function (b) { return '<div class="bul"><span style="color:#1A5FA8;flex-shrink:0">&#9658;</span>' + b + '</div>'; }).join('') +
        '<div class="hist">' + c.hist.map(function (h, i) { return '<span class="ht' + (i === c.hist.length - 1 ? ' cur' : '') + '">' + h + '</span>'; }).join('') + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function addCmp(id) {
  var idx = cmp.indexOf(id);
  if (idx > -1) { cmp.splice(idx, 1); }
  else if (cmp.length < 4) { cmp.push(id); AD.cuses = (AD.cuses || 0) + 1; saveAD(); }
  else { alert('Maximum 4 clubs. Remove one first.'); }
  localStorage.setItem('vh_c', JSON.stringify(cmp));
  renderClubs();
  renderSlots();
}

function renderSlots() {
  var el = document.getElementById('cmp-slots');
  if (!el) return;
  var h = '';
  for (var i = 0; i < 4; i++) {
    var id = cmp[i];
    if (id) {
      var c = CLUBS.filter(function (x) { return x.id === id; })[0];
      h += '<div class="slot filled">' + (c ? c.name : 'Club') + '<button class="rm" onclick="addCmp(' + id + ')">&#215;</button></div>';
    } else {
      h += '<div class="slot">Slot ' + (i + 1) + '</div>';
    }
  }
  el.innerHTML = h;
}

function buildCmp() {
  var el = document.getElementById('cmp-out');
  if (!el) return;
  if (!cmp.length) { el.innerHTML = '<div class="empty"><p>Add clubs using the + Compare button in the Club Directory.</p></div>'; return; }
  var clubs = cmp.map(function (id) { return CLUBS.filter(function (c) { return c.id === id; })[0]; }).filter(Boolean);
  var rows = [
    ['NTR Rank', function (c) { return c.pts ? '#' + c.rank : 'Unranked'; }],
    ['NTR Points', function (c) { return c.pts || '-'; }],
    ['Season Dues', function (c) { return c.dues; }],
    ['City', function (c) { return c.city; }],
    ['Practice/Wk', function (c) { return c.prac; }],
    ['Players/Team', function (c) { return c.pl; }],
    ['Commitment', function (c) { return c.com.toLowerCase().indexOf('full') > -1 ? 'Full' : 'Cooperative'; }],
    ['Gender', function (c) { return c.gen; }],
    ['Travel in Dues', function (c) { return c.trav !== 'None' ? c.trav : 'None'; }],
    ['Post-Season $', function (c) { return c.ps === 'Yes' ? 'Included' : 'Extra'; }],
    ['Fundraising', function (c) { return c.fund; }],
    ['Ages Offered', function (c) { return c.ages.join(', '); }],
    ['Competitive Level', function (c) { return c.lev; }],
    ['Website', function (c) { return '<a href="https://' + c.web + '" target="_blank" style="color:#1A5FA8;font-size:11px">Visit &rarr;</a>'; }]
  ];
  el.innerHTML = '<div class="ctbl"><table><thead><tr><th>Category</th>' +
    clubs.map(function (c) { return '<th>' + c.name + '</th>'; }).join('') +
    '</tr></thead><tbody>' +
    rows.map(function (r) {
      return '<tr><td>' + r[0] + '</td>' + clubs.map(function (c) { return '<td>' + r[1](c) + '</td>'; }).join('') + '</tr>';
    }).join('') +
    '</tbody></table></div>';
}

function toggleFav(id) {
  var idx = favs.indexOf(id);
  if (idx > -1) { favs.splice(idx, 1); }
  else {
    if (tier === 'free') {
      if (confirm('Saving clubs to My Clubs requires Essential or Pro access. Upgrade now?')) go('pw');
      return;
    }
    favs.push(id);
    AD.fuses = (AD.fuses || 0) + 1;
    saveAD();
  }
  localStorage.setItem('vh_f', JSON.stringify(favs));
  renderClubs();
  if (document.getElementById('view-dash').classList.contains('on')) renderDash();
}

function renderDash() {
  var el = document.getElementById('dash-list');
  if (!el) return;
  if (!favs.length) {
    el.innerHTML = '<div class="empty"><p>No clubs saved yet.<br>Tap &#9825; on any club card to save it here.' + (tier === 'free' ? '<br><br><strong>Upgrade to Essential or Pro</strong> to unlock My Clubs.' : '') + '</p></div>';
    return;
  }
  var list = favs.map(function (id) { return CLUBS.filter(function (c) { return c.id === id; })[0]; }).filter(Boolean);
  el.innerHTML = '<div class="dash-grid">' + list.map(function (c) {
    return '<div class="cc">' +
      '<div class="cc-top"><div style="flex:1"><div class="cc-name">' + c.name + '</div><div class="cc-dir">' + c.city + ' &middot; ' + c.dues + '</div></div>' +
      '<button onclick="toggleFav(' + c.id + ')" style="width:30px;height:30px;background:#FAEEDA;border:1.5px solid #BA7517;border-radius:7px;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center">&#10084;</button></div>' +
      '<div class="cc-body">' +
        '<div class="ig"><div><div class="lbl">Director</div><div class="val" style="font-size:11px">' + c.dir + '</div></div><div><div class="lbl">Practice</div><div class="val">' + c.prac + '</div></div></div>' +
        '<div class="ages">' + c.ages.map(function (a) { return '<span class="ab">' + a + 's</span>'; }).join('') + '</div>' +
        '<div class="btns"><button class="bd" onclick="openDetFromDash(' + c.id + ')">View Details</button><button class="bo" onclick="addCmp(' + c.id + ')">+ Compare</button></div>' +
      '</div></div>';
  }).join('') + '</div>';
}

function openDetFromDash(id) { go('clubs'); setTimeout(function () { toggleDet(id); }, 100); }

function selT(t) {
  selTV = t;
  document.getElementById('tc-ess').classList.toggle('sel', t === 'essential');
  document.getElementById('tc-pro').classList.toggle('sel', t === 'pro');
}

function payWith(m) {
  var name = document.getElementById('pw-name').value.trim();
  var email = document.getElementById('pw-email').value.trim();
  if (!name || !email) { alert('Please enter your name and email first.'); return; }
  if (email.indexOf('@') === -1) { alert('Please enter a valid email address.'); return; }
  var amt = selTV === 'pro' ? 50 : 25;
  var tn = selTV === 'pro' ? 'Pro' : 'Essential';
  var code = genCode();
  var entry = { name: name, email: email, tier: tn, method: m, date: new Date().toISOString(), status: 'Pending', code: code };
  AD.pays = AD.pays || [];
  AD.pays.push(entry);
  saveAD();
  if (SHEET_WEBHOOK && SHEET_WEBHOOK !== 'YOUR_WEBHOOK_URL') {
    fetch(SHEET_WEBHOOK, { method: 'POST', body: JSON.stringify({ name: name, email: email, tier: tn, paymentMethod: m, code: code }) }).catch(function () {});
  }
  if (m === 'venmo') window.open(VENMO_URL + '?txn=pay&amount=' + amt + '&note=VolleyHubNTX+' + tn, '_blank');
  else if (m === 'paypal') window.open(PAYPAL_URL + '/' + amt, '_blank');
  else if (m === 'zelle') { alert('Send $' + amt + ' via Zelle to:\n' + ZELLE_EMAIL + '\nMemo: VolleyHub NTX ' + tn + '\n\nWe will email your code to ' + email + ' after verification.'); return; }
  else if (m === 'card') { alert('Card payments coming soon. Please use Venmo, PayPal, or Zelle.'); return; }
  alert('After payment, return here and enter the code we email to ' + email + '.\nQuestions? ' + CONTACT_EMAIL);
}

function genCode() {
  var c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', r = '';
  for (var i = 0; i < 4; i++) r += c[Math.floor(Math.random() * c.length)];
  r += '-';
  for (var i = 0; i < 4; i++) r += c[Math.floor(Math.random() * c.length)];
  return r;
}

function submitCode() {
  var email = document.getElementById('code-email').value.trim().toLowerCase();
  var code = document.getElementById('code-in').value.trim().toUpperCase();
  if (!email || !code) { alert('Please enter both your email and code.'); return; }
  var pays = AD.pays || [];
  var match = null;
  for (var i = 0; i < pays.length; i++) {
    if (pays[i].email.toLowerCase() === email && pays[i].code === code && pays[i].status === 'Active') { match = pays[i]; break; }
  }
  if (match) {
    tier = match.tier.toLowerCase() === 'pro' ? 'pro' : 'essential';
    localStorage.setItem('vh_t', tier);
    updateTierUI();
    go('home');
    alert('Access unlocked! Welcome to VolleyHub NTX ' + match.tier + '.\n\nBookmark this page. To unlock on another device return here and enter your email and code again.');
  } else {
    document.getElementById('code-err').style.display = 'block';
  }
}

function adminLogin() {
  if (document.getElementById('adm-pw').value === ADMIN_PW) {
    document.getElementById('adm-lv').style.display = 'none';
    document.getElementById('adm-dv').style.display = 'block';
    renderAdmin();
  } else {
    document.getElementById('adm-err').style.display = 'block';
  }
}

function adminLogout() {
  document.getElementById('adm-lv').style.display = 'block';
  document.getElementById('adm-dv').style.display = 'none';
  document.getElementById('adm-pw').value = '';
}

function renderAdmin() {
  var pays = AD.pays || [];
  var active = pays.filter(function (p) { return p.status === 'Active'; });
  var pend = pays.filter(function (p) { return p.status === 'Pending'; });
  var proC = active.filter(function (p) { return p.tier === 'Pro'; }).length;
  var essC = active.filter(function (p) { return p.tier === 'Essential'; }).length;
  var rev = (proC * 50) + (essC * 25);
  document.getElementById('adm-stats').innerHTML =
    '<div class="sc"><div class="sc-lbl">Total Visits</div><div class="sc-val">' + (AD.visits || 0) + '</div><div class="sc-sub">This browser</div></div>' +
    '<div class="sc"><div class="sc-lbl">Active Users</div><div class="sc-val">' + active.length + '</div><div class="sc-sub">' + pend.length + ' pending</div></div>' +
    '<div class="sc"><div class="sc-lbl">Compare Uses</div><div class="sc-val">' + (AD.cuses || 0) + '</div><div class="sc-sub">All time</div></div>' +
    '<div class="sc"><div class="sc-lbl">Clubs Saved</div><div class="sc-val">' + (AD.fuses || 0) + '</div><div class="sc-sub">All time</div></div>';
  document.getElementById('adm-rev').innerHTML =
    '<div class="sc"><div class="sc-lbl">Est. Revenue</div><div class="sc-val">$' + rev + '</div><div class="sc-sub">Active subs</div></div>' +
    '<div class="sc"><div class="sc-lbl">Pro Subs</div><div class="sc-val">' + proC + '</div><div class="sc-sub">@ $50/season</div></div>' +
    '<div class="sc"><div class="sc-lbl">Essential Subs</div><div class="sc-val">' + essC + '</div><div class="sc-sub">@ $25/season</div></div>' +
    '<div class="sc"><div class="sc-lbl">Pending</div><div class="sc-val">' + pend.length + '</div><div class="sc-sub">Awaiting verify</div></div>';
  document.getElementById('adm-utbl').innerHTML = pays.length
    ? '<table><thead><tr><th>Date</th><th>Name</th><th>Email</th><th>Tier</th><th>Method</th><th>Code</th><th>Status</th><th>Action</th></tr></thead><tbody>' +
      pays.map(function (p, i) {
        return '<tr><td>' + new Date(p.date).toLocaleDateString() + '</td><td>' + p.name + '</td><td>' + p.email + '</td><td>' + p.tier + '</td><td>' + p.method + '</td>' +
          '<td style="font-family:monospace;font-weight:700;letter-spacing:1px">' + p.code + '</td>' +
          '<td><span class="sp ' + (p.status === 'Active' ? 'act' : p.status === 'Expired' ? 'exp' : 'pend') + '">' + p.status + '</span></td>' +
          '<td>' + (p.status === 'Pending'
            ? '<button onclick="actUser(' + i + ')" style="background:#1D9E75;color:#fff;border:none;border-radius:4px;padding:3px 8px;font-size:10px;cursor:pointer;font-weight:700">Activate</button>'
            : '<button onclick="expUser(' + i + ')" style="background:#f0f4f8;color:#6b7280;border:none;border-radius:4px;padding:3px 8px;font-size:10px;cursor:pointer">Expire</button>') + '</td></tr>';
      }).join('') + '</tbody></table>'
    : '<div style="padding:16px;text-align:center;font-size:13px;color:#6b7280">No submissions yet.</div>';
  var cv = AD.cviews || {};
  var sorted = Object.entries(cv).sort(function (a, b) { return b[1] - a[1]; }).slice(0, 8);
  var mx = sorted.length ? sorted[0][1] : 1;
  document.getElementById('adm-topclubs').innerHTML = sorted.length
    ? sorted.map(function (entry) {
        return '<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:0.5px solid #e2e8f0">' +
          '<div><div style="font-size:13px;font-weight:600">' + entry[0] + '</div>' +
          '<div style="height:4px;border-radius:2px;background:#1A5FA8;width:' + Math.round((entry[1] / mx) * 100) + '%;max-width:200px;margin-top:3px"></div></div>' +
          '<div style="font-size:14px;font-weight:700;color:#1A5FA8">' + entry[1] + ' views</div></div>';
      }).join('')
    : '<div style="font-size:13px;color:#6b7280">No club views tracked yet.</div>';
}

function actUser(i) {
  AD.pays[i].status = 'Active';
  saveAD();
  renderAdmin();
  alert('User ' + AD.pays[i].name + ' activated!\n\nEmail their code: ' + AD.pays[i].code + '\nFrom: ' + CONTACT_EMAIL);
}

function expUser(i) { AD.pays[i].status = 'Expired'; saveAD(); renderAdmin(); }

function submitContact() {
  var n = document.getElementById('cf-n').value.trim();
  var e = document.getElementById('cf-e').value.trim();
  var s = document.getElementById('cf-s').value;
  var m = document.getElementById('cf-m').value.trim();
  if (!n || !e || !s || !m) { alert('Please fill in all fields.'); return; }
  window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=VolleyHubNTX: ' + encodeURIComponent(s) + ' from ' + encodeURIComponent(n) + '&body=' + encodeURIComponent('Name: ' + n + '\nEmail: ' + e + '\n\nMessage:\n' + m);
  document.getElementById('cf-ok').style.display = 'block';
}

// INIT
function init() {
  renderHome();
  renderSlots();
  updateTierUI();
  selT('essential');
  if (tier === 'free') startTimer();
}
init();
