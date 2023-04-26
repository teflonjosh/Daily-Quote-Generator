//
let quotes = ["So we beat on, boats against the current, borne back ceaselessly into the past ― F. Scott Fitzgerald, The Great Gatsby",
"My advice is, never do to-morrow what you can do today. Procrastination is the thief of time. Collar him! ― Charles Dickens, David Copperfield",
"They went on, falling deeper and deeper in love, and saying nothing about it, and each shyly thinking that this love was the greatest of secrets - Charles Dickesn, Bleak House",
"It is nothing to die. It is frightful not to live ― Victor Hugo, Les Misérables",
"Those who can make you believe absurdities, can make you commit atrocities― Voltaire",
"What are men to rocks and mountains? ― Jane Austen, Pride and Prejudice",
"It's necessary to have wished for death in order to know how good it is to live ― Alexandre Dumas, The Count of Monte Cristo",
"We are all in the gutter, but some of us are looking at the stars ― Oscar Wilde, Lady Windermere's Fan",
"All extremes of feeling are allied with madness ― Virginia Woolf, Orlando",
"Life appears to me too short to be spent in nursing animosity or registering wrongs ― Charlotte Bronte, Jane Eyre"
]
// Link to HTML 
let button = document.getElementById('quoteButton');
let quote = document.getElementById('quote');
// Generate Random from Array as function
function quoteSelector(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}
// Send Random value fron array to HTML
function showQuote(){
  quote.innerHTML = quoteSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";
button.removeEventListener('click', showQuote);
}
// Add event listneder -- click and showQuote (call functon)
button.addEventListener('click', showQuote);

// End of Program :) 
