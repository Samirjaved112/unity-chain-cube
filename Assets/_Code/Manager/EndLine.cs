using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EndLine : MonoBehaviour
{
    public static bool gameOver = false;

    private void OnTriggerExit(Collider other)
    {

        if (other.gameObject.CompareTag("Cube"))
        {
            other.gameObject.transform.GetChild(0).gameObject.SetActive(false);
            other.gameObject.transform.GetChild(1).gameObject.SetActive(true);
            other.gameObject.tag = "Thrown";

        }
    }
    private void OnTriggerStay(Collider other)
    {
        if(other.gameObject.CompareTag("Thrown"))
            {
           
            gameOver = true;
        }
    }
}
