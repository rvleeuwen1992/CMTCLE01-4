#pragma strict
public class Transition extends MonoBehaviour
{

    function OnMouseDown()
    {
        if(this.gameObject.name == "Kroeg")
        {
            Application.LoadLevel ("Kroeg");
        }
    }
}