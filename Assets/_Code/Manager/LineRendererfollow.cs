using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LineRendererfollow : MonoBehaviour
{
    private LineRenderer lineRenderer;
    private Transform objectToFollow;

    void Start()
    {
        lineRenderer = GetComponent<LineRenderer>();
        objectToFollow = transform.parent;
    }

    void Update()
    { 
        if (lineRenderer != null && objectToFollow != null)
        {
            
            UpdateLineRenderer();
        }
    }

    void UpdateLineRenderer()
    {
        
        lineRenderer.SetPosition(0, objectToFollow.position);
        lineRenderer.SetPosition(1, new Vector3(objectToFollow.position.x + 0f, objectToFollow.position.y, objectToFollow.position.z+10f));
    }
}
