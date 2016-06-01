#pragma strict

public class textImporter extends MonoBehaviour
{
    public var textFile : TextAsset;
    public var textLines : String[];

        function Start()
        {
            if(textFile != null)
            {
                textLines = (textFile.text.Split("\n"[0]));
            }
        }

 

}