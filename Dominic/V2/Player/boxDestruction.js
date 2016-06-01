#pragma strict

public class boxDestruction extends MonoBehaviour
{

    public static var boxAlive : boolean = false;
    function Awake () 
    {
        boxAlive = true;
    }

        function Update ()
        {

            if( Input.GetKeyDown( KeyCode.Mouse0 ) )
            {
                Destroy(this.gameObject);
                boxAlive = false;
   
            }
        }
    }