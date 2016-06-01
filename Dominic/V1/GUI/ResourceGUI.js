#pragma strict

public class ResourceGUI extends MonoBehaviour
{
    public var coin : Texture;
    public var apple : Texture;
    public var box : Texture;
    public var font : Font;
    
    function OnGUI ()
    {
        // Make a background box
        GUI.Box (Rect (1210,10,350,30),"" );

        GUI.skin.font = font;

        GUI.Label (Rect (1215,10,100,50), ResourceManager.gold + "");
        GUI.Label (Rect (1295,10,100,50), ResourceManager.foodCurrent + " / " + ResourceManager.foodMax);
        GUI.Label (Rect (1385,10,100,50), ResourceManager.suppliesCurrent + " / " + ResourceManager.cargoMax);
        
        GUI.DrawTexture(Rect(1265,13,25,25), coin);
        GUI.DrawTexture(Rect(1357,13,25,25), apple);
        GUI.DrawTexture(Rect(1450,13,25,25), box);



        if (GUI.Button(new Rect(150, 120, 100, 30), "GAIN GOLD"))
        {
            ResourceManager.gold = ResourceManager.gold + 100; 
        }

        if (GUI.Button(new Rect(150, 150, 100, 30), "LOSE GOLD"))
        {
            ResourceManager.gold = ResourceManager.gold - 100; 
        }
    }
}