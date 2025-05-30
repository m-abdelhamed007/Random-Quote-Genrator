var quote =[
{
    quote:"The way to get started is to quit talking and begin doing.",
    author:"Walt Disney"
}
,
{
    quote:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde"
}
,
  {
    quote:"Be the change that you wish to see in the world.",
    author:"Mahatma Gandhi"
  }
  ,
  {
    quote:"The only way to do great work is to love what you do.",
    author:"Steve Jobs"
  }
  ,
  {

    quote:"You can't stop the waves, but you can learn to surf.",
    author:"Jon Kabat-Zinn"

  }
  ,
  {

    quote:"The future belongs to those who believe in the beauty of their dreams.",
    author:"Eleanor Roosevelt"
  }
  ,
  {
    quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author:"Dr. Seuss"
  }
  ,
  {
    quote:"You only live once, but if you do it right, once is enough.",
    author:"Mae West"
  }
  ,
  {
    quote:"If life were predictable it would cease to be life, and be without flavor.",
    author:"Eleanor Roosevelt"
  }
  ,
  {
    quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author:"Oprah Winfrey"
  }
  ,
  {
    quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author:"James Cameron"
  }
  ,
  {
    quote:"Life is what happens to you while you're busy making other plans.",
    author:"John Lennon"
  }

];
function randomQuote() {
    var random = Math.floor(Math.random() * quote.length);
    document.getElementById("quote").innerHTML = '"'+quote[random].quote+'"';
    document.getElementById("author").innerHTML ='-'+ quote[random].author;
}

