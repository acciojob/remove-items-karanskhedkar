//your JS code here. If required.
const removeColor=()=>{
    const select=document.getElementById("colorSelect");
	let selectedIndex=document.getElementById("colorSelect").selectedIndex;;
    if(selectedIndex!=-1){
      select.remove(selectedIndex)
    }
}