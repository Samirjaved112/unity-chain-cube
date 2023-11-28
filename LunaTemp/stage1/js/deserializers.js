var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSpring' )
  var i547 = data
  i546.spring = i547[0]
  i546.damper = i547[1]
  i546.targetPosition = i547[2]
  return i546
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor' )
  var i549 = data
  i548.m_TargetVelocity = i549[0]
  i548.m_Force = i549[1]
  i548.m_FreeSpin = i549[2]
  return i548
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointLimits' )
  var i551 = data
  i550.m_Min = i551[0]
  i550.m_Max = i551[1]
  i550.m_Bounciness = i551[2]
  i550.m_BounceMinVelocity = i551[3]
  i550.m_ContactDistance = i551[4]
  i550.minBounce = i551[5]
  i550.maxBounce = i551[6]
  return i550
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointDrive' )
  var i553 = data
  i552.m_PositionSpring = i553[0]
  i552.m_PositionDamper = i553[1]
  i552.m_MaximumForce = i553[2]
  return i552
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i555 = data
  i554.m_Spring = i555[0]
  i554.m_Damper = i555[1]
  return i554
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i557 = data
  i556.m_Limit = i557[0]
  i556.m_Bounciness = i557[1]
  i556.m_ContactDistance = i557[2]
  return i556
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i559 = data
  i558.m_ExtremumSlip = i559[0]
  i558.m_ExtremumValue = i559[1]
  i558.m_AsymptoteSlip = i559[2]
  i558.m_AsymptoteValue = i559[3]
  i558.m_Stiffness = i559[4]
  return i558
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i561 = data
  i560.m_LowerAngle = i561[0]
  i560.m_UpperAngle = i561[1]
  return i560
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i563 = data
  i562.m_MotorSpeed = i563[0]
  i562.m_MaximumMotorTorque = i563[1]
  return i562
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i565 = data
  i564.m_DampingRatio = i565[0]
  i564.m_Frequency = i565[1]
  i564.m_Angle = i565[2]
  return i564
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i567 = data
  i566.m_LowerTranslation = i567[0]
  i566.m_UpperTranslation = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i568 = root || new pc.UnityMaterial()
  var i569 = data
  i568.name = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'shader')
  i568.renderQueue = i569[3]
  i568.enableInstancing = !!i569[4]
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i571[i + 0]) );
  }
  i568.floatParameters = i570
  var i573 = i569[6]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i573[i + 0]) );
  }
  i568.colorParameters = i572
  var i575 = i569[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i575[i + 0]) );
  }
  i568.vectorParameters = i574
  var i577 = i569[8]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i577[i + 0]) );
  }
  i568.textureParameters = i576
  var i579 = i569[9]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i579[i + 0]) );
  }
  i568.materialFlags = i578
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = new pc.Color(i587[1], i587[2], i587[3], i587[4])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = new pc.Vec4( i591[1], i591[2], i591[3], i591[4] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i595 = data
  i594.name = i595[0]
  request.r(i595[1], i595[2], 0, i594, 'value')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i599 = data
  i598.name = i599[0]
  i598.enabled = !!i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i601 = data
  i600.position = new pc.Vec3( i601[0], i601[1], i601[2] )
  i600.scale = new pc.Vec3( i601[3], i601[4], i601[5] )
  i600.rotation = new pc.Quat(i601[6], i601[7], i601[8], i601[9])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'sharedMesh')
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'additionalVertexStreams')
  i604.enabled = !!i605[2]
  request.r(i605[3], i605[4], 0, i604, 'sharedMaterial')
  var i607 = i605[5]
  var i606 = []
  for(var i = 0; i < i607.length; i += 2) {
  request.r(i607[i + 0], i607[i + 1], 2, i606, '')
  }
  i604.sharedMaterials = i606
  i604.receiveShadows = !!i605[6]
  i604.shadowCastingMode = i605[7]
  i604.sortingLayerID = i605[8]
  i604.sortingOrder = i605[9]
  i604.lightmapIndex = i605[10]
  i604.lightmapSceneIndex = i605[11]
  i604.lightmapScaleOffset = new pc.Vec4( i605[12], i605[13], i605[14], i605[15] )
  i604.lightProbeUsage = i605[16]
  i604.reflectionProbeUsage = i605[17]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i611 = data
  i610.center = new pc.Vec3( i611[0], i611[1], i611[2] )
  i610.size = new pc.Vec3( i611[3], i611[4], i611[5] )
  i610.enabled = !!i611[6]
  i610.isTrigger = !!i611[7]
  request.r(i611[8], i611[9], 0, i610, 'material')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tagId = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i615 = data
  i614.enabled = !!i615[0]
  request.r(i615[1], i615[2], 0, i614, 'sharedMaterial')
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 2) {
  request.r(i617[i + 0], i617[i + 1], 2, i616, '')
  }
  i614.sharedMaterials = i616
  i614.receiveShadows = !!i615[4]
  i614.shadowCastingMode = i615[5]
  i614.sortingLayerID = i615[6]
  i614.sortingOrder = i615[7]
  i614.lightmapIndex = i615[8]
  i614.lightmapSceneIndex = i615[9]
  i614.lightmapScaleOffset = new pc.Vec4( i615[10], i615[11], i615[12], i615[13] )
  i614.lightProbeUsage = i615[14]
  i614.reflectionProbeUsage = i615[15]
  i614.color = new pc.Color(i615[16], i615[17], i615[18], i615[19])
  request.r(i615[20], i615[21], 0, i614, 'sprite')
  i614.flipX = !!i615[22]
  i614.flipY = !!i615[23]
  i614.drawMode = i615[24]
  i614.size = new pc.Vec2( i615[25], i615[26] )
  i614.tileMode = i615[27]
  i614.adaptiveModeThreshold = i615[28]
  i614.maskInteraction = i615[29]
  i614.spriteSortPoint = i615[30]
  return i614
}

Deserializers["EndLine"] = function (request, data, root) {
  var i618 = root || request.c( 'EndLine' )
  var i619 = data
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i621 = data
  i620.name = i621[0]
  i620.halfPrecision = !!i621[1]
  i620.vertexCount = i621[2]
  i620.aabb = i621[3]
  var i623 = i621[4]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( !!i623[i + 0] );
  }
  i620.streams = i622
  i620.vertices = i621[5]
  var i625 = i621[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i625[i + 0]) );
  }
  i620.subMeshes = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 16) {
    i626.push( new pc.Mat4().setData(i627[i + 0], i627[i + 1], i627[i + 2], i627[i + 3],  i627[i + 4], i627[i + 5], i627[i + 6], i627[i + 7],  i627[i + 8], i627[i + 9], i627[i + 10], i627[i + 11],  i627[i + 12], i627[i + 13], i627[i + 14], i627[i + 15]) );
  }
  i620.bindposes = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i629[i + 0]) );
  }
  i620.blendShapes = i628
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i635 = data
  i634.triangles = i635[0]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i641 = data
  i640.name = i641[0]
  var i643 = i641[1]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i643[i + 0]) );
  }
  i640.frames = i642
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i645 = data
  i644.name = i645[0]
  i644.width = i645[1]
  i644.height = i645[2]
  i644.mipmapCount = i645[3]
  i644.anisoLevel = i645[4]
  i644.filterMode = i645[5]
  i644.hdr = !!i645[6]
  i644.format = i645[7]
  i644.wrapMode = i645[8]
  i644.alphaIsTransparency = !!i645[9]
  i644.alphaSource = i645[10]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i647 = data
  i646.mass = i647[0]
  i646.drag = i647[1]
  i646.angularDrag = i647[2]
  i646.useGravity = !!i647[3]
  i646.isKinematic = !!i647[4]
  i646.constraints = i647[5]
  i646.maxAngularVelocity = i647[6]
  i646.collisionDetectionMode = i647[7]
  i646.interpolation = i647[8]
  return i646
}

Deserializers["CubePropertyhandler"] = function (request, data, root) {
  var i648 = root || request.c( 'CubePropertyhandler' )
  var i649 = data
  i648.numOnCube = i649[0]
  i648.numLimit = i649[1]
  var i651 = i649[2]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.cubeText = i650
  request.r(i649[3], i649[4], 0, i648, 'cubeRenderer')
  var i653 = i649[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 4) {
    i652.push( new pc.Color(i653[i + 0], i653[i + 1], i653[i + 2], i653[i + 3]) );
  }
  i648.cubeColor = i652
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i659 = data
  i658.textureMode = i659[0]
  i658.alignment = i659[1]
  i658.widthCurve = new pc.AnimationCurve( { keys_flow: i659[2] } )
  i658.colorGradient = i659[3] ? new pc.ColorGradient(i659[3][0], i659[3][1], i659[3][2]) : null
  var i661 = i659[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 3) {
    i660.push( new pc.Vec3( i661[i + 0], i661[i + 1], i661[i + 2] ) );
  }
  i658.positions = i660
  i658.positionCount = i659[5]
  i658.widthMultiplier = i659[6]
  i658.startWidth = i659[7]
  i658.endWidth = i659[8]
  i658.numCornerVertices = i659[9]
  i658.numCapVertices = i659[10]
  i658.useWorldSpace = !!i659[11]
  i658.loop = !!i659[12]
  i658.startColor = new pc.Color(i659[13], i659[14], i659[15], i659[16])
  i658.endColor = new pc.Color(i659[17], i659[18], i659[19], i659[20])
  i658.generateLightingData = !!i659[21]
  i658.enabled = !!i659[22]
  request.r(i659[23], i659[24], 0, i658, 'sharedMaterial')
  var i663 = i659[25]
  var i662 = []
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 2, i662, '')
  }
  i658.sharedMaterials = i662
  i658.receiveShadows = !!i659[26]
  i658.shadowCastingMode = i659[27]
  i658.sortingLayerID = i659[28]
  i658.sortingOrder = i659[29]
  i658.lightmapIndex = i659[30]
  i658.lightmapSceneIndex = i659[31]
  i658.lightmapScaleOffset = new pc.Vec4( i659[32], i659[33], i659[34], i659[35] )
  i658.lightProbeUsage = i659[36]
  i658.reflectionProbeUsage = i659[37]
  return i658
}

Deserializers["LineRendererfollow"] = function (request, data, root) {
  var i666 = root || request.c( 'LineRendererfollow' )
  var i667 = data
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i669 = data
  i668.enabled = !!i669[0]
  request.r(i669[1], i669[2], 0, i668, 'sharedMaterial')
  var i671 = i669[3]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.sharedMaterials = i670
  i668.receiveShadows = !!i669[4]
  i668.shadowCastingMode = i669[5]
  i668.sortingLayerID = i669[6]
  i668.sortingOrder = i669[7]
  i668.lightmapIndex = i669[8]
  i668.lightmapSceneIndex = i669[9]
  i668.lightmapScaleOffset = new pc.Vec4( i669[10], i669[11], i669[12], i669[13] )
  i668.lightProbeUsage = i669[14]
  i668.reflectionProbeUsage = i669[15]
  var i673 = i669[16]
  var i672 = []
  for(var i = 0; i < i673.length; i += 3) {
    i672.push( new pc.Vec3( i673[i + 0], i673[i + 1], i673[i + 2] ) );
  }
  i668.positions = i672
  i668.positionCount = i669[17]
  i668.time = i669[18]
  i668.startWidth = i669[19]
  i668.endWidth = i669[20]
  i668.widthMultiplier = i669[21]
  i668.autodestruct = !!i669[22]
  i668.emitting = !!i669[23]
  i668.numCornerVertices = i669[24]
  i668.numCapVertices = i669[25]
  i668.minVertexDistance = i669[26]
  i668.colorGradient = i669[27] ? new pc.ColorGradient(i669[27][0], i669[27][1], i669[27][2]) : null
  i668.startColor = new pc.Color(i669[28], i669[29], i669[30], i669[31])
  i668.endColor = new pc.Color(i669[32], i669[33], i669[34], i669[35])
  i668.generateLightingData = !!i669[36]
  i668.textureMode = i669[37]
  i668.alignment = i669[38]
  i668.widthCurve = new pc.AnimationCurve( { keys_flow: i669[39] } )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i675 = data
  i674.pivot = new pc.Vec2( i675[0], i675[1] )
  i674.anchorMin = new pc.Vec2( i675[2], i675[3] )
  i674.anchorMax = new pc.Vec2( i675[4], i675[5] )
  i674.sizeDelta = new pc.Vec2( i675[6], i675[7] )
  i674.anchoredPosition3D = new pc.Vec3( i675[8], i675[9], i675[10] )
  i674.rotation = new pc.Quat(i675[11], i675[12], i675[13], i675[14])
  i674.scale = new pc.Vec3( i675[15], i675[16], i675[17] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i677 = data
  i676.enabled = !!i677[0]
  i676.planeDistance = i677[1]
  i676.referencePixelsPerUnit = i677[2]
  i676.isFallbackOverlay = !!i677[3]
  i676.renderMode = i677[4]
  i676.renderOrder = i677[5]
  i676.sortingLayerName = i677[6]
  i676.sortingOrder = i677[7]
  i676.scaleFactor = i677[8]
  request.r(i677[9], i677[10], 0, i676, 'worldCamera')
  i676.overrideSorting = !!i677[11]
  i676.pixelPerfect = !!i677[12]
  i676.targetDisplay = i677[13]
  i676.overridePixelPerfect = !!i677[14]
  return i676
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i679 = data
  i678.m_UiScaleMode = i679[0]
  i678.m_ReferencePixelsPerUnit = i679[1]
  i678.m_ScaleFactor = i679[2]
  i678.m_ReferenceResolution = new pc.Vec2( i679[3], i679[4] )
  i678.m_ScreenMatchMode = i679[5]
  i678.m_MatchWidthOrHeight = i679[6]
  i678.m_PhysicalUnit = i679[7]
  i678.m_FallbackScreenDPI = i679[8]
  i678.m_DefaultSpriteDPI = i679[9]
  i678.m_DynamicPixelsPerUnit = i679[10]
  i678.m_PresetInfoIsWorld = !!i679[11]
  return i678
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i681 = data
  i680.m_IgnoreReversedGraphics = !!i681[0]
  i680.m_BlockingObjects = i681[1]
  i680.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i681[2] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i683 = data
  i682.cullTransparentMesh = !!i683[0]
  return i682
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i684 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i685 = data
  i684.m_hasFontAssetChanged = !!i685[0]
  request.r(i685[1], i685[2], 0, i684, 'm_baseMaterial')
  i684.m_maskOffset = new pc.Vec4( i685[3], i685[4], i685[5], i685[6] )
  i684.m_text = i685[7]
  i684.m_isRightToLeft = !!i685[8]
  request.r(i685[9], i685[10], 0, i684, 'm_fontAsset')
  request.r(i685[11], i685[12], 0, i684, 'm_sharedMaterial')
  var i687 = i685[13]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.m_fontSharedMaterials = i686
  request.r(i685[14], i685[15], 0, i684, 'm_fontMaterial')
  var i689 = i685[16]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i684.m_fontMaterials = i688
  i684.m_fontColor32 = UnityEngine.Color32.ConstructColor(i685[17], i685[18], i685[19], i685[20])
  i684.m_fontColor = new pc.Color(i685[21], i685[22], i685[23], i685[24])
  i684.m_enableVertexGradient = !!i685[25]
  i684.m_colorMode = i685[26]
  i684.m_fontColorGradient = request.d('TMPro.VertexGradient', i685[27], i684.m_fontColorGradient)
  request.r(i685[28], i685[29], 0, i684, 'm_fontColorGradientPreset')
  request.r(i685[30], i685[31], 0, i684, 'm_spriteAsset')
  i684.m_tintAllSprites = !!i685[32]
  request.r(i685[33], i685[34], 0, i684, 'm_StyleSheet')
  i684.m_TextStyleHashCode = i685[35]
  i684.m_overrideHtmlColors = !!i685[36]
  i684.m_faceColor = UnityEngine.Color32.ConstructColor(i685[37], i685[38], i685[39], i685[40])
  i684.m_fontSize = i685[41]
  i684.m_fontSizeBase = i685[42]
  i684.m_fontWeight = i685[43]
  i684.m_enableAutoSizing = !!i685[44]
  i684.m_fontSizeMin = i685[45]
  i684.m_fontSizeMax = i685[46]
  i684.m_fontStyle = i685[47]
  i684.m_HorizontalAlignment = i685[48]
  i684.m_VerticalAlignment = i685[49]
  i684.m_textAlignment = i685[50]
  i684.m_characterSpacing = i685[51]
  i684.m_wordSpacing = i685[52]
  i684.m_lineSpacing = i685[53]
  i684.m_lineSpacingMax = i685[54]
  i684.m_paragraphSpacing = i685[55]
  i684.m_charWidthMaxAdj = i685[56]
  i684.m_enableWordWrapping = !!i685[57]
  i684.m_wordWrappingRatios = i685[58]
  i684.m_overflowMode = i685[59]
  request.r(i685[60], i685[61], 0, i684, 'm_linkedTextComponent')
  request.r(i685[62], i685[63], 0, i684, 'parentLinkedComponent')
  i684.m_enableKerning = !!i685[64]
  i684.m_enableExtraPadding = !!i685[65]
  i684.checkPaddingRequired = !!i685[66]
  i684.m_isRichText = !!i685[67]
  i684.m_parseCtrlCharacters = !!i685[68]
  i684.m_isOrthographic = !!i685[69]
  i684.m_isCullingEnabled = !!i685[70]
  i684.m_horizontalMapping = i685[71]
  i684.m_verticalMapping = i685[72]
  i684.m_uvLineOffset = i685[73]
  i684.m_geometrySortingOrder = i685[74]
  i684.m_IsTextObjectScaleStatic = !!i685[75]
  i684.m_VertexBufferAutoSizeReduction = !!i685[76]
  i684.m_useMaxVisibleDescender = !!i685[77]
  i684.m_pageToDisplay = i685[78]
  i684.m_margin = new pc.Vec4( i685[79], i685[80], i685[81], i685[82] )
  i684.m_isUsingLegacyAnimationComponent = !!i685[83]
  i684.m_isVolumetricText = !!i685[84]
  request.r(i685[85], i685[86], 0, i684, 'm_Material')
  i684.m_Maskable = !!i685[87]
  i684.m_Color = new pc.Color(i685[88], i685[89], i685[90], i685[91])
  i684.m_RaycastTarget = !!i685[92]
  i684.m_RaycastPadding = new pc.Vec4( i685[93], i685[94], i685[95], i685[96] )
  return i684
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i690 = root || request.c( 'TMPro.VertexGradient' )
  var i691 = data
  i690.topLeft = new pc.Color(i691[0], i691[1], i691[2], i691[3])
  i690.topRight = new pc.Color(i691[4], i691[5], i691[6], i691[7])
  i690.bottomLeft = new pc.Color(i691[8], i691[9], i691[10], i691[11])
  i690.bottomRight = new pc.Color(i691[12], i691[13], i691[14], i691[15])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i693 = data
  i692.name = i693[0]
  i692.atlasId = i693[1]
  i692.mipmapCount = i693[2]
  i692.hdr = !!i693[3]
  i692.size = i693[4]
  i692.anisoLevel = i693[5]
  i692.filterMode = i693[6]
  i692.wrapMode = i693[7]
  var i695 = i693[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 4) {
    i694.push( UnityEngine.Rect.MinMaxRect(i695[i + 0], i695[i + 1], i695[i + 2], i695[i + 3]) );
  }
  i692.rects = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i699 = data
  i698.name = i699[0]
  i698.index = i699[1]
  i698.startup = !!i699[2]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.aspect = i701[1]
  i700.orthographic = !!i701[2]
  i700.orthographicSize = i701[3]
  i700.backgroundColor = new pc.Color(i701[4], i701[5], i701[6], i701[7])
  i700.nearClipPlane = i701[8]
  i700.farClipPlane = i701[9]
  i700.fieldOfView = i701[10]
  i700.depth = i701[11]
  i700.clearFlags = i701[12]
  i700.cullingMask = i701[13]
  i700.rect = i701[14]
  request.r(i701[15], i701[16], 0, i700, 'targetTexture')
  i700.usePhysicalProperties = !!i701[17]
  i700.focalLength = i701[18]
  i700.sensorSize = new pc.Vec2( i701[19], i701[20] )
  i700.lensShift = new pc.Vec2( i701[21], i701[22] )
  i700.gateFit = i701[23]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.type = i703[1]
  i702.color = new pc.Color(i703[2], i703[3], i703[4], i703[5])
  i702.cullingMask = i703[6]
  i702.intensity = i703[7]
  i702.range = i703[8]
  i702.spotAngle = i703[9]
  i702.shadows = i703[10]
  i702.shadowNormalBias = i703[11]
  i702.shadowBias = i703[12]
  i702.shadowStrength = i703[13]
  i702.shadowResolution = i703[14]
  i702.lightmapBakeType = i703[15]
  i702.renderMode = i703[16]
  request.r(i703[17], i703[18], 0, i702, 'cookie')
  i702.cookieSize = i703[19]
  return i702
}

Deserializers["CubeHandler"] = function (request, data, root) {
  var i704 = root || request.c( 'CubeHandler' )
  var i705 = data
  i704.shootForce = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'cube')
  request.r(i705[3], i705[4], 0, i704, 'spawnPosition')
  i704.minXLimit = i705[5]
  i704.maxXLimit = i705[6]
  i704.movementSpeed = i705[7]
  return i704
}

Deserializers["PlayableManager"] = function (request, data, root) {
  var i706 = root || request.c( 'PlayableManager' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706.cubeList = i708
  i706.isGameStart = !!i707[1]
  i706.cubeCount = i707[2]
  i706.title = i707[3]
  i706.titleColor = new pc.Color(i707[4], i707[5], i707[6], i707[7])
  i706.endTitle = i707[8]
  i706.endCardTitleColor = new pc.Color(i707[9], i707[10], i707[11], i707[12])
  request.r(i707[13], i707[14], 0, i706, 'startPanel')
  request.r(i707[15], i707[16], 0, i706, 'endPanel')
  request.r(i707[17], i707[18], 0, i706, 'startTitleText')
  request.r(i707[19], i707[20], 0, i706, 'endTitleText')
  request.r(i707[21], i707[22], 0, i706, 'installButton')
  request.r(i707[23], i707[24], 0, i706, 'installButtonText')
  return i706
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Image' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, 'm_Sprite')
  i712.m_Type = i713[2]
  i712.m_PreserveAspect = !!i713[3]
  i712.m_FillCenter = !!i713[4]
  i712.m_FillMethod = i713[5]
  i712.m_FillAmount = i713[6]
  i712.m_FillClockwise = !!i713[7]
  i712.m_FillOrigin = i713[8]
  i712.m_UseSpriteMesh = !!i713[9]
  i712.m_PixelsPerUnitMultiplier = i713[10]
  request.r(i713[11], i713[12], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[13]
  i712.m_Color = new pc.Color(i713[14], i713[15], i713[16], i713[17])
  i712.m_RaycastTarget = !!i713[18]
  i712.m_RaycastPadding = new pc.Vec4( i713[19], i713[20], i713[21], i713[22] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'animatorController')
  request.r(i715[2], i715[3], 0, i714, 'avatar')
  i714.updateMode = i715[4]
  i714.hasTransformHierarchy = !!i715[5]
  i714.applyRootMotion = !!i715[6]
  var i717 = i715[7]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.humanBones = i716
  i714.enabled = !!i715[8]
  return i714
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.Text' )
  var i721 = data
  i720.m_FontData = request.d('UnityEngine.UI.FontData', i721[0], i720.m_FontData)
  i720.m_Text = i721[1]
  request.r(i721[2], i721[3], 0, i720, 'm_Material')
  i720.m_Maskable = !!i721[4]
  i720.m_Color = new pc.Color(i721[5], i721[6], i721[7], i721[8])
  i720.m_RaycastTarget = !!i721[9]
  i720.m_RaycastPadding = new pc.Vec4( i721[10], i721[11], i721[12], i721[13] )
  return i720
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.FontData' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'm_Font')
  i722.m_FontSize = i723[2]
  i722.m_FontStyle = i723[3]
  i722.m_BestFit = !!i723[4]
  i722.m_MinSize = i723[5]
  i722.m_MaxSize = i723[6]
  i722.m_Alignment = i723[7]
  i722.m_AlignByGeometry = !!i723[8]
  i722.m_RichText = !!i723[9]
  i722.m_HorizontalOverflow = i723[10]
  i722.m_VerticalOverflow = i723[11]
  i722.m_LineSpacing = i723[12]
  return i722
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.Button' )
  var i725 = data
  i724.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i725[0], i724.m_OnClick)
  i724.m_Navigation = request.d('UnityEngine.UI.Navigation', i725[1], i724.m_Navigation)
  i724.m_Transition = i725[2]
  i724.m_Colors = request.d('UnityEngine.UI.ColorBlock', i725[3], i724.m_Colors)
  i724.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i725[4], i724.m_SpriteState)
  i724.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i725[5], i724.m_AnimationTriggers)
  i724.m_Interactable = !!i725[6]
  request.r(i725[7], i725[8], 0, i724, 'm_TargetGraphic')
  return i724
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i727 = data
  i726.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i727[0], i726.m_PersistentCalls)
  return i726
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('UnityEngine.Events.PersistentCall', i731[i + 0]));
  }
  i728.m_Calls = i730
  return i728
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_Target')
  i734.m_TargetAssemblyTypeName = i735[2]
  i734.m_MethodName = i735[3]
  i734.m_Mode = i735[4]
  i734.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i735[5], i734.m_Arguments)
  i734.m_CallState = i735[6]
  return i734
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'm_ObjectArgument')
  i736.m_ObjectArgumentAssemblyTypeName = i737[2]
  i736.m_IntArgument = i737[3]
  i736.m_FloatArgument = i737[4]
  i736.m_StringArgument = i737[5]
  i736.m_BoolArgument = !!i737[6]
  return i736
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i739 = data
  i738.m_Mode = i739[0]
  i738.m_WrapAround = !!i739[1]
  request.r(i739[2], i739[3], 0, i738, 'm_SelectOnUp')
  request.r(i739[4], i739[5], 0, i738, 'm_SelectOnDown')
  request.r(i739[6], i739[7], 0, i738, 'm_SelectOnLeft')
  request.r(i739[8], i739[9], 0, i738, 'm_SelectOnRight')
  return i738
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i741 = data
  i740.m_NormalColor = new pc.Color(i741[0], i741[1], i741[2], i741[3])
  i740.m_HighlightedColor = new pc.Color(i741[4], i741[5], i741[6], i741[7])
  i740.m_PressedColor = new pc.Color(i741[8], i741[9], i741[10], i741[11])
  i740.m_SelectedColor = new pc.Color(i741[12], i741[13], i741[14], i741[15])
  i740.m_DisabledColor = new pc.Color(i741[16], i741[17], i741[18], i741[19])
  i740.m_ColorMultiplier = i741[20]
  i740.m_FadeDuration = i741[21]
  return i740
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_HighlightedSprite')
  request.r(i743[2], i743[3], 0, i742, 'm_PressedSprite')
  request.r(i743[4], i743[5], 0, i742, 'm_SelectedSprite')
  request.r(i743[6], i743[7], 0, i742, 'm_DisabledSprite')
  return i742
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i745 = data
  i744.m_NormalTrigger = i745[0]
  i744.m_HighlightedTrigger = i745[1]
  i744.m_PressedTrigger = i745[2]
  i744.m_SelectedTrigger = i745[3]
  i744.m_DisabledTrigger = i745[4]
  return i744
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i747 = data
  i746.m_EffectColor = new pc.Color(i747[0], i747[1], i747[2], i747[3])
  i746.m_EffectDistance = new pc.Vec2( i747[4], i747[5] )
  i746.m_UseGraphicAlpha = !!i747[6]
  return i746
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_FirstSelected')
  i748.m_sendNavigationEvents = !!i749[2]
  i748.m_DragThreshold = i749[3]
  return i748
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i751 = data
  i750.m_HorizontalAxis = i751[0]
  i750.m_VerticalAxis = i751[1]
  i750.m_SubmitButton = i751[2]
  i750.m_CancelButton = i751[3]
  i750.m_InputActionsPerSecond = i751[4]
  i750.m_RepeatDelay = i751[5]
  i750.m_ForceModuleActive = !!i751[6]
  i750.m_SendPointerHoverToParent = !!i751[7]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i753 = data
  i752.ambientIntensity = i753[0]
  i752.reflectionIntensity = i753[1]
  i752.ambientMode = i753[2]
  i752.ambientLight = new pc.Color(i753[3], i753[4], i753[5], i753[6])
  i752.ambientSkyColor = new pc.Color(i753[7], i753[8], i753[9], i753[10])
  i752.ambientGroundColor = new pc.Color(i753[11], i753[12], i753[13], i753[14])
  i752.ambientEquatorColor = new pc.Color(i753[15], i753[16], i753[17], i753[18])
  i752.fogColor = new pc.Color(i753[19], i753[20], i753[21], i753[22])
  i752.fogEndDistance = i753[23]
  i752.fogStartDistance = i753[24]
  i752.fogDensity = i753[25]
  i752.fog = !!i753[26]
  request.r(i753[27], i753[28], 0, i752, 'skybox')
  i752.fogMode = i753[29]
  var i755 = i753[30]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i755[i + 0]) );
  }
  i752.lightmaps = i754
  i752.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i753[31], i752.lightProbes)
  i752.lightmapsMode = i753[32]
  i752.mixedBakeMode = i753[33]
  i752.environmentLightingMode = i753[34]
  i752.ambientProbe = new pc.SphericalHarmonicsL2(i753[35])
  i752.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i753[36])
  i752.useReferenceAmbientProbe = !!i753[37]
  request.r(i753[38], i753[39], 0, i752, 'customReflection')
  request.r(i753[40], i753[41], 0, i752, 'defaultReflection')
  i752.defaultReflectionMode = i753[42]
  i752.defaultReflectionResolution = i753[43]
  i752.sunLightObjectId = i753[44]
  i752.pixelLightCount = i753[45]
  i752.defaultReflectionHDR = !!i753[46]
  i752.hasLightDataAsset = !!i753[47]
  i752.hasManualGenerate = !!i753[48]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'lightmapColor')
  request.r(i759[2], i759[3], 0, i758, 'lightmapDirection')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i760 = root || new UnityEngine.LightProbes()
  var i761 = data
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i767 = data
  var i769 = i767[0]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i769.length; i += 1) {
    i768.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i769[i + 0]));
  }
  i766.ShaderCompilationErrors = i768
  i766.name = i767[1]
  i766.guid = i767[2]
  var i771 = i767[3]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( i771[i + 0] );
  }
  i766.shaderDefinedKeywords = i770
  var i773 = i767[4]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i773[i + 0]) );
  }
  i766.passes = i772
  var i775 = i767[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i775[i + 0]) );
  }
  i766.usePasses = i774
  var i777 = i767[6]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i777[i + 0]) );
  }
  i766.defaultParameterValues = i776
  request.r(i767[7], i767[8], 0, i766, 'unityFallbackShader')
  i766.readDepth = !!i767[9]
  i766.isCreatedByShaderGraph = !!i767[10]
  i766.usedBatchUniforms = i767[11]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i781 = data
  i780.shaderName = i781[0]
  i780.errorMessage = i781[1]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i786 = root || new pc.UnityShaderPass()
  var i787 = data
  i786.id = i787[0]
  i786.subShaderIndex = i787[1]
  i786.name = i787[2]
  i786.passType = i787[3]
  i786.grabPassTextureName = i787[4]
  i786.usePass = !!i787[5]
  i786.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[6], i786.zTest)
  i786.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[7], i786.zWrite)
  i786.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[8], i786.culling)
  i786.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i787[9], i786.blending)
  i786.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i787[10], i786.alphaBlending)
  i786.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[11], i786.colorWriteMask)
  i786.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[12], i786.offsetUnits)
  i786.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[13], i786.offsetFactor)
  i786.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[14], i786.stencilRef)
  i786.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[15], i786.stencilReadMask)
  i786.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[16], i786.stencilWriteMask)
  i786.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[17], i786.stencilOp)
  i786.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[18], i786.stencilOpFront)
  i786.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i787[19], i786.stencilOpBack)
  var i789 = i787[20]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i789[i + 0]) );
  }
  i786.tags = i788
  var i791 = i787[21]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( i791[i + 0] );
  }
  i786.passDefinedKeywords = i790
  var i793 = i787[22]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i793[i + 0]) );
  }
  i786.passDefinedKeywordGroups = i792
  var i795 = i787[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i795[i + 0]) );
  }
  i786.variants = i794
  var i797 = i787[24]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i797[i + 0]) );
  }
  i786.excludedVariants = i796
  i786.hasDepthReader = !!i787[25]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i799 = data
  i798.val = i799[0]
  i798.name = i799[1]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i801 = data
  i800.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[0], i800.src)
  i800.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[1], i800.dst)
  i800.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i801[2], i800.op)
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i803 = data
  i802.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[0], i802.pass)
  i802.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[1], i802.fail)
  i802.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[2], i802.zFail)
  i802.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i803[3], i802.comp)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i807 = data
  i806.name = i807[0]
  i806.value = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i810.keywords = i812
  i810.hasDiscard = !!i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i817 = data
  i816.passId = i817[0]
  i816.subShaderIndex = i817[1]
  var i819 = i817[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.keywords = i818
  i816.vertexProgram = i817[3]
  i816.fragmentProgram = i817[4]
  i816.readDepth = !!i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'shader')
  i822.pass = i823[2]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i827 = data
  i826.name = i827[0]
  i826.type = i827[1]
  i826.value = new pc.Vec4( i827[2], i827[3], i827[4], i827[5] )
  i826.textureValue = i827[6]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i829 = data
  i828.name = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'texture')
  i828.aabb = i829[3]
  i828.vertices = i829[4]
  i828.triangles = i829[5]
  i828.textureRect = UnityEngine.Rect.MinMaxRect(i829[6], i829[7], i829[8], i829[9])
  i828.packedRect = UnityEngine.Rect.MinMaxRect(i829[10], i829[11], i829[12], i829[13])
  i828.border = new pc.Vec4( i829[14], i829[15], i829[16], i829[17] )
  i828.transparency = i829[18]
  i828.bounds = i829[19]
  i828.pixelsPerUnit = i829[20]
  i828.textureWidth = i829[21]
  i828.textureHeight = i829[22]
  i828.nativeSize = new pc.Vec2( i829[23], i829[24] )
  i828.pivot = new pc.Vec2( i829[25], i829[26] )
  i828.textureRectOffset = new pc.Vec2( i829[27], i829[28] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i831 = data
  i830.name = i831[0]
  i830.wrapMode = i831[1]
  i830.isLooping = !!i831[2]
  i830.length = i831[3]
  var i833 = i831[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i833[i + 0]) );
  }
  i830.curves = i832
  var i835 = i831[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i835[i + 0]) );
  }
  i830.events = i834
  i830.halfPrecision = !!i831[6]
  i830.frameRate = i831[7]
  i830.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i831[8], i830.localBounds)
  i830.hasMuscleCurves = !!i831[9]
  var i837 = i831[10]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i830.clipMuscleConstant = i836
  i830.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i831[11], i830.clipBindingConstant)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i841 = data
  i840.path = i841[0]
  i840.componentType = i841[1]
  i840.property = i841[2]
  i840.keys = i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i843[i + 0]) );
  }
  i840.objectReferenceKeys = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i847 = data
  i846.time = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'value')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i851 = data
  i850.functionName = i851[0]
  i850.floatParameter = i851[1]
  i850.intParameter = i851[2]
  i850.stringParameter = i851[3]
  request.r(i851[4], i851[5], 0, i850, 'objectReferenceParameter')
  i850.time = i851[6]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i853 = data
  i852.center = new pc.Vec3( i853[0], i853[1], i853[2] )
  i852.extends = new pc.Vec3( i853[3], i853[4], i853[5] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i857 = data
  var i859 = i857[0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i856.genericBindings = i858
  var i861 = i857[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.pptrCurveMapping = i860
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i863 = data
  i862.name = i863[0]
  i862.ascent = i863[1]
  i862.originalLineHeight = i863[2]
  i862.fontSize = i863[3]
  var i865 = i863[4]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i865[i + 0]) );
  }
  i862.characterInfo = i864
  request.r(i863[5], i863[6], 0, i862, 'texture')
  i862.originalFontSize = i863[7]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i869 = data
  i868.index = i869[0]
  i868.advance = i869[1]
  i868.bearing = i869[2]
  i868.glyphWidth = i869[3]
  i868.glyphHeight = i869[4]
  i868.minX = i869[5]
  i868.maxX = i869[6]
  i868.minY = i869[7]
  i868.maxY = i869[8]
  i868.uvBottomLeftX = i869[9]
  i868.uvBottomLeftY = i869[10]
  i868.uvBottomRightX = i869[11]
  i868.uvBottomRightY = i869[12]
  i868.uvTopLeftX = i869[13]
  i868.uvTopLeftY = i869[14]
  i868.uvTopRightX = i869[15]
  i868.uvTopRightY = i869[16]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i871 = data
  i870.name = i871[0]
  var i873 = i871[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i873[i + 0]) );
  }
  i870.states = i872
  var i875 = i871[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i875[i + 0]) );
  }
  i870.layers = i874
  var i877 = i871[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i877[i + 0]) );
  }
  i870.parameters = i876
  i870.animationClips = i871[4]
  i870.HasSubStateMachines = !!i871[5]
  i870.avatarUnsupported = i871[6]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i881 = data
  i880.cycleOffset = i881[0]
  i880.cycleOffsetParameter = i881[1]
  i880.cycleOffsetParameterActive = !!i881[2]
  i880.mirror = !!i881[3]
  i880.mirrorParameter = i881[4]
  i880.mirrorParameterActive = !!i881[5]
  i880.motionId = i881[6]
  i880.nameHash = i881[7]
  i880.fullPathHash = i881[8]
  i880.speed = i881[9]
  i880.speedParameter = i881[10]
  i880.speedParameterActive = !!i881[11]
  i880.tag = i881[12]
  i880.name = i881[13]
  i880.layer = i881[14]
  i880.writeDefaultValues = !!i881[15]
  var i883 = i881[16]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i883[i + 0]) );
  }
  i880.transitions = i882
  var i885 = i881[17]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i880.behaviours = i884
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i889 = data
  i888.fullPath = i889[0]
  i888.canTransitionToSelf = !!i889[1]
  i888.duration = i889[2]
  i888.exitTime = i889[3]
  i888.hasExitTime = !!i889[4]
  i888.hasFixedDuration = !!i889[5]
  i888.interruptionSource = i889[6]
  i888.offset = i889[7]
  i888.orderedInterruption = !!i889[8]
  i888.destinationStateNameHash = i889[9]
  i888.destinationStateMachineId = i889[10]
  i888.isExit = !!i889[11]
  i888.mute = !!i889[12]
  i888.solo = !!i889[13]
  var i891 = i889[14]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i891[i + 0]) );
  }
  i888.conditions = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i897 = data
  i896.blendingMode = i897[0]
  i896.defaultWeight = i897[1]
  i896.name = i897[2]
  i896.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i897[3], i896.stateMachine)
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i899 = data
  i898.id = i899[0]
  i898.defaultStateNameHash = i899[1]
  var i901 = i899[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i901[i + 0]) );
  }
  i898.entryTransitions = i900
  var i903 = i899[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i903[i + 0]) );
  }
  i898.anyStateTransitions = i902
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i907 = data
  i906.destinationStateNameHash = i907[0]
  i906.destinationStateMachineId = i907[1]
  i906.isExit = !!i907[2]
  i906.mute = !!i907[3]
  i906.solo = !!i907[4]
  var i909 = i907[5]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i909[i + 0]) );
  }
  i906.conditions = i908
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i913 = data
  i912.defaultBool = !!i913[0]
  i912.defaultFloat = i913[1]
  i912.defaultInt = i913[2]
  i912.name = i913[3]
  i912.nameHash = i913[4]
  i912.type = i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i915 = data
  i914.name = i915[0]
  i914.bytes64 = i915[1]
  i914.data = i915[2]
  return i914
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i916 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i917 = data
  i916.hashCode = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'material')
  i916.materialHashCode = i917[3]
  request.r(i917[4], i917[5], 0, i916, 'atlas')
  i916.normalStyle = i917[6]
  i916.normalSpacingOffset = i917[7]
  i916.boldStyle = i917[8]
  i916.boldSpacing = i917[9]
  i916.italicStyle = i917[10]
  i916.tabSize = i917[11]
  i916.m_Version = i917[12]
  i916.m_SourceFontFileGUID = i917[13]
  request.r(i917[14], i917[15], 0, i916, 'm_SourceFontFile_EditorRef')
  request.r(i917[16], i917[17], 0, i916, 'm_SourceFontFile')
  i916.m_AtlasPopulationMode = i917[18]
  i916.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i917[19], i916.m_FaceInfo)
  var i919 = i917[20]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('UnityEngine.TextCore.Glyph', i919[i + 0]));
  }
  i916.m_GlyphTable = i918
  var i921 = i917[21]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i921.length; i += 1) {
    i920.add(request.d('TMPro.TMP_Character', i921[i + 0]));
  }
  i916.m_CharacterTable = i920
  var i923 = i917[22]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i916.m_AtlasTextures = i922
  i916.m_AtlasTextureIndex = i917[23]
  i916.m_IsMultiAtlasTexturesEnabled = !!i917[24]
  i916.m_ClearDynamicDataOnBuild = !!i917[25]
  var i925 = i917[26]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('UnityEngine.TextCore.GlyphRect', i925[i + 0]));
  }
  i916.m_UsedGlyphRects = i924
  var i927 = i917[27]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('UnityEngine.TextCore.GlyphRect', i927[i + 0]));
  }
  i916.m_FreeGlyphRects = i926
  i916.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i917[28], i916.m_fontInfo)
  i916.m_AtlasWidth = i917[29]
  i916.m_AtlasHeight = i917[30]
  i916.m_AtlasPadding = i917[31]
  i916.m_AtlasRenderMode = i917[32]
  var i929 = i917[33]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i929.length; i += 1) {
    i928.add(request.d('TMPro.TMP_Glyph', i929[i + 0]));
  }
  i916.m_glyphInfoList = i928
  i916.m_KerningTable = request.d('TMPro.KerningTable', i917[34], i916.m_KerningTable)
  i916.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i917[35], i916.m_FontFeatureTable)
  var i931 = i917[36]
  var i930 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 1, i930, '')
  }
  i916.fallbackFontAssets = i930
  var i933 = i917[37]
  var i932 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 1, i932, '')
  }
  i916.m_FallbackFontAssetTable = i932
  i916.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i917[38], i916.m_CreationSettings)
  var i935 = i917[39]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('TMPro.TMP_FontWeightPair', i935[i + 0]) );
  }
  i916.m_FontWeightTable = i934
  var i937 = i917[40]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('TMPro.TMP_FontWeightPair', i937[i + 0]) );
  }
  i916.fontWeights = i936
  return i916
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i939 = data
  i938.m_FaceIndex = i939[0]
  i938.m_FamilyName = i939[1]
  i938.m_StyleName = i939[2]
  i938.m_PointSize = i939[3]
  i938.m_Scale = i939[4]
  i938.m_LineHeight = i939[5]
  i938.m_AscentLine = i939[6]
  i938.m_CapLine = i939[7]
  i938.m_MeanLine = i939[8]
  i938.m_Baseline = i939[9]
  i938.m_DescentLine = i939[10]
  i938.m_SuperscriptOffset = i939[11]
  i938.m_SuperscriptSize = i939[12]
  i938.m_SubscriptOffset = i939[13]
  i938.m_SubscriptSize = i939[14]
  i938.m_UnderlineOffset = i939[15]
  i938.m_UnderlineThickness = i939[16]
  i938.m_StrikethroughOffset = i939[17]
  i938.m_StrikethroughThickness = i939[18]
  i938.m_TabWidth = i939[19]
  return i938
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i943 = data
  i942.m_Index = i943[0]
  i942.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i943[1], i942.m_Metrics)
  i942.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i943[2], i942.m_GlyphRect)
  i942.m_Scale = i943[3]
  i942.m_AtlasIndex = i943[4]
  return i942
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i945 = data
  i944.m_Width = i945[0]
  i944.m_Height = i945[1]
  i944.m_HorizontalBearingX = i945[2]
  i944.m_HorizontalBearingY = i945[3]
  i944.m_HorizontalAdvance = i945[4]
  return i944
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i947 = data
  i946.m_X = i947[0]
  i946.m_Y = i947[1]
  i946.m_Width = i947[2]
  i946.m_Height = i947[3]
  return i946
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i950 = root || request.c( 'TMPro.TMP_Character' )
  var i951 = data
  i950.m_ElementType = i951[0]
  i950.m_Unicode = i951[1]
  i950.m_GlyphIndex = i951[2]
  i950.m_Scale = i951[3]
  return i950
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i956 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i957 = data
  i956.Name = i957[0]
  i956.PointSize = i957[1]
  i956.Scale = i957[2]
  i956.CharacterCount = i957[3]
  i956.LineHeight = i957[4]
  i956.Baseline = i957[5]
  i956.Ascender = i957[6]
  i956.CapHeight = i957[7]
  i956.Descender = i957[8]
  i956.CenterLine = i957[9]
  i956.SuperscriptOffset = i957[10]
  i956.SubscriptOffset = i957[11]
  i956.SubSize = i957[12]
  i956.Underline = i957[13]
  i956.UnderlineThickness = i957[14]
  i956.strikethrough = i957[15]
  i956.strikethroughThickness = i957[16]
  i956.TabWidth = i957[17]
  i956.Padding = i957[18]
  i956.AtlasWidth = i957[19]
  i956.AtlasHeight = i957[20]
  return i956
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i960 = root || request.c( 'TMPro.TMP_Glyph' )
  var i961 = data
  i960.id = i961[0]
  i960.x = i961[1]
  i960.y = i961[2]
  i960.width = i961[3]
  i960.height = i961[4]
  i960.xOffset = i961[5]
  i960.yOffset = i961[6]
  i960.xAdvance = i961[7]
  i960.scale = i961[8]
  return i960
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.KerningTable' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('TMPro.KerningPair', i965[i + 0]));
  }
  i962.kerningPairs = i964
  return i962
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i968 = root || request.c( 'TMPro.KerningPair' )
  var i969 = data
  i968.xOffset = i969[0]
  i968.m_FirstGlyph = i969[1]
  i968.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i969[2], i968.m_FirstGlyphAdjustments)
  i968.m_SecondGlyph = i969[3]
  i968.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i969[4], i968.m_SecondGlyphAdjustments)
  i968.m_IgnoreSpacingAdjustments = !!i969[5]
  return i968
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i973.length; i += 1) {
    i972.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i973[i + 0]));
  }
  i970.m_GlyphPairAdjustmentRecords = i972
  return i970
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i976 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i977 = data
  i976.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i977[0], i976.m_FirstAdjustmentRecord)
  i976.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i977[1], i976.m_SecondAdjustmentRecord)
  i976.m_FeatureLookupFlags = i977[2]
  return i976
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i978 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i979 = data
  i978.m_GlyphIndex = i979[0]
  i978.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i979[1], i978.m_GlyphValueRecord)
  return i978
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i981 = data
  i980.m_XPlacement = i981[0]
  i980.m_YPlacement = i981[1]
  i980.m_XAdvance = i981[2]
  i980.m_YAdvance = i981[3]
  return i980
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i984 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i985 = data
  i984.sourceFontFileName = i985[0]
  i984.sourceFontFileGUID = i985[1]
  i984.pointSizeSamplingMode = i985[2]
  i984.pointSize = i985[3]
  i984.padding = i985[4]
  i984.packingMode = i985[5]
  i984.atlasWidth = i985[6]
  i984.atlasHeight = i985[7]
  i984.characterSetSelectionMode = i985[8]
  i984.characterSequence = i985[9]
  i984.referencedFontAssetGUID = i985[10]
  i984.referencedTextAssetGUID = i985[11]
  i984.fontStyle = i985[12]
  i984.fontStyleModifier = i985[13]
  i984.renderMode = i985[14]
  i984.includeFontFeatures = !!i985[15]
  return i984
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'regularTypeface')
  request.r(i989[2], i989[3], 0, i988, 'italicTypeface')
  return i988
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i990 = root || request.c( 'TMPro.TMP_Settings' )
  var i991 = data
  i990.m_enableWordWrapping = !!i991[0]
  i990.m_enableKerning = !!i991[1]
  i990.m_enableExtraPadding = !!i991[2]
  i990.m_enableTintAllSprites = !!i991[3]
  i990.m_enableParseEscapeCharacters = !!i991[4]
  i990.m_EnableRaycastTarget = !!i991[5]
  i990.m_GetFontFeaturesAtRuntime = !!i991[6]
  i990.m_missingGlyphCharacter = i991[7]
  i990.m_warningsDisabled = !!i991[8]
  request.r(i991[9], i991[10], 0, i990, 'm_defaultFontAsset')
  i990.m_defaultFontAssetPath = i991[11]
  i990.m_defaultFontSize = i991[12]
  i990.m_defaultAutoSizeMinRatio = i991[13]
  i990.m_defaultAutoSizeMaxRatio = i991[14]
  i990.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i991[15], i991[16] )
  i990.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i991[17], i991[18] )
  i990.m_autoSizeTextContainer = !!i991[19]
  i990.m_IsTextObjectScaleStatic = !!i991[20]
  var i993 = i991[21]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i990.m_fallbackFontAssets = i992
  i990.m_matchMaterialPreset = !!i991[22]
  request.r(i991[23], i991[24], 0, i990, 'm_defaultSpriteAsset')
  i990.m_defaultSpriteAssetPath = i991[25]
  i990.m_enableEmojiSupport = !!i991[26]
  i990.m_MissingCharacterSpriteUnicode = i991[27]
  i990.m_defaultColorGradientPresetsPath = i991[28]
  request.r(i991[29], i991[30], 0, i990, 'm_defaultStyleSheet')
  i990.m_StyleSheetsResourcePath = i991[31]
  request.r(i991[32], i991[33], 0, i990, 'm_leadingCharacters')
  request.r(i991[34], i991[35], 0, i990, 'm_followingCharacters')
  i990.m_UseModernHangulLineBreakingRules = !!i991[36]
  return i990
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i995 = data
  i994.hashCode = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'material')
  i994.materialHashCode = i995[3]
  request.r(i995[4], i995[5], 0, i994, 'spriteSheet')
  var i997 = i995[6]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.TMP_Sprite', i997[i + 0]));
  }
  i994.spriteInfoList = i996
  var i999 = i995[7]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i994.fallbackSpriteAssets = i998
  i994.m_Version = i995[8]
  i994.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i995[9], i994.m_FaceInfo)
  var i1001 = i995[10]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('TMPro.TMP_SpriteCharacter', i1001[i + 0]));
  }
  i994.m_SpriteCharacterTable = i1000
  var i1003 = i995[11]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('TMPro.TMP_SpriteGlyph', i1003[i + 0]));
  }
  i994.m_SpriteGlyphTable = i1002
  return i994
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.hashCode = i1007[1]
  i1006.unicode = i1007[2]
  i1006.pivot = new pc.Vec2( i1007[3], i1007[4] )
  request.r(i1007[5], i1007[6], 0, i1006, 'sprite')
  i1006.id = i1007[7]
  i1006.x = i1007[8]
  i1006.y = i1007[9]
  i1006.width = i1007[10]
  i1006.height = i1007[11]
  i1006.xOffset = i1007[12]
  i1006.yOffset = i1007[13]
  i1006.xAdvance = i1007[14]
  i1006.scale = i1007[15]
  return i1006
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1013 = data
  i1012.m_Name = i1013[0]
  i1012.m_HashCode = i1013[1]
  i1012.m_ElementType = i1013[2]
  i1012.m_Unicode = i1013[3]
  i1012.m_GlyphIndex = i1013[4]
  i1012.m_Scale = i1013[5]
  return i1012
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'sprite')
  i1016.m_Index = i1017[2]
  i1016.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1017[3], i1016.m_Metrics)
  i1016.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1017[4], i1016.m_GlyphRect)
  i1016.m_Scale = i1017[5]
  i1016.m_AtlasIndex = i1017[6]
  return i1016
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_Style', i1021[i + 0]));
  }
  i1018.m_StyleList = i1020
  return i1018
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1024 = root || request.c( 'TMPro.TMP_Style' )
  var i1025 = data
  i1024.m_Name = i1025[0]
  i1024.m_HashCode = i1025[1]
  i1024.m_OpeningDefinition = i1025[2]
  i1024.m_ClosingDefinition = i1025[3]
  i1024.m_OpeningTagArray = i1025[4]
  i1024.m_ClosingTagArray = i1025[5]
  i1024.m_OpeningTagUnicodeArray = i1025[6]
  i1024.m_ClosingTagUnicodeArray = i1025[7]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1029[i + 0]) );
  }
  i1026.files = i1028
  i1026.componentToPrefabIds = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1033 = data
  i1032.path = i1033[0]
  request.r(i1033[1], i1033[2], 0, i1032, 'unityObject')
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1037[i + 0]) );
  }
  i1034.scriptsExecutionOrder = i1036
  var i1039 = i1035[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1039[i + 0]) );
  }
  i1034.sortingLayers = i1038
  var i1041 = i1035[2]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1041[i + 0]) );
  }
  i1034.cullingLayers = i1040
  i1034.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1035[3], i1034.timeSettings)
  i1034.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1035[4], i1034.physicsSettings)
  i1034.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1035[5], i1034.physics2DSettings)
  i1034.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1035[6], i1034.qualitySettings)
  i1034.enableRealtimeShadows = !!i1035[7]
  i1034.enableAutoInstancing = !!i1035[8]
  i1034.enableDynamicBatching = !!i1035[9]
  i1034.lightmapEncodingQuality = i1035[10]
  i1034.desiredColorSpace = i1035[11]
  var i1043 = i1035[12]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1034.allTags = i1042
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.value = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  i1050.value = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.name = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1057 = data
  i1056.fixedDeltaTime = i1057[0]
  i1056.maximumDeltaTime = i1057[1]
  i1056.timeScale = i1057[2]
  i1056.maximumParticleTimestep = i1057[3]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1059 = data
  i1058.gravity = new pc.Vec3( i1059[0], i1059[1], i1059[2] )
  i1058.defaultSolverIterations = i1059[3]
  i1058.bounceThreshold = i1059[4]
  i1058.autoSyncTransforms = !!i1059[5]
  i1058.autoSimulation = !!i1059[6]
  var i1061 = i1059[7]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1061[i + 0]) );
  }
  i1058.collisionMatrix = i1060
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.layerId = i1065[1]
  i1064.otherLayerId = i1065[2]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'material')
  i1066.gravity = new pc.Vec2( i1067[2], i1067[3] )
  i1066.positionIterations = i1067[4]
  i1066.velocityIterations = i1067[5]
  i1066.velocityThreshold = i1067[6]
  i1066.maxLinearCorrection = i1067[7]
  i1066.maxAngularCorrection = i1067[8]
  i1066.maxTranslationSpeed = i1067[9]
  i1066.maxRotationSpeed = i1067[10]
  i1066.baumgarteScale = i1067[11]
  i1066.baumgarteTOIScale = i1067[12]
  i1066.timeToSleep = i1067[13]
  i1066.linearSleepTolerance = i1067[14]
  i1066.angularSleepTolerance = i1067[15]
  i1066.defaultContactOffset = i1067[16]
  i1066.autoSimulation = !!i1067[17]
  i1066.queriesHitTriggers = !!i1067[18]
  i1066.queriesStartInColliders = !!i1067[19]
  i1066.callbacksOnDisable = !!i1067[20]
  i1066.reuseCollisionCallbacks = !!i1067[21]
  i1066.autoSyncTransforms = !!i1067[22]
  var i1069 = i1067[23]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1069[i + 0]) );
  }
  i1066.collisionMatrix = i1068
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.layerId = i1073[1]
  i1072.otherLayerId = i1073[2]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1077[i + 0]) );
  }
  i1074.qualityLevels = i1076
  var i1079 = i1075[1]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.names = i1078
  i1074.shadows = i1075[2]
  i1074.anisotropicFiltering = i1075[3]
  i1074.antiAliasing = i1075[4]
  i1074.lodBias = i1075[5]
  i1074.shadowCascades = i1075[6]
  i1074.shadowDistance = i1075[7]
  i1074.shadowmaskMode = i1075[8]
  i1074.shadowProjection = i1075[9]
  i1074.shadowResolution = i1075[10]
  i1074.softParticles = !!i1075[11]
  i1074.softVegetation = !!i1075[12]
  i1074.activeColorSpace = i1075[13]
  i1074.desiredColorSpace = i1075[14]
  i1074.masterTextureLimit = i1075[15]
  i1074.maxQueuedFrames = i1075[16]
  i1074.particleRaycastBudget = i1075[17]
  i1074.pixelLightCount = i1075[18]
  i1074.realtimeReflectionProbes = !!i1075[19]
  i1074.shadowCascade2Split = i1075[20]
  i1074.shadowCascade4Split = new pc.Vec3( i1075[21], i1075[22], i1075[23] )
  i1074.streamingMipmapsActive = !!i1075[24]
  i1074.vSyncCount = i1075[25]
  i1074.asyncUploadBufferSize = i1075[26]
  i1074.asyncUploadTimeSlice = i1075[27]
  i1074.billboardsFaceCameraPosition = !!i1075[28]
  i1074.shadowNearPlaneOffset = i1075[29]
  i1074.streamingMipmapsMemoryBudget = i1075[30]
  i1074.maximumLODLevel = i1075[31]
  i1074.streamingMipmapsAddAllCameras = !!i1075[32]
  i1074.streamingMipmapsMaxLevelReduction = i1075[33]
  i1074.streamingMipmapsRenderersPerFrame = i1075[34]
  i1074.resolutionScalingFixedDPIFactor = i1075[35]
  i1074.streamingMipmapsMaxFileIORequests = i1075[36]
  i1074.currentQualityLevel = i1075[37]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1085 = data
  i1084.weight = i1085[0]
  i1084.vertices = i1085[1]
  i1084.normals = i1085[2]
  i1084.tangents = i1085[3]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1089 = data
  i1088.mode = i1089[0]
  i1088.parameter = i1089[1]
  i1088.threshold = i1089[2]
  return i1088
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1090 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1091 = data
  i1090.xPlacement = i1091[0]
  i1090.yPlacement = i1091[1]
  i1090.xAdvance = i1091[2]
  i1090.yAdvance = i1091[3]
  return i1090
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"45":[46],"47":[46],"48":[46],"49":[46],"50":[46],"51":[46],"52":[53],"54":[25],"55":[12],"56":[12],"57":[12],"58":[12],"59":[12],"60":[12],"61":[12],"62":[63],"64":[63],"65":[63],"66":[63],"67":[63],"68":[63],"69":[63],"70":[63],"71":[63],"72":[63],"73":[63],"74":[63],"75":[63],"76":[25],"77":[4],"78":[79],"80":[79],"19":[18],"81":[18],"82":[4,18],"14":[18,23],"83":[18],"84":[23,18],"85":[4],"86":[23,18],"87":[18],"88":[89],"90":[18],"91":[18],"22":[19],"33":[23,18],"92":[18],"21":[19],"93":[18],"94":[18],"95":[18],"96":[18],"97":[18],"98":[18],"99":[18],"100":[18],"101":[18],"102":[23,18],"103":[18],"104":[18],"105":[18],"106":[18],"31":[23,18],"107":[18],"108":[38],"109":[38],"39":[38],"110":[38],"111":[25],"112":[25],"113":[89],"114":[89]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.MonoBehaviour","EndLine","UnityEngine.Texture2D","UnityEngine.Rigidbody","CubePropertyhandler","TMPro.TextMeshProUGUI","UnityEngine.LineRenderer","LineRendererfollow","UnityEngine.TrailRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","TMPro.TMP_FontAsset","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","CubeHandler","UnityEngine.GameObject","PlayableManager","UnityEngine.UI.Text","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Font","UnityEngine.UI.Shadow","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "Chain Cube";

Deserializers.lunaInitializationTime = "11/27/2023 07:58:09";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "5.4.0";

Deserializers.lunaSHA = "74daf535b52cd9be24ef1f5a37ed5e95ca202ded";

Deserializers.creativeName = "Chain-Cube";

Deserializers.lunaAppID = "19285";

Deserializers.projectId = "581a344f559124c438e561a5ff29af32";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1569";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3733";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.ChainCube";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "f90cff8e-5d54-4169-acfd-82b0a8372ba9";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

