using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CubeHandler : MonoBehaviour
{
   
    [SerializeField]
    private GameObject cube;
    private GameObject currentCube;
    [SerializeField]
    private Transform spawnPosition;
    private Rigidbody rb;
    public float shootForce = 10f;
    [SerializeField]
    private float minXLimit = -5.0f;
    [SerializeField]
    private float maxXLimit = 5.0f;
    [SerializeField]
    private float movementSpeed = 20f;
    [SerializeField]
   
    private void Start()
    {
        SpawnCube();
    }
    public void SpawnCube()
    {
        currentCube = Instantiate(cube, spawnPosition.position, Quaternion.identity);
        rb = currentCube.GetComponent<Rigidbody>();
    }

    void Update()
    {
        if (Input.touchCount > 0)
        {
            if (currentCube)
            {
                Touch touch = Input.GetTouch(0);
                if (touch.phase == TouchPhase.Moved)
                {
                    Vector3 deltaPos = new Vector3(touch.deltaPosition.x, 0, 0);
                    Vector3 desiredPosition = currentCube.transform.position + deltaPos * movementSpeed * Time.deltaTime;

                    // Clamp the desired position to the specified limits
                    float clampedX = Mathf.Clamp(desiredPosition.x, minXLimit, maxXLimit);
                    desiredPosition.x = clampedX;

                    // Smoothly move the object towards the desired position
                    //currentCube.transform.position = Vector3.Lerp(currentCube.transform.position, desiredPosition, 0.08f);
                    currentCube.transform.position = desiredPosition;
                }
                if (touch.phase == TouchPhase.Ended)
                {
                        Vector3 shootDirection = currentCube.transform.forward;
                        rb.AddForce(shootDirection * shootForce, ForceMode.Impulse);
                        float distance = Vector3.Distance(spawnPosition.position, currentCube.transform.position);
                        currentCube = null;
                    if (!EndLine.gameOver)
                    {
                        Invoke("SpawnCube", 1f); 
                    }
                }
            }
        }
    }
}
