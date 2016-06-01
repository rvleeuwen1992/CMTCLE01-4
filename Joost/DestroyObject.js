#pragma strict

public class DestroyObject extends MonoBehaviour{

function Start () {

}

function Update () {
    if(sceneSwitch.onlyOnce == true){
        Invoke("DestroyObject", 0.1f);
        
        }
    }
    
    function DestroyObject()
    {
        if(Input.GetKeyDown(KeyCode.Mouse0)){
            Destroy(this.gameObject);
            sceneSwitch.onlyOnce = false;
            }  
        }
    
}