const nonsensicalJokes = [
    "Why did the banana go to therapy? Because it couldn't peel with its emotions.",
    "I tried to teach my toaster karate. Now my bread is black belt certified.",
    "Never trust a duck in sunglasses. They're up to quackery.",
    "My pillow started a podcast. It's called *Soft Talks with Fluff McSnore*.",
    "Aliens abducted my sandwich and left a soggy sock in return.",
    "I sneezed so hard, I unlocked a new Wi-Fi network.",
    "Don't argue with spaghetti. It always ends in a saucy mess.",
    "I painted my ceiling invisible. Now I can't find my roof.",
    "The moon owes me five bucks and a half-eaten burrito.",
    "Yesterday, I saw a cat doing taxes. It claimed nine lives as dependents."
  ];

  const randomSelection = (arr) => arr[Math.floor(Math.random() * 9)];

  console.log(randomSelection(nonsensicalJokes));