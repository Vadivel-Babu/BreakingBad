const quote = document.querySelector('.quote');
const btn = document.querySelector('.btn');

btn.addEventListener('click',async () => {

  try{
    const data = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const res = await data.json();
    quote.innerText = res[0].quote;
   
  } catch(e){
    alert(e)
  }
  
})