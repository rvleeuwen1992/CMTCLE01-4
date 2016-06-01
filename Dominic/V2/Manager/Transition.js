#pragma strict
public class Transition extends MonoBehaviour
{

    function OnMouseDown()
    {
        if(this.gameObject.name == "Kroeg")
        {
            Application.LoadLevel ("Kroeg");
        }
        if(this.gameObject.name == "Scheepswerf")
        {
            Application.LoadLevel ("Scheepswerf");
        }
        if(this.gameObject.name == "Haven")
        {
            Application.LoadLevel ("worldmap");
        }
        if(this.gameObject.name == "Handelshuis")
        {
            Application.LoadLevel ("Handelshuis");
        }
        if(this.gameObject.name == "Blacksmith")
        {
            Application.LoadLevel ("Blacksmith");
        }
        if(this.gameObject.name == "Back")
        {
            Application.LoadLevel ("Rotterdam");
        }
    }
}