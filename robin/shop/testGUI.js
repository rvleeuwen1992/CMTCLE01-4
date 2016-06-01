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

        // Graan
        GUI.Label(new Rect(810, 185, 200, 80),"" + test2.graan);
        GUI.Label(new Rect(770, 185, 200, 80),"" + test2.graanPrijs);
        GUI.Label(new Rect(675, 185, 200, 80),"" + test2.graanTekst);

        // Cacao
        GUI.Label(new Rect(810, 225, 200, 80),"" + test2.cacao);
        GUI.Label(new Rect(770, 225, 200, 80),"" + test2.cacaoPrijs);
        GUI.Label(new Rect(675, 225, 200, 80),"" + test2.cacaoTekst);

        // Peper
        GUI.Label(new Rect(810, 260, 200, 80),"" + test2.peper);
        GUI.Label(new Rect(770, 260, 200, 80),"" + test2.peperPrijs);
        GUI.Label(new Rect(675, 260, 200, 80),"" + test2.peperTekst);

        // Nootmuskaat
        GUI.Label(new Rect(810, 295, 200, 80),"" + test2.nootmuskaat);
        GUI.Label(new Rect(770, 295, 200, 80),"" + test2.nootmuskaatPrijs);
        GUI.Label(new Rect(675, 295, 200, 80),"" + test2.nootmuskaatTekst);

        /////////////////////////////////////////////////////////

        GUI.Label(new Rect(440, 225, 200, 80),"" + test2.huiden);
        GUI.Label(new Rect(400, 225, 200, 80),"" + test2.huidenPrijs);

        GUI.Label(new Rect(440, 285, 200, 80),"" + test2.hout);
        GUI.Label(new Rect(400, 285, 200, 80),"" + test2.houtPrijs);
        GUI.Label(new Rect(440, 315, 200, 80),"" + test2.steen);
        GUI.Label(new Rect(400, 315, 200, 80),"" + test2.steenPrijs);

        GUI.Label(new Rect(440, 135, 200, 80),"" + test2.geiten);
        GUI.Label(new Rect(400, 135, 200, 80),"" + test2.geitenPrijs);
        
    }
}