#pragma strict

public class sceneSwitch extends MonoBehaviour
{

        public static var onlyOnce: boolean = false;
        public var portRoyalIntro : GameObject;
        public var amsterdamIntro : GameObject;


        function OnMouseDown()
        {
                
                //Als op Port Royal geklikt word, krijg je info in beeld
                if(this.gameObject.name == "portRoyal")
                {
                   if(!onlyOnce)
                   {
                        Instantiate(portRoyalIntro, new Vector3(5.8, 0.3, -19.5), Quaternion.identity);
                        onlyOnce = true;
                   }
                }
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                  if(this.gameObject.name == "PortRoyalReizen")
                {
                        Application.LoadLevel("portRoyal");
                }
                
                
                //Als op Amsterdam geklikt word, krijg je info in beeld
                if(this.gameObject.name == "amsterdam")
                {
                   if(!onlyOnce)
                   {
                     //  Destroy(portRoyalIntro.gameObject);
                        Instantiate(amsterdamIntro, new Vector3(-2.5, 2, -10), Quaternion.identity);
                        onlyOnce = true;
                        Destroy(GameObject.Find("portRoyalIntro"));
                   }
                }
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                 if(this.gameObject.name == "AmsterdamReizen")
                {
                         Application.LoadLevel("amsterdam");
                }
        
        
                //Als je op Kaap de Goede Hoop klikt krijg je info in beeld
                if(this.gameObject.name == "goedeHoop")
                {
                        Application.LoadLevel("goedeHoop");
                 }
                 
                 
                 //Als je op Batavia klikt krijg je info in beeld
                if(this.gameObject.name == "batavia")
                {
                        Application.LoadLevel("batavia");
                }
        
        
                //Als je op Lissabon klikt krijg je info in beeld
                if(this.gameObject.name == "lissabon")
                {
                         Application.LoadLevel("lissabon");
                }
        }
}
