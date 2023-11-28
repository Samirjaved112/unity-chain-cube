using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Luna.Unity;
public class CubePropertyhandler : MonoBehaviour
{
    [SerializeField]
    private int numOnCube;
    [SerializeField]
    private int numLimit;
    List<int> numList = new List<int>();
    [SerializeField]
    private TextMeshProUGUI[] cubeText;
    [SerializeField]
    // private GameObject NewCube;
    private Renderer cubeRenderer;
    [SerializeField]
    private Color[] cubeColor;
    private int limitOnCubeNum = 9;
    float minDistance = Mathf.Infinity;
    private GameObject targetobject;
    private Vector3 jumpDirection;

    private void Start()
    {
        cubeRenderer = GetComponent<Renderer>();
        GenerateNumber();
    }
    private void GenerateNumber()
    {
        int num = (int)Mathf.Pow(2, numLimit);
        for (int i = 2; i <= num; i += i)
        {
            numList.Add(i);
        }
        int index = Random.Range(5, numList.Count-1);
        numOnCube = numList[index];
        SwitchColors();
        DisplayNumOnCube();
    }
    private void DisplayNumOnCube()
    {
        for (int i = 0; i < 6; i++)
        {
            cubeText[i].text = numOnCube.ToString();
        }
    }
    private void SwitchColors()
    {
        for (int i = 2; i <= 512; i += i)
        {
            if (i == numOnCube)
            {
                int num = i;
                int power = (int)Mathf.Log(num, 2);

                cubeRenderer.material.color = cubeColor[power - 1];
            }
        }
    }
    private IEnumerator ScaleEffect()
    {
        // yield return new WaitForSeconds(0.2f);
        transform.localScale = new Vector3(2, 2, 2);
        yield return new WaitForSeconds(0.2f);
        transform.localScale = new Vector3(1.5f, 1.5f, 1.5f);

    }
    private void OnCollisionEnter(Collision collision)
    {
        if (numOnCube == 2048 || PlayableManager.instance.cubeCount>=4)
        {
            if (collision.gameObject.CompareTag("Thrown"))
            {

                StartCoroutine(PlayableManager.instance.EndGame());
            }
        }
        else
        {
           
            if (collision.gameObject.CompareTag("Thrown"))
            {
                CubePropertyhandler otherCube = collision.gameObject.GetComponent<CubePropertyhandler>();
                Rigidbody rb = gameObject.GetComponent<Rigidbody>();
                rb.freezeRotation = false;
                if (otherCube.numOnCube == numOnCube)
                {
                    if (this.gameObject.GetInstanceID() < otherCube.GetInstanceID())
                    {

                        rb.velocity = Vector3.zero;
                        rb.AddForce(Vector3.up * 4f, ForceMode.Impulse);
                        Vector3 torqueDirection = new Vector3(1, 1, 1);
                        rb.AddTorque(torqueDirection * 0.7f, ForceMode.Impulse);
                        PlayableManager.instance.cubeList.Remove(otherCube.gameObject);
                        Destroy(otherCube.gameObject);
                        StartCoroutine(ScaleEffect());
                        numOnCube = otherCube.numOnCube + numOnCube;
                        AddJumpForce(gameObject);
                        if (numOnCube >= 128)
                        {
                            limitOnCubeNum--;
                        }
                        SwitchColors();
                        DisplayNumOnCube();

                    }
                }
                gameObject.transform.GetChild(1).gameObject.SetActive(false);
            }
        }
        
    }
    private void AddJumpForce(GameObject playerObject)
    {
        for (int i = 0; i < PlayableManager.instance.cubeList.Count; i++)
        {
            if (playerObject.GetComponent<CubePropertyhandler>().numOnCube ==
               PlayableManager.instance.cubeList[i].GetComponent<CubePropertyhandler>().numOnCube
               && playerObject != PlayableManager.instance.cubeList[i])
            {
                Vector3 direction = PlayableManager.instance.cubeList[i].transform.position - playerObject.transform.position;
                float distance = direction.magnitude;
                if (distance < minDistance)
                {
                    minDistance = distance;
                    targetobject = PlayableManager.instance.cubeList[i];
                    jumpDirection = targetobject.transform.position - playerObject.transform.position;
                }
            }
        }
        Debug.Log("working for all");
        playerObject.GetComponent<Rigidbody>().AddForce(jumpDirection * 1f, ForceMode.Impulse);

    }
    private void OnTriggerExit(Collider other)
    {
        if (other.gameObject.CompareTag("FinishLine"))
        {
            PlayableManager.instance.cubeList.Add(gameObject);

        }
    }
}
