if ( TRACE ) { TRACE( JSON.parse( '["CubeHandler#init","CubeHandler#Start","CubeHandler#SpawnCube","CubeHandler#Update","CubeProperty#init","CubeProperty#Start","CubeProperty#GenerateNumber","CubeProperty#DisplayNumOnCube","CubeProperty#SwitchColors","CubeProperty#ScaleEffect","CubeProperty#OnCollisionEnter","CubeProperty#AddJumpForce","CubeProperty#OnTriggerExit","CubePropertyhandler#init","CubePropertyhandler#Start","CubePropertyhandler#GenerateNumber","CubePropertyhandler#DisplayNumOnCube","CubePropertyhandler#SwitchColors","CubePropertyhandler#ScaleEffect","CubePropertyhandler#OnCollisionEnter","CubePropertyhandler#AddJumpForce","CubePropertyhandler#OnTriggerExit","EndLine#init","EndLine#OnTriggerExit","EndLine#OnTriggerStay","GameManager#init","GameManager#Awake","LineRendererfollow#Start","LineRendererfollow#Update","LineRendererfollow#UpdateLineRenderer","PlayableManager#init","PlayableManager#Start","PlayableManager#Awake","PlayableManager#Update","PlayableManager#StartGame","PlayableManager#EndGame","PlayableManager#InstallGame","PlayableManager#RestartGame","UIManager#RestartGame"]' ) ); }
/**
 * @version 1.0.8732.17107
 * @copyright anton
 * @compiler Bridge.NET 17.9.40-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CubeHandler start.*/
    Bridge.define("CubeHandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            cube: null,
            currentCube: null,
            spawnPosition: null,
            rb: null,
            shootForce: 0,
            minXLimit: 0,
            maxXLimit: 0,
            movementSpeed: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CubeHandler#init", this ); }

                this.shootForce = 10.0;
                this.minXLimit = -5.0;
                this.maxXLimit = 5.0;
                this.movementSpeed = 20.0;
            }
        },
        methods: {
            /*CubeHandler.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CubeHandler#Start", this ); }

                this.SpawnCube();
            },
            /*CubeHandler.Start end.*/

            /*CubeHandler.SpawnCube start.*/
            SpawnCube: function () {
if ( TRACE ) { TRACE( "CubeHandler#SpawnCube", this ); }

                var $t;
                ($t = PlayableManager.instance).cubeCount = ($t.cubeCount + 1) | 0;
                this.currentCube = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.cube, this.spawnPosition.position.$clone(), pc.Quat.IDENTITY.clone());
                this.rb = this.currentCube.GetComponent(UnityEngine.Rigidbody);
            },
            /*CubeHandler.SpawnCube end.*/

            /*CubeHandler.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CubeHandler#Update", this ); }

                if (UnityEngine.Input.touchCount > 0) {
                    if (UnityEngine.Object.op_Implicit(this.currentCube)) {
                        var touch = UnityEngine.Input.GetTouch(0);
                        if (touch.phase === UnityEngine.TouchPhase.Moved) {
                            var deltaPos = new pc.Vec3( touch.deltaPosition.x, 0, 0 );
                            var desiredPosition = this.currentCube.transform.position.$clone().add( deltaPos.$clone().clone().scale( this.movementSpeed ).clone().scale( UnityEngine.Time.deltaTime ) );

                            // Clamp the desired position to the specified limits
                            var clampedX = Math.max(this.minXLimit, Math.min(desiredPosition.x, this.maxXLimit));
                            desiredPosition.x = clampedX;

                            // Smoothly move the object towards the desired position
                            //currentCube.transform.position = Vector3.Lerp(currentCube.transform.position, desiredPosition, 0.08f);
                            this.currentCube.transform.position = desiredPosition.$clone();
                        }
                        if (touch.phase === UnityEngine.TouchPhase.Ended) {
                            var shootDirection = this.currentCube.transform.forward.$clone();
                            this.rb.AddForce$1(shootDirection.$clone().clone().scale( this.shootForce ), UnityEngine.ForceMode.Impulse);
                            var distance = pc.Vec3.distance( this.spawnPosition.position, this.currentCube.transform.position );
                            this.currentCube = null;
                            if (!EndLine.gameOver) {
                                this.Invoke("SpawnCube", 1.0);
                            }
                        }
                    }
                }
            },
            /*CubeHandler.Update end.*/


        }
    });
    /*CubeHandler end.*/

    /*CubeProperty start.*/
    Bridge.define("CubeProperty", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            numOnCube: 0,
            numLimit: 0,
            numList: null,
            cubeText: null,
            cubeRenderer: null,
            cubeColor: null,
            limitOnCubeNum: 0,
            minDistance: 0,
            targetobject: null,
            jumpDirection: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CubeProperty#init", this ); }

                this.jumpDirection = new UnityEngine.Vector3();
                this.numList = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.limitOnCubeNum = 9;
                this.minDistance = window.Infinity;
            }
        },
        methods: {
            /*CubeProperty.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CubeProperty#Start", this ); }

                this.cubeRenderer = this.GetComponent(UnityEngine.Renderer);
                this.GenerateNumber();
            },
            /*CubeProperty.Start end.*/

            /*CubeProperty.GenerateNumber start.*/
            GenerateNumber: function () {
if ( TRACE ) { TRACE( "CubeProperty#GenerateNumber", this ); }

                var num = Bridge.Int.clip32(Math.pow(2, this.numLimit));
                for (var i = 2; i <= num; i = (i + i) | 0) {
                    this.numList.add(i);
                }
                var index = UnityEngine.Random.Range(0, ((this.numList.Count - this.limitOnCubeNum) | 0));
                this.numOnCube = this.numList.getItem(index);
                this.SwitchColors();
                this.DisplayNumOnCube();
            },
            /*CubeProperty.GenerateNumber end.*/

            /*CubeProperty.DisplayNumOnCube start.*/
            DisplayNumOnCube: function () {
if ( TRACE ) { TRACE( "CubeProperty#DisplayNumOnCube", this ); }

                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    this.cubeText[i].text = Bridge.toString(this.numOnCube);
                }
            },
            /*CubeProperty.DisplayNumOnCube end.*/

            /*CubeProperty.SwitchColors start.*/
            SwitchColors: function () {
if ( TRACE ) { TRACE( "CubeProperty#SwitchColors", this ); }

                for (var i = 2; i <= 512; i = (i + i) | 0) {
                    if (i === this.numOnCube) {
                        var num = i;
                        var power = Bridge.Int.clip32(Math.log(num) / Math.log(2));

                        this.cubeRenderer.material.color = this.cubeColor[((power - 1) | 0)].$clone();
                    }
                }
            },
            /*CubeProperty.SwitchColors end.*/

            /*CubeProperty.ScaleEffect start.*/
            ScaleEffect: function () {
if ( TRACE ) { TRACE( "CubeProperty#ScaleEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // yield return new WaitForSeconds(0.2f);
                                        this.transform.localScale = new pc.Vec3( 2, 2, 2 );
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.transform.localScale = new pc.Vec3( 1.5, 1.5, 1.5 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CubeProperty.ScaleEffect end.*/

            /*CubeProperty.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "CubeProperty#OnCollisionEnter", this ); }

                if (collision.gameObject.CompareTag("Thrown")) {
                    var otherCube = collision.gameObject.GetComponent(CubeProperty);
                    var rb = this.gameObject.GetComponent(UnityEngine.Rigidbody);
                    rb.freezeRotation = false;
                    if (otherCube.numOnCube === this.numOnCube) {
                        if (this.gameObject.GetInstanceID() < otherCube.GetInstanceID()) {

                            rb.velocity = pc.Vec3.ZERO.clone();
                            rb.AddForce$1(pc.Vec3.UP.clone().clone().scale( 4.0 ), UnityEngine.ForceMode.Impulse);
                            var torqueDirection = new pc.Vec3( 1, 1, 1 );
                            rb.AddTorque$1(torqueDirection.$clone().clone().scale( 0.7 ), UnityEngine.ForceMode.Impulse);
                            GameManager.instance.cubeList.remove(otherCube.gameObject);
                            UnityEngine.MonoBehaviour.Destroy(otherCube.gameObject);
                            this.StartCoroutine$1(this.ScaleEffect());
                            this.numOnCube = (otherCube.numOnCube + this.numOnCube) | 0;
                            this.AddJumpForce(this.gameObject);
                            if (this.numOnCube >= 128) {
                                this.limitOnCubeNum = (this.limitOnCubeNum - 1) | 0;
                            }
                            this.SwitchColors();
                            this.DisplayNumOnCube();

                        }
                    }
                    this.gameObject.transform.GetChild(1).gameObject.SetActive(false);
                }
            },
            /*CubeProperty.OnCollisionEnter end.*/

            /*CubeProperty.AddJumpForce start.*/
            AddJumpForce: function (playerObject) {
if ( TRACE ) { TRACE( "CubeProperty#AddJumpForce", this ); }

                for (var i = 0; i < GameManager.instance.cubeList.Count; i = (i + 1) | 0) {
                    if (playerObject.GetComponent(CubeProperty).numOnCube === GameManager.instance.cubeList.getItem(i).GetComponent(CubeProperty).numOnCube && UnityEngine.GameObject.op_Inequality(playerObject, GameManager.instance.cubeList.getItem(i))) {
                        var direction = GameManager.instance.cubeList.getItem(i).transform.position.$clone().sub( playerObject.transform.position );
                        var distance = direction.length();
                        if (distance < this.minDistance) {
                            this.minDistance = distance;
                            this.targetobject = GameManager.instance.cubeList.getItem(i);
                            this.jumpDirection = this.targetobject.transform.position.$clone().sub( playerObject.transform.position );
                        }
                    }
                }
                UnityEngine.Debug.Log$1("working for all");
                playerObject.GetComponent(UnityEngine.Rigidbody).AddForce$1(this.jumpDirection.$clone().clone().scale( 1.0 ), UnityEngine.ForceMode.Impulse);

            },
            /*CubeProperty.AddJumpForce end.*/

            /*CubeProperty.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "CubeProperty#OnTriggerExit", this ); }

                if (other.gameObject.CompareTag("FinishLine")) {
                    GameManager.instance.cubeList.add(this.gameObject);

                }
            },
            /*CubeProperty.OnTriggerExit end.*/


        }
    });
    /*CubeProperty end.*/

    /*CubePropertyhandler start.*/
    Bridge.define("CubePropertyhandler", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            numOnCube: 0,
            numLimit: 0,
            numList: null,
            cubeText: null,
            cubeRenderer: null,
            cubeColor: null,
            limitOnCubeNum: 0,
            minDistance: 0,
            targetobject: null,
            jumpDirection: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#init", this ); }

                this.jumpDirection = new UnityEngine.Vector3();
                this.numList = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.limitOnCubeNum = 9;
                this.minDistance = window.Infinity;
            }
        },
        methods: {
            /*CubePropertyhandler.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#Start", this ); }

                this.cubeRenderer = this.GetComponent(UnityEngine.Renderer);
                this.GenerateNumber();
            },
            /*CubePropertyhandler.Start end.*/

            /*CubePropertyhandler.GenerateNumber start.*/
            GenerateNumber: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#GenerateNumber", this ); }

                var num = Bridge.Int.clip32(Math.pow(2, this.numLimit));
                for (var i = 2; i <= num; i = (i + i) | 0) {
                    this.numList.add(i);
                }
                var index = UnityEngine.Random.Range(5, ((this.numList.Count - 1) | 0));
                this.numOnCube = this.numList.getItem(index);
                this.SwitchColors();
                this.DisplayNumOnCube();
            },
            /*CubePropertyhandler.GenerateNumber end.*/

            /*CubePropertyhandler.DisplayNumOnCube start.*/
            DisplayNumOnCube: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#DisplayNumOnCube", this ); }

                for (var i = 0; i < 6; i = (i + 1) | 0) {
                    this.cubeText[i].text = Bridge.toString(this.numOnCube);
                }
            },
            /*CubePropertyhandler.DisplayNumOnCube end.*/

            /*CubePropertyhandler.SwitchColors start.*/
            SwitchColors: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#SwitchColors", this ); }

                for (var i = 2; i <= 512; i = (i + i) | 0) {
                    if (i === this.numOnCube) {
                        var num = i;
                        var power = Bridge.Int.clip32(Math.log(num) / Math.log(2));

                        this.cubeRenderer.material.color = this.cubeColor[((power - 1) | 0)].$clone();
                    }
                }
            },
            /*CubePropertyhandler.SwitchColors end.*/

            /*CubePropertyhandler.ScaleEffect start.*/
            ScaleEffect: function () {
if ( TRACE ) { TRACE( "CubePropertyhandler#ScaleEffect", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    // yield return new WaitForSeconds(0.2f);
                                        this.transform.localScale = new pc.Vec3( 2, 2, 2 );
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.2);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.transform.localScale = new pc.Vec3( 1.5, 1.5, 1.5 );

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CubePropertyhandler.ScaleEffect end.*/

            /*CubePropertyhandler.OnCollisionEnter start.*/
            OnCollisionEnter: function (collision) {
if ( TRACE ) { TRACE( "CubePropertyhandler#OnCollisionEnter", this ); }

                if (this.numOnCube === 2048 || PlayableManager.instance.cubeCount >= 4) {
                    if (collision.gameObject.CompareTag("Thrown")) {

                        this.StartCoroutine$1(PlayableManager.instance.EndGame());
                    }
                } else {

                    if (collision.gameObject.CompareTag("Thrown")) {
                        var otherCube = collision.gameObject.GetComponent(CubePropertyhandler);
                        var rb = this.gameObject.GetComponent(UnityEngine.Rigidbody);
                        rb.freezeRotation = false;
                        if (otherCube.numOnCube === this.numOnCube) {
                            if (this.gameObject.GetInstanceID() < otherCube.GetInstanceID()) {

                                rb.velocity = pc.Vec3.ZERO.clone();
                                rb.AddForce$1(pc.Vec3.UP.clone().clone().scale( 4.0 ), UnityEngine.ForceMode.Impulse);
                                var torqueDirection = new pc.Vec3( 1, 1, 1 );
                                rb.AddTorque$1(torqueDirection.$clone().clone().scale( 0.7 ), UnityEngine.ForceMode.Impulse);
                                PlayableManager.instance.cubeList.remove(otherCube.gameObject);
                                UnityEngine.MonoBehaviour.Destroy(otherCube.gameObject);
                                this.StartCoroutine$1(this.ScaleEffect());
                                this.numOnCube = (otherCube.numOnCube + this.numOnCube) | 0;
                                this.AddJumpForce(this.gameObject);
                                if (this.numOnCube >= 128) {
                                    this.limitOnCubeNum = (this.limitOnCubeNum - 1) | 0;
                                }
                                this.SwitchColors();
                                this.DisplayNumOnCube();

                            }
                        }
                        this.gameObject.transform.GetChild(1).gameObject.SetActive(false);
                    }
                }

            },
            /*CubePropertyhandler.OnCollisionEnter end.*/

            /*CubePropertyhandler.AddJumpForce start.*/
            AddJumpForce: function (playerObject) {
if ( TRACE ) { TRACE( "CubePropertyhandler#AddJumpForce", this ); }

                for (var i = 0; i < PlayableManager.instance.cubeList.Count; i = (i + 1) | 0) {
                    if (playerObject.GetComponent(CubePropertyhandler).numOnCube === PlayableManager.instance.cubeList.getItem(i).GetComponent(CubePropertyhandler).numOnCube && UnityEngine.GameObject.op_Inequality(playerObject, PlayableManager.instance.cubeList.getItem(i))) {
                        var direction = PlayableManager.instance.cubeList.getItem(i).transform.position.$clone().sub( playerObject.transform.position );
                        var distance = direction.length();
                        if (distance < this.minDistance) {
                            this.minDistance = distance;
                            this.targetobject = PlayableManager.instance.cubeList.getItem(i);
                            this.jumpDirection = this.targetobject.transform.position.$clone().sub( playerObject.transform.position );
                        }
                    }
                }
                UnityEngine.Debug.Log$1("working for all");
                playerObject.GetComponent(UnityEngine.Rigidbody).AddForce$1(this.jumpDirection.$clone().clone().scale( 1.0 ), UnityEngine.ForceMode.Impulse);

            },
            /*CubePropertyhandler.AddJumpForce end.*/

            /*CubePropertyhandler.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "CubePropertyhandler#OnTriggerExit", this ); }

                if (other.gameObject.CompareTag("FinishLine")) {
                    PlayableManager.instance.cubeList.add(this.gameObject);

                }
            },
            /*CubePropertyhandler.OnTriggerExit end.*/


        }
    });
    /*CubePropertyhandler end.*/

    /*CubePropertyManager start.*/
    Bridge.define("CubePropertyManager", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*CubePropertyManager end.*/

    /*EndLine start.*/
    Bridge.define("EndLine", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                gameOver: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "EndLine#init", this ); }

                    this.gameOver = false;
                }
            }
        },
        methods: {
            /*EndLine.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "EndLine#OnTriggerExit", this ); }


                if (other.gameObject.CompareTag("Cube")) {
                    other.gameObject.transform.GetChild(0).gameObject.SetActive(false);
                    other.gameObject.transform.GetChild(1).gameObject.SetActive(true);
                    other.gameObject.tag = "Thrown";

                }
            },
            /*EndLine.OnTriggerExit end.*/

            /*EndLine.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "EndLine#OnTriggerStay", this ); }

                if (other.gameObject.CompareTag("Thrown")) {

                    EndLine.gameOver = true;
                }
            },
            /*EndLine.OnTriggerStay end.*/


        }
    });
    /*EndLine end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            cubeList: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "GameManager#init", this ); }

                this.cubeList = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameManager#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.instance, null)) {
                    GameManager.instance = this;
                }
            },
            /*GameManager.Awake end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LineRendererfollow start.*/
    Bridge.define("LineRendererfollow", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            lineRenderer: null,
            objectToFollow: null
        },
        methods: {
            /*LineRendererfollow.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LineRendererfollow#Start", this ); }

                this.lineRenderer = this.GetComponent(UnityEngine.LineRenderer);
                this.objectToFollow = this.transform.parent;
            },
            /*LineRendererfollow.Start end.*/

            /*LineRendererfollow.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LineRendererfollow#Update", this ); }

                if (UnityEngine.Component.op_Inequality(this.lineRenderer, null) && UnityEngine.Component.op_Inequality(this.objectToFollow, null)) {

                    this.UpdateLineRenderer();
                }
            },
            /*LineRendererfollow.Update end.*/

            /*LineRendererfollow.UpdateLineRenderer start.*/
            UpdateLineRenderer: function () {
if ( TRACE ) { TRACE( "LineRendererfollow#UpdateLineRenderer", this ); }


                this.lineRenderer.SetPosition(0, this.objectToFollow.position.$clone());
                this.lineRenderer.SetPosition(1, new pc.Vec3( this.objectToFollow.position.x + 0.0, this.objectToFollow.position.y, this.objectToFollow.position.z + 10.0 ));
            },
            /*LineRendererfollow.UpdateLineRenderer end.*/


        }
    });
    /*LineRendererfollow end.*/

    /*PlayableManager start.*/
    Bridge.define("PlayableManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null,
                isGameOver: false
            }
        },
        fields: {
            cubeList: null,
            startPanel: null,
            endPanel: null,
            isGameStart: false,
            cubeCount: 0,
            startTitleText: null,
            endTitleText: null,
            installButton: null,
            installButtonText: null,
            /**
             * @instance
             * @public
             * @memberof PlayableManager
             * @type string
             */
            title: null,
            titleColor: null,
            endTitle: null,
            endCardTitleColor: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayableManager#init", this ); }

                this.titleColor = new UnityEngine.Color();
                this.endCardTitleColor = new UnityEngine.Color();
                this.cubeList = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*PlayableManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayableManager#Start", this ); }

                if (UnityEngine.Object.op_Implicit(this.startTitleText)) {
                    this.startTitleText.text = this.title;
                    this.startTitleText.color = this.titleColor.$clone();
                }
                if (UnityEngine.Object.op_Implicit(this.endTitleText)) {
                    this.endTitleText.text = this.endTitle;
                    this.endTitleText.color = this.endCardTitleColor.$clone();
                }
                //if (installButton)
                //{
                //    installButton.image.color = installButtonColor;
                //    installButtonText.text = installText;
                //    installButtonText.color = installColor;
                //}


            },
            /*PlayableManager.Start end.*/

            /*PlayableManager.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "PlayableManager#Awake", this ); }

                //Time.timeScale = 0;
                if (UnityEngine.MonoBehaviour.op_Equality(PlayableManager.instance, null)) {
                    PlayableManager.instance = this;
                }
            },
            /*PlayableManager.Awake end.*/

            /*PlayableManager.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayableManager#Update", this ); }

                if (UnityEngine.Input.touchCount > 0 && !this.isGameStart) {
                    UnityEngine.Debug.Log$1("working");
                    this.isGameStart = true;
                    this.StartGame();
                }
            },
            /*PlayableManager.Update end.*/

            /*PlayableManager.StartGame start.*/
            StartGame: function () {
if ( TRACE ) { TRACE( "PlayableManager#StartGame", this ); }

                if (UnityEngine.Object.op_Implicit(this.startPanel)) {
                    this.startPanel.SetActive(false);
                }
                EndLine.gameOver = false;
            },
            /*PlayableManager.StartGame end.*/

            /*PlayableManager.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "PlayableManager#EndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(0.8);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    Luna.Unity.Playable.InstallFullGame();
                                        EndLine.gameOver = true;
                                        this.endPanel.SetActive(true);
                                        Luna.Unity.LifeCycle.GameEnded();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayableManager.EndGame end.*/

            /*PlayableManager.InstallGame start.*/
            InstallGame: function () {
if ( TRACE ) { TRACE( "PlayableManager#InstallGame", this ); }

                UnityEngine.Application.OpenURL("https://play.google.com/store/apps/details?id=com.colobolo.chainball&hl=en&gl=US");
                Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.netmarble.tog&pcampaignid=merch_published_cluster_promotion_battlestar_browse_all_games&hl=en&gl=US");

            },
            /*PlayableManager.InstallGame end.*/

            /*PlayableManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "PlayableManager#RestartGame", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2(UnityEngine.SceneManagement.SceneManager.GetActiveScene().name);
            },
            /*PlayableManager.RestartGame end.*/


        }
    });
    /*PlayableManager end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*UIManager.RestartGame start.*/
            RestartGame: function () {
if ( TRACE ) { TRACE( "UIManager#RestartGame", this ); }

                UnityEngine.SceneManagement.SceneManager.LoadScene$2("GamePlay");
            },
            /*UIManager.RestartGame end.*/


        }
    });
    /*UIManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections.Generic","System.Collections","UnityEngine.UI"];

    /*CubeHandler start.*/
    $m("CubeHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SpawnCube","t":8,"sn":"SpawnCube","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cube","t":4,"rt":$n[1].GameObject,"sn":"cube"},{"a":1,"n":"currentCube","t":4,"rt":$n[1].GameObject,"sn":"currentCube"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"maxXLimit","t":4,"rt":$n[0].Single,"sn":"maxXLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"minXLimit","t":4,"rt":$n[0].Single,"sn":"minXLimit","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movementSpeed","t":4,"rt":$n[0].Single,"sn":"movementSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"rb","t":4,"rt":$n[1].Rigidbody,"sn":"rb"},{"a":2,"n":"shootForce","t":4,"rt":$n[0].Single,"sn":"shootForce","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"spawnPosition","t":4,"rt":$n[1].Transform,"sn":"spawnPosition"}]}; }, $n);
    /*CubeHandler end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"cubeList","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"cubeList"},{"a":2,"n":"instance","is":true,"t":4,"rt":GameManager,"sn":"instance"}]}; }, $n);
    /*GameManager end.*/

    /*CubeProperty start.*/
    $m("CubeProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddJumpForce","t":8,"pi":[{"n":"playerObject","pt":$n[1].GameObject,"ps":0}],"sn":"AddJumpForce","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"DisplayNumOnCube","t":8,"sn":"DisplayNumOnCube","rt":$n[0].Void},{"a":1,"n":"GenerateNumber","t":8,"sn":"GenerateNumber","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"ScaleEffect","t":8,"sn":"ScaleEffect","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SwitchColors","t":8,"sn":"SwitchColors","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeColor","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"cubeColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeRenderer","t":4,"rt":$n[1].Renderer,"sn":"cubeRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeText","t":4,"rt":System.Array.type(TMPro.TextMeshProUGUI),"sn":"cubeText"},{"a":1,"n":"jumpDirection","t":4,"rt":$n[1].Vector3,"sn":"jumpDirection"},{"a":1,"n":"limitOnCubeNum","t":4,"rt":$n[0].Int32,"sn":"limitOnCubeNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"minDistance","t":4,"rt":$n[0].Single,"sn":"minDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numLimit","t":4,"rt":$n[0].Int32,"sn":"numLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"numList","t":4,"rt":$n[2].List$1(System.Int32),"sn":"numList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numOnCube","t":4,"rt":$n[0].Int32,"sn":"numOnCube","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"targetobject","t":4,"rt":$n[1].GameObject,"sn":"targetobject"}]}; }, $n);
    /*CubeProperty end.*/

    /*CubePropertyManager start.*/
    $m("CubePropertyManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*CubePropertyManager end.*/

    /*EndLine start.*/
    $m("EndLine", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"gameOver","is":true,"t":4,"rt":$n[0].Boolean,"sn":"gameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*EndLine end.*/

    /*LineRendererfollow start.*/
    $m("LineRendererfollow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateLineRenderer","t":8,"sn":"UpdateLineRenderer","rt":$n[0].Void},{"a":1,"n":"lineRenderer","t":4,"rt":$n[1].LineRenderer,"sn":"lineRenderer"},{"a":1,"n":"objectToFollow","t":4,"rt":$n[1].Transform,"sn":"objectToFollow"}]}; }, $n);
    /*LineRendererfollow end.*/

    /*CubePropertyhandler start.*/
    $m("CubePropertyhandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AddJumpForce","t":8,"pi":[{"n":"playerObject","pt":$n[1].GameObject,"ps":0}],"sn":"AddJumpForce","rt":$n[0].Void,"p":[$n[1].GameObject]},{"a":1,"n":"DisplayNumOnCube","t":8,"sn":"DisplayNumOnCube","rt":$n[0].Void},{"a":1,"n":"GenerateNumber","t":8,"sn":"GenerateNumber","rt":$n[0].Void},{"a":1,"n":"OnCollisionEnter","t":8,"pi":[{"n":"collision","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionEnter","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"ScaleEffect","t":8,"sn":"ScaleEffect","rt":$n[3].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"SwitchColors","t":8,"sn":"SwitchColors","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeColor","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"cubeColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeRenderer","t":4,"rt":$n[1].Renderer,"sn":"cubeRenderer"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cubeText","t":4,"rt":System.Array.type(TMPro.TextMeshProUGUI),"sn":"cubeText"},{"a":1,"n":"jumpDirection","t":4,"rt":$n[1].Vector3,"sn":"jumpDirection"},{"a":1,"n":"limitOnCubeNum","t":4,"rt":$n[0].Int32,"sn":"limitOnCubeNum","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"minDistance","t":4,"rt":$n[0].Single,"sn":"minDistance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numLimit","t":4,"rt":$n[0].Int32,"sn":"numLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"numList","t":4,"rt":$n[2].List$1(System.Int32),"sn":"numList"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"numOnCube","t":4,"rt":$n[0].Int32,"sn":"numOnCube","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"targetobject","t":4,"rt":$n[1].GameObject,"sn":"targetobject"}]}; }, $n);
    /*CubePropertyhandler end.*/

    /*PlayableManager start.*/
    $m("PlayableManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[3].IEnumerator},{"a":2,"n":"InstallGame","t":8,"sn":"InstallGame","rt":$n[0].Void},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StartGame","t":8,"sn":"StartGame","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"cubeCount","t":4,"rt":$n[0].Int32,"sn":"cubeCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"cubeList","t":4,"rt":$n[2].List$1(UnityEngine.GameObject),"sn":"cubeList"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("End Card Title Color", 1, "End Card Details", false, null)],"a":2,"n":"endCardTitleColor","t":4,"rt":$n[1].Color,"sn":"endCardTitleColor"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endPanel","t":4,"rt":$n[1].GameObject,"sn":"endPanel"},{"at":[new UnityEngine.HeaderAttribute("Playground End Card fields"),new UnityEngine.LunaPlaygroundFieldAttribute("End Card Title", 1, "End Card Details", false, null)],"a":2,"n":"endTitle","t":4,"rt":$n[0].String,"sn":"endTitle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"endTitleText","t":4,"rt":$n[4].Text,"sn":"endTitleText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"installButton","t":4,"rt":$n[4].Button,"sn":"installButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"installButtonText","t":4,"rt":$n[4].Text,"sn":"installButtonText"},{"a":2,"n":"instance","is":true,"t":4,"rt":PlayableManager,"sn":"instance"},{"a":2,"n":"isGameOver","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isGameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isGameStart","t":4,"rt":$n[0].Boolean,"sn":"isGameStart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startPanel","t":4,"rt":$n[1].GameObject,"sn":"startPanel"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startTitleText","t":4,"rt":$n[4].Text,"sn":"startTitleText"},{"at":[new UnityEngine.HeaderAttribute("Playground Start Card fields"),new UnityEngine.LunaPlaygroundFieldAttribute("Tutorial Card Title", 0, "Tutorial Card Details", false, null)],"a":2,"n":"title","t":4,"rt":$n[0].String,"sn":"title"},{"at":[new UnityEngine.LunaPlaygroundFieldAttribute("Tutorial Card Title color", 0, "Tutorial Card Details", false, null)],"a":2,"n":"titleColor","t":4,"rt":$n[1].Color,"sn":"titleColor"}]}; }, $n);
    /*PlayableManager end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"RestartGame","t":8,"sn":"RestartGame","rt":$n[0].Void}]}; }, $n);
    /*UIManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
