//display error massaege none
document.getElementById('error-message').style.display = 'none';



// Loading data from api and click funtion on button


const loadData = () => {
    const searchtext=document.getElementById('input-text');
    const searchvalue=searchtext.value;
    
     // clear data

    searchtext.value='';
    document.getElementById('loadingspinner').style.display='block';
     const erromassge=document.getElementById('error-message');
     
    if(searchvalue==''){
      erromassge.style.display='block';
      erromassge.innerText='Please enter your book name';
    }
    else{
      document.getElementById('error-message').style.display = 'none';
      const url=`https://openlibrary.org/search.json?q=${searchvalue}`;
      fetch(url)
      .then(response => response.json())
      .then(data =>displayData(data))
      .catch(error => displayError(error));
       
    }

    
    
   
     
  
    
   
}

//error function
const displayError = error => {
  document.getElementById('error-message').style.display = 'block';
}


// displaying data and appending to div // col mb-4  
const displayData=(books)=>{
 
  
    const  displayDataparent=document.getElementById('display-data');
    displayDataparent.textContent='';
    if(books.numFound==0){
      document.getElementById('error-resilt').innerHTML="No books found.";
      //console.log('No books found');
     
  }else{
    document.getElementById('error-resilt').style.display="none";
    document.getElementById('result-total').innerText=`Total Result Found :${books.numFound}`;
    books.docs.slice(0,40).forEach(book=>{
  
     const childdiv=document.createElement('div');
     childdiv.classList.add('col');
     //const photourl=`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
     childdiv.innerHTML=`
     <div class="card">
     <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-thumbnail w-50 mx-auto mt-2" alt="No Image Found">

       <div class="card-body">
         <h5 class="card-title">Book Name:${book.title}</h5>
         <p class="card-text">Publiser:${book.publisher}.</p>
         <p class="card-text">First-Publishing-Year:${book.first_publish_year}.</p>
         <p class="card-text">Authors :${book.author_name}.</p>
         
     
         </div>
   </div>
   
     `
     displayDataparent.appendChild(childdiv);
     
 });
  } 
 document.getElementById('loadingspinner').style.display='none';
   

}