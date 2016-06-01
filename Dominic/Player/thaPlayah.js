#pragma strict
public class thaPlayah extends MonoBehaviour
{

    public var target: Transform;
    var wayPoint: GameObject;

    var location : float;

	
    // Speed in units per sec.
    var speed: float;

    function Awake()
    {
        location = wayPoint.transform.position.x;
    }
    function Update () {
           
        wayPoint = GameObject.Find("wayPoint(clone)");
        Debug.Log(boxDestruction.boxAlive);
        if (boxDestruction.boxAlive == true){
            transform.LookAt(target);
      


        }

    }
    }