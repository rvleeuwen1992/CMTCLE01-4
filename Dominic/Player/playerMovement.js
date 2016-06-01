#pragma strict

public class playerMovement extends MonoBehaviour
{

    var distance : float = 150;
    public static var mousePos : Vector3;
    public var wayPoint : GameObject;

    function Update()
    {
     
        
        var rayOrigin : Ray  = Camera.main.ScreenPointToRay(Input.mousePosition);
        var hitInfo : RaycastHit;

        if (Physics.Raycast(rayOrigin, hitInfo, distance))
        {
            mousePos = hitInfo.point;
    
        }

        if( Input.GetKeyDown( KeyCode.Mouse0 ) )
        {
            Instantiate(wayPoint, mousePos, Quaternion.identity);
        }

    }

   
}
