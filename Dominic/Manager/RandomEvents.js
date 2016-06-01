#pragma strict

public class RandomEvents extends MonoBehaviour
{
    private var randomEncounter : int;
    public var rateMax : int = 1;

    function Update()
    {
        Debug.Log(randomEncounter);
    }


    function OnMouseDown()
    {
        if(this.gameObject.name == "test")
        {
            randomEncounter = Random.Range(0, rateMax);
            RandomSpawn();
        }
    }

    function RandomSpawn()
    {
        switch (randomEncounter)
        {
            case 0:
                Application.LoadLevel("Rotterdam");
                break;
            case 1:
                Application.LoadLevel("BattleScenes");
                break;
        }
    }
}