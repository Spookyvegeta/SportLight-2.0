// Comprehensive Sports Knowledge Base - No API Required
// Covers ALL sports with extensive information

export const getSportsResponse = (input: string): string => {
  const query = input.toLowerCase().trim();

  // ============ APP HELP ============
  if (query.match(/profile|edit profile/)) {
    return "To edit your profile, click on your avatar in the top right corner and select 'Edit Profile', or navigate to the Profile section from the sidebar! 📝";
  }
  
  if (query.match(/dashboard/)) {
    return "The Dashboard shows all players and clubs on SportLight. You can browse profiles, view achievements, and connect with others! 🏆";
  }
  
  if (query.match(/settings/)) {
    return "Access Settings from the dropdown menu (click your avatar). You can manage notifications, privacy, change password, enable dark mode, and more! ⚙️";
  }
  
  if (query.match(/delete account|remove account/)) {
    return "To delete your account, go to Settings → Account section → Delete Account button. ⚠️ This action is permanent!";
  }
  
  if (query.match(/logout|sign out/)) {
    return "To logout, click your avatar in the top right corner and select 'Logout'. 👋";
  }

  // ============ CRICKET ============
  
  // Players
  if (query.match(/virat|kohli/)) {
    return "Virat Kohli is one of cricket's greatest batsmen. Born Nov 5, 1988, he's the former Indian captain with 70+ international centuries. Known for his aggressive style, fitness, and chase-master abilities. Holds records in ODI cricket and is among the top run-scorers across all formats. 🏏";
  }
  
  if (query.match(/sachin|tendulkar/)) {
    return "Sachin Tendulkar, the 'God of Cricket' and 'Master Blaster'. Retired in 2013 with 100 international centuries (51 Test, 49 ODI), 34,357 international runs, and 664 international matches. First player to score 200 in ODI. Played 24 years for India (1989-2013). 🏏";
  }
  
  if (query.match(/dhoni|ms dhoni/)) {
    return "MS Dhoni, 'Captain Cool' - India's most successful captain. Led India to 2007 T20 WC, 2011 ODI WC, and 2013 Champions Trophy. Known for finishing abilities, lightning-fast stumpings, and calm demeanor. Retired from international cricket in 2020 but continues in IPL with CSK. 🏏";
  }
  
  if (query.match(/rohit|sharma/)) {
    return "Rohit Sharma, 'Hitman' - Current Indian captain across formats. Holds record for highest individual ODI score (264). Only player with 3 ODI double centuries. Known for elegant stroke play and big-hitting ability. 5 IPL titles as Mumbai Indians captain. 🏏";
  }
  
  if (query.match(/bumrah|jasprit/)) {
    return "Jasprit Bumrah - India's premier fast bowler. Known for unique bowling action and deadly yorkers. Excels in all formats, especially in death overs. Fastest Indian to 100 ODI wickets. Key player in India's pace attack. 🏏";
  }

  // Cricket Training & Tips
  if (query.match(/cricket.*tip|cricket.*train|improve.*cricket|good.*cricket.*player|better.*cricket/)) {
    return "To be a good cricket player: 1) Practice regularly (batting, bowling, fielding), 2) Work on fitness - core strength, agility, stamina, 3) Watch the ball closely, 4) Master basics before advanced shots, 5) Study the game - watch professionals, 6) Mental toughness - stay calm under pressure, 7) Team player attitude. Consistency is key! 🏏💪";
  }
  
  if (query.match(/batting.*tip|how.*bat|batting.*technique|improve.*batting/)) {
    return "Batting Tips: 1) Grip - V's aligned, relaxed hands, 2) Stance - Balanced, weight on balls of feet, eyes level, 3) Watch the ball till it hits bat, 4) Footwork - Move decisively forward or back, 5) Play straight initially, 6) Head still, shoulder pointing to bowler, 7) Practice different shots against various deliveries. Regular net sessions essential! 🏏";
  }
  
  if (query.match(/bowling.*tip|how.*bowl|bowling.*technique|improve.*bowling|fast.*bowl/)) {
    return "Bowling Tips: 1) Smooth run-up - rhythmic, consistent, 2) Strong core for pace, 3) High arm action, 4) Focus on line & length - top of off-stump, 5) Wrist position crucial for swing, 6) Vary pace and length, 7) Practice yorkers and bouncers, 8) Build stamina for long spells. Accuracy over speed initially! 🏏";
  }

  if (query.match(/cricket.*diet|cricket.*nutrition|cricket.*food/)) {
    return "Cricket Diet Plan: 1) Breakfast - Oats, eggs, fruits, 2) Pre-match - Banana, peanut butter, energy bars, 3) During match - Hydration (water, electrolytes), light snacks, 4) Post-match - Protein shake, chicken/fish, rice, 5) Daily - Lean proteins, complex carbs, vegetables, nuts, 6) Avoid - Heavy meals before games, junk food. Stay hydrated (3-4L water daily)! 🥗";
  }

  if (query.match(/cricket.*fitness|cricket.*workout|cricket.*exercise/)) {
    return "Cricket Fitness Routine: 1) Cardio - Running, interval sprints (3x/week), 2) Strength - Squats, lunges, deadlifts, core work, 3) Agility - Ladder drills, cone drills, 4) Flexibility - Stretching, yoga, 5) Catching practice daily, 6) Specific drills - batting, bowling, fielding, 7) Rest days important. Focus on explosive power and endurance! 💪";
  }

  // ============ FOOTBALL/SOCCER ============
  
  // Players
  if (query.match(/messi|lionel/)) {
    return "Lionel Messi - Arguably the GOAT. 8 Ballon d'Or awards (record). Led Argentina to 2022 World Cup glory. 800+ career goals, 350+ assists. Spent 21 years at Barcelona (35 trophies), now at Inter Miami. Known for dribbling, vision, and left foot magic. ⚽";
  }
  
  if (query.match(/pele|pelé/)) {
    return "Pelé (1940-2022) - Brazilian legend, widely considered one of the greatest footballers ever. 3 FIFA World Cups (1958, 1962, 1970 - only player with 3). Scored 1,283 goals in 1,363 games. Known for skill, vision, and athleticism. 'The King of Football'. FIFA Player of the Century. ⚽";
  }
  
  if (query.match(/maradona|diego/)) {
    return "Diego Maradona (1960-2020) - Argentine icon, one of football's greatest. Led Argentina to 1986 World Cup with legendary performances. Famous 'Hand of God' and 'Goal of the Century' vs England. Played for Barcelona, Napoli. Known for dribbling genius and controversial personality. ⚽";
  }
  
  if (query.match(/ronaldo|cristiano|cr7/)) {
    return "Cristiano Ronaldo - 5 Ballon d'Or, 5 Champions League titles. 850+ career goals (all-time top scorer). Played for Man United, Real Madrid, Juventus, Al-Nassr. Known for athleticism, headers, free-kicks, and longevity. Portugal's captain and top scorer. ⚽";
  }

  // Football Training
  if (query.match(/football.*tip|soccer.*tip|good.*football.*player|better.*football|improve.*football/)) {
    return "To be a good footballer: 1) Ball control - practice dribbling daily, 2) Passing accuracy - both feet, 3) Fitness - cardio, agility, strength, 4) Game intelligence - positioning, decision-making, 5) Teamwork and communication, 6) Watch professional games, 7) Practice shooting from different angles. Consistency and dedication! ⚽💪";
  }

  if (query.match(/football.*diet|football.*nutrition|footballer.*food/)) {
    return "Footballer Diet: 1) Carbs - Pasta, rice, potatoes for energy, 2) Proteins - Chicken, fish, eggs for muscle, 3) Vegetables & fruits - vitamins, minerals, 4) Hydration - 3-4L water daily, 5) Pre-game - Light meal 3 hours before, 6) Post-game - Protein + carbs within 30 mins, 7) Avoid - Fried foods, sugary drinks. Fuel your performance! 🥗";
  }

  if (query.match(/football.*fitness|football.*workout|football.*exercise/)) {
    return "Football Fitness: 1) Cardio - Interval running, sprints, 2) Leg strength - Squats, lunges, calf raises, 3) Core - Planks, Russian twists, 4) Agility - Ladder drills, cone drills, 5) Plyometrics - Box jumps, burpees, 6) Ball work - Dribbling, passing drills, 7) Flexibility - Stretching, yoga. Train 4-5x/week! 💪";
  }

  // ============ BASKETBALL ============
  
  if (query.match(/michael jordan|mj|jordan/)) {
    return "Michael Jordan - Widely considered the GOAT. 6 NBA championships (all with Bulls), 5 MVPs, 10 scoring titles. Known for clutch performances, competitiveness, and 'Air Jordan' brand. Revolutionized basketball globally. Career average: 30.1 PPG (highest ever). 🏀";
  }
  
  if (query.match(/lebron|james|king james/)) {
    return "LeBron James - 4 NBA championships, 4 MVPs, all-time leading scorer (40,000+ points). Played 21+ seasons. Known for versatility, basketball IQ, and longevity. Played for Cavaliers, Heat, Lakers. Still elite at 39 years old. 🏀";
  }

  if (query.match(/basketball.*tip|good.*basketball.*player|improve.*basketball|better.*basketball/)) {
    return "Basketball Tips: 1) Shooting form - BEEF (Balance, Eyes, Elbow, Follow-through), 2) Dribbling - both hands, head up, 3) Defense - stance, footwork, anticipation, 4) Conditioning - stamina crucial, 5) Court awareness - know teammates' positions, 6) Practice free throws daily, 7) Watch NBA games for tactics. Repetition builds skill! 🏀";
  }

  if (query.match(/basketball.*diet|basketball.*nutrition/)) {
    return "Basketball Diet: 1) High carbs - Energy for intense games, 2) Lean proteins - Muscle recovery, 3) Healthy fats - Nuts, avocado, 4) Hydration - Critical during games, 5) Pre-game - Carb-rich meal 3-4 hours before, 6) During game - Sports drinks, bananas, 7) Post-game - Protein shake, recovery meal. Fuel for performance! 🥗";
  }

  // ============ TENNIS ============
  
  if (query.match(/roger federer|federer/)) {
    return "Roger Federer - Swiss maestro with 20 Grand Slams. Retired 2022. Known for elegant style, one-handed backhand, and sportsmanship. 310 weeks as world #1 (record). Won 8 Wimbledons. Considered one of the greatest ever. 🎾";
  }
  
  if (query.match(/rafael nadal|rafa|nadal/)) {
    return "Rafael Nadal - 'King of Clay' with 22 Grand Slams (14 French Opens - record). Known for topspin forehand, fighting spirit, and physical play. Dominated clay courts like no other. Part of 'Big 3' with Federer and Djokovic. 🎾";
  }

  if (query.match(/tennis.*tip|good.*tennis.*player|improve.*tennis/)) {
    return "Tennis Tips: 1) Footwork - Always moving, split step, 2) Grip - Continental for serve/volley, Eastern for groundstrokes, 3) Watch the ball, 4) Follow through on shots, 5) Serve practice - Most important shot, 6) Fitness - Agility, endurance crucial, 7) Mental game - Stay focused, positive. Practice consistently! 🎾";
  }

  // ============ ATHLETICS & RUNNING ============
  
  if (query.match(/usain bolt|bolt/)) {
    return "Usain Bolt - Fastest human ever. 8 Olympic golds, 11 World Championship golds. World records: 100m (9.58s), 200m (19.19s), 4x100m relay. 'Lightning Bolt' from Jamaica. Retired 2017. Records still unbroken. Charismatic personality. 🏃‍♂️⚡";
  }

  if (query.match(/running.*tip|improve.*running|better.*runner|running.*technique/)) {
    return "Running Tips: 1) Proper form - Upright posture, relaxed shoulders, 2) Foot strike - Midfoot landing, 3) Breathing - Rhythmic, deep breaths, 4) Start slow, build gradually, 5) Warm-up and cool-down essential, 6) Good running shoes, 7) Mix distances - Long runs, intervals, sprints, 8) Rest days prevent injury. Consistency over intensity! 🏃‍♂️";
  }

  if (query.match(/marathon.*train|marathon.*tip|run.*marathon/)) {
    return "Marathon Training: 1) Build base - 6-8 weeks of consistent running, 2) Long runs - Gradually increase to 20+ miles, 3) Speed work - Intervals, tempo runs, 4) Rest days - Recovery crucial, 5) Nutrition - Carb loading, hydration, 6) Practice race pace, 7) Taper last 2-3 weeks, 8) Mental preparation. Takes 16-20 weeks! 🏃‍♂️";
  }

  // ============ SWIMMING ============
  
  if (query.match(/michael phelps|phelps/)) {
    return "Michael Phelps - Most decorated Olympian ever with 28 medals (23 gold). Dominated swimming 2004-2016. Won 8 golds in single Olympics (2008 Beijing - record). Known for butterfly and medley. Retired 2016. 🏊‍♂️";
  }

  if (query.match(/swimming.*tip|improve.*swimming|better.*swimmer|swimming.*technique/)) {
    return "Swimming Tips: 1) Breathing - Bilateral breathing (both sides), 2) Body position - Horizontal, streamlined, 3) Kick - From hips, not knees, 4) Pull - High elbow catch, 5) Practice all strokes, 6) Drills - Catch-up, fingertip drag, 7) Endurance - Build gradually, 8) Technique over speed initially. Smooth is fast! 🏊‍♂️";
  }

  // ============ BOXING & MMA ============
  
  if (query.match(/muhammad ali|ali/)) {
    return "Muhammad Ali - 'The Greatest'. 3-time heavyweight champion. Known for speed, footwork, and charisma. Famous fights: Thrilla in Manila, Rumble in the Jungle. Social activist. 'Float like a butterfly, sting like a bee.' Cultural icon beyond boxing. 🥊";
  }

  if (query.match(/mike tyson|tyson/)) {
    return "Mike Tyson - 'Iron Mike', youngest heavyweight champion (20 years). Known for devastating power and intimidation. 50 wins (44 KOs). Controversial career. Made comeback at 54. One of boxing's most feared fighters. 🥊";
  }

  if (query.match(/boxing.*tip|improve.*boxing|boxing.*train/)) {
    return "Boxing Tips: 1) Stance - Balanced, guard up, 2) Jab - Most important punch, 3) Footwork - Always moving, pivot, 4) Head movement - Slip, duck, weave, 5) Conditioning - Cardio crucial, 6) Bag work - Speed bag, heavy bag, 7) Sparring - Controlled practice, 8) Defense first. Train hard, fight easy! 🥊";
  }

  // ============ BADMINTON ============
  
  if (query.match(/badminton.*tip|improve.*badminton|good.*badminton/)) {
    return "Badminton Tips: 1) Grip - Relaxed, change for forehand/backhand, 2) Footwork - Quick, light on feet, 3) Clear - High and deep, 4) Smash - Timing and wrist snap, 5) Drop shot - Deception, 6) Serve - Low and tight, 7) Fitness - Agility, stamina, 8) Court positioning. Speed and deception win! 🏸";
  }

  // ============ VOLLEYBALL ============
  
  if (query.match(/volleyball.*tip|improve.*volleyball|good.*volleyball/)) {
    return "Volleyball Tips: 1) Passing - Platform solid, legs bent, 2) Setting - Fingertips, follow through, 3) Spiking - Approach, jump, arm swing, 4) Blocking - Timing, hands over net, 5) Serving - Consistent, aim corners, 6) Communication - Call the ball, 7) Positioning - Read the game, 8) Fitness - Jumping, agility. Teamwork essential! 🏐";
  }

  // ============ TABLE TENNIS ============
  
  if (query.match(/table tennis.*tip|ping pong.*tip|improve.*table tennis/)) {
    return "Table Tennis Tips: 1) Grip - Shakehand or penhold, 2) Stance - Knees bent, ready position, 3) Forehand - Rotate hips, follow through, 4) Backhand - Elbow in, wrist snap, 5) Serve - Spin variation, 6) Footwork - Quick, small steps, 7) Watch the ball, 8) Practice spin control. Speed and spin! 🏓";
  }

  // ============ GOLF ============
  
  if (query.match(/tiger woods|woods/)) {
    return "Tiger Woods - 15 major championships, 82 PGA Tour wins (tied record). Dominated golf 1997-2008. Known for clutch putting and mental strength. Comeback from injuries. Changed golf's popularity and prize money. Cultural icon. ⛳";
  }

  if (query.match(/golf.*tip|improve.*golf|better.*golf/)) {
    return "Golf Tips: 1) Grip - Light pressure, V's pointing right shoulder, 2) Stance - Balanced, knees flexed, 3) Swing - Smooth tempo, full rotation, 4) Keep head still, 5) Follow through, 6) Short game - Chipping, putting crucial, 7) Course management - Play smart, not just hard, 8) Practice putting. Patience and consistency! ⛳";
  }

  // ============ GENERAL SPORTS ADVICE ============
  
  if (query.match(/sports.*diet|athlete.*diet|sports.*nutrition/)) {
    return "General Sports Diet: 1) Carbs - 50-60% (energy), 2) Proteins - 15-20% (muscle repair), 3) Fats - 20-30% (healthy fats), 4) Hydration - 3-4L water daily, 5) Pre-workout - Carbs + protein 2-3 hours before, 6) Post-workout - Protein + carbs within 30 mins, 7) Avoid - Processed foods, excess sugar. Eat clean, perform better! 🥗";
  }

  if (query.match(/sports.*fitness|athlete.*workout|general.*fitness/)) {
    return "General Sports Fitness: 1) Cardio - 3-4x/week (running, cycling, swimming), 2) Strength - 2-3x/week (compound exercises), 3) Flexibility - Daily stretching, yoga, 4) Core work - Planks, rotations, 5) Sport-specific drills, 6) Rest - 1-2 days/week, 7) Progressive overload, 8) Listen to your body. Balanced training! 💪";
  }

  if (query.match(/injury.*prevent|avoid.*injury|sports.*injury/)) {
    return "Injury Prevention: 1) Proper warm-up - 10-15 mins dynamic stretching, 2) Cool down - Static stretching, 3) Gradual progression - Don't overtrain, 4) Proper technique - Learn correct form, 5) Rest days - Recovery essential, 6) Strength training - Prevents imbalances, 7) Hydration and nutrition, 8) Listen to pain signals. Prevention > cure! 🏥";
  }

  if (query.match(/mental.*game|sports.*psychology|mental.*strength/)) {
    return "Mental Game Tips: 1) Visualization - See success before it happens, 2) Positive self-talk - Encourage yourself, 3) Focus on process, not outcome, 4) Breathing techniques - Calm nerves, 5) Routine - Pre-game rituals, 6) Learn from mistakes, 7) Confidence - Believe in your training, 8) Stay present - One point at a time. Mind over matter! 🧠";
  }

  if (query.match(/warm.*up|warming.*up|pre.*game/)) {
    return "Warm-up Routine: 1) Light cardio - 5-10 mins (jogging, jumping jacks), 2) Dynamic stretching - Leg swings, arm circles, 3) Sport-specific movements - Gradual intensity, 4) Activation exercises - Glutes, core, 5) Practice drills - Light intensity, 6) Mental preparation - Focus, visualize, 7) Hydrate. Never skip warm-up! 🔥";
  }

  // ============ SPECIFIC SPORTS QUERIES ============
  
  if (query.match(/rugby/)) {
    return "Rugby Tips: 1) Tackling - Low, wrap arms, drive through, 2) Passing - Hands out, follow through, 3) Fitness - Strength + endurance crucial, 4) Positioning - Know your role, 5) Rucking - Stay on feet, drive over ball, 6) Communication - Constant, loud, 7) Discipline - Penalties costly. Tough sport, tougher players! 🏉";
  }

  if (query.match(/hockey/)) {
    return "Hockey Tips: 1) Skating - Power, agility, backward skating, 2) Stick handling - Soft hands, head up, 3) Shooting - Wrist shot, slap shot, 4) Passing - Tape to tape, 5) Positioning - Defensive awareness, 6) Fitness - Anaerobic capacity, 7) Teamwork - Quick transitions. Fast-paced, exciting! 🏒";
  }

  if (query.match(/baseball/)) {
    return "Baseball Tips: 1) Batting - Eye on ball, level swing, 2) Pitching - Mechanics, control over speed, 3) Fielding - Ready position, soft hands, 4) Throwing - Proper mechanics, accuracy, 5) Base running - Read pitcher, explosive starts, 6) Mental game - Patience, focus, 7) Practice fundamentals. America's pastime! ⚾";
  }

  if (query.match(/cycling/)) {
    return "Cycling Tips: 1) Bike fit - Proper saddle height, position, 2) Cadence - 80-100 RPM optimal, 3) Gearing - Use appropriate gear, 4) Posture - Relaxed, aerodynamic, 5) Nutrition - Fuel during long rides, 6) Training - Mix endurance, intervals, hills, 7) Safety - Helmet, lights, awareness. Ride safe, ride strong! 🚴‍♂️";
  }

  if (query.match(/wrestling/)) {
    return "Wrestling Tips: 1) Stance - Low, balanced, ready, 2) Takedowns - Timing, level change, 3) Mat work - Control, positioning, 4) Conditioning - Extreme fitness required, 5) Technique - Drill repeatedly, 6) Strength - Functional, explosive, 7) Mental toughness - Push through fatigue. One of the toughest sports! 🤼";
  }

  if (query.match(/gymnastics/)) {
    return "Gymnastics Tips: 1) Flexibility - Daily stretching essential, 2) Strength - Core, upper body, legs, 3) Technique - Perfect form crucial, 4) Progressions - Master basics first, 5) Conditioning - Specific to apparatus, 6) Mental focus - Concentration, confidence, 7) Safety - Proper spotting, mats. Grace and power! 🤸";
  }

  // Default response for unmatched queries
  return "I'm SportLight AI, your sports assistant! 🌟 I can help with:\n\n🏏 Cricket - Players, tips, training, diet\n⚽ Football - Legends, techniques, fitness\n🏀 Basketball - NBA stars, skills, workouts\n🎾 Tennis - Grand Slams, tips\n🏃‍♂️ Athletics - Running, training\n🏊‍♂️ Swimming - Techniques, fitness\n🥊 Boxing/MMA - Training, legends\n🏸 Badminton, 🏐 Volleyball, 🏓 Table Tennis\n⛳ Golf, 🏉 Rugby, 🏒 Hockey, ⚾ Baseball\n\nAsk me anything about sports, training, diet, or the SportLight app!";
};
