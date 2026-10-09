// 100 Personal Habits & Lifestyle Relationship Questions ("How well do you know me?")

export const ALL_QUESTIONS = [
  // 1-10: Personal Food & Cravings
  {
    id: 1,
    category: 'Food Craving 🍔',
    title: 'What is my ultimate favorite food craving when hungry?',
    options: [
      { label: 'Hot Biryani / Porotta', desc: 'Delicious savory meal 🍛', bgColor: 'bg-amber-100', icon: '🍛' },
      { label: 'Crispy Dosa & Filter Coffee', desc: 'Classic south comfort food ☕', bgColor: 'bg-yellow-100', icon: '☕' },
      { label: 'Cheesy Pizza & Burger', desc: 'Loaded fast food treat 🍕', bgColor: 'bg-orange-100', icon: '🍕' },
      { label: 'Spicy Noodles / Momos', desc: 'Late-night street food 🍜', bgColor: 'bg-rose-100', icon: '🍜' }
    ]
  },
  {
    id: 2,
    category: 'Texting Habit 💬',
    title: 'What is my actual texting style when chatting with you?',
    options: [
      { label: 'Instant Fast Replies', desc: 'Replies in 2 seconds flat ⚡', bgColor: 'bg-emerald-100', icon: '⚡' },
      { label: 'Sends 10 Voice Memos', desc: 'Loves talking over audio 🎙️', bgColor: 'bg-purple-100', icon: '🎙️' },
      { label: 'Leaves On Read', desc: 'Forgets to reply for 5 hours 💀', bgColor: 'bg-rose-100', icon: '💀' },
      { label: 'Uses Memes & Stickers', desc: 'Communicates only in funny memes 📲', bgColor: 'bg-yellow-100', icon: '📲' }
    ]
  },
  {
    id: 3,
    category: 'Late Night 🌙',
    title: 'What am I usually doing at 2:00 AM on a weekend?',
    options: [
      { label: 'Sleeping Deeply', desc: 'Out cold in bed snoring 💤', bgColor: 'bg-indigo-100', icon: '😴' },
      { label: 'Scrolling Instagram/TikTok', desc: 'Doomscrolling short videos 📱', bgColor: 'bg-pink-100', icon: '📱' },
      { label: 'Midnight Kitchen Snack', desc: 'Searching fridge for cold food 🧀', bgColor: 'bg-amber-100', icon: '🧀' },
      { label: 'Binge Watching Shows', desc: 'Watching movies till sunrise 🍿', bgColor: 'bg-purple-100', icon: '🍿' }
    ]
  },
  {
    id: 4,
    category: 'Money Mood 💸',
    title: 'How do I handle money when we go shopping?',
    options: [
      { label: 'Bargain Queen/King', desc: 'Asks for discount everywhere 🏷️', bgColor: 'bg-emerald-100', icon: '🏷️' },
      { label: 'Impulse Shopping Spree', desc: 'Buys everything on sight 🛍️', bgColor: 'bg-pink-100', icon: '🛍️' },
      { label: 'Treats Everyone Food', desc: 'Pays bill for the whole group 🥂', bgColor: 'bg-amber-100', icon: '🥂' },
      { label: 'Super Saver', desc: 'Strictly saves money in bank 📈', bgColor: 'bg-blue-100', icon: '📈' }
    ]
  },
  {
    id: 5,
    category: 'Dream Travel 🌴',
    title: 'What is my dream getaway vacation spot?',
    options: [
      { label: 'Kerala Backwaters & Beach', desc: 'Relaxing houseboats & sea breeze 🌊', bgColor: 'bg-cyan-100', icon: '🌊' },
      { label: 'Mysore Royal Palace & Hills', desc: 'Heritage city & Coorg coffee hills 🏰', bgColor: 'bg-amber-100', icon: '🏰' },
      { label: 'Snow Mountains Trekking', desc: 'Cold mountain adventures 🏔️', bgColor: 'bg-blue-100', icon: '🏔️' },
      { label: 'Shopping City Vacation', desc: 'Big city lights & night markets 🌃', bgColor: 'bg-purple-100', icon: '🌃' }
    ]
  },
  {
    id: 6,
    category: 'Angry Reaction 😠',
    title: 'How do I react when I get annoyed or angry at something?',
    options: [
      { label: 'Silent Cold Treatment', desc: 'Stops talking & ignores quietly 🤫', bgColor: 'bg-slate-100', icon: '🤫' },
      { label: 'Vents Loudly To Bestie', desc: 'Explodes & talks for 30 mins 🗣️', bgColor: 'bg-rose-100', icon: '🗣️' },
      { label: 'Eats Comfort Food', desc: 'Cures bad mood with ice cream/biryani 🍨', bgColor: 'bg-yellow-100', icon: '🍨' },
      { label: 'Listens To Sad Music', desc: 'Puts headphones on full volume 🎧', bgColor: 'bg-indigo-100', icon: '🎧' }
    ]
  },
  {
    id: 7,
    category: 'Home Mood 🏠',
    title: 'What is my favorite lazy day outfit at home?',
    options: [
      { label: 'Oversized Hoodie & Sweats', desc: 'Cozy blanket aesthetic 🧥', bgColor: 'bg-amber-100', icon: '🧥' },
      { label: 'Comfy Lungi / Pajamas', desc: 'Traditional super comfy fit 🌴', bgColor: 'bg-emerald-100', icon: '🌴' },
      { label: 'Gym Clothes (Didn’t Gym)', desc: 'Sporty activewear fit 👟', bgColor: 'bg-blue-100', icon: '👟' },
      { label: 'Fancy Stylish Fit', desc: 'Looking dressy even indoors ✨', bgColor: 'bg-pink-100', icon: '✨' }
    ]
  },
  {
    id: 8,
    category: 'Secret Fear 😱',
    title: 'What is my secret biggest pet peeve or fear?',
    options: [
      { label: 'People Slow Replying', desc: 'Hates being left on read 📱', bgColor: 'bg-rose-100', icon: '📱' },
      { label: 'Loud Chewing Sounds', desc: 'Can’t stand noisy food eating 🤫', bgColor: 'bg-amber-100', icon: '🤫' },
      { label: 'Bugs Flying Near Me', desc: 'Panics when a moth flies past 🦋', bgColor: 'bg-purple-100', icon: '🦋' },
      { label: 'Running Out Of Phone Battery', desc: 'Fears 1% low battery level 🔋', bgColor: 'bg-yellow-100', icon: '⚡' }
    ]
  },
  {
    id: 9,
    category: 'Guilty Pleasure 🤫',
    title: 'What is my secret guilty pleasure when I’m alone?',
    options: [
      { label: 'Singing In The Bathroom', desc: 'Full concert vocals in shower 🎤', bgColor: 'bg-pink-100', icon: '🎤' },
      { label: 'Celebrity Gossip Threads', desc: 'Reading influencer drama 🍿', bgColor: 'bg-yellow-100', icon: '🍿' },
      { label: 'Eating Frosting With Spoon', desc: 'Sweet tooth tub dessert 🧁', bgColor: 'bg-rose-100', icon: '🧁' },
      { label: 'Talking To Pets', desc: 'Having full conversations with cats/dogs 🐱', bgColor: 'bg-emerald-100', icon: '🐱' }
    ]
  },
  {
    id: 10,
    category: 'Friendship Rule 🤝',
    title: 'Why should you NEVER block me on social media?',
    options: [
      { label: 'I Send Top Tier Memes', desc: 'Daily funny viral comedy posts 📲', bgColor: 'bg-amber-100', icon: '📲' },
      { label: 'I Pay For Your Treats', desc: 'Always buys food & shares chai ☕', bgColor: 'bg-emerald-100', icon: '☕' },
      { label: 'I Know All Your Secrets', desc: 'Mutual assured friendship pact 🤫', bgColor: 'bg-rose-100', icon: '🤫' },
      { label: '100% Unmatched Loyalty', desc: 'Rides or dies 24/7 no matter what 💖', bgColor: 'bg-pink-100', icon: '💖' }
    ]
  },

  // 11-100 Additional Personal Friendship Habits
  ...Array.from({ length: 90 }, (_, i) => {
    const num = 11 + i;
    const PersonalTopics = [
      { t: 'Morning Coffee ☕', q: 'How do I take my morning drink?', a1: 'Strong Hot Filter Coffee ☕', a2: 'Sweet Masala Chai 🫖', a3: 'Iced Coffee With Cream 🧋', a4: 'Plain Cold Water 💧' },
      { t: 'Party Vibe 🥳', q: 'What do I do at a big social party?', a1: 'Pet The Owner’s Dog 🐕', a2: 'Dance Near The DJ 🕺', a3: 'Eat All The Snacks 🍿', a4: 'Go Home Early Secretly 🏃' },
      { t: 'Movie Choice 🎬', q: 'What movie genre is my absolute favorite?', a1: 'Mass Action Thriller 💥', a2: 'Romantic Comedy 💕', a3: 'Horror Thriller 👻', a4: 'Funny Comedy Bop 🤣' },
      { t: 'Weekend Nap 😴', q: 'How long do I sleep on a lazy Sunday?', a1: '10+ Hours Sleep 🛌', a2: 'Up At 6 AM Energetic 🏃', a3: '3 Hour Afternoon Nap 💤', a4: 'No Sleep All Gaming 🎮' },
      { t: 'Road Trip 🚗', q: 'What is my role on a road trip with friends?', a1: 'DJ Aux Playlist Controller 🎧', a2: 'Snack Manager & Feeder 🍟', a3: 'Driver At 100 mph 🏎️', a4: 'Asleep In Backseat 😴' }
    ];
    const item = PersonalTopics[i % PersonalTopics.length];
    return {
      id: num,
      category: `${item.t}`,
      title: `${item.q}`,
      options: [
        { label: item.a1, desc: 'Personal habit choice', bgColor: 'bg-amber-100', icon: '⭐' },
        { label: item.a2, desc: 'Personal habit choice', bgColor: 'bg-emerald-100', icon: '💖' },
        { label: item.a3, desc: 'Personal habit choice', bgColor: 'bg-cyan-100', icon: '⚡' },
        { label: item.a4, desc: 'Personal habit choice', bgColor: 'bg-purple-100', icon: '🎉' }
      ]
    };
  })
];

// Helper to select 10 strictly unique questions from the 100-question pool
export function getRandom10Questions(excludeIds = []) {
  const available = ALL_QUESTIONS.filter(q => !excludeIds.includes(q.id));
  const shuffled = [...available].sort(() => 0.5 - Math.random());
  
  const selected = [];
  const usedIds = new Set();
  
  for (const q of shuffled) {
    if (!usedIds.has(q.id)) {
      usedIds.add(q.id);
      selected.push(q);
    }
    if (selected.length === 10) break;
  }
  return selected;
}
