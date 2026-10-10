// 100 Strictly Unique Personal Habits & Lifestyle Questions ("How well do you know me?")
// Guarantees zero question duplication across 10 consecutive quizzes (100 questions total).

export const ALL_QUESTIONS = [
  // 1-10: Food Cravings & Drinks
  {
    id: 1,
    category: 'Food Craving 🍔',
    title: 'What is my ultimate favorite food craving when hungry?',
    options: [
      { label: 'Hot Biryani / Porotta', desc: 'Delicious savory meal 🍛', icon: '🍛' },
      { label: 'Crispy Dosa & Filter Coffee', desc: 'Classic south comfort food ☕', icon: '☕' },
      { label: 'Cheesy Pizza & Burger', desc: 'Loaded fast food treat 🍕', icon: '🍕' },
      { label: 'Spicy Noodles / Momos', desc: 'Late-night street food 🍜', icon: '🍜' }
    ]
  },
  {
    id: 2,
    category: 'Texting Habit 💬',
    title: 'What is my actual texting style when chatting with you?',
    options: [
      { label: 'Instant Fast Replies', desc: 'Replies in 2 seconds flat ⚡', icon: '⚡' },
      { label: 'Sends 10 Voice Memos', desc: 'Loves talking over audio 🎙️', icon: '🎙️' },
      { label: 'Leaves On Read For Hours', desc: 'Forgets to reply for 5 hours 💀', icon: '💀' },
      { label: 'Communicates In Memes', desc: 'Communicates only in funny memes 📲', icon: '📲' }
    ]
  },
  {
    id: 3,
    category: 'Late Night 🌙',
    title: 'What am I usually doing at 2:00 AM on a weekend?',
    options: [
      { label: 'Sleeping Deeply Snoring', desc: 'Out cold in bed snoring 💤', icon: '😴' },
      { label: 'Doomscrolling Shorts/Reels', desc: 'Doomscrolling short videos 📱', icon: '📱' },
      { label: 'Midnight Kitchen Fridge Raid', desc: 'Searching fridge for cold food 🧀', icon: '🧀' },
      { label: 'Binge Watching Movies/Shows', desc: 'Watching movies till sunrise 🍿', icon: '🍿' }
    ]
  },
  {
    id: 4,
    category: 'Money Mood 💸',
    title: 'How do I handle money when we go shopping?',
    options: [
      { label: 'Bargain Bargainer Everywhere', desc: 'Asks for discount everywhere 🏷️', icon: '🏷️' },
      { label: 'Impulse Shopping Spree', desc: 'Buys everything on sight 🛍️', icon: '🛍️' },
      { label: 'Treats Everyone Food & Drinks', desc: 'Pays bill for the whole group 🥂', icon: '🥂' },
      { label: 'Strict Super Saver', desc: 'Strictly saves money in bank 📈', icon: '📈' }
    ]
  },
  {
    id: 5,
    category: 'Dream Travel 🌴',
    title: 'What is my dream getaway vacation spot?',
    options: [
      { label: 'Kerala Houseboat & Beach', desc: 'Relaxing houseboats & sea breeze 🌊', icon: '🌊' },
      { label: 'Mysore Palace & Coorg Hills', desc: 'Heritage city & Coorg coffee hills 🏰', icon: '🏰' },
      { label: 'Snow Mountain Trekking', desc: 'Cold mountain adventures 🏔️', icon: '🏔️' },
      { label: 'Big City Night Markets', desc: 'Big city lights & night markets 🌃', icon: '🌃' }
    ]
  },
  {
    id: 6,
    category: 'Angry Reaction 😠',
    title: 'How do I react when I get annoyed or angry at something?',
    options: [
      { label: 'Silent Cold Treatment', desc: 'Stops talking & ignores quietly 🤫', icon: '🤫' },
      { label: 'Vents Loudly To Bestie', desc: 'Explodes & talks for 30 mins 🗣️', icon: '🗣️' },
      { label: 'Cures Mood With Biryani/IceCream', desc: 'Cures bad mood with food 🍨', icon: '🍨' },
      { label: 'Puts Headphones Full Volume', desc: 'Listens to music 🎧', icon: '🎧' }
    ]
  },
  {
    id: 7,
    category: 'Home Mood 🏠',
    title: 'What is my favorite lazy day outfit at home?',
    options: [
      { label: 'Oversized Hoodie & Sweats', desc: 'Cozy blanket aesthetic 🧥', icon: '🧥' },
      { label: 'Comfy Lungi / Pajamas', desc: 'Traditional super comfy fit 🌴', icon: '🌴' },
      { label: 'Activewear Gym Outfit', desc: 'Sporty activewear fit 👟', icon: '👟' },
      { label: 'Fancy Dressy Fit Indoors', desc: 'Looking dressy even indoors ✨', icon: '✨' }
    ]
  },
  {
    id: 8,
    category: 'Secret Fear 😱',
    title: 'What is my secret biggest pet peeve or fear?',
    options: [
      { label: 'People Slow Replying', desc: 'Hates being left on read 📱', icon: '📱' },
      { label: 'Loud Noisy Chewing', desc: 'Can’t stand noisy food eating 🤫', icon: '🤫' },
      { label: 'Bugs Flying Near Face', desc: 'Panics when a moth flies past 🦋', icon: '🦋' },
      { label: 'Low Battery 1% Panic', desc: 'Fears 1% low battery level 🔋', icon: '⚡' }
    ]
  },
  {
    id: 9,
    category: 'Guilty Pleasure 🤫',
    title: 'What is my secret guilty pleasure when I’m alone?',
    options: [
      { label: 'Shower Concert Singing', desc: 'Full concert vocals in shower 🎤', icon: '🎤' },
      { label: 'Influencer Gossip Threads', desc: 'Reading influencer drama 🍿', icon: '🍿' },
      { label: 'Eating Dessert Tub Alone', desc: 'Sweet tooth tub dessert 🧁', icon: '🧁' },
      { label: 'Talking To Pets Like Babies', desc: 'Having full conversations with pets 🐱', icon: '🐱' }
    ]
  },
  {
    id: 10,
    category: 'Friendship Rule 🤝',
    title: 'Why should you NEVER block me on social media?',
    options: [
      { label: 'I Send Top Tier Memes', desc: 'Daily funny viral comedy posts 📲', icon: '📲' },
      { label: 'I Always Pay Chai & Treats', desc: 'Always buys food & shares chai ☕', icon: '☕' },
      { label: 'I Know All Your Secrets', desc: 'Mutual assured friendship pact 🤫', icon: '🤫' },
      { label: '100% Unmatched Loyalty', desc: 'Rides or dies 24/7 no matter what 💖', icon: '💖' }
    ]
  },

  // 11-20: Morning, Habits & Social Life
  {
    id: 11,
    category: 'Morning Beverage ☕',
    title: 'What is the first drink I crave right after waking up?',
    options: [
      { label: 'Strong Hot Filter Coffee', desc: 'Authentic south filter roast ☕', icon: '☕' },
      { label: 'Sweet Spiced Masala Chai', desc: 'Steaming hot ginger tea 🫖', icon: '🫖' },
      { label: 'Iced Latte With Cream', desc: 'Chilled iced caffeine 🧋', icon: '🧋' },
      { label: 'Ice Cold Water Bottle', desc: 'Hydrating fresh water 💧', icon: '💧' }
    ]
  },
  {
    id: 12,
    category: 'Party Behavior 🥳',
    title: 'What do I usually do at a big crowded house party?',
    options: [
      { label: 'Pet The Host’s Dog/Cat', desc: 'Hangs out with the pets 🐕', icon: '🐕' },
      { label: 'Dance Right Near DJ Speakers', desc: 'Owns the dance floor 🕺', icon: '🕺' },
      { label: 'Eat All Snacks At Buffet Table', desc: 'Stays near food table 🍿', icon: '🍿' },
      { label: 'Secretly Go Home Early', desc: 'Irish exit after 30 mins 🏃', icon: '🏃' }
    ]
  },
  {
    id: 13,
    category: 'Movie Favorite 🎬',
    title: 'Which movie genre can I watch 100 times without getting bored?',
    options: [
      { label: 'High-Octane Mass Action', desc: 'Explosive thriller action 💥', icon: '💥' },
      { label: 'Romantic Comedy Laughs', desc: 'Feel good love stories 💕', icon: '💕' },
      { label: 'Terrifying Horror Thriller', desc: 'Scary ghost movies 👻', icon: '👻' },
      { label: 'Funny Mindless Comedy', desc: 'Hilarious comedy classics 🤣', icon: '🤣' }
    ]
  },
  {
    id: 14,
    category: 'Sunday Sleep 😴',
    title: 'How long do I sleep on a lazy Sunday morning?',
    options: [
      { label: '10+ Hours Deep Sleep', desc: 'Wakes up after 12 PM 🛌', icon: '🛌' },
      { label: 'Up At 6 AM Energetic', desc: 'Early bird morning person 🏃', icon: '🏃' },
      { label: '3 Hour Afternoon Power Nap', desc: 'Takes big afternoon nap 💤', icon: '💤' },
      { label: 'No Sleep All Night Gaming', desc: 'Stays up all night 🎮', icon: '🎮' }
    ]
  },
  {
    id: 15,
    category: 'Road Trip Role 🚗',
    title: 'What is my main role on a long road trip with friends?',
    options: [
      { label: 'AUX Playlist DJ Controller', desc: 'Controls music tunes 🎧', icon: '🎧' },
      { label: 'Snack Manager & Feeder', desc: 'Hands out chips & drinks 🍟', icon: '🍟' },
      { label: 'Speed Driver Behind Wheel', desc: 'Drives the car 🏎️', icon: '🏎️' },
      { label: 'Fast Asleep In Backseat', desc: 'Sleeping the whole trip 😴', icon: '😴' }
    ]
  },
  {
    id: 16,
    category: 'Chai Time Snack 🫖',
    title: 'What snack MUST accompany my evening chai or coffee?',
    options: [
      { label: 'Hot Crispy Samosa / Cutlet', desc: 'Savory fried treat 🥟', icon: '🥟' },
      { label: 'Butter Biscuits / Rusk', desc: 'Dipping tea biscuit 🍪', icon: '🍪' },
      { label: 'Spicy Mixture / Murukku', desc: 'Crunchy savory snack 🥨', icon: '🥨' },
      { label: 'Cream Cake / Pastry', desc: 'Sweet bakery cake 🍰', icon: '🍰' }
    ]
  },
  {
    id: 17,
    category: 'Phone Battery 5% 🔋',
    title: 'What do I do the moment my phone battery hits 5%?',
    options: [
      { label: 'Panic Run For Charger', desc: 'Scrambles for charger cable ⚡', icon: '⚡' },
      { label: 'Enable Low Power Mode & Chill', desc: 'Rides out 1% till screen dies 🪫', icon: '🪫' },
      { label: 'Borrow Power Bank From Friend', desc: 'Asks bestie for power bank 🔌', icon: '🔌' },
      { label: 'Turn Off Brightness & Wi-Fi', desc: 'Saves battery strictly 📱', icon: '📱' }
    ]
  },
  {
    id: 18,
    category: 'Shopping Weakness 🛍️',
    title: 'What item am I most guilty of spending too much money on?',
    options: [
      { label: 'Sneakers & Shoes Collection', desc: 'Footwear enthusiast 👟', icon: '👟' },
      { label: 'Fancy Clothes & Hoodies', desc: 'Fashion shopping spree 👗', icon: '👗' },
      { label: 'Tech Gadgets & Headphones', desc: 'Electronic gadgets 🎧', icon: '🎧' },
      { label: 'Delivery Food & Snacks', desc: 'Daily food orders 🍕', icon: '🍕' }
    ]
  },
  {
    id: 19,
    category: 'Social App Check 📱',
    title: 'Which social app do I check first after waking up?',
    options: [
      { label: 'Instagram Reels / DMs', desc: 'Scrolls feeds & messages 📸', icon: '📸' },
      { label: 'WhatsApp Chat Group', desc: 'Checks missed chats 💬', icon: '💬' },
      { label: 'YouTube Videos Feed', desc: 'Watches trending videos 📹', icon: '📹' },
      { label: 'X / Twitter Trends', desc: 'Reads news & memes 🐦', icon: '🐦' }
    ]
  },
  {
    id: 20,
    category: 'Silly Bad Habit 🙈',
    title: 'What is one funny bad habit of mine that my friends know?',
    options: [
      { label: 'Always Arriving 15 Mins Late', desc: 'Runs on Indian stretch time ⏰', icon: '⏰' },
      { label: 'Losing Keys & Glasses Daily', desc: 'Forgets where items are 🔑', icon: '🔑' },
      { label: 'Overthinking Micro Decisions', desc: 'Takes 20 mins to pick food 🧠', icon: '🧠' },
      { label: 'Spamming 20 Memes In Group Chat', desc: 'Spams group chat 💬', icon: '💬' }
    ]
  },

  // 21-30: Music, Cooking & Personal Vibe
  {
    id: 21,
    category: 'Driving Tunes 🎧',
    title: 'What music genre do I play on full volume while driving?',
    options: [
      { label: 'Upbeat Mass Beat Songs', desc: 'High energy dance tracks 🕺', icon: '🕺' },
      { label: 'Melodic Romantic Hits', desc: 'Soothing vocal songs 🎵', icon: '🎵' },
      { label: 'Hip Hop & Rap Beats', desc: 'Bass heavy rap tracks 🎙️', icon: '🎙️' },
      { label: 'Acoustic Indie Chill', desc: 'Relaxing acoustic vibes 🎸', icon: '🎸' }
    ]
  },
  {
    id: 22,
    category: 'Kitchen Skills 🧑‍🍳',
    title: 'What happens when I attempt to cook a full meal alone?',
    options: [
      { label: 'MasterChef Delicious Dish', desc: 'Cooks amazing food 🍲', icon: '🍲' },
      { label: 'Burns Pan & Orders Swiggy', desc: 'Kitchen disaster recovery 🍕', icon: '🍕' },
      { label: 'Makes Maggi Noodles Only', desc: 'Sticks to 2-minute noodles 🍜', icon: '🍜' },
      { label: 'Makes Great Omelette & Tea', desc: 'Basic breakfast specialist 🍳', icon: '🍳' }
    ]
  },
  {
    id: 23,
    category: 'Rainy Afternoon 🌧️',
    title: 'What is my absolute favorite thing to do on a rainy day?',
    options: [
      { label: 'Hot Tea & Crispy Snacks Window Side', desc: 'Chai & rain view ☕', icon: '☕' },
      { label: 'Sleep Under Heavy Blanket', desc: 'Cozy rain sleeping 🛌', icon: '🛌' },
      { label: 'Binge Watch Suspense Movies', desc: 'Movie marathon indoors 🍿', icon: '🍿' },
      { label: 'Walk Outside In Rain', desc: 'Enjoys getting drenched 🌧️', icon: '🌧️' }
    ]
  },
  {
    id: 24,
    category: 'Secret Talent 🌟',
    title: 'What random hidden talent or skill do I possess?',
    options: [
      { label: 'Imitating Funny Voices & Accents', desc: 'Hilarious voice mimics 🗣️', icon: '🗣️' },
      { label: 'Remembering Random Movie Trivia', desc: 'Pop culture encyclopedia 🧠', icon: '🧠' },
      { label: 'Finding Insane Flight/Shopping Deals', desc: 'Master bargain hunter 🏷️', icon: '🏷️' },
      { label: 'Gaming Reflexes & Speed Typing', desc: 'Super fast fingers 🎮', icon: '🎮' }
    ]
  },
  {
    id: 25,
    category: 'Street Pet Reaction 🐱',
    title: 'How do I react when I see a stray cat or dog on the street?',
    options: [
      { label: 'Runs Over To Pet & Talk To It', desc: 'Instant animal lover 🐶', icon: '🐶' },
      { label: 'Takes 10 Photos For Instagram', desc: 'Snaps pictures immediately 📸', icon: '📸' },
      { label: 'Buys Biscuits/Milk To Feed It', desc: 'Feeds street pets 🥛', icon: '🥛' },
      { label: 'Admires From Safe Distance', desc: 'Enjoys animals quietly 🐾', icon: '🐾' }
    ]
  },
  {
    id: 26,
    category: 'Exam/Work Style 📚',
    title: 'How do I prepare when a big exam or work deadline approaches?',
    options: [
      { label: 'All-Nighter Night Before Deadline', desc: 'Procrastination specialist 🌙', icon: '🌙' },
      { label: 'Organized Study Schedule Days Ahead', desc: 'Planner & early worker 📅', icon: '📅' },
      { label: 'Group Study Session With Friends', desc: 'Studies with study buddies 👥', icon: '👥' },
      { label: 'Panics 2 Hours Before & Prays', desc: 'Last minute miracle worker 🙏', icon: '🙏' }
    ]
  },
  {
    id: 27,
    category: 'Laughter Trigger 🤣',
    title: 'What type of humor makes me laugh till my stomach hurts?',
    options: [
      { label: 'Sarcastic Dry Wit & Roasts', desc: 'Roasting & clever banter 😂', icon: '😂' },
      { label: 'Stupid Silly Slapstick Fails', desc: 'Accidental fail clips 🙈', icon: '🙈' },
      { label: 'Relatable Dank Internet Memes', desc: 'Viral internet culture 📲', icon: '📲' },
      { label: 'Inside Jokes Between Us', desc: 'Group chat inside jokes 🤫', icon: '🤫' }
    ]
  },
  {
    id: 28,
    category: 'Gift Preference 🎁',
    title: 'What type of gift would make me jump with joy on my birthday?',
    options: [
      { label: 'Personalized Handwritten Memory Item', desc: 'Sentimental thoughtful gift 💖', icon: '💖' },
      { label: 'Trendy Branded Shoes/Clothes', desc: 'Fashionable style gift 👟', icon: '👟' },
      { label: 'Tech Gadget / Wireless Earbuds', desc: 'Electronics gift 🎧', icon: '🎧' },
      { label: 'Surprise Food & Dessert Feast', desc: 'Foodie treat package 🍰', icon: '🍰' }
    ]
  },
  {
    id: 29,
    category: 'Ice Cream Flavor 🍨',
    title: 'What is my top choice ice cream flavor on a sweltering summer day?',
    options: [
      { label: 'Rich Belgian Chocolate', desc: 'Loaded chocolate scoop 🍫', icon: '🍫' },
      { label: 'Classic Creamy Vanilla / Tender Coconut', desc: 'Smooth fresh flavor 🥥', icon: '🥥' },
      { label: 'Mango / Alphonso Sorbet', desc: 'Fruity tropical ice cream 🥭', icon: '🥭' },
      { label: 'Butterscotch Crunch With Nuts', desc: 'Caramel crunchy scoop 🍨', icon: '🍨' }
    ]
  },
  {
    id: 30,
    category: 'Decision Style 🤔',
    title: 'How do I usually make big important life decisions?',
    options: [
      { label: 'Gut Feeling & Heart Instinct', desc: 'Follows emotional instinct 💖', icon: '💖' },
      { label: 'Asks Best Friends For 50 Opinions', desc: 'Consults closest circle 🗣️', icon: '🗣️' },
      { label: 'Overanalyzes Pros & Cons List', desc: 'Logical pros and cons list 📊', icon: '📊' },
      { label: 'Flips A Coin & Hopes For Best', desc: 'Spontaneous decision maker 🪙', icon: '🪙' }
    ]
  },

  // 31-40: Shopping, Food & Daily Habits
  {
    id: 31,
    category: 'Spicy Food Tolerance 🌶️',
    title: 'How well can I handle super extra spicy food?',
    options: [
      { label: 'Spicy Master (No Sweat)', desc: 'Eats raw chilies effortlessly 🌶️', icon: '🌶️' },
      { label: 'Medium Spice Only Please', desc: 'Enjoys flavor without burning 🔥', icon: '🔥' },
      { label: 'Zero Spice (Needs Milk)', desc: 'Cries at mild black pepper 🥛', icon: '🥛' },
      { label: 'Claims Spice Master But Sweats', desc: 'Pretends to handle it 😅', icon: '😅' }
    ]
  },
  {
    id: 32,
    category: 'Punctuality Level ⏰',
    title: 'How punctual am I when we plan to meet up at 5:00 PM?',
    options: [
      { label: 'Arrives 10 Mins Early Waiting', desc: 'Super early & punctual ⏱️', icon: '⏱️' },
      { label: 'Reaches Exactly On The Dot', desc: 'Punctual to the minute 🎯', icon: '🎯' },
      { label: 'Says "On My Way" (Still At Home)', desc: 'Leaving house 20 mins late 🛵', icon: '🛵' },
      { label: 'Forgets Time Until Reminded', desc: 'Completely forgets schedule 😴', icon: '😴' }
    ]
  },
  {
    id: 33,
    category: 'Gym Attitude 🏋️',
    title: 'What is my true honest attitude towards gym and working out?',
    options: [
      { label: 'Dedicated Gym Beast (5 Days/Wk)', desc: 'Fitness enthusiast 🦾', icon: '🦾' },
      { label: 'Buys Gym Membership, Goes 2 Days', desc: 'Good intentions, low attendance 👟', icon: '👟' },
      { label: 'Prefers Evening Walks & Sports', desc: 'Active outdoor player ⚽', icon: '⚽' },
      { label: 'Gym? I Workout By Lifting Food', desc: 'Couch potato life 🛋️', icon: '🛋️' }
    ]
  },
  {
    id: 34,
    category: 'Biryani Priority 🍛',
    title: 'What part of Biryani do I claim first on the plate?',
    options: [
      { label: 'Juicy Leg Piece / Meat', desc: 'Claims prime chicken/mutton 🍗', icon: '🍗' },
      { label: 'Boiled Egg & Flavorful Rice', desc: 'Loves spicy aromatic rice 🥚', icon: '🥚' },
      { label: 'Crispy Fried Onions & Raita', desc: 'Loves crunchy toppings 🧅', icon: '🧅' },
      { label: 'Steals Meat From Friend’s Plate', desc: 'Food thief extra 😋', icon: '😋' }
    ]
  },
  {
    id: 35,
    category: 'Insta Story Style 📸',
    title: 'What type of content do I post most frequently on my Instagram story?',
    options: [
      { label: 'Aesthetic Food & Coffee Shots', desc: 'Foodie photos ☕', icon: '☕' },
      { label: 'Funny Viral Memes & Videos', desc: 'Comedy clips 📲', icon: '📲' },
      { label: 'Travel Views & Song Lyrics', desc: 'Scenic sunset vibes 🌅', icon: '🌅' },
      { label: 'Rarely Post (Ghost Mode)', desc: 'Silent viewer 👻', icon: '👻' }
    ]
  },
  {
    id: 36,
    category: 'Shopping Cart 📦',
    title: 'What is sitting in my online shopping cart right now?',
    options: [
      { label: '5 Trendy Clothes I Won’t Buy', desc: 'Wishlist dreamer 👗', icon: '👗' },
      { label: 'Smartwatch / Tech Accessories', desc: 'Tech wishlist ⌚', icon: '⌚' },
      { label: 'Books / Stationary / Decor', desc: 'Cozy home items 📚', icon: '📚' },
      { label: 'Late Night Snacks & Chocolates', desc: 'Munchies haul 🍫', icon: '🍫' }
    ]
  },
  {
    id: 37,
    category: 'Disappearing Act 👻',
    title: 'Why do I sometimes go completely offline or disappear for days?',
    options: [
      { label: 'Social Battery Drained (Recharging)', desc: 'Needs alone time 🔋', icon: '🔋' },
      { label: 'Binge Watching A New TV Series', desc: 'Locked in bedroom 🍿', icon: '🍿' },
      { label: 'Super Busy With Work/Studies', desc: 'Hustling hard 💼', icon: '💼' },
      { label: 'Forgot Where I Left My Phone', desc: 'Clueless phone owner 📱', icon: '📱' }
    ]
  },
  {
    id: 38,
    category: 'Must-Have Dessert 🍬',
    title: 'Which dessert can I NEVER say no to even when full?',
    options: [
      { label: 'Hot Gulab Jamun With Vanilla', desc: 'Classic warm sweet 🍨', icon: '🍨' },
      { label: 'Rich Fudgy Chocolate Brownie', desc: 'Loaded chocolate brownie 🍫', icon: '🍫' },
      { label: 'Saffron Payasam / Kheer', desc: 'Traditional dessert 🥣', icon: '🥣' },
      { label: 'Cheesecake / Tiramisu Slice', desc: 'Bakery specialty 🍰', icon: '🍰' }
    ]
  },
  {
    id: 39,
    category: 'Gaming Addiction 🎮',
    title: 'What type of games do I play secretly on my phone or PC?',
    options: [
      { label: 'High Stakes Battle Royale (PUBG/COD)', desc: 'Action shooter games 🎯', icon: '🎯' },
      { label: 'Casual Puzzle / Candy Games', desc: 'Relaxing casual games 🧩', icon: '🧩' },
      { label: 'FIFA / Car Racing Thrillers', desc: 'Sports & racing games 🏎️', icon: '🏎️' },
      { label: 'Not A Gamer At All', desc: 'Prefers reading or watching 📺', icon: '📺' }
    ]
  },
  {
    id: 40,
    category: 'Argument Style 🥊',
    title: 'How do I handle arguments with my close best friends?',
    options: [
      { label: 'Logical Discussion & Fast Hug', desc: 'Resolves within 10 mins 🤝', icon: '🤝' },
      { label: 'Stubborn Defense Then Forgets', desc: 'Fights hard then acts normal 😅', icon: '😅' },
      { label: 'Sends A Funny Meme To Break Ice', desc: 'Humor ice breaker 📲', icon: '📲' },
      { label: 'Silent Mode Until Friend Reaches Out', desc: 'Waits for apology 🤫', icon: '🤫' }
    ]
  },

  // 41-50: Travel, Weather & Preferences
  {
    id: 41,
    category: 'Beach vs Mountains 🏔️',
    title: 'If forced to choose one place to live forever, where would I go?',
    options: [
      { label: 'Sunny Palm Beach & Waves', desc: 'Tropical ocean breeze 🌊', icon: '🌊' },
      { label: 'Misty Green Mountains & Tea Hills', desc: 'Cold mountain air ⛰️', icon: '⛰️' },
      { label: 'Bustling Modern City Center', desc: 'Skyscrapers & neon lights 🏙️', icon: '🏙️' },
      { label: 'Quiet Countryside Village House', desc: 'Peaceful nature 🏡', icon: '🏡' }
    ]
  },
  {
    id: 42,
    category: 'Tea vs Coffee ☕',
    title: 'Which hot beverage runs through my veins every single day?',
    options: [
      { label: 'Strong Piping Hot Chai 🫖', desc: 'Die-hard tea lover 🫖', icon: '🫖' },
      { label: 'Rich South Filter Coffee ☕', desc: 'Coffee addict ☕', icon: '☕' },
      { label: 'Green Tea / Herbal Tea 🍃', desc: 'Health conscious 🍃', icon: '🍃' },
      { label: 'Hot Chocolate / Cocoa 🍫', desc: 'Sweet chocolate lover 🍫', icon: '🍫' }
    ]
  },
  {
    id: 43,
    category: 'Comfort Movie 🍿',
    title: 'Which film do I rewatch whenever I feel down or sad?',
    options: [
      { label: 'Classic Childhood Comedy', desc: 'Nostalgic laugh riots 🤣', icon: '🤣' },
      { label: 'Heartwarming Feel-Good Drama', desc: 'Emotional comfort film 🎬', icon: '🎬' },
      { label: 'Mind-Bending Action Thriller', desc: 'Adrenaline movie 💥', icon: '💥' },
      { label: 'Animated Disney / Pixar Classic', desc: 'Magical animation ✨', icon: '✨' }
    ]
  },
  {
    id: 44,
    category: 'Street Food Order 🍢',
    title: 'What is my top street food stall order when hanging out?',
    options: [
      { label: 'Crispy Pani Puri / Chat', desc: 'Tangy spicy chat 😋', icon: '😋' },
      { label: 'Hot Shawarma / Roll', desc: 'Loaded chicken roll 🌯', icon: '🌯' },
      { label: 'Kothu Porotta / Fried Rice', desc: 'Sizzling hot street food 🍳', icon: '🍳' },
      { label: 'Sweet Crepe / Churros / Ice Cream', desc: 'Street desserts 🍦', icon: '🍦' }
    ]
  },
  {
    id: 45,
    category: 'Phone Screen Look 📱',
    title: 'What does my phone lock screen wallpaper usually look like?',
    options: [
      { label: 'Aesthetic Nature / Sunset Photo', desc: 'Scenic wallpaper 🌅', icon: '🌅' },
      { label: 'Cute Photo Of Pet / Favorite Celebrity', desc: 'Favorite idol/pet 🐱', icon: '🐱' },
      { label: 'Default Factory Wallpaper', desc: 'Never changes wallpaper ⚙️', icon: '⚙️' },
      { label: 'Funny Meme / Anime Character', desc: 'Cool anime or meme 🎨', icon: '🎨' }
    ]
  },
  {
    id: 46,
    category: 'Morning Alarms ⏰',
    title: 'How many alarms do I set to wake up in the morning?',
    options: [
      { label: '1 Single Alarm (Wakes Up Instantly)', desc: 'Instant morning wake ⚡', icon: '⚡' },
      { label: '5 Alarms Placed 5 Minutes Apart', desc: 'Snooze addict ⏰', icon: '⏰' },
      { label: '10 Alarms + Loud Ringtone', desc: 'Heavy sleeper alert 😴', icon: '😴' },
      { label: 'No Alarm (Relies On Family Calling)', desc: 'Human alarm clock 🗣️', icon: '🗣️' }
    ]
  },
  {
    id: 47,
    category: 'Traffic Driver 🛵',
    title: 'How do I behave when driving a vehicle in heavy traffic?',
    options: [
      { label: 'Calm & Patient Driver', desc: 'Listens to music peacefully 🎧', icon: '🎧' },
      { label: 'Horns At Everyone In Frustration', desc: 'Impatient horn blarer 🎺', icon: '🎺' },
      { label: 'Finds Secret Shortcuts & Gaps', desc: 'Traffic navigator 🗺️', icon: '🗺️' },
      { label: 'Constantly Complains About Traffic', desc: 'Vents about roads 🗣️', icon: '🗣️' }
    ]
  },
  {
    id: 48,
    category: 'Wish Superpower 🦸',
    title: 'If I could gain one superpower today, what would I pick?',
    options: [
      { label: 'Teleportation Anywhere Instantly', desc: 'Free instant travel 🌌', icon: '🌌' },
      { label: 'Mind Reading / Telepathy', desc: 'Knows what people think 🧠', icon: '🧠' },
      { label: 'Time Travel To Past & Future', desc: 'Rewinds mistakes ⏳', icon: '⏳' },
      { label: 'Invisibility On Demand', desc: 'Sneaks around unseen 👻', icon: '👻' }
    ]
  },
  {
    id: 49,
    category: 'Favorite Season ❄️',
    title: 'Which weather condition makes me feel happiest?',
    options: [
      { label: 'Cozy Chilly Winter Frost', desc: 'Cold sweater weather ❄️', icon: '❄️' },
      { label: 'Monsoon Heavy Rainy Days', desc: 'Rain & thunderstorm 🌧️', icon: '🌧️' },
      { label: 'Bright Sunny Spring Days', desc: 'Pleasant warm sun ☀️', icon: '☀️' },
      { label: 'Autumn Breeze & Cool Evening', desc: 'Breezy sunset weather 🍂', icon: '🍂' }
    ]
  },
  {
    id: 50,
    category: 'Stranger Requests 👥',
    title: 'How do I handle friend/follow requests from random strangers?',
    options: [
      { label: 'Instant Reject / Block', desc: 'Strict privacy settings 🔒', icon: '🔒' },
      { label: 'Inspects Profile For 10 Mins First', desc: 'Investigates profile 🕵️', icon: '🕵️' },
      { label: 'Accepts Everyone (More Followers)', desc: 'Friendly social butterfly 🦋', icon: '🦋' },
      { label: 'Leaves Pending Forever', desc: 'Ignores requests completely ⏳', icon: '⏳' }
    ]
  },

  // 51-60: Social Quirks, Memory & Money
  {
    id: 51,
    category: 'Memory Power 🧠',
    title: 'How good is my memory for friends’ birthdays and dates?',
    options: [
      { label: 'Remembers Every Date Effortlessly', desc: 'Human calendar 📅', icon: '📅' },
      { label: 'Needs Calendar Notification Reminders', desc: 'Relies on app alerts 📱', icon: '📱' },
      { label: 'Forgets Until Seeing Insta Stories', desc: 'Last minute wish 🎂', icon: '🎂' },
      { label: 'Wishes 1 Day Late Always', desc: 'Belated birthday specialist 😅', icon: '😅' }
    ]
  },
  {
    id: 52,
    category: 'Bargaining Master 🏷️',
    title: 'How good am I at bargaining with local shopkeepers?',
    options: [
      { label: 'Gets 50% Off Price Expertly', desc: 'Master haggler 🏷️', icon: '🏷️' },
      { label: 'Tries To Bargain But Gives Up Fast', desc: 'Shy negotiator 🙈', icon: '🙈' },
      { label: 'Never Bargains (Pays Full Price)', desc: 'Too embarrassed to ask 💸', icon: '💸' },
      { label: 'Brings Friend To Bargain For Me', desc: 'Delegates bargaining 🗣️', icon: '🗣️' }
    ]
  },
  {
    id: 53,
    category: 'Group Photo Pose 🤳',
    title: 'What is my default pose when taking a group photo?',
    options: [
      { label: 'Peace Sign ✌️ / Big Smile', desc: 'Classic friendly pose ✌️', icon: '✌️' },
      { label: 'Funny Wacky Face / Tongue Out', desc: 'Gofy photo bomber 🤪', icon: '🤪' },
      { label: 'Cool Serious Model Pose', desc: 'Pouty stylish pose 😎', icon: '😎' },
      { label: 'Hides Behind Friends (Half Face)', desc: 'Camera shy 🙈', icon: '🙈' }
    ]
  },
  {
    id: 54,
    category: 'Voice Memos 🎙️',
    title: 'How long are the voice notes I send to my close friends?',
    options: [
      { label: 'Short 5-Second Quick Audios', desc: 'Quick voice snips ⚡', icon: '⚡' },
      { label: '2-Minute Full Story Podcasts', desc: 'Podcasting bestie 🎙️', icon: '🎙️' },
      { label: 'Sends 10 Mins Of Continuous Audio', desc: 'Radio show host 📻', icon: '📻' },
      { label: 'Never Sends Voice Notes (Text Only)', desc: 'Hates voice recordings 💬', icon: '💬' }
    ]
  },
  {
    id: 55,
    category: 'Group Chat Drama 🍿',
    title: 'How do I react when drama breaks out in our group chat?',
    options: [
      { label: 'Eats Popcorn & Reads Messages Privately', desc: 'Silent drama spectator 🍿', icon: '🍿' },
      { label: 'Tries To Mediate & Calm Everyone Down', desc: 'Peacemaker of group 🕊️', icon: '🕊️' },
      { label: 'Pours Fuel On Fire With Memes', desc: 'Chaos agent 💥', icon: '💥' },
      { label: 'Mutes Group Chat For 8 Hours', desc: 'Avoids drama completely 🔕', icon: '🔕' }
    ]
  },
  {
    id: 56,
    category: 'Funny Nickname 🤫',
    title: 'What kind of nicknames do my closest friends call me?',
    options: [
      { label: 'Cute Shortened Version Of My Name', desc: 'Sweet nickname 🥰', icon: '🥰' },
      { label: 'Hilarious Embarrassing Inside Joke Name', desc: 'Funny roast name 🤣', icon: '🤣' },
      { label: 'Boss / Legend / Bro', desc: 'Respect nickname 👑', icon: '👑' },
      { label: 'Calls Me By My Full Formal Name', desc: 'No nickname 🏷️', icon: '🏷️' }
    ]
  },
  {
    id: 57,
    category: 'Impulse Buy 💰',
    title: 'What was the most impulse purchase I ever made?',
    options: [
      { label: 'Expensive Branded Shoes / Clothes', desc: 'Fashion spree 👟', icon: '👟' },
      { label: 'Tech Gadget I Used For 2 Days', desc: 'Unused tech gadget 🎧', icon: '🎧' },
      { label: 'Concert / Event Tickets On Short Notice', desc: 'Spontaneous event 🎟️', icon: '🎟️' },
      { label: 'Ordering Food Feast For 5 People Alone', desc: 'Giant food haul 🍕', icon: '🍕' }
    ]
  },
  {
    id: 58,
    category: 'Room Cleanliness 🧹',
    title: 'How clean and organized is my bedroom on a weekday?',
    options: [
      { label: 'Spotless Hotel Room Clean', desc: 'Neat freak 🧹', icon: '🧹' },
      { label: 'Organized Chaos (Looks Messy But I Know)', desc: 'Creative mess 📁', icon: '📁' },
      { label: 'The Chair Has A Clothes Mountain', desc: 'Laundry chair victim 👕', icon: '👕' },
      { label: 'Cleans Room Only When Guests Visit', desc: 'Emergency cleaner 🧼', icon: '🧼' }
    ]
  },
  {
    id: 59,
    category: 'Crush Presence 💖',
    title: 'How do I act when my crush walks into the room?',
    options: [
      { label: 'Super Calm & Tries To Be Cool', desc: 'Smooth operator 😎', icon: '😎' },
      { label: 'Blushes Red & Gets Awkward Clumsy', desc: 'Shy butterfly 😳', icon: '😳' },
      { label: 'Talks Extra Loud To Get Attention', desc: 'Loud entertainer 🗣️', icon: '🗣️' },
      { label: 'Avoids Eye Contact & Looks At Phone', desc: 'Stealth mode 📱', icon: '📱' }
    ]
  },
  {
    id: 60,
    category: 'Midnight Swiggy 🍕',
    title: 'What food item do I order on delivery apps at 1 AM?',
    options: [
      { label: 'Cheesy Pizza & Garlic Bread', desc: 'Late night pizza 🍕', icon: '🍕' },
      { label: 'Juicy Burger & Loaded Fries', desc: 'Burger feast 🍔', icon: '🍔' },
      { label: 'Ice Cream Tub / Waffles', desc: 'Midnight sweets 🍦', icon: '🍦' },
      { label: 'Spicy Shawarma / Noodles', desc: 'Late night savory 🌯', icon: '🌯' }
    ]
  },

  // 61-70: Drinks, Vibes & Routines
  {
    id: 61,
    category: 'Restaurant Drink 🥤',
    title: 'What cold beverage do I order at a restaurant?',
    options: [
      { label: 'Fizzy Soda / Cola', desc: 'Bubbly soda 🥤', icon: '🥤' },
      { label: 'Fresh Lemon Mint Juice', desc: 'Refreshing juice 🍋', icon: '🍋' },
      { label: 'Thick Chocolate Milkshake', desc: 'Loaded milkshake 🍫', icon: '🍫' },
      { label: 'Plain Water (Saves Money)', desc: 'Water drinker 💧', icon: '💧' }
    ]
  },
  {
    id: 62,
    category: 'Sticker Pack 🎨',
    title: 'What WhatsApp sticker pack do I spam most often?',
    options: [
      { label: 'Funny Sarcastic Cat/Dog Memes', desc: 'Pet memes 🐱', icon: '🐱' },
      { label: 'Dramatic Movie Dialogue Stickers', desc: 'Cinema quotes 🎬', icon: '🎬' },
      { label: 'Cute Animated Expressions', desc: 'Cute stickers 🥰', icon: '🥰' },
      { label: 'Roast & Facepalm Stickers', desc: 'Sarcastic roasts 🤦', icon: '🤦' }
    ]
  },
  {
    id: 63,
    category: 'Festival Vibe 🎆',
    title: 'What is my favorite festival of the year to celebrate?',
    options: [
      { label: 'Onam / Ugadi / Harvest Feast', desc: 'Traditional grand feast 🌴', icon: '🌴' },
      { label: 'Diwali / Deepavali Lights & Sweets', desc: 'Festival of lights 🪔', icon: '🪔' },
      { label: 'New Year Eve Party Midnight', desc: 'Year end celebration 🎉', icon: '🎉' },
      { label: 'Eid / Christmas Grand Celebrations', desc: 'Festive treats 🎄', icon: '🎄' }
    ]
  },
  {
    id: 64,
    category: 'Haunted House 👻',
    title: 'How would I react inside a scary haunted house walk?',
    options: [
      { label: 'Screams Loudly & Uses Friend As Shield', desc: 'Human shield user 😱', icon: '😱' },
      { label: 'Walks In Front Laughing At Actors', desc: 'Brave fearlessness 🤣', icon: '🤣' },
      { label: 'Closes Eyes & Holds Hands Tight', desc: 'Terrified traveler 🙈', icon: '🙈' },
      { label: 'Refuses To Enter In The First Place', desc: 'Smartly waits outside 🚪', icon: '🚪' }
    ]
  },
  {
    id: 65,
    category: 'College/Work Reputation 🏫',
    title: 'What am I famous for at college or in my workplace?',
    options: [
      { label: 'The Funny Class Clown / Entertainer', desc: 'Makes everyone laugh 🤣', icon: '🤣' },
      { label: 'The Helpful Problem Solver', desc: 'Helps everyone out 💡', icon: '💡' },
      { label: 'The Quiet Hardworking Genius', desc: 'Gets stuff done silently 📚', icon: '📚' },
      { label: 'The Always Late Snack Lover', desc: 'Brings snacks everywhere 🍿', icon: '🍿' }
    ]
  },
  {
    id: 66,
    category: 'First Impression 🤝',
    title: 'What impression do people usually get when first meeting me?',
    options: [
      { label: 'Shy & Quiet (Until I Get Comfortable)', desc: 'Introvert first 🤫', icon: '🤫' },
      { label: 'Super Friendly & Talkative Loudly', desc: 'Extrovert energy ⚡', icon: '⚡' },
      { label: 'Cool & Intimidating Stylish', desc: 'Mysterious vibe 😎', icon: '😎' },
      { label: 'Sweet & Polite Warm Personality', desc: 'Warm soul ✨', icon: '✨' }
    ]
  },
  {
    id: 67,
    category: 'Snooze Addict 😴',
    title: 'How many times do I hit snooze before actually getting up?',
    options: [
      { label: 'Zero (Gets Up On First Ring)', desc: 'Disciplined riser ⚡', icon: '⚡' },
      { label: '2-3 Times (15 Extra Mins)', desc: 'Standard snoozer ⏰', icon: '⏰' },
      { label: 'Snoozes For 1 Whole Hour', desc: 'Master snoozer 🛌', icon: '🛌' },
      { label: 'Turns Off Alarm & Falls Asleep', desc: 'Accidental sleep-in 😴', icon: '😴' }
    ]
  },
  {
    id: 68,
    category: 'Blanket Rule 🛌',
    title: 'Can I sleep at night without a blanket even in hot summer?',
    options: [
      { label: 'Impossible! Blanket Required 365 Days', desc: 'Needs cozy blanket 🛌', icon: '🛌' },
      { label: 'Only Needs One Leg Under Blanket', desc: 'Temperature regulator 🦶', icon: '🦶' },
      { label: 'No Blanket Needed In Summer', desc: 'Loves cool breeze 💨', icon: '💨' },
      { label: 'Needs AC On Full + Thick Blanket', desc: 'AC arctic sleep ❄️', icon: '❄️' }
    ]
  },
  {
    id: 69,
    category: 'Wardrobe Color 🎨',
    title: 'What color dominates my clothing wardrobe?',
    options: [
      { label: 'Black & Dark Earthy Tones', desc: 'Classy dark fit 🖤', icon: '🖤' },
      { label: 'White & Pastel Soft Colors', desc: 'Clean pastel aesthetic 🤍', icon: '🤍' },
      { label: 'Bright Colorful Vibes', desc: 'Vibrant colors 🌈', icon: '🌈' },
      { label: 'Denim Blue & Casual Sweats', desc: 'Casual comfy fit 👖', icon: '👖' }
    ]
  },
  {
    id: 70,
    category: 'Chai Stall Spot ☕',
    title: 'Where do I prefer hanging out with my closest group?',
    options: [
      { label: 'Local Street Tea Stall / Tapri', desc: 'Chai & roadside vibes ☕', icon: '☕' },
      { label: 'Aesthetic Indoor Cafe With AC', desc: 'Cozy cafe vibes 🥐', icon: '🥐' },
      { label: 'Living Room At Someone’s House', desc: 'Home lounge hangouts 🛋️', icon: '🛋️' },
      { label: 'Park / Beach Open Air Sunset', desc: 'Outdoor nature spots 🌅', icon: '🌅' }
    ]
  },

  // 71-80: Secrets, Peeves & Photos
  {
    id: 71,
    category: 'Selfie Count 🤳',
    title: 'How many selfies do I take before picking one to post?',
    options: [
      { label: '1 Photo (First Try Is Good)', desc: 'Confident one-shot 📸', icon: '📸' },
      { label: '5 to 10 Shots (Different Angles)', desc: 'Standard photo taker 🤳', icon: '🤳' },
      { label: '50+ Photos (Deletes Almost All)', desc: 'Perfectionist selfie taker 💅', icon: '💅' },
      { label: 'I Never Take Selfies Myself', desc: 'Prefers candid photos 🙈', icon: '🙈' }
    ]
  },
  {
    id: 72,
    category: 'Fast Food Weakness 🍔',
    title: 'What fast food item is my ultimate weakness?',
    options: [
      { label: 'Loaded Double Cheese Burger', desc: 'Juicy burger 🍔', icon: '🍔' },
      { label: 'Crispy Extra Fried Chicken', desc: 'Crunchy chicken 🍗', icon: '🍗' },
      { label: 'Hot Cheesy Garlic Pizza', desc: 'Cheesy pizza 🍕', icon: '🍕' },
      { label: 'French Fries With Cheese Dip', desc: 'Fries lover 🍟', icon: '🍟' }
    ]
  },
  {
    id: 73,
    category: 'Pet Peeve No. 1 😤',
    title: 'What small thing instantly ruins my good mood?',
    options: [
      { label: 'People Cancelling Plans Last Minute', desc: 'Flaky plan cancellers 😡', icon: '😡' },
      { label: 'Slow Unstable Internet Wi-Fi', desc: 'Laggy internet 📶', icon: '📶' },
      { label: 'Someone Eating My Saved Food', desc: 'Stealing my snacks 🍕', icon: '🍕' },
      { label: 'Interrupted While Listening To Music', desc: 'Music interruptions 🎧', icon: '🎧' }
    ]
  },
  {
    id: 74,
    category: 'Binge Watch Speed 📺',
    title: 'How fast can I finish a 10-episode TV series?',
    options: [
      { label: 'In 1 Single Sitting (Overnight)', desc: 'Binge marathon champion 🍿', icon: '🍿' },
      { label: 'In 2-3 Days Weekend Stretch', desc: 'Quick series watcher 📺', icon: '📺' },
      { label: 'Takes 1 Month (1 Episode Per Week)', desc: 'Slow steady watcher ⏳', icon: '⏳' },
      { label: 'Starts 5 Series, Finishes None', desc: 'Series abandoner 🙈', icon: '🙈' }
    ]
  },
  {
    id: 75,
    category: 'Dance Floor Vibe 💃',
    title: 'What happens when music starts playing at a celebration?',
    options: [
      { label: 'First Person On The Dance Floor', desc: 'Dance floor starter 🕺', icon: '🕺' },
      { label: 'Dances Only When Pulled By Friends', desc: 'Needs encouragement 💃', icon: '💃' },
      { label: 'Cheers & Claps From Side Table', desc: 'Hype person on sidelines 👏', icon: '👏' },
      { label: 'Records Videos Of Everyone Else', desc: 'Group cameraman 📹', icon: '📹' }
    ]
  },
  {
    id: 76,
    category: 'Password Security 🔑',
    title: 'How do I handle passwords for my accounts?',
    options: [
      { label: 'Same Password For Everything', desc: 'Master password user 🔑', icon: '🔑' },
      { label: 'Super Complex Password Manager', desc: 'Cyber security pro 🛡️', icon: '🛡️' },
      { label: 'Resets Password Every Single Time', desc: 'Forgot password button master 😅', icon: '😅' },
      { label: 'Writes Passwords In Phone Notes', desc: 'Notes app saver 📝', icon: '📝' }
    ]
  },
  {
    id: 77,
    category: 'Phone Screen Wallpaper 📲',
    title: 'What kind of wallpaper is set on my phone background?',
    options: [
      { label: 'Minimalist Dark Aesthetic', desc: 'Clean dark mode 🖤', icon: '🖤' },
      { label: 'Photo With My Friends/Family', desc: 'Loved ones photo 📸', icon: '📸' },
      { label: 'Anime / Superhero / Gaming Art', desc: 'Fan artwork 🎨', icon: '🎨' },
      { label: 'Default Phone System Image', desc: 'Stock wallpaper ⚙️', icon: '⚙️' }
    ]
  },
  {
    id: 78,
    category: 'Weekend Breakfast 🍳',
    title: 'What is my ideal hearty weekend breakfast?',
    options: [
      { label: 'Crispy Masala Dosa & Chutney', desc: 'South breakfast feast 🥞', icon: '🥞' },
      { label: 'Piping Hot Poori / Chole Bhature', desc: 'Fluffy poori feast 🍛', icon: '🍛' },
      { label: 'Fluffy Pancakes & Omelette', desc: 'Western cafe breakfast 🍳', icon: '🍳' },
      { label: 'Skipping Breakfast For Sleep', desc: 'Sleeps through breakfast 😴', icon: '😴' }
    ]
  },
  {
    id: 79,
    category: 'Reels Spamming 📲',
    title: 'How many funny reels do I send you in a single day?',
    options: [
      { label: '0-1 Reels (Rarely Sends)', desc: 'Occasional sender 📱', icon: '📱' },
      { label: '3-5 Top Tier Curated Memes', desc: 'Quality over quantity 📲', icon: '📲' },
      { label: '15+ Memes In A Batch Flood', desc: 'Meme spammer supreme 😂', icon: '😂' },
      { label: 'Only Tags You In Comment Section', desc: 'Comment section tagger 💬', icon: '💬' }
    ]
  },
  {
    id: 80,
    category: 'Packing Style 🧳',
    title: 'How do I pack my bag before a trip?',
    options: [
      { label: 'Neat Folded Days In Advance', desc: 'Planner packer 🧳', icon: '🧳' },
      { label: 'Packs 2 Hours Before Leaving', desc: 'Last minute rush ⏰', icon: '⏰' },
      { label: 'Overpacks 10 Outfits For 2 Days', desc: 'Just in case packer 👗', icon: '👗' },
      { label: 'Forgets Toothbrush & Charger Always', desc: 'Essentials forgetter 🪥', icon: '🪥' }
    ]
  },

  // 81-90: Daily Quirks & Personality
  {
    id: 81,
    category: 'Daily Complaint 🤫',
    title: 'What is something I complain about almost every day?',
    options: [
      { label: 'Being Constantly Tired / Sleepy', desc: 'Always needs sleep 😴', icon: '😴' },
      { label: 'The Hot / Humid Weather Outside', desc: 'Weather complaints ☀️', icon: '☀️' },
      { label: 'Having No Money Left In Bank', desc: 'Broke wallet complaints 💸', icon: '💸' },
      { label: 'Not Knowing What Food To Eat', desc: 'Food indecision 🍕', icon: '🍕' }
    ]
  },
  {
    id: 82,
    category: 'Star Crush 🌟',
    title: 'Which movie star or celebrity do I secretly admire most?',
    options: [
      { label: 'Mass South Indian Cinema Star', desc: 'South mass icon 🎬', icon: '🎬' },
      { label: 'Hollywood Action / Marvel Hero', desc: 'Blockbuster star 🦸', icon: '🦸' },
      { label: 'K-Pop Star / Korean Drama Lead', desc: 'K-drama heartthrob 💖', icon: '💖' },
      { label: 'Sports Champion / Footballer', desc: 'Sports icon ⚽', icon: '⚽' }
    ]
  },
  {
    id: 83,
    category: 'Screen Time King ⌛',
    title: 'Which app consumes the highest screen time on my phone?',
    options: [
      { label: 'Instagram / TikTok Short Videos', desc: 'Short video scroller 📱', icon: '📱' },
      { label: 'YouTube Long Videos', desc: 'Video streamer 📹', icon: '📹' },
      { label: 'WhatsApp / Messaging Chats', desc: 'Chatterbox 💬', icon: '💬' },
      { label: 'Mobile Games / Gaming Apps', desc: 'Mobile gamer 🎮', icon: '🎮' }
    ]
  },
  {
    id: 84,
    category: 'Rainy Snack Craving 🌧️',
    title: 'What hot snack do I crave when rain starts pouring?',
    options: [
      { label: 'Hot Onion Pakoda / Bhajji', desc: 'Crispy fried pakoda 🧅', icon: '🧅' },
      { label: 'Steaming Hot Masala Maggi', desc: 'Spicy rain maggi 🍜', icon: '🍜' },
      { label: 'Sizzling Hot Momos', desc: 'Steamed spicy momos 🥟', icon: '🥟' },
      { label: 'Roasted Corn On The Cob', desc: 'Street roasted corn 🌽', icon: '🌽' }
    ]
  },
  {
    id: 85,
    category: 'Group Role 👑',
    title: 'What role do I play in our friend circle?',
    options: [
      { label: 'The Plan Maker & Organizer', desc: 'Gets people together 📅', icon: '📅' },
      { label: 'The Comedian & Hype Machine', desc: 'Brings energy & laughs 🤣', icon: '🤣' },
      { label: 'The Wise Listener & Advisor', desc: 'Gives great advice 💡', icon: '💡' },
      { label: 'The Chill Tag-Along Buddy', desc: 'Goes with the flow 🌊', icon: '🌊' }
    ]
  },
  {
    id: 86,
    category: 'Forgiveness Style 🤝',
    title: 'How easily do I forgive someone after an honest apology?',
    options: [
      { label: 'Forgives Instantly (Hates Grudges)', desc: 'Zero grudge holder 💖', icon: '💖' },
      { label: 'Forgives After A Treat / Food', desc: 'Bribable with food 🍕', icon: '🍕' },
      { label: 'Needs A Few Hours To Cool Down', desc: 'Cooling off time needed ⏳', icon: '⏳' },
      { label: 'Forgives But Remembers For Life', desc: 'Elephant memory 🧠', icon: '🧠' }
    ]
  },
  {
    id: 87,
    category: 'Phone Ringer Mode 🔔',
    title: 'What mode is my phone ringer set to right now?',
    options: [
      { label: 'Always On Silent (Misses 90% Calls)', desc: 'Silent mode master 🔕', icon: '🔕' },
      { label: 'Vibrate Mode Only', desc: 'Vibration alerts 📳', icon: '📳' },
      { label: 'Loud Song Ringtone On High', desc: 'Loud ringer 🔔', icon: '🔔' },
      { label: 'Do Not Disturb Enabled', desc: 'Focus mode 🚫', icon: '🚫' }
    ]
  },
  {
    id: 88,
    category: 'Bucket List Dream ✈️',
    title: 'What top item is on my life bucket list?',
    options: [
      { label: 'World Backpacking Euro/Asia Trip', desc: 'Global traveler ✈️', icon: '✈️' },
      { label: 'Skydiving / Scuba Diving Thrill', desc: 'Extreme adventure 🪂', icon: '🪂' },
      { label: 'Owning A Luxury Dream Car/House', desc: 'Dream home & ride 🏎️', icon: '🏎️' },
      { label: 'Starting My Own Successful Business', desc: 'Entrepreneur dream 💼', icon: '💼' }
    ]
  },
  {
    id: 89,
    category: 'Shopping Advice 🛍️',
    title: 'Who do I take along when I need honest outfit shopping advice?',
    options: [
      { label: 'My Best Friend Who Roasts Bad Fits', desc: 'Honest friend advice 👕', icon: '👕' },
      { label: 'I Shop Alone (Trust My Own Style)', desc: 'Solo shopper 🛍️', icon: '🛍️' },
      { label: 'Sends Photos To Group Chat First', desc: 'Group chat voting 📱', icon: '📱' },
      { label: 'Takes My Family / Sibling', desc: 'Family shopping trip 👪', icon: '👪' }
    ]
  },
  {
    id: 90,
    category: 'Late Night Call 📞',
    title: 'Who am I most likely to call at 1:00 AM when I need advice?',
    options: [
      { label: 'My Best Friend (Who Is Always Awake)', desc: 'Night owl bestie 📞', icon: '📞' },
      { label: 'Nobody (I Figure It Out Myself)', desc: 'Independent solver 🧠', icon: '🧠' },
      { label: 'My Sibling / Family Member', desc: 'Family confidant 🏡', icon: '🏡' },
      { label: 'Posts An Anonymous Question Online', desc: 'Internet advice 🌐', icon: '🌐' }
    ]
  },

  // 91-100: Deep Friendship & Bond
  {
    id: 91,
    category: 'Loyalty Test 💖',
    title: 'What would I do if someone spoke ill of you behind your back?',
    options: [
      { label: 'Defends You Instantly & Shuts Them Down', desc: 'Protective bestie 🛡️', icon: '🛡️' },
      { label: 'Tells You Immediately With Full Details', desc: 'Reports the tea ☕', icon: '☕' },
      { label: 'Confronts Them Loudly In Person', desc: 'Direct fighter 🥊', icon: '🥊' },
      { label: 'Cuts Off That Person Quietly', desc: 'Silent defender 🤫', icon: '🤫' }
    ]
  },
  {
    id: 92,
    category: 'Cheering You Up 🎉',
    title: 'How do I try to cheer you up when you feel sad or down?',
    options: [
      { label: 'Buys You Food / Chai Instantly', desc: 'Food therapy 🍕', icon: '🍕' },
      { label: 'Listens To You Vent For Hours', desc: 'Patient listener 👂', icon: '👂' },
      { label: 'Makes Stupid Jokes Till You Smile', desc: 'Comedy healer 🤣', icon: '🤣' },
      { label: 'Takes You Out On A Surprise Drive', desc: 'Outing trip 🚗', icon: '🚗' }
    ]
  },
  {
    id: 93,
    category: 'Shared Secrets 🤫',
    title: 'How safe are your deep personal secrets with me?',
    options: [
      { label: 'Vault Safe (Will Take To The Grave)', desc: '100% secret keeper 🔒', icon: '🔒' },
      { label: 'Safe (Unless You Annoy Me Laughs)', desc: 'Playful secret keeper 😈', icon: '😈' },
      { label: 'Only Shares With My Sibling', desc: 'Inner circle share 🤐', icon: '🤐' },
      { label: 'Forgets The Secret 5 Mins Later', desc: 'Amnesia bestie 🧠', icon: '🧠' }
    ]
  },
  {
    id: 94,
    category: 'Spontaneous Plans 🚗',
    title: 'How do I react when you call me for an instant 5-minute trip?',
    options: [
      { label: '"GIVE ME 2 MINS! I’M READY!"', desc: 'Always down for adventure ⚡', icon: '⚡' },
      { label: '"WHERE ARE WE GOING? WHO IS COMING?"', desc: 'Needs details first 🤔', icon: '🤔' },
      { label: '"I’M IN BED... CAN WE DO TOMORROW?"', desc: 'Too lazy to leave bed 🛌', icon: '🛌' },
      { label: '"ONLY IF THERE IS FOOD INVOLVED!"', desc: 'Food motivated traveler 🍕', icon: '🍕' }
    ]
  },
  {
    id: 95,
    category: 'Treating Food 🍕',
    title: 'When am I most likely to treat you to a meal?',
    options: [
      { label: 'When I Get My Salary / Allowance', desc: 'Payday feast 💰', icon: '💰' },
      { label: 'On My Birthday / Special Occasion', desc: 'Celebration treats 🎉', icon: '🎉' },
      { label: 'Whenever You Cheer Me Up', desc: 'Thank you treat 💖', icon: '💖' },
      { label: 'Randomly For No Reason At All', desc: 'Generous friend 🍔', icon: '🍔' }
    ]
  },
  {
    id: 96,
    category: 'Honest Advice 💬',
    title: 'How honest am I when giving you advice about your decisions?',
    options: [
      { label: '100% Brutally Honest (Zero Filters)', desc: 'Tells raw truth 🎯', icon: '🎯' },
      { label: 'Gentle & Kind (Protects Feelings)', desc: 'Soft & polite 💖', icon: '💖' },
      { label: 'Sarcastic Jokes First, Real Advice Second', desc: 'Funny truth 🤣', icon: '🤣' },
      { label: 'Agrees With Whatever You Say', desc: 'Hype person 👏', icon: '👏' }
    ]
  },
  {
    id: 97,
    category: 'Best Memories 📸',
    title: 'What type of memories with you do I treasure most?',
    options: [
      { label: 'Late Night Deep Chats & Laughs', desc: 'Night conversations 🌙', icon: '🌙' },
      { label: 'Crazy Unplanned Trips & Adventures', desc: 'Road trips 🚗', icon: '🚗' },
      { label: 'Eating Street Food & Chai Together', desc: 'Chai sessions ☕', icon: '☕' },
      { label: 'Silly Group Chat Roasts & Memes', desc: 'Group chat laughs 📱', icon: '📱' }
    ]
  },
  {
    id: 98,
    category: 'Apology Style 🙏',
    title: 'How do I say sorry when I realize I made a mistake?',
    options: [
      { label: 'Heartfelt Genuine Sincere Apology', desc: 'Apologizes from heart ❤️', icon: '❤️' },
      { label: 'Buys Your Favorite Chocolate / Food', desc: 'Food apology 🍫', icon: '🍫' },
      { label: 'Acts Extra Nice Next Day', desc: 'Sweet recovery 😇', icon: '😇' },
      { label: 'Sends A Cute Sorry Meme', desc: 'Meme apology 📲', icon: '📲' }
    ]
  },
  {
    id: 99,
    category: 'Friendship Rule 🤝',
    title: 'What is the unwritten rule of our friendship?',
    options: [
      { label: 'What Happens Between Us Stays Between Us', desc: 'Total trust pact 🔒', icon: '🔒' },
      { label: 'No Formal Thank Yous Or Sorries', desc: 'Super casual bond 💖', icon: '💖' },
      { label: 'Always Share Food & Fries', desc: 'Snack sharing rule 🍟', icon: '🍟' },
      { label: 'Never Ever Block Each Other', desc: 'Unbreakable connection 🚫', icon: '🚫' }
    ]
  },
  {
    id: 100,
    category: 'Forever Bond 💖',
    title: 'What is the ultimate reason we will be friends forever?',
    options: [
      { label: 'Unmatched Wavelength & Pure Loyalty', desc: 'Soulmate friendship ✨', icon: '✨' },
      { label: 'We Know Too Many Secrets About Each Other', desc: 'Mutual secret vault 🤫', icon: '🤫' },
      { label: 'We Laugh At The Same Stupid Things', desc: 'Same humor wavelength 🤣', icon: '🤣' },
      { label: 'We Always Have Each Other’s Backs', desc: 'Life long support 🤝', icon: '🤝' }
    ]
  }
];

// Helper to select 10 strictly unique questions without repetitions across quizzes
export function getNext10UniqueQuestions(excludeIds = []) {
  let usedIds = [];
  try {
    const stored = localStorage.getItem('dont_block_me_used_q_ids');
    if (stored) usedIds = JSON.parse(stored);
  } catch (e) {
    usedIds = [];
  }

  // Combine already used IDs with any excluded IDs
  const allUsed = new Set([...usedIds, ...excludeIds]);

  // Available questions not yet served in this 100-question cycle
  let available = ALL_QUESTIONS.filter(q => !allUsed.has(q.id));

  // If fewer than 10 remain unused, reset the cycle!
  if (available.length < 10) {
    usedIds = [];
    try {
      localStorage.removeItem('dont_block_me_used_q_ids');
    } catch (e) {
      console.error(e);
    }
    available = ALL_QUESTIONS.filter(q => !excludeIds.includes(q.id));
  }

  // Pick 10 random questions from available pool
  const shuffled = [...available].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  // Update used IDs in localStorage
  const updatedUsed = [...usedIds, ...selected.map(q => q.id)];
  try {
    localStorage.setItem('dont_block_me_used_q_ids', JSON.stringify(updatedUsed));
  } catch (e) {
    console.error(e);
  }

  return selected;
}

// Legacy export compatibility
export const getRandom10Questions = getNext10UniqueQuestions;
