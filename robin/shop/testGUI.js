#pragma strict

public class testGUI extends MonoBehaviour{

    var customSkin : GUISkin;

    function OnGUI() {

        GUI.skin = customSkin;
        GUI.Label(new Rect(865, 50, 200, 80),"" + test2.gold);
        
        // Algemeen
        GUI.Label(new Rect(700, 360, 200, 80),"" + test2.totaalTekst);
        GUI.Label(new Rect(770, 360, 200, 80),"" + test2.totaalBedrag);

        // Inventory
        GUI.Label(new Rect(630, 50, 200, 80),"" + test2.invGraan);
        GUI.Label(new Rect(695, 50, 200, 80),"" + test2.invCacao);
        GUI.Label(new Rect(760, 50, 200, 80),"" + test2.invPeper);
        GUI.Label(new Rect(825, 50, 200, 80),"" + test2.invNootmuskaat);

        // Graan
        GUI.Label(new Rect(810, 189, 200, 80),"" + test2.graan);
        GUI.Label(new Rect(770, 189, 200, 80),"" + test2.graanPrijs);
        GUI.Label(new Rect(675, 190, 200, 80),"" + test2.graanTekst);

        // Cacao
        GUI.Label(new Rect(810, 229, 200, 80),"" + test2.cacao);
        GUI.Label(new Rect(770, 229, 200, 80),"" + test2.cacaoPrijs);
        GUI.Label(new Rect(675, 230, 200, 80),"" + test2.cacaoTekst);

        // Peper
        GUI.Label(new Rect(810, 265, 200, 80),"" + test2.peper);
        GUI.Label(new Rect(770, 265, 200, 80),"" + test2.peperPrijs);
        GUI.Label(new Rect(675, 265, 200, 80),"" + test2.peperTekst);

        // Nootmuskaat
        GUI.Label(new Rect(810, 300, 200, 80),"" + test2.nootmuskaat);
        GUI.Label(new Rect(770, 300, 200, 80),"" + test2.nootmuskaatPrijs);
        GUI.Label(new Rect(675, 300, 200, 80),"" + test2.nootmuskaatTekst);
        
    }
}