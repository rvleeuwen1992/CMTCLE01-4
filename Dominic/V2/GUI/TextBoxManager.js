#pragma strict
import UnityEngine.UI;

public class TextBoxManager extends MonoBehaviour
{
    public var textBox : GameObject;
    public var theText : Text;
    
    public var textFile : TextAsset;
    public var textLines : String[];

    public var currentLine : int;
    public var endAtLine : int;

        function Start()
        {
            if(textFile != null)
            {
                textLines = (textFile.text.Split("\n"[0]));
            }

            if(endAtLine == 0)
            {
                endAtLine = textLines.Length - 1;
            }
        }

        function Update()
        {
            theText.text = textLines[currentLine];
            if(Input.GetKeyDown(KeyCode.Return))
            {
                currentLine += 1;
            }

            if(currentLine > endAtLine)
            {
                textBox.SetActive(false);
            }

        }

 

}