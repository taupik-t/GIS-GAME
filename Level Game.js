const left = 37
const right = 39
const up = 38
const down = 40
const w = 87
const a = 65
const s = 83
const d = 68

// let RemoveTest = document.getElementById("TestRemove")
// RemoveTest.onclick = function(){
//     document.body.removeChild(LightSaber1)
// }

let CanvasLevel = document.querySelector("#CanvasLevelGame")
let DrawLevel = CanvasLevel.getContext("2d")
let CanvasLevelWidth = CanvasLevel.width
let CanvasLevelHeight = CanvasLevel.height
function CanvasGame(){
    window.scrollTo({
        top: 646,
        left: 1366,
    })
}

//Clear Canvas
function ClearDrawLevel(){
    DrawLevel.clearRect(0, 0, CanvasLevelWidth, CanvasLevelHeight)
}
window.addEventListener("keydown", function(){
    if(Detectkey.innerHTML == "Selected"){
        ArrowMoveTchar(event)
    }
    if(Detectwasd.innerHTML == "Selected"){
        WasdMoveTchar(event)
    }
})
window.addEventListener("keyup", function(){
    if(Detectkey.innerHTML == "Selected"){
        ArrowStopTchar(event)
    }
    if(Detectwasd.innerHTML == "Selected"){
        WasdStopTchar(event)
    }
})
//Movement Controller Key Arrow
function ArrowMoveTchar(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        Player.GoX = -5
    }
    else if(keyPressed == right){
        Player.GoX = 5
    }
    else if(keyPressed == up){
        Player.GoY = -5
    }
    else if(keyPressed == down){
        Player.GoY = 5
    }
}
//Stop Controller Key Arrow
function ArrowStopTchar(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        Player.GoX = 0
    }
    else if(keyPressed == right){
        Player.GoX = 0
    }
    else if(keyPressed == up){
        Player.GoY = 0
    }
    else if(keyPressed == down){
        Player.GoY = 0
    }
}
//Movement Controller Key Wasd
function WasdMoveTchar(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        Player.GoX = -5
    }
    else if(keyPressed == d){
        Player.GoX = 5
    }
    else if(keyPressed == w){
        Player.GoY = -5
    }
    else if(keyPressed == s){
        Player.GoY = 5
    }
}
//Stop Controller Key Wasd
function WasdStopTchar(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        Player.GoX = 0
    }
    else if(keyPressed == d){
        Player.GoX = 0
    }
    else if(keyPressed == w){
        Player.GoY = 0
    }
    else if(keyPressed == s){
        Player.GoY = 0
    }
}

let LevelOne
let LevelTwo
let LevelThree
//Play Game
function StartLevel(){
    if(DetectLevelGame.innerHTML == "Level 1"){
        if(LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(LevelOneCanvas, 10)
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        if(LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(LevelTwoCanvas, 10)
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        if(LevelThree) clearInterval(LevelThree)
            LevelThree = setInterval(LevelThreeCanvas, 10)
    }
}
//Pause Game
function PauseLevel(){
    if(DetectLevelGame.innerHTML == "Level 1"){
        clearInterval(LevelOne)
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        clearInterval(LevelTwo)
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        clearInterval(LevelThree)
    }
}
//Resume Game
function ResumeLevel(){
    if(DetectLevelGame.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
            LevelOne = setInterval(LevelOneCanvas, 10)
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
            LevelTwo = setInterval(LevelTwoCanvas, 10)
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        if (LevelThree) clearInterval(LevelThree)
            LevelThree = setInterval(LevelThreeCanvas, 10)
    }
}
//Stop Game
function StopLevel(){
    if(DetectLevelGame.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelComponent()
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelComponent()
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        if (LevelThree) clearInterval(LevelThree)
        LevelComponent()
    }
}
//Restart Game
function RestartLevel(){
    if(DetectLevelGame.innerHTML == "Level 1"){
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(LevelOneCanvas, 10)
        LevelComponent()
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(LevelTwoCanvas, 10)
        LevelComponent()
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        if (LevelThree) clearInterval(LevelThree)
        LevelThree = setInterval(LevelThreeCanvas, 10)
        LevelComponent()
    }
}

//GameInterval
function LevelComponent(){
    BackgroundLevel = new Object(0, 0, 1200, 600, "Background Level.png", "background")
    Moon = new Object(0, 0, 150, 150, "Moon.png", "image")
    
    //Level One
    LightSaber1 = new Object(1200, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber2 = new Object(1500, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber3 = new Object(1800, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber4 = new Object(2100, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber5 = new Object(2400, 260, 120, 340, "LightSaberV.png", "image")
    
    LightSaber6 = new Object(2700, 0, 1500, 120, "LightSaberHS.png", "image")
    LightSaber7 = new Object(2700, 240, 1500, 120, "LightSaberHS.png", "image")
    LightSaber8 = new Object(2700, 480, 1500, 120, "LightSaberHS.png", "image")
    Meteor1 = new Object(4000, 120, 150, 150, "Meteor.png", "image")

    LightSaber11 = new Object(4500, 350, 120, 250, "LightSaberGap1.png", "image")
    LightSaber12 = new Object(4500, 0, 120, 250, "LightSaberGap2.png" , "image")

    LightSaber13 = new Object(4800, 250, 120, 350,  "LightSaberGap3.png", "image")
    LightSaber14 = new Object(4800, 0, 120, 150,  "LightSaberGap4.png", "image")

    LightSaber15 = new Object(5100, 450, 120, 150, "LightSaberGap5.png", "image")
    LightSaber16 = new Object(5100, 0, 120, 350, "LightSaberGap6.png", "image")

    LightSaber17 = new Object(5400, 130, 120, 470, "LightSaberGap7.png", "image")
    LightSaber18 = new Object(5700, 0, 120, 470, "LightSaberGap8.png", "image")
    
    LightSaber9 = new Object(6100, 120, 1500, 120, "LightSaberHS.png", "image")
    LightSaber10 = new Object(6100, 360, 1500, 120, "LightSaberHS.png", "image")
    Meteor2 = new Object(7450, 240, 150, 150, "Meteor.png", "image")
    Meteor3 = new Object(7450, 450, 150, 150, "Meteor.png", "image")

    if(DetectLevelGame.innerHTML == "Level 1"){
        FinishedLevel = new Object(500, 25, 450, 550, "Finish.png", "image")
        // FinishedLevel = new Object(8000, 25, 450, 550, "Finish.png", "image")
    }
    if(DetectLevelGame.innerHTML == "Level 2"){
        FinishedLevel = new Object(500, 25, 450, 550, "Finish.png", "image")
        // FinishedLevel = new Object(10670, 25, 450, 550, "Finish.png", "image")
    }
    if(DetectLevelGame.innerHTML == "Level 3"){
        FinishedLevel = new Object(500, 25, 450, 550, "Finish.png", "image")
        // FinishedLevel = new Object(13340, 25, 450, 550, "Finish.png", "image")
    }

    //Detection Character
    if(BtnCharOne.innerHTML == "Selected"){
        Player = new Object(0, 250, 150, 75, "T-01 Jet.png", "image")
    }
    //Detection Character
    if(BtnCharTwo.innerHTML == "Selected"){
        Player = new Object(0, 250, 150, 75, "T-02 Ufo.png", "image")
    }
}
function Object(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.angle = 0
    this.loopX = 0
    this.loopY = 0
    this.GoX = 0
    this.GoY = 0
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.type = type
    //Detection Type of object
    if (type == "image" || type == "background"){
        this.image = new Image()
        this.image.src = color
    }
    //To add Object
    this.UpdateObject = function(){
        ctx = DrawLevel
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    // Background Looping
    this.BackgroundLoop = function(){
        this.x += this.loopX
        this.y += this.loopY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    //Movement Character
    this.Movement = function(){
        this.x += this.GoX
        this.y += this.GoY
        this.LimitTop();
        this.LimitBottom();
        this.LimitRight();
        this.LimitLeft();
    }
    // Limmit Top of Canvas
    this.LimitTop = function(){
        var rocktop = this.height - this.height
        if(this.y < rocktop){
            this.y = rocktop
        }
    }
    // Limmit Bottom of Canvas
    this.LimitBottom = function() {
        var rockbottom = CanvasLevelHeight - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
    // Limmit Left of Canvas
    this.LimitLeft = function(){
        var rockLeft = CanvasLevelWidth - this.width
        // var rockLeft = 600 - this.width
        if(this.x > rockLeft){
            this.x = rockLeft
        }
    }
    // Limmit Right of Canvas
    this.LimitRight = function(){
    	var rockRight = this.width - this.width
        if (this.x < rockRight) {
        	this.x = rockRight
        }
    }
    //To add Object
    //Game Over Function
    // this.GameOverLight = function(otherobj){
    //     var myleft = this.x
    //     var myright = this.x + (this.width) - 40
    //     var mytop = this.y
    //     var mybottom = this.y + (this.height) - 30
    //     var otherleft = otherobj.x
    //     var otherright = otherobj.x + (otherobj.width) - 40
    //     var othertop = otherobj.y
    //     var otherbottom = otherobj.y + (otherobj.height) - 30
    //     var LightSaber = true
    //     if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
    //         LightSaber = false;
    //     }
    //     return LightSaber
    // }

    this.GameOverLight = function(otherobj){
        var myleft = this.x
        var myright = this.x + this.width - 40
        var mytop = this.y
        var mybottom = this.y + this.height - 30
        var otherleft = otherobj.x
        var otherright = otherobj.x + otherobj.width - 40
        var othertop = otherobj.y
        var otherbottom = otherobj.y + otherobj.height - 30
        if (myright >= otherleft && 
            myleft <= otherright && 
            mybottom >= othertop && 
            mytop <= otherbottom){
                DetectGameOverTest.innerHTML = "GameOver"
        }
    }
    
    this.FinishedLevel = function(theEndobj){
        var endleft = this.x
        var endright = this.x + this.width - 40
        var endtop = this.y
        var endbottom = this.y + this.height - 30
        var theEndleft = theEndobj.x
        var theEndright = theEndobj.x + theEndobj.width - 40
        var theEndtop = theEndobj.y
        var theEndbottom = theEndobj.y + theEndobj.height - 30
        if (endright >= theEndleft && 
            endleft <= theEndright && 
            endbottom >= theEndtop && 
            endtop <= theEndbottom){
                DetectGameOverTest.innerHTML = "finish"
        }
    }
}
let DetectGameOverTest = document.getElementById("DetectGameOverTest")
//All Content Level One
function LevelOneCanvas(){
    ClearDrawLevel()

    BackgroundLevel.loopX = -1
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()

    Moon.GoX = 0.15
    Moon.Movement()
    Moon.UpdateObject()

    LightSaber1.UpdateObject()
    LightSaber1.x += -1
    LightSaber2.UpdateObject()
    LightSaber2.x += -1
    LightSaber3.UpdateObject()
    LightSaber3.x += -1
    LightSaber4.UpdateObject()
    LightSaber4.x += -1
    LightSaber5.UpdateObject()
    LightSaber5.x += -1

    LightSaber6.UpdateObject()
    LightSaber6.x += -1
    LightSaber7.UpdateObject()
    LightSaber7.x += -1
    LightSaber8.UpdateObject()
    LightSaber8.x += -1
    LightSaber9.UpdateObject()
    LightSaber9.x += -1
    LightSaber10.UpdateObject()
    LightSaber10.x += -1

    LightSaber11.UpdateObject()
    LightSaber11.x += -1
    LightSaber12.UpdateObject()
    LightSaber12.x += -1
    LightSaber13.UpdateObject()
    LightSaber13.x += -1
    LightSaber14.UpdateObject()
    LightSaber14.x += -1
    LightSaber15.UpdateObject()
    LightSaber15.x += -1
    LightSaber16.UpdateObject()
    LightSaber16.x += -1
    LightSaber17.UpdateObject()
    LightSaber17.x += -1
    LightSaber18.UpdateObject()
    LightSaber18.x += -1


    Meteor1.UpdateObject()
    Meteor1.x += -1
    Meteor2.UpdateObject()
    Meteor2.x += -1
    Meteor3.UpdateObject()
    Meteor3.x += -1


    FinishedLevel.UpdateObject()
    FinishedLevel.x += -1

    Player.Movement()
    Player.UpdateObject()
    Player.GameOverLight(LightSaber1)
    Player.GameOverLight(LightSaber2)
    Player.GameOverLight(LightSaber3)
    Player.GameOverLight(LightSaber4)
    Player.GameOverLight(LightSaber5)
    Player.GameOverLight(LightSaber6)
    Player.GameOverLight(LightSaber7)
    Player.GameOverLight(LightSaber8)
    Player.GameOverLight(LightSaber9)
    Player.GameOverLight(LightSaber10)
    Player.GameOverLight(LightSaber11)
    Player.GameOverLight(LightSaber12)
    Player.GameOverLight(LightSaber13)
    Player.GameOverLight(LightSaber14)
    Player.GameOverLight(LightSaber15)
    Player.GameOverLight(LightSaber16)
    Player.GameOverLight(LightSaber17)
    Player.GameOverLight(LightSaber18)
    Player.GameOverLight(Meteor1)
    Player.GameOverLight(Meteor2)
    Player.GameOverLight(Meteor3)
    Player.FinishedLevel(FinishedLevel)
    if (DetectGameOverTest.innerHTML == "GameOver"){
        DisplayGameOverLevelOne()
    }
    if (DetectGameOverTest.innerHTML == "finish"){
        DisplayFinishedLevel()
        StopLevel()
        DetectLevelOne.innerHTML = "LevelOneCompleted"
        ButtonLevelTwo.innerHTML = "Play"
    }
}

function LevelTwoCanvas(){
    ClearDrawLevel()
    BackgroundLevel.loopX = -1
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    Moon.GoX = 0.1
    Moon.Movement()
    Moon.UpdateObject()

    FinishedLevel.UpdateObject()
    FinishedLevel.x += -1

    Player.Movement()
    Player.UpdateObject()
    Player.FinishedLevel(FinishedLevel)
    if (DetectGameOverTest.innerHTML == "GameOver"){
        DisplayGameOverLevelTwo()
    }
    if(DetectGameOverTest.innerHTML == "finish"){
        DisplayFinishedLevel()
        StopLevel()
        DetectLevelTwo.innerHTML = "LevelTwoCompleted"
        ButtonLevelThree.innerHTML = "Play"
    }
}


function LevelThreeCanvas(){
    ClearDrawLevel()
    BackgroundLevel.loopX = -1
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    Moon.GoX = 0.05
    Moon.Movement()
    Moon.UpdateObject()

    FinishedLevel.UpdateObject()
    FinishedLevel.x += -1

    Player.Movement()
    Player.UpdateObject()
    Player.FinishedLevel(FinishedLevel)
    if (DetectGameOverTest.innerHTML == "finish"){
        DisplayFinishedLevel()
        StopLevel()
        DetectLevelThree.innerHTML = "LevelThreeCompleted"
    }
}