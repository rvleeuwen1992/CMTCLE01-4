#pragma strict

public class sceneSwitch extends MonoBehaviour
{

        public static var onlyOnce: boolean = false;
        public var portRoyalIntro : GameObject;
        public var amsterdamIntro : GameObject;
        public var goedeHoopIntro : GameObject;
        public var lissabonIntro : GameObject;
        public var bataviaIntro : GameObject;


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
                
// ----------------------------------------------------------------------------------------                
                
                //Als op Amsterdam geklikt word, krijg je info in beeld
                if(this.gameObject.name == "amsterdam")
                {
                   if(!onlyOnce)
                   {

                        Instantiate(amsterdamIntro, new Vector3(-2.5, 2, -10), Quaternion.identity);
                        onlyOnce = true;
                   }
                }
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                 if(this.gameObject.name == "AmsterdamReizen")
                {
                         Application.LoadLevel("amsterdam");
                }
                
// ----------------------------------------------------------------------------------------
        
                //Als je op Kaap de Goede Hoop klikt krijg je info in beeld
                if(this.gameObject.name == "goedeHoop")
                {
                        if(!onlyOnce)
                   {
                        Instantiate(goedeHoopIntro, new Vector3(-0.4, 3.9, -52), Quaternion.identity);
                        onlyOnce = true;
                   }
                 }
                 
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                 if(this.gameObject.name == "goedeHoopReizen")
                {
                         Application.LoadLevel("goedeHoop");
                }
                 
// ----------------------------------------------------------------------------------------
                 
                //Als je op Batavia klikt krijg je info in beeld
                if(this.gameObject.name == "batavia")
                {
                        if(!onlyOnce)
                   {
                        Instantiate(bataviaIntro, new Vector3(-7.2, -4.3, -70), Quaternion.identity);
                        onlyOnce = true;
                   }
                 }
                 
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                 if(this.gameObject.name == "bataviaReizen")
                {
                         Application.LoadLevel("batavia");
                }
                
// ----------------------------------------------------------------------------------------                
        
                // Als op Lissabon geklikt word, krijg je info in beeld
                if(this.gameObject.name == "lissabon")
                {
                   if(!onlyOnce)
                   {
                        Instantiate(lissabonIntro, new Vector3(-2.2, 3.85, -4), Quaternion.identity);
                        onlyOnce = true;
                   }
                }
        
                //Als je op het reizen knopje klikt ga je naar de gekozen stad
                if(this.gameObject.name == "lissabonReizen")
                {
                         Application.LoadLevel("lissabon");
                }
        }
}
