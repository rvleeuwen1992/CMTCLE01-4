#pragma strict

public class test extends MonoBehaviour{

    function Start () {

    }

    function Update () {
        //Debug.Log(test2.totaalBedrag);
        Debug.Log(test2.graan);
    }

    function OnMouseDown (){

        if(this.gameObject.name == "geitenPlus"){
            test2.geiten = test2.geiten + 1;
            test2.geitenPrijs = test2.geitenKosten * test2.geiten;
        }
        if(this.gameObject.name == "geitenMinus"){
            test2.geiten = test2.geiten - 1;
            test2.geitenPrijs = test2.geitenKosten * test2.geiten;
        }
        if(test2.geiten < 0 || test2.geitenKosten < 0){
            test2.geiten = 0;
            test2.geitenKosten = 0;
        }

        // Graan
        if(this.gameObject.name == "graanPlus"){
            test2.graan = test2.graan + 1;
            test2.graanPrijs = test2.graanKosten * test2.graan;
            //test2.totaalBedrag = test2.graanPrijs;
        }
        if(this.gameObject.name == "graanMinus"){
            
                test2.graan = test2.graan - 1;
                test2.graanPrijs = test2.graanKosten * test2.graan;
                //test2.totaalBedrag = test2.graanPrijs;
        }
        if(test2.graan < 0){
            test2.graan = 0;
            //test2.graanKosten = 0;
        }

        // Cacao
        if(this.gameObject.name == "cacaoPlus"){
            test2.cacao = test2.cacao + 1;
            test2.cacaoPrijs = test2.cacaoKosten * test2.cacao;
        }
        if(this.gameObject.name == "cacaoMinus"){
            test2.cacao = test2.cacao - 1;
            test2.cacaoPrijs = test2.cacaoKosten * test2.cacao;
        }
        if(test2.cacao < 0){
            test2.cacao = 0;
        }


        // Peper
        if(this.gameObject.name == "peperPlus"){
            test2.peper = test2.peper + 1;
            test2.peperPrijs = test2.peperKosten * test2.peper;
        }
        if(this.gameObject.name == "peperMinus"){
            test2.peper = test2.peper - 1;
            test2.peperPrijs = test2.peperKosten * test2.peper;
        }
        if(test2.peper < 0){
            test2.peper = 0;
        }

        // Nootmuskaat
        if(this.gameObject.name == "nootmuskaatPlus"){
            test2.nootmuskaat = test2.nootmuskaat + 1;
            test2.nootmuskaatPrijs = test2.nootmuskaatKosten * test2.nootmuskaat;
        }
        if(this.gameObject.name == "nootmuskaatMinus"){
            test2.nootmuskaat = test2.nootmuskaat - 1;
            test2.nootmuskaatPrijs = test2.nootmuskaatKosten * test2.nootmuskaat;
        }
        if(test2.nootmuskaat < 0){
            test2.nootmuskaat = 0;
        }



        if(this.gameObject.name == "huidenPlus"){
            test2.huiden = test2.huiden + 1;
            test2.huidenPrijs = test2.huidenKosten * test2.huiden;
        }
        if(this.gameObject.name == "huidenMinus"){
            test2.huiden = test2.huiden - 1;
            test2.huidenPrijs = test2.huidenKosten * test2.huiden;
        }
        if(test2.huiden < 0){
            test2.huiden = 0;
        }




        if(this.gameObject.name == "houtPlus"){
            test2.hout = test2.hout + 1;
            test2.houtPrijs = test2.houtKosten * test2.hout;
        }
        if(this.gameObject.name == "houtMinus"){
            test2.hout = test2.hout - 1;
            test2.houtPrijs = test2.houtKosten * test2.hout;
        }
        if(test2.hout < 0){
            test2.hout = 0;
        }


        if(this.gameObject.name == "steenPlus"){
            test2.steen = test2.steen + 1;
            test2.steenPrijs = test2.steenKosten * test2.steen;
        }
        if(this.gameObject.name == "steenMinus"){
            test2.steen = test2.steen - 1;
            test2.steenPrijs = test2.steenKosten * test2.steen;
        }
        if(test2.steen < 0){
            test2.steen = 0;
        }

        test2.totaalBedrag = test2.graanPrijs + test2.cacaoPrijs + test2.peperPrijs + test2.nootmuskaatPrijs;

        // Producten kopen
        if(this.gameObject.name == "kopen"){

            // Als speler te genoeg geld heeft
            if(test2.totaalBedrag <= test2.gold){
                test2.gold = test2.gold - test2.totaalBedrag;
                test2.invGraan = test2.invGraan + test2.graan;
                test2.invCacao = test2.invCacao + test2.cacao;
                test2.invPeper = test2.invPeper + test2.peper;
                test2.invNootmuskaat = test2.invNootmuskaat + test2.nootmuskaat;
            }
        }

        //Producten verkopen
        if(this.gameObject.name == "verkopen"){
            if(test2.invGraan <= test2.graan){
                test2.invGraan = test2.invGraan - test2.graan;
                test2.gold = test2.gold + test2.totaalBedrag;
            }
        }

        // Ga terug naar de stad
        if(this.gameObject.name == "terug"){
            Debug.Log("test");
            //Application.LoadLevel("City");
        }
    }
}