#pragma strict

function OnMouseDown(){
                
      //Als op Port Royal geklikt word, krijg je info in beeld
      if(this.gameObject.name == "schip"){
         Application.LoadLevel("worldmap"); 
      }
}