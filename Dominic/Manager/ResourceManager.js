import System.Collections.Generic;
#pragma strict

public class ResourceManager extends MonoBehaviour
{
    public static var gold : int = 200000;
    public static var crewMax : int = 45;
    public static var crewCurrent : int = 0;
    public static var happiness : int = 50;
    public static var foodMax : int = 100;
    public static var foodCurrent : int = 100;
    public static var cargoCurrent : int = 0;
    public static var suppliesCurrent : int = 0;
    public static var cargoMax : int = 100;

    function Awake()
    {
        suppliesCurrent = cargoCurrent + foodCurrent;
    }
}
