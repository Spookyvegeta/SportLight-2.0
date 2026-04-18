// Comprehensive Sports Knowledge Base

export const getSportsResponse = (input: string): string | null => {
  const query = input.toLowerCase().trim();

  // ============ CRICKET ============
  
  // Players
  if (query.match(/virat|kohli/)) {
    return "Virat Kohli is one of cricket's greatest batsmen. Born Nov 5, 1988, he's the former Indian captain with 70+ international centuries. Known for his aggressive style, fitness, and chase-master abilities. Holds records in ODI cricket and is among the top run-scorers across all formats.";
  }
  
  if (query.match(/sachin|tendulkar/)) {
    return "Sachin Tendulkar, the 'God of Cricket' and 'Master Blaster'. Retired in 2013 with 100 international centuries (51 Test, 49 ODI), 34,357 international runs, and 664 international matches. First player to score 200 in ODI. Played 24 years for India (1989-2013).";
  }
  
  if (query.match(/dhoni|ms dhoni/)) {
    return "MS Dhoni, 'Captain Cool' - India's most successful captain. Led India to 2007 T20 WC, 2011 ODI WC, and 2013 Champions Trophy. Known for finishing abilities, lightning-fast stumpings, and calm demeanor. Retired from international cricket in 2020 but continues in IPL with CSK.";
  }
  
  if (query.match(/rohit|sharma/)) {
    return "Rohit Sharma, 'Hitman' - Current Indian captain across formats. Holds record for highest individual ODI score (264). Only player with 3 ODI double centuries. Known for elegant stroke play and big-hitting ability. 5 IPL titles as Mumbai Indians captain.";
  }
  
  if (query.match(/bumrah|jasprit/)) {
    return "Jasprit Bumrah - India's premier fast bowler. Known for unique bowling action and deadly yorkers. Excels in all formats, especially in death overs. Fastest Indian to 100 ODI wickets. Key player in India's pace attack.";
  }
  
  if (query.match(/steve smith/)) {
    return "Steve Smith - Australian batting maestro. Former captain, known for unorthodox technique and incredible consistency. One of the best Test batsmen of this era with 9000+ Test runs. Averages over 60 in Tests.";
  }
  
  if (query.match(/ben stokes/)) {
    return "Ben Stokes - England's all-rounder extraordinaire. Match-winner with both bat and ball. Famous for 2019 WC final heroics and Headingley 2019 Test miracle. Current England Test captain leading aggressive 'Bazball' approach.";
  }
  
  if (query.match(/babar azam/)) {
    return "Babar Azam - Pakistan's batting star and captain. Elegant right-hander with classical technique. Consistently ranks among top batsmen in ICC rankings. Known for his cover drives and ability to anchor innings.";
  }

  // Formats & Rules
  if (query.match(/test cricket|test match/)) {
    return "Test Cricket - The longest format, played over 5 days with 2 innings per team. Each day has 90 overs (6 hours). Considered the ultimate test of skill, endurance, and strategy. Teams wear white, use red ball. Draw is possible if time runs out.";
  }
  
  if (query.match(/odi|one day/)) {
    return "ODI (One Day International) - 50 overs per side, colored clothing, white ball. Introduced in 1971. Each bowler can bowl max 10 overs. Powerplays: First 10 overs (fielding restrictions), then middle overs, death overs (46-50). Strategic balance of batting and bowling.";
  }
  
  if (query.match(/t20|twenty20/)) {
    return "T20 Cricket - Shortest format with 20 overs per side, lasting ~3 hours. Fast-paced, entertainment-focused. Each bowler max 4 overs. Powerplay in first 6 overs. Strategic timeouts. Popular leagues: IPL, BBL, CPL, PSL. Introduced in 2003.";
  }
  
  if (query.match(/ipl|indian premier league/)) {
    return "IPL (Indian Premier League) - World's richest cricket league started in 2008. 10 franchise teams, T20 format, played annually (March-May). Features international stars. Most successful: Mumbai Indians (5 titles), Chennai Super Kings (5 titles). Known for high-scoring matches and entertainment.";
  }
  
  if (query.match(/cricket world cup|cwc/)) {
    return "ICC Cricket World Cup - ODI format, held every 4 years. Winners: 2023-Australia, 2019-England, 2015-Australia, 2011-India, 2007-Australia. Most titles: Australia (6). Next: 2027. Most prestigious ODI tournament.";
  }
  
  if (query.match(/t20 world cup/)) {
    return "ICC T20 World Cup - Held every 2 years. Winners: 2024-India, 2022-England, 2021-Australia, 2016-West Indies, 2014-Sri Lanka. West Indies won first two editions (2007, 2009). Fast-paced, unpredictable tournament.";
  }

  if (query.match(/drs|decision review/)) {
    return "DRS (Decision Review System) - Technology to review umpire decisions. Includes: Ball tracking (Hawk-Eye), Hot Spot, Ultra Edge (Snickometer), Ball spin RPM. Each team gets 2-3 reviews per innings. Introduced to reduce umpiring errors.";
  }

  if (query.match(/powerplay/)) {
    return "Powerplay - Fielding restrictions in limited-overs cricket. ODI: First 10 overs (2 fielders outside 30-yard circle), overs 11-40 (4 outside), overs 41-50 (5 outside). T20: First 6 overs (2 outside). Designed to encourage aggressive batting.";
  }
  
  // Cricket Training & Tips
  if (query.match(/cricket tip|cricket train|improve.*cricket|batting tip|bowling tip/)) {
    return "Cricket Training Tips: 1) Batting - Practice straight drives, watch the ball till it hits bat, footwork is key. 2) Bowling - Focus on line & length, practice yorkers, vary pace. 3) Fielding - Practice catching daily, work on agility. 4) Fitness - Build core strength, improve reflexes. 5) Mental game - Stay calm under pressure, visualize success.";
  }
  
  if (query.match(/how to.*bat|batting technique/)) {
    return "Batting Technique: 1) Grip - V's aligned, relaxed hands. 2) Stance - Balanced, weight on balls of feet, eyes level. 3) Backlift - Straight, towards slips. 4) Head position - Still, eyes on ball. 5) Footwork - Move decisively forward or back. 6) Shot selection - Play according to ball's line & length. Practice regularly!";
  }
  
  if (query.match(/how to.*bowl|bowling technique|fast bowl/)) {
    return "Bowling Technique: 1) Run-up - Smooth, rhythmic, consistent. 2) Gather - Balanced, side-on position. 3) Delivery stride - Front arm high, back foot parallel. 4) Release - Wrist behind ball, follow through. 5) Line & length - Aim for top of off-stump. 6) Variations - Practice slower balls, bouncers, yorkers. Build core strength!";
  }

  // ============ FOOTBALL/SOCCER ============
  
  // Players
  if (query.match(/messi|lionel/)) {
    return "Lionel Messi - Arguably the GOAT. 8 Ballon d'Or awards (record). Led Argentina to 2022 World Cup glory. 800+ career goals, 350+ assists. Spent 21 years at Barcelona (35 trophies), now at Inter Miami. Known for dribbling, vision, and left foot magic.";
  }
  
  if (query.match(/pele|pelé/)) {
    return "Pelé (1940-2022) - Brazilian legend, widely considered one of the greatest footballers ever. 3 FIFA World Cups (1958, 1962, 1970 - only player with 3). Scored 1,283 goals in 1,363 games. Known for skill, vision, and athleticism. 'The King of Football'. FIFA Player of the Century.";
  }
  
  if (query.match(/maradona|diego/)) {
    return "Diego Maradona (1960-2020) - Argentine icon, one of football's greatest. Led Argentina to 1986 World Cup with legendary performances. Famous 'Hand of God' and 'Goal of the Century' vs England. Played for Barcelona, Napoli. Known for dribbling genius and controversial personality.";
  }
  
  if (query.match(/ronaldo|cristiano|cr7/)) {
    return "Cristiano Ronaldo - 5 Ballon d'Or, 5 Champions League titles. 850+ career goals (all-time top scorer). Played for Man United, Real Madrid, Juventus, Al-Nassr. Known for athleticism, headers, free-kicks, and longevity. Portugal's captain and top scorer.";
  }
  
  if (query.match(/zinedine zidane|zidane/)) {
    return "Zinedine Zidane - French maestro, 1998 World Cup and Euro 2000 winner. 3 FIFA World Player of the Year awards. Known for elegance, ball control, and vision. Famous headbutt in 2006 WC final. As coach, won 3 consecutive Champions Leagues with Real Madrid.";
  }
  
  if (query.match(/neymar/)) {
    return "Neymar Jr - Brazilian superstar, one of the most skillful players. Played for Santos, Barcelona, PSG, now Al-Hilal. Known for dribbling, flair, and creativity. Brazil's 2nd highest scorer. Won Champions League with Barcelona (2015).";
  }
  
  if (query.match(/mbappe|kylian/)) {
    return "Kylian Mbappé - French speedster, one of the best young talents. 2018 World Cup winner at 19. Plays for Real Madrid. Known for blistering pace, finishing, and big-game performances. Already 250+ career goals at young age.";
  }
  
  if (query.match(/haaland|erling/)) {
    return "Erling Haaland - Norwegian goal machine at Manchester City. Broke Premier League single-season record with 36 goals (2022-23). Known for strength, positioning, and clinical finishing. Won treble with City in debut season.";
  }

  // Competitions
  if (query.match(/fifa world cup|world cup football/)) {
    return "FIFA World Cup - Biggest sporting event, held every 4 years. Winners: 2022-Argentina, 2018-France, 2014-Germany, 2010-Spain. Most titles: Brazil (5). Next: 2026 (USA, Canada, Mexico) with 48 teams. Most watched tournament globally.";
  }
  
  if (query.match(/champions league|ucl/)) {
    return "UEFA Champions League - Europe's elite club competition. 32 teams compete annually (Sep-May). Most titles: Real Madrid (14). Current format: Group stage, knockout rounds, final. Known for iconic anthem and prestigious trophy.";
  }
  
  if (query.match(/premier league|epl/)) {
    return "English Premier League - World's most-watched football league. 20 teams, 38 games each (Aug-May). Most titles: Manchester United (20 overall), Man City (recent dominance). Known for competitiveness, atmosphere, and global stars.";
  }
  
  if (query.match(/la liga/)) {
    return "La Liga - Spanish top division. Historic rivalry: Real Madrid vs Barcelona (El Clásico). Most titles: Real Madrid (35). Known for technical football. Produced legends like Messi, Ronaldo, Xavi, Iniesta.";
  }
  
  if (query.match(/serie a/)) {
    return "Serie A - Italian top league. Known for tactical football and strong defense. Historic clubs: Juventus (36 titles), AC Milan, Inter Milan. Produced defensive legends and tactical innovations.";
  }

  // Rules & Concepts
  if (query.match(/offside/)) {
    return "Offside Rule - Player is offside if they're nearer to opponent's goal than both ball and second-last opponent when ball is played to them. Not offside in own half, from goal kicks, throw-ins, or corner kicks. Designed to prevent goal-hanging.";
  }
  
  if (query.match(/var|video assistant/)) {
    return "VAR (Video Assistant Referee) - Technology to review decisions for: goals, penalties, red cards, mistaken identity. Referee can review on pitch-side monitor. Introduced to reduce clear errors. Controversial but improving accuracy.";
  }
  
  if (query.match(/penalty shootout/)) {
    return "Penalty Shootout - Tiebreaker in knockout matches. Each team takes 5 penalties alternately. If still tied, sudden death. Taken from penalty spot (12 yards). High pressure, often decides major tournaments. Requires mental strength.";
  }

  if (query.match(/hat trick|hattrick/)) {
    return "Hat-trick - Scoring 3 goals in a single match. Perfect hat-trick: one with right foot, left foot, and header. Origins from cricket. Rare achievement showing dominance. Some players have multiple hat-tricks in career.";
  }

  // ============ BASKETBALL ============
  
  // Players
  if (query.match(/michael jordan|mj|jordan/)) {
    return "Michael Jordan - Widely considered the GOAT. 6 NBA championships (all with Bulls), 5 MVPs, 10 scoring titles. Known for clutch performances, competitiveness, and 'Air Jordan' brand. Revolutionized basketball globally. Career average: 30.1 PPG (highest ever).";
  }
  
  if (query.match(/lebron|james|king james/)) {
    return "LeBron James - 4 NBA championships, 4 MVPs, all-time leading scorer (40,000+ points). Played 21+ seasons. Known for versatility, basketball IQ, and longevity. Played for Cavaliers, Heat, Lakers. Still elite at 39 years old.";
  }
  
  if (query.match(/kobe|bryant/)) {
    return "Kobe Bryant (1978-2020) - 5 NBA championships with Lakers, 2 Finals MVPs. 81-point game (2nd highest ever). Known for 'Mamba Mentality', work ethic, and clutch shots. 18-time All-Star. Tragic death in 2020 shocked the world.";
  }
  
  if (query.match(/stephen curry|steph|curry/)) {
    return "Stephen Curry - Revolutionized basketball with 3-point shooting. 4 NBA championships with Warriors, 2 MVPs. All-time leader in 3-pointers made (3,700+). Changed how the game is played with long-range shooting.";
  }
  
  if (query.match(/kevin durant|kd/)) {
    return "Kevin Durant - 2 NBA championships, 2 Finals MVPs, 1 regular season MVP. 7-foot scorer with guard skills. Known for versatility and scoring ability. 14-time All-Star. One of the best scorers ever.";
  }

  // League & Rules
  if (query.match(/\bnba\b/)) {
    return "NBA (National Basketball Association) - Premier professional basketball league. 30 teams (29 USA, 1 Canada). Season: October-June. 82 regular season games, then playoffs (16 teams). Most championships: Boston Celtics & LA Lakers (17 each).";
  }
  
  if (query.match(/basketball rules|how to play basketball/)) {
    return "Basketball Basics - 5 players per team, 4 quarters (12 min NBA, 10 min FIBA). Score by shooting ball through 10-foot hoop (2 or 3 points). Must dribble while moving. Fouls lead to free throws. Shot clock: 24 seconds (NBA). Physical but non-contact sport.";
  }
  
  if (query.match(/triple.?double/)) {
    return "Triple-Double - Recording double digits (10+) in 3 statistical categories in one game (usually points, rebounds, assists). Shows all-around excellence. Russell Westbrook holds record for most career triple-doubles (198+).";
  }

  if (query.match(/slam dunk/)) {
    return "Slam Dunk - Forcefully putting ball through hoop from above. Worth 2 points. Crowd favorite. NBA Slam Dunk Contest showcases creativity. Famous dunkers: Michael Jordan, Vince Carter, Dominique Wilkins. Requires athleticism and timing.";
  }

  // ============ TENNIS ============
  
  // Players
  if (query.match(/roger federer/)) {
    return "Roger Federer - Swiss maestro with 20 Grand Slams. Retired 2022. Known for elegant style, one-handed backhand, and sportsmanship. 310 weeks as world #1 (record). Won 8 Wimbledons. Considered one of the greatest ever.";
  }
  
  if (query.match(/rafael nadal|rafa/)) {
    return "Rafael Nadal - 'King of Clay' with 22 Grand Slams (14 French Opens - record). Known for topspin forehand, fighting spirit, and physical play. Dominated clay courts like no other. Part of 'Big 3' with Federer and Djokovic.";
  }
  
  if (query.match(/novak djokovic/)) {
    return "Novak Djokovic - 24 Grand Slams (most ever in men's tennis). Known for flexibility, return game, and mental strength. Held all 4 Grand Slams simultaneously (2016). 400+ weeks as world #1. Still competing at highest level.";
  }
  
  if (query.match(/serena williams/)) {
    return "Serena Williams - 23 Grand Slams (Open Era record). Dominated women's tennis for 2 decades. Known for powerful serve and groundstrokes. Won while pregnant. Retired 2022. Considered greatest female player ever.";
  }
  
  if (query.match(/carlos alcaraz/)) {
    return "Carlos Alcaraz - Spanish prodigy, youngest world #1 (19 years). 2 Grand Slams already. Known for athleticism, drop shots, and all-court game. Represents new generation. Exciting playing style with power and finesse.";
  }

  // Tournaments & Rules
  if (query.match(/grand slam|major/)) {
    return "Grand Slams - Tennis's 4 major tournaments: Australian Open (Jan, hard court), French Open (May-Jun, clay), Wimbledon (Jun-Jul, grass), US Open (Aug-Sep, hard court). Winning all 4 in career = Career Grand Slam. Most prestigious titles.";
  }
  
  if (query.match(/wimbledon/)) {
    return "Wimbledon - Oldest tennis tournament (since 1877), held in London. Grass courts, strict dress code (all white). Known for tradition, strawberries & cream, royal attendance. Most prestigious Grand Slam. Federer won 8 titles (men's record).";
  }
  
  if (query.match(/tennis scoring|tennis rules/)) {
    return "Tennis Scoring - Points: 0(love), 15, 30, 40, game. Win by 2 points. 6 games = 1 set (win by 2, or tiebreak at 6-6). Best of 3 or 5 sets. Deuce at 40-40, then advantage. Serve alternates each game.";
  }

  // ============ OLYMPICS ============
  
  if (query.match(/olympics|olympic games/)) {
    return "Olympics - World's premier multi-sport event. Summer & Winter Olympics alternate every 2 years. Summer: 300+ events, 200+ countries. Winter: 100+ events. Ancient origins (776 BC Greece), modern era since 1896. Next Summer: 2028 Los Angeles.";
  }
  
  if (query.match(/usain bolt/)) {
    return "Usain Bolt - Fastest human ever. 8 Olympic golds, 11 World Championship golds. World records: 100m (9.58s), 200m (19.19s), 4x100m relay. 'Lightning Bolt' from Jamaica. Retired 2017. Records still unbroken. Charismatic personality.";
  }
  
  if (query.match(/michael phelps/)) {
    return "Michael Phelps - Most decorated Olympian ever with 28 medals (23 gold). Dominated swimming 2004-2016. Won 8 golds in single Olympics (2008 Beijing - record). Known for butterfly and medley. Retired 2016.";
  }
  
  if (query.match(/simone biles/)) {
    return "Simone Biles - Greatest gymnast ever. 7 Olympic medals, 25 World Championship medals. Known for difficulty and execution. Has moves named after her. Advocate for mental health. Returned to win gold at 2024 Paris Olympics.";
  }

  // ============ OTHER SPORTS ============
  
  // Boxing
  if (query.match(/muhammad ali/)) {
    return "Muhammad Ali - 'The Greatest'. 3-time heavyweight champion. Known for speed, footwork, and charisma. Famous fights: Thrilla in Manila, Rumble in the Jungle. Social activist. 'Float like a butterfly, sting like a bee.' Cultural icon beyond boxing.";
  }
  
  if (query.match(/mike tyson/)) {
    return "Mike Tyson - 'Iron Mike', youngest heavyweight champion (20 years). Known for devastating power and intimidation. 50 wins (44 KOs). Controversial career. Made comeback at 54. One of boxing's most feared fighters.";
  }

  // Formula 1
  if (query.match(/formula 1|f1/)) {
    return "Formula 1 - Pinnacle of motorsport. 20-24 races globally (March-December). 10 teams, 20 drivers. Known for speed (230+ mph), technology, and strategy. Most championships: Lewis Hamilton & Michael Schumacher (7 each). Current champion: Max Verstappen.";
  }
  
  if (query.match(/lewis hamilton/)) {
    return "Lewis Hamilton - 7 F1 World Championships (tied record). 100+ race wins, 100+ pole positions. First Black F1 driver. Known for consistency and racecraft. Drives for Mercedes. Advocate for diversity and environment.";
  }

  // Golf
  if (query.match(/tiger woods/)) {
    return "Tiger Woods - 15 major championships, 82 PGA Tour wins (tied record). Dominated golf 1997-2008. Known for clutch putting and mental strength. Comeback from injuries. Changed golf's popularity and prize money. Cultural icon.";
  }

  // General Sports Concepts
  if (query.match(/doping|ped|performance.?enhancing/)) {
    return "Doping - Using banned substances/methods to enhance performance. Includes steroids, EPO, blood doping. Violates fair play. WADA (World Anti-Doping Agency) enforces rules. Penalties: bans, stripped titles. Major scandals: Lance Armstrong, Russian Olympic ban.";
  }
  
  if (query.match(/home advantage|home field/)) {
    return "Home Advantage - Statistical edge for home teams. Factors: familiar environment, crowd support, no travel fatigue, referee bias. Varies by sport. In football, worth ~0.5 goals. In basketball, ~3-4 points. Real psychological and physical impact.";
  }

  return null; // No match found
};
