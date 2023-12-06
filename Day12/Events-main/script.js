let cardArray=[];
let cards= document.getElementById("cards");
let events =10

const buildCard=(i)=>{

  cardArray[i] = `<div class="card col ms-5" style="width:20rem" >
  <div class="card-header border-0">Event ${i}</div>
  <div class="card-body d-flex flex-row ">
      <div class="card-image p-2"> <img class ="img-fluid" src="//placehold.it/150" alt="" /> </div>
      <div class="card-content p-3">
        <p>23-May-2023</p> 
        <p>Seats Available: 23</p>
        <button type="button" class="btn btn-light btn-outline-dark">Book Now</button>
       </div>
  </div>
</div>`

}

for(let i=1; i<=events; i++) 
{
  buildCard(i);
  cards.innerHTML=cardArray.join('');
}
