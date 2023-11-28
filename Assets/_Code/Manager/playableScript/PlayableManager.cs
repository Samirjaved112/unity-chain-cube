using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using Luna.Unity;
using TMPro;
public class PlayableManager : MonoBehaviour
{
    public static PlayableManager instance;
    public List<GameObject> cubeList = new List<GameObject>();
    [SerializeField] private GameObject startPanel;
    [SerializeField] private GameObject endPanel;
    public bool isGameStart;
    public int cubeCount;
    public static bool isGameOver;
    [SerializeField] private Text startTitleText;
    [SerializeField] private Text endTitleText;
    [SerializeField] private Button installButton;
    [SerializeField] private Text installButtonText;
    //[SerializeField] private TextMeshProUGUI toturialTitle;
    //[SerializeField] private TextMeshProUGUI endPanelTitle;
    ////[SerializeField] private Button installButton;

    [Header("Playground Start Card fields")]
    [LunaPlaygroundField("Tutorial Card Title", 0, "Tutorial Card Details")]
    public string title;
    [LunaPlaygroundField("Tutorial Card Title color", 0, "Tutorial Card Details")]
    public Color titleColor;

    [Header("Playground End Card fields")]

    [LunaPlaygroundField("End Card Title", 1, "End Card Details")]
    public string endTitle;
    [LunaPlaygroundField("End Card Title Color", 1, "End Card Details")]
    public Color endCardTitleColor;

    //[LunaPlaygroundField("End Card installButton Color", 1, "End Card Details")]
    //public Color installButtonColor;
    //[LunaPlaygroundField("End Card install text ", 1, "End Card Details")]
    //public string installText;
    //[LunaPlaygroundField("End Card install color ", 1, "End Card Details")]
    //public Color installColor;
    private void Start()
    {
        if (startTitleText)
        {
            startTitleText.text = title;
            startTitleText.color = titleColor;
        }
        if (endTitleText)
        {
            endTitleText.text = endTitle;
            endTitleText.color = endCardTitleColor;
        }
        //if (installButton)
        //{
        //    installButton.image.color = installButtonColor;
        //    installButtonText.text = installText;
        //    installButtonText.color = installColor;
        //}


    }

    private void Awake()
    {
        //Time.timeScale = 0;
        if (instance == null)
        {
            instance = this;
        }
    }
    private void Update()
    {
        if (Input.touchCount > 0 && !isGameStart)
        {
            Debug.Log("working");
            isGameStart = true;
            StartGame();
        }
    }
    public void StartGame()
    {
        if(startPanel)
        startPanel.SetActive(false);
        EndLine.gameOver = false;
    }
    public IEnumerator EndGame()
    {
        yield return new WaitForSeconds(0.8f);
        Luna.Unity.Playable.InstallFullGame();
        EndLine.gameOver = true;
        endPanel.SetActive(true);
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void InstallGame()
    {
        Application.OpenURL("https://play.google.com/store/apps/details?id=com.colobolo.chainball&hl=en&gl=US");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.netmarble.tog&pcampaignid=merch_published_cluster_promotion_battlestar_browse_all_games&hl=en&gl=US");

    }
    public void RestartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

}
