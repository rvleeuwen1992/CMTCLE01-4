#pragma strict

public class ResourceGUI extends MonoBehaviour
{
    public var coin : Texture;
    public var apple : Texture;
    public var box : Texture;
    public var font : Font;

     var native_Width : float = 1920;
     var native_Height : float = 1080;

    public var aTexture : Texture;
    
     var fontSize: int = 50;

    function OnGUI ()
    {
        // Make a background box

        //Calculates the screen region        
        var rX : float  = Screen.width / native_Width;
        var rY : float = Screen.height / native_Height;
        GUI.matrix = Matrix4x4.TRS(new Vector3(0, 0, 0), Quaternion.identity, new Vector3(rX, rY, 1));

        


        GUI.skin.box.normal.background = aTexture;
        GUI.Box (Rect (1210,10,350,30),"");

        GUI.skin.font = font;

        
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