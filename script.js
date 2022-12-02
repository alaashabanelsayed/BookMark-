

let SiteName = document.getElementById("SiteName")

let SiteURL = document.getElementById("SiteURL")



var sitesList;
if (localStorage.getItem("sitesList")!=null) {
    sitesList= JSON.parse(localStorage.getItem("sitesList"))
    displaySite(sitesList)
    
}else{
    sitesList=[]
}




function addsite(){
    let validName=nameValidation();
    let validedUrl =urlValidation()

    if (validName , validedUrl) {
        var Site={
            name:SiteName.value,
            url:SiteURL.value,
        }
       
        sitesList.push(Site)
        localStorage.setItem("sitesList", JSON.stringify(sitesList) )
        displaySite()
       
        clearForm();
        
    }
   
   
    // if(SiteName.value==''&&SiteURL.value==''){ }

 
// console.log(sitesList);
}

function clearForm(){
    SiteName.value ="",
    SiteURL.value =""
}



function displaySite() {

   let cartona=''
    for (var i =0 ; i < sitesList.length; i++) {
     
        console.log(sitesList[i]);
        cartona+=` <tr>

        <td> ${sitesList[i].name} </td>
        <td> ${sitesList[i].url}  </td>
      <td>   <a class= " btn btn-info" target="_blank"   href="${sitesList[i].url}" >visit</a>    <td/> 
     
        <td> <a onclick="DeletSite(${i})"    class="btn btn-danger" >Delete</a></td>
     </tr>  `
  
    }
    
    document.getElementById("myData").innerHTML=cartona;
}
// Naming
function DeletSite(deleteindex){

    sitesList.splice(deleteindex,1)

    localStorage.setItem("sitesList", JSON.stringify(sitesList) )

    displaySite(sitesList)
 }


  function nameValidation() {
    // var nameError=document.getElementById("nameError")
    let regex= /^[A-Z][a-z]{3,10}$/;
    if(regex.test(SiteName.value)){
        return true
    }else {
        document.getElementById("nameError").classList.replace("d-none","d-block")
       return false
    
  }}
  
  function urlValidation(){
   let regex = /^ https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/ ;
   
   if (regex.test(SiteURL.value)) {
    return true
    
   }else {
    document.getElementById("urlError").classList.replace("d-none","d-blok")
    return false
   }

  }















