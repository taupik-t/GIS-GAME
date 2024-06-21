function disableselect(e) {
    return false
}
function reEnable(e) {
    return true
}
document.onselectstart = new Function("return false")

if (window.sidebar) {
    document.onmousedown = disableselect
    document.onclick = reEnable
}
//<--------------------------------------------------- Main Menu ------------------------------------------------------->
// <!-- Main Menu -->
function WebOnload() {
    NextClick()
}
function NextClick() {
    HideBackButton()

    PlayButton.style.transition = "0.5s"
    CharactersButton.style.transition = "0.5s"
    SettingsButton.style.transition = "0.5s"
    AboutButton.style.transition = "0.5s"
    MoreGamesButton.style.transition = "0.5s"
    CheatButton.style.transition = "0.5s"

    MainMenuClose()

    PlayMenuClose()
    CharacterMenuClose()
    SettingsMenuClose()
    AboutMenuClose()
    CheatMenuClose()
    LevelMenuClose()
    TittleGameOver.style.visibility = "hidden"
}
function MainMenuOpen() {
    ComponentMainMenu()
    MenuLooping()

    ShowMainMenuCanvas()
    ShowTittleGame()

    ShowCharacter()
    ShowDisplayPlayer()
    ShowController()

    ShowPlayButton()
    ShowCharactersButton()
    ShowSettingsButton()
    ShowAboutButton()
    ShowMoreGamesButton()
    ShowCheatButton()

    HideBackButton()

    PlayButton.style.transition = "0.5s"
    CharactersButton.style.transition = "0.5s"
    SettingsButton.style.transition = "0.5s"
    AboutButton.style.transition = "0.5s"
    MoreGamesButton.style.transition = "0.5s"
    CheatButton.style.transition = "0.5s"

    PlayMenuClose()
    CharacterMenuClose()
    SettingsMenuClose()
    AboutMenuClose()
    CheatMenuClose()
    LevelMenuClose()
    TittleGameOver.style.visibility = "hidden"
}
function MainMenuClose() {
    HideMainMenuCanvas()
    HideTittleGame()

    HideCharacter()
    HideDisplayPlayer()
    HideController()

    HidePlayButton()
    HideCharactersButton()
    HideSettingsButton()
    HideAboutButton()
    HideMoreGamesButton()
    HideCheatButton()

    PlayButton.style.transition = "0s"
    CharactersButton.style.transition = "0s"
    SettingsButton.style.transition = "0s"
    AboutButton.style.transition = "0s"
    MoreGamesButton.style.transition = "0s"
    CheatButton.style.transition = "0s"
}
let MainMenuCanvas = document.getElementById("MainMenuCanvas")
let TittleGame = document.getElementById("TittleGame")
function ShowMainMenuCanvas() {
    MainMenuCanvas.style.visibility = "visible"
}
function HideMainMenuCanvas() {
    MainMenuCanvas.style.visibility = "hidden"
}
function ShowTittleGame() {
    TittleGame.style.visibility = "visible"
}
function HideTittleGame() {
    TittleGame.style.visibility = "hidden"
}
// <!-- Display Player -->
let Character = document.getElementById("Character")
let DisplayPlayer = document.getElementById("DisplayPlayer")
let Controller = document.getElementById("Controller")
function ShowCharacter() {
    Character.style.visibility = "visible"
}
function HideCharacter() {
    Character.style.visibility = "hidden"
}
function ShowDisplayPlayer() {
    DisplayPlayer.style.visibility = "visible"
}
function HideDisplayPlayer() {
    DisplayPlayer.style.visibility = "hidden"
}
function ShowController() {
    Controller.style.visibility = "visible"
}
function HideController() {
    Controller.style.visibility = "hidden"
}
// <!-- Button Menu -->
let PlayButton = document.getElementById("PlayButton")
PlayButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
    PlayMenuOpen()
}
let CharactersButton = document.getElementById("CharactersButton")
CharactersButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
    CharacterMenuOpen()
}
let SettingsButton = document.getElementById("SettingsButton")
SettingsButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
    SettingsMenuOpen()
}
let AboutButton = document.getElementById("AboutButton")
AboutButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
    AboutMenuOpen()
}
let MoreGamesButton = document.getElementById("MoreGamesButton")
MoreGamesButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
}
let CheatButton = document.getElementById("CheatButton")
CheatButton.onclick = function () {
    MainMenuClose()
    ShowBackButton()
    CheatMenuOpen()
}
let BackButton = document.getElementById("BackButton")
let BackBtn = document.getElementById("BackBtn")
BackButton.onclick = function () {
    MainMenuOpen()
    HideBackButton()
}
function ShowPlayButton() {
    PlayButton.style.visibility = "visible"
}
function HidePlayButton() {
    PlayButton.style.visibility = "hidden"
}
function ShowCharactersButton() {
    CharactersButton.style.visibility = "visible"
}
function HideCharactersButton() {
    CharactersButton.style.visibility = "hidden"
}
function ShowSettingsButton() {
    SettingsButton.style.visibility = "visible"
}
function HideSettingsButton() {
    SettingsButton.style.visibility = "hidden"
}
function ShowAboutButton() {
    AboutButton.style.visibility = "visible"
}
function HideAboutButton() {
    AboutButton.style.visibility = "hidden"
}
function ShowMoreGamesButton() {
    MoreGamesButton.style.visibility = "visible"
}
function HideMoreGamesButton() {
    MoreGamesButton.style.visibility = "hidden"
}
function ShowCheatButton() {
    CheatButton.style.visibility = "visible"
}
function HideCheatButton() {
    CheatButton.style.visibility = "hidden"
}
function ShowBackButton() {
    BackButton.style.visibility = "visible"
    BackButton.style.transition = "0.5s"
    BackBtn.style.transition = "0.5s"
}
function HideBackButton() {
    BackButton.style.transition = "0s"
    BackBtn.style.transition = "0s"
    BackButton.style.visibility = "hidden"
}

let CanvasMainMenu = document.getElementById("MainMenuCanvas")
let DrawCanvasMainMenu = CanvasMainMenu.getContext("2d")
let CanvasMenuMainWidth = CanvasMainMenu.width
let CanvasMenuMainHeight = CanvasMainMenu.height

function ComponentMainMenu() {
    if (Character.innerHTML == "T-01") {
        PlayerMenu = new ObjectMenu(710, 280, 150, 75, "T-01 Jet.png", "image")
    }
    if (Character.innerHTML == "T-02") {
        PlayerMenu = new ObjectMenu(710, 280, 150, 75, "T-02 Ufo.png", "image")
    }
}
let IntervalMainMenu
function MenuLooping() {
    clearInterval(IntervalMainMenu)
    IntervalMainMenu = setInterval(ContentMainMenu, 10)
}
function ClearDrawMainMenu() {
    DrawCanvasMainMenu.clearRect(0, 0, CanvasMenuMainWidth, CanvasMenuMainHeight)
}
function ObjectMenu(x, y, width, height, color, type) {
    this.menuX = 0
    this.menuY = 0
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.type = type
    if (type == "image" || type == "background") {
        this.image = new Image()
        const basePath = "/assets/images/";  // Base path for images
        this.image.src = basePath + color;
    }
    this.UpdateMenu = function () {
        ctx = DrawCanvasMainMenu
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height)
            if (type == "background") {
                ctx.drawImage(this.image,
                    this.x + this.width,
                    this.y,
                    this.width, this.height);
            }
        } else {
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    this.MovementMenu = function () {
        this.x += this.menuX
        this.y += this.menuY
        this.LimitDisplayTop()
        this.LimitDisplayBottom()
        this.LimitDisplayLeft()
        this.LimitDisplayRight()
    }
    this.LimitDisplayTop = function () {
        var LimitTopDisplay = 215
        if (this.y < LimitTopDisplay) {
            this.y = LimitTopDisplay
        }
    }
    this.LimitDisplayBottom = function () {
        var LimitBottomDisplay = CanvasMenuMainHeight - 275;
        if (this.y > LimitBottomDisplay) {
            this.y = LimitBottomDisplay
        }
    }
    this.LimitDisplayRight = function () {
        var LimitRightDisplay = CanvasMenuMainWidth - 475
        if (this.x > LimitRightDisplay) {
            this.x = LimitRightDisplay
        }
    }
    this.LimitDisplayLeft = function () {
        var LimitLeftDisplay = 695
        if (this.x < LimitLeftDisplay) {
            this.x = LimitLeftDisplay
        }
    }
}
function ContentMainMenu() {
    ClearDrawMainMenu()
    PlayerMenu.MovementMenu()
    PlayerMenu.UpdateMenu()
}

window.addEventListener("keydown", function () {
    if (Controller.innerHTML == "Key Arrow") {
        ControllerKeyMove(event)
    }
    if (Controller.innerHTML == "Key WASD") {
        ControllerWASDMove(event)
    }
})
window.addEventListener("keyup", function () {
    if (Controller.innerHTML == "Key Arrow") {
        ControllerKeyStop(event)
    }
    if (Controller.innerHTML == "Key WASD") {
        ControllerWASDStop(event)
    }
})
function ControllerKeyMove(event) {
    const keyPressed = event.keyCode
    if (keyPressed == left) {
        PlayerMenu.menuX = -5
    }
    else if (keyPressed == right) {
        PlayerMenu.menuX = 5
    }
    else if (keyPressed == up) {
        PlayerMenu.menuY = -5
    }
    else if (keyPressed == down) {
        PlayerMenu.menuY = 5
    }
}
function ControllerKeyStop(event) {
    const keyPressed = event.keyCode
    if (keyPressed == left) {
        PlayerMenu.menuX = 0
    }
    else if (keyPressed == right) {
        PlayerMenu.menuX = 0
    }
    else if (keyPressed == up) {
        PlayerMenu.menuY = 0
    }
    else if (keyPressed == down) {
        PlayerMenu.menuY = 0
    }
}


const esc = 27

function ControllerWASDMove(event) {
    const keyPressed = event.keyCode
    if (keyPressed == a) {
        PlayerMenu.menuX = -5
    }
    else if (keyPressed == d) {
        PlayerMenu.menuX = 5
    }
    else if (keyPressed == w) {
        PlayerMenu.menuY = -5
    }
    else if (keyPressed == s) {
        PlayerMenu.menuY = 5
    }
    // else if (keyPressed == esc) {

    //     DisplayPausedGame.showModal()
    //     DisplayPausedGame.classList.toggle("DisplayPaused")
    //     TittlePausedGame.style.visibility = "visible"
    //     PauseLevel()
    //     document.body.style.cursor = "default"
    // }
}
function ControllerWASDStop(event) {
    const keyPressed = event.keyCode
    if (keyPressed == a) {
        PlayerMenu.menuX = 0
    }
    else if (keyPressed == d) {
        PlayerMenu.menuX = 0
    }
    else if (keyPressed == w) {
        PlayerMenu.menuY = 0
    }
    else if (keyPressed == s) {
        PlayerMenu.menuY = 0
    }
}
//<----------------------------------------------- End Main Menu ------------------------------------------------------->


//<------------------------------------------------- Play Menu --------------------------------------------------------->
function NolProggres() {
    ShowPlayMenuCanvas()
    ShowTittleLevelGame()

    ShowButtonLevelOne()
    ShowEmptyThroophyOne()
    HideButtonCompletedLevelOne()
    HideThroophyOne()

    ShowButtonLockedLevelTwo()
    ShowLockedLevelTwo()
    HideButtonLevelTwo()
    HideEmptyThroophyTwo()
    HideButtonCompletedLevelTwo()
    HideThroophyTwo()

    ShowButtonLockedLevelThree()
    ShowLockedLevelThree()
    HideButtonLevelThree()
    HideEmptyThroophyThree()
    HideButtonCompletedLevelThree()
    HideThroophyThree()
}
function OneProggres() {
    ShowPlayMenuCanvas()
    ShowTittleLevelGame()

    HideButtonLevelOne()
    HideEmptyThroophyOne()
    ShowButtonCompletedLevelOne()
    ShowThroophyOne()

    HideButtonLockedLevelTwo()
    HideLockedLevelTwo()
    ShowButtonLevelTwo()
    ShowEmptyThroophyTwo()
    HideButtonCompletedLevelTwo()
    HideThroophyTwo()

    ShowButtonLockedLevelThree()
    ShowLockedLevelThree()
    HideButtonLevelThree()
    HideEmptyThroophyThree()
    HideButtonCompletedLevelThree()
    HideThroophyThree()
}
function TwoProggres() {
    ShowPlayMenuCanvas()
    ShowTittleLevelGame()

    HideButtonLevelOne()
    HideEmptyThroophyOne()
    ShowButtonCompletedLevelOne()
    ShowThroophyOne()

    HideButtonLockedLevelTwo()
    HideLockedLevelTwo()
    HideButtonLevelTwo()
    HideEmptyThroophyTwo()
    ShowButtonCompletedLevelTwo()
    ShowThroophyTwo()

    HideButtonLockedLevelThree()
    HideLockedLevelThree()
    ShowButtonLevelThree()
    ShowEmptyThroophyThree()
    HideButtonCompletedLevelThree()
    HideThroophyThree()
}
function ThreeProggres() {
    ShowPlayMenuCanvas()
    ShowTittleLevelGame()

    HideButtonLevelOne()
    HideEmptyThroophyOne()
    ShowButtonCompletedLevelOne()
    ShowThroophyOne()

    HideButtonLockedLevelTwo()
    HideLockedLevelTwo()
    HideButtonLevelTwo()
    HideEmptyThroophyTwo()
    ShowButtonCompletedLevelTwo()
    ShowThroophyTwo()

    HideButtonLockedLevelThree()
    HideLockedLevelThree()
    HideButtonLevelThree()
    HideEmptyThroophyThree()
    ShowButtonCompletedLevelThree()
    ShowThroophyThree()
}
function PlayMenuOpen() {
    NolProggres()
    if (OneFinish.innerHTML == "Level 1 Finish") {
        OneProggres()
    }
    if (TwoFinish.innerHTML == "Level 2 Finish") {
        TwoProggres()
    }
    if (ThreeFinish.innerHTML == "Level 3 Finish") {
        ThreeProggres()
    }
}
function PlayMenuClose() {
    HidePlayMenuCanvas()
    HideTittleLevelGame()
    HideButtonLevelOne()
    HideEmptyThroophyOne()
    HideButtonCompletedLevelOne()
    HideThroophyOne()
    HideButtonLockedLevelTwo()
    HideLockedLevelTwo()
    HideButtonLevelTwo()
    HideEmptyThroophyTwo()
    HideButtonCompletedLevelTwo()
    HideThroophyTwo()
    HideButtonLockedLevelThree()
    HideLockedLevelThree()
    HideButtonLevelThree()
    HideEmptyThroophyThree()
    HideButtonCompletedLevelThree()
    HideThroophyThree()
}
let PlayMenuCanvas = document.getElementById("PlayMenuCanvas")
let TittleLevelGame = document.getElementById("TittleLevelGame")
function ShowPlayMenuCanvas() {
    PlayMenuCanvas.style.visibility = "visible"
}
function HidePlayMenuCanvas() {
    PlayMenuCanvas.style.visibility = "hidden"
}
function ShowTittleLevelGame() {
    TittleLevelGame.style.visibility = "visible"
}
function HideTittleLevelGame() {
    TittleLevelGame.style.visibility = "hidden"
}
let ButtonLevelOne = document.getElementById("ButtonLevelOne")
let EmptyThroophyOne = document.getElementById("EmptyThroophyOne")
function ShowButtonLevelOne() {
    ButtonLevelOne.style.visibility = "visible"
}
function HideButtonLevelOne() {
    ButtonLevelOne.style.visibility = "hidden"
}
function ShowEmptyThroophyOne() {
    EmptyThroophyOne.style.visibility = "visible"
}
function HideEmptyThroophyOne() {
    EmptyThroophyOne.style.visibility = "hidden"
}
let ButtonCompletedLevelOne = document.getElementById("ButtonCompletedLevelOne")
let ThroophyOne = document.getElementById("ThroophyOne")
function ShowButtonCompletedLevelOne() {
    ButtonCompletedLevelOne.style.visibility = "visible"
}
function HideButtonCompletedLevelOne() {
    ButtonCompletedLevelOne.style.visibility = "hidden"
}
function ShowThroophyOne() {
    ThroophyOne.style.visibility = "visible"
}
function HideThroophyOne() {
    ThroophyOne.style.visibility = "hidden"
}
let ButtonLockedLevelTwo = document.getElementById("ButtonLockedLevelTwo")
let LockedLevelTwo = document.getElementById("LockedLevelTwo")
function ShowButtonLockedLevelTwo() {
    ButtonLockedLevelTwo.style.visibility = "visible"
}
function HideButtonLockedLevelTwo() {
    ButtonLockedLevelTwo.style.visibility = "hidden"
}
function ShowLockedLevelTwo() {
    LockedLevelTwo.style.visibility = "visible"
}
function HideLockedLevelTwo() {
    LockedLevelTwo.style.visibility = "hidden"
}
let ButtonLevelTwo = document.getElementById("ButtonLevelTwo")
let EmptyThroophyTwo = document.getElementById("EmptyThroophyTwo")
function ShowButtonLevelTwo() {
    ButtonLevelTwo.style.visibility = "visible"
}
function HideButtonLevelTwo() {
    ButtonLevelTwo.style.visibility = "hidden"
}
function ShowEmptyThroophyTwo() {
    EmptyThroophyTwo.style.visibility = "visible"
}
function HideEmptyThroophyTwo() {
    EmptyThroophyTwo.style.visibility = "hidden"
}
let ButtonCompletedLevelTwo = document.getElementById("ButtonCompletedLevelTwo")
let ThroophyTwo = document.getElementById("ThroophyTwo")
function ShowButtonCompletedLevelTwo() {
    ButtonCompletedLevelTwo.style.visibility = "visible"
}
function HideButtonCompletedLevelTwo() {
    ButtonCompletedLevelTwo.style.visibility = "hidden"
}
function ShowThroophyTwo() {
    ThroophyTwo.style.visibility = "visible"
}
function HideThroophyTwo() {
    ThroophyTwo.style.visibility = "hidden"
}
let ButtonLockedLevelThree = document.getElementById("ButtonLockedLevelThree")
let LockedLevelThree = document.getElementById("LockedLevelThree")
function ShowButtonLockedLevelThree() {
    ButtonLockedLevelThree.style.visibility = "visible"
}
function HideButtonLockedLevelThree() {
    ButtonLockedLevelThree.style.visibility = "hidden"
}
function ShowLockedLevelThree() {
    LockedLevelThree.style.visibility = "visible"
}
function HideLockedLevelThree() {
    LockedLevelThree.style.visibility = "hidden"
}
let ButtonLevelThree = document.getElementById("ButtonLevelThree")
let EmptyThroophyThree = document.getElementById("EmptyThroophyThree")
function ShowButtonLevelThree() {
    ButtonLevelThree.style.visibility = "visible"
}
function HideButtonLevelThree() {
    ButtonLevelThree.style.visibility = "hidden"
}
function ShowEmptyThroophyThree() {
    EmptyThroophyThree.style.visibility = "visible"
}
function HideEmptyThroophyThree() {
    EmptyThroophyThree.style.visibility = "hidden"
}
let ButtonCompletedLevelThree = document.getElementById("ButtonCompletedLevelThree")
let ThroophyThree = document.getElementById("ThroophyThree")
function ShowButtonCompletedLevelThree() {
    ButtonCompletedLevelThree.style.visibility = "visible"
}
function HideButtonCompletedLevelThree() {
    ButtonCompletedLevelThree.style.visibility = "hidden"
}
function ShowThroophyThree() {
    ThroophyThree.style.visibility = "visible"
}
function HideThroophyThree() {
    ThroophyThree.style.visibility = "hidden"
}
ButtonLevelOne.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 1"
    TittleProggresBarLevel.innerHTML = "Level 1"
    ObjectLevel()
    StartLevel()
}
ButtonCompletedLevelOne.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 1"
    TittleProggresBarLevel.innerHTML = "Level 1"
    ObjectLevel()
    StartLevel()
}
ButtonLevelTwo.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 2"
    TittleProggresBarLevel.innerHTML = "Level 2"
    ObjectLevel()
    StartLevel()
}
ButtonCompletedLevelTwo.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 2"
    TittleProggresBarLevel.innerHTML = "Level 2"
    ObjectLevel()
    StartLevel()
}
ButtonLevelThree.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 3"
    TittleProggresBarLevel.innerHTML = "Level 3"
    ObjectLevel()
    StartLevel()
}
ButtonCompletedLevelThree.onclick = function () {
    PlayMenuClose()
    LevelMenuOpen()
    HideBackButton()
    LevelGame.innerHTML = "Level 3"
    TittleProggresBarLevel.innerHTML = "Level 3"
    ObjectLevel()
    StartLevel()
}
//<----------------------------------------------- End Play Menu ------------------------------------------------------->


//<---------------------------------------------- Character Menu ------------------------------------------------------->
let CharacterCanvas = document.getElementById("CharacterCanvas")
let TittleChooseCharacter = document.getElementById("TittleChooseCharacter")
let CharacterOneButton = document.getElementById("CharacterOneButton")
CharacterOneButton.onclick = function () {
    HideCharacterOneDisplay()
    ShowCharacterOneSelected()
    ShowCharacterTwoDisplay()
    HideCharacterTwoSelected()
    CharacterOneButton.innerHTML = "Selected"
    CharacterTwoButton.innerHTML = "Select"
    CharacterOneButton.style.color = "white"
    CharacterOneButton.style.backgroundColor = "blue"
    CharacterTwoButton.style.color = "blue"
    CharacterTwoButton.style.backgroundColor = "skyblue"
    Character.innerHTML = "T-01"
}
let CharacterOneDisplay = document.getElementById("CharacterOneDisplay")
let CharacterOneSelected = document.getElementById("CharacterOneSelected")
let CharacterTwoButton = document.getElementById("CharacterTwoButton")
CharacterTwoButton.onclick = function () {
    HideCharacterTwoDisplay()
    ShowCharacterTwoSelected()
    ShowCharacterOneDisplay()
    HideCharacterOneSelected()
    CharacterOneButton.innerHTML = "Select"
    CharacterTwoButton.innerHTML = "Selected"
    CharacterTwoButton.style.color = "white"
    CharacterTwoButton.style.backgroundColor = "blue"
    CharacterOneButton.style.color = "blue"
    CharacterOneButton.style.backgroundColor = "skyblue"
    Character.innerHTML = "T-02"
}
let CharacterTwoDisplay = document.getElementById("CharacterTwoDisplay")
let CharacterTwoSelected = document.getElementById("CharacterTwoSelected")
function ShowCharacterCanvas() {
    CharacterCanvas.style.visibility = "visible"
}
function HideCharacterCanvas() {
    CharacterCanvas.style.visibility = "hidden"
}
function ShowTittleChooseCharacter() {
    TittleChooseCharacter.style.visibility = "visible"
}
function HideTittleChooseCharacter() {
    TittleChooseCharacter.style.visibility = "hidden"
}
function ShowCharacterOneButton() {
    CharacterOneButton.style.visibility = "visible"
}
function HideCharacterOneButton() {
    CharacterOneButton.style.visibility = "hidden"
}
function ShowCharacterOneDisplay() {
    CharacterOneDisplay.style.visibility = "visible"
}
function HideCharacterOneDisplay() {
    CharacterOneDisplay.style.visibility = "hidden"
}
function ShowCharacterOneSelected() {
    CharacterOneSelected.style.visibility = "visible"
}
function HideCharacterOneSelected() {
    CharacterOneSelected.style.visibility = "hidden"
}
function ShowCharacterTwoButton() {
    CharacterTwoButton.style.visibility = "visible"
}
function HideCharacterTwoButton() {
    CharacterTwoButton.style.visibility = "hidden"
}
function ShowCharacterTwoDisplay() {
    CharacterTwoDisplay.style.visibility = "visible"
}
function HideCharacterTwoDisplay() {
    CharacterTwoDisplay.style.visibility = "hidden"
}
function ShowCharacterTwoSelected() {
    CharacterTwoSelected.style.visibility = "visible"
}
function HideCharacterTwoSelected() {
    CharacterTwoSelected.style.visibility = "hidden"
}
function CharacterMenuOpen() {
    if (CharacterOneButton.innerHTML == "Selected") {
        HideCharacterOneDisplay()
        ShowCharacterOneSelected()
        ShowCharacterTwoDisplay()
        HideCharacterTwoSelected()
        CharacterOneButton.style.color = "white"
        CharacterOneButton.style.backgroundColor = "blue"
        CharacterTwoButton.style.color = "blue"
        CharacterTwoButton.style.backgroundColor = "skyblue"
    }
    if (CharacterTwoButton.innerHTML == "Selected") {
        HideCharacterTwoDisplay()
        ShowCharacterTwoSelected()
        ShowCharacterOneDisplay()
        HideCharacterOneSelected()
        CharacterOneButton.innerHTML = "Select"
        CharacterTwoButton.innerHTML = "Selected"
        CharacterTwoButton.style.color = "white"
        CharacterTwoButton.style.backgroundColor = "blue"
        CharacterOneButton.style.color = "blue"
        CharacterOneButton.style.backgroundColor = "skyblue"
    }
    ShowCharacterCanvas()
    ShowTittleChooseCharacter()
    ShowCharacterOneButton()
    ShowCharacterTwoButton()
}
function CharacterMenuClose() {
    HideCharacterCanvas()
    HideTittleChooseCharacter()
    HideCharacterOneButton()
    HideCharacterOneDisplay()
    HideCharacterOneSelected()
    HideCharacterTwoButton()
    HideCharacterTwoDisplay()
    HideCharacterTwoSelected()
}
//<-------------------------------------------- End Character Menu ----------------------------------------------------->

//<---------------------------------------------- Settings Menu -------------------------------------------------------->
let SettingsCanvas = document.getElementById("SettingsCanvas")
let TittleSettings = document.getElementById("TittleSettings")
let VolumeAudio = document.getElementById("VolumeAudio")
let MusicVolume = document.getElementById("MusicVolume")
let Music = document.getElementById("Music")
let ParameterMusic = document.getElementById("ParameterMusic")
let SoundVolume = document.getElementById("SoundVolume")
let Sound = document.getElementById("Sound")
let ParameterSound = document.getElementById("ParameterSound")
let LineSettings = document.getElementById("LineSettings")
let ControllerGame = document.getElementById("ControllerGame")
let KeyArrow = document.getElementById("KeyArrow")
let KeyArrowSelect = document.getElementById("KeyArrowSelect")
let KeyArrowDisplay = document.getElementById("KeyArrowDisplay")
let KeyWASD = document.getElementById("KeyWASD")
let KeyWASDSelect = document.getElementById("KeyWASDSelect")
let KeyWASDDisplay = document.getElementById("KeyWASDDisplay")
ParameterMusic.oninput = function () {
    VolMsc = ParameterMusic.value / 100
    Music.innerHTML = ParameterMusic.value + "%"
    BackSoundLevelOne.VolumeVideo(VolMsc)
    BackSoundLevelTwo.VolumeVideo(VolMsc)
    BackSoundLevelThree.VolumeVideo(VolMsc)
    BackSoundMusic.VolumeVideo(VolMsc)
}
ParameterSound.oninput = function () {
    VolSnd = ParameterSound.value / 100
    Sound.innerHTML = ParameterSound.value + "%"
    SoundHitLightSaber.VolumeVideo(VolSnd)
}
KeyArrowSelect.onclick = function () {
    Controller.innerHTML = "Key Arrow"
    KeyArrowSelect.innerHTML = "Selected"
    KeyWASDSelect.innerHTML = "Select"
    KeyArrowSelect.style.backgroundColor = "blue"
    KeyWASDSelect.style.backgroundColor = "black"
    KeyArrowDisplay.style.border = "10px solid blue"
    KeyWASDDisplay.style.border = "10px groove silver"
}
KeyWASDSelect.onclick = function () {
    Controller.innerHTML = "Key WASD"
    KeyWASDSelect.innerHTML = "Selected"
    KeyArrowSelect.innerHTML = "Select"
    KeyWASDSelect.style.backgroundColor = "blue"
    KeyArrowSelect.style.backgroundColor = "black"
    KeyWASDDisplay.style.border = "10px solid blue"
    KeyArrowDisplay.style.border = "10px groove silver"
}
KeyArrowDisplay.onclick = function () {
    Controller.innerHTML = "Key Arrow"
    KeyArrowSelect.innerHTML = "Selected"
    KeyWASDSelect.innerHTML = "Select"
    KeyArrowSelect.style.backgroundColor = "blue"
    KeyWASDSelect.style.backgroundColor = "black"
    KeyArrowDisplay.style.border = "10px solid blue"
    KeyWASDDisplay.style.border = "10px groove silver"
}
KeyWASDDisplay.onclick = function () {
    Controller.innerHTML = "Key WASD"
    KeyWASDSelect.innerHTML = "Selected"
    KeyArrowSelect.innerHTML = "Select"
    KeyWASDSelect.style.backgroundColor = "blue"
    KeyArrowSelect.style.backgroundColor = "black"
    KeyWASDDisplay.style.border = "10px solid blue"
    KeyArrowDisplay.style.border = "10px groove silver"
}
function SettingsMenuOpen() {
    ShowSettingsCanvas()
    ShowTittleSettings()
    ShowVolumeAudio()
    ShowMusicVolume()
    ShowMusic()
    ShowParameterMusic()
    ShowSoundVolume()
    ShowSound()
    ShowParameterSound()
    ShowLineSettings()
    ShowControllerGame()
    ShowKeyArrow()
    ShowKeyArrowSelect()
    ShowKeyArrowDisplay()
    ShowKeyWASD()
    ShowKeyWASDSelect()
    ShowKeyWASDDisplay()
}
function SettingsMenuClose() {
    HideSettingsCanvas()
    HideTittleSettings()
    HideVolumeAudio()
    HideMusicVolume()
    HideMusic()
    HideParameterMusic()
    HideSoundVolume()
    HideSound()
    HideParameterSound()
    HideLineSettings()
    HideControllerGame()
    HideKeyArrow()
    HideKeyArrowSelect()
    HideKeyArrowDisplay()
    HideKeyWASD()
    HideKeyWASDSelect()
    HideKeyWASDDisplay()
}
function ShowSettingsCanvas() {
    SettingsCanvas.style.visibility = "visible"
}
function HideSettingsCanvas() {
    SettingsCanvas.style.visibility = "hidden"
}
function ShowTittleSettings() {
    TittleSettings.style.visibility = "visible"
}
function HideTittleSettings() {
    TittleSettings.style.visibility = "hidden"
}
function ShowVolumeAudio() {
    VolumeAudio.style.visibility = "visible"
}
function HideVolumeAudio() {
    VolumeAudio.style.visibility = "hidden"
}
function ShowMusicVolume() {
    MusicVolume.style.visibility = "visible"
}
function HideMusicVolume() {
    MusicVolume.style.visibility = "hidden"
}
function ShowMusic() {
    Music.style.visibility = "visible"
}
function HideMusic() {
    Music.style.visibility = "hidden"
}
function ShowParameterMusic() {
    ParameterMusic.style.visibility = "visible"
}
function HideParameterMusic() {
    ParameterMusic.style.visibility = "hidden"
}
function ShowSoundVolume() {
    SoundVolume.style.visibility = "visible"
}
function HideSoundVolume() {
    SoundVolume.style.visibility = "hidden"
}
function ShowSound() {
    Sound.style.visibility = "visible"
}
function HideSound() {
    Sound.style.visibility = "hidden"
}
function ShowParameterSound() {
    ParameterSound.style.visibility = "visible"
}
function HideParameterSound() {
    ParameterSound.style.visibility = "hidden"
}
function ShowLineSettings() {
    LineSettings.style.visibility = "visible"
}
function HideLineSettings() {
    LineSettings.style.visibility = "hidden"
}
function ShowControllerGame() {
    ControllerGame.style.visibility = "visible"
}
function HideControllerGame() {
    ControllerGame.style.visibility = "hidden"
}
function ShowKeyArrow() {
    KeyArrow.style.visibility = "visible"
}
function HideKeyArrow() {
    KeyArrow.style.visibility = "hidden"
}
function ShowKeyArrowSelect() {
    KeyArrowSelect.style.visibility = "visible"
}
function HideKeyArrowSelect() {
    KeyArrowSelect.style.visibility = "hidden"
}
function ShowKeyArrowDisplay() {
    KeyArrowDisplay.style.visibility = "visible"
}
function HideKeyArrowDisplay() {
    KeyArrowDisplay.style.visibility = "hidden"
}
function ShowKeyWASD() {
    KeyWASD.style.visibility = "visible"
}
function HideKeyWASD() {
    KeyWASD.style.visibility = "hidden"
}
function ShowKeyWASDSelect() {
    KeyWASDSelect.style.visibility = "visible"
}
function HideKeyWASDSelect() {
    KeyWASDSelect.style.visibility = "hidden"
}
function ShowKeyWASDDisplay() {
    KeyWASDDisplay.style.visibility = "visible"
}
function HideKeyWASDDisplay() {
    KeyWASDDisplay.style.visibility = "hidden"
}
function video(src) {
    this.video = document.createElement("video")
    this.video.src = src
    this.video.setAttribute("preload", "auto")
    this.video.setAttribute("controls", "none")
    this.video.style.display = "none"
    document.body.appendChild(this.video)
    this.PlayVideo = function () {
        this.video.play();
    }
    this.StopVideo = function () {
        this.video.pause();
    }
    this.LoopVideo = function () {
        this.video.setAttribute("loop", "loop");
        this.video.play();
    }
    this.VolumeVideo = function (vol) {
        this.video.volume = vol;
    }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.PlayMusic = function () {
        this.sound.play();
    }
    this.StopMusic = function () {
        this.sound.pause();
    }
    this.LoopMusic = function () {
        this.sound.setAttribute("loop", "loop");
        this.sound.play();
    }
    this.VolumeMusic = function (vol) {
        this.sound.volume = vol;
    }
}
//<-------------------------------------------- End Settings Menu ------------------------------------------------------>

//<----------------------------------------------- About Menu ---------------------------------------------------------->
let AboutCanvas = document.getElementById("AboutCanvas")
let PageDisplay = document.getElementById("PageDisplay")
let ButtonNextPage = document.getElementById("ButtonNextPage")
let ButtonPrevPage = document.getElementById("ButtonPrevPage")
let BtnNextPage = document.getElementById("BtnNextPage")
let BtnPrevPage = document.getElementById("BtnPrevPage")
ButtonNextPage.onclick = function () {
    if (PageDisplay.innerHTML == "Page 1/3") {
        PageDisplay.innerHTML = "Page 2/3"
        AboutCanvas.style.backgroundImage = 'url("Background About Page 2.png")'
        ShowButtonNextPage()
        ShowButtonPrevPage()
        return
    }
    if (PageDisplay.innerHTML == "Page 2/3") {
        PageDisplay.innerHTML = "Page 3/3"
        AboutCanvas.style.backgroundImage = 'url("Background About Page 3.png")'
        HideButtonNextPage()
        ShowButtonPrevPage()
    }
    if (PageDisplay.innerHTML == "Page 3/3") {
        HideButtonNextPage()
        ShowButtonPrevPage()
    }
}
ButtonPrevPage.onclick = function () {
    if (PageDisplay.innerHTML == "Page 1/3") {
        HideButtonPrevPage()
        ShowButtonNextPage()
    }
    if (PageDisplay.innerHTML == "Page 2/3") {
        PageDisplay.innerHTML = "Page 1/3"
        AboutCanvas.style.backgroundImage = 'url("Background About Page 1.png")'
        HideButtonPrevPage()
        ShowButtonNextPage()
    }
    if (PageDisplay.innerHTML == "Page 3/3") {
        PageDisplay.innerHTML = "Page 2/3"
        AboutCanvas.style.backgroundImage = 'url("Background About Page 2.png")'
        ShowButtonNextPage()
        ShowButtonPrevPage()
    }
}
function ShowAboutCanvas() {
    AboutCanvas.style.visibility = "visible"
}
function HideAboutCanvas() {
    AboutCanvas.style.visibility = "hidden"
}
function ShowPageDisplay() {
    PageDisplay.style.visibility = "visible"
}
function HidePageDisplay() {
    PageDisplay.style.visibility = "hidden"
}
function ShowButtonNextPage() {
    ButtonNextPage.style.visibility = "visible"
    ButtonNextPage.style.transition = "0.5s"
    BtnNextPage.style.transition = "0.5s"
}
function HideButtonNextPage() {
    ButtonNextPage.style.visibility = "hidden"
    ButtonNextPage.style.transition = "0s"
    BtnNextPage.style.transition = "0s"
}
function ShowButtonPrevPage() {
    ButtonPrevPage.style.visibility = "visible"
    ButtonPrevPage.style.transition = "0.5s"
    BtnPrevPage.style.transition = "0.5s"
}
function HideButtonPrevPage() {
    ButtonPrevPage.style.visibility = "hidden"
    ButtonPrevPage.style.transition = "0s"
    BtnPrevPage.style.transition = "0s"
}
function AboutMenuOpen() {
    ShowAboutCanvas()
    ShowPageDisplay()
    if (PageDisplay.innerHTML == "Page 1/3") {
        AboutCanvas.style.backgroundImage = 'url("Background About Page 1.png")'
        ShowButtonNextPage()
        HideButtonPrevPage()
    }
    if (PageDisplay.innerHTML == "Page 2/3") {
        AboutCanvas.style.backgroundImage = 'url("Background About Page 2.png")'
        ShowButtonNextPage()
        ShowButtonPrevPage()
    }
    if (PageDisplay.innerHTML == "Page 3/3") {
        AboutCanvas.style.backgroundImage = 'url("Background About Page 3.png")'
        HideButtonNextPage()
        ShowButtonPrevPage()
    }
}
function AboutMenuClose() {
    HideAboutCanvas()
    HidePageDisplay()
    HideButtonNextPage()
    HideButtonPrevPage()
}
//<-------------------------------------------- End About Menu --------------------------------------------------------->

//<--------------------------------------------- More Games Menu ------------------------------------------------------->

//<------------------------------------------- End More Games Menu ----------------------------------------------------->

//<----------------------------------------------- Cheat Menu ---------------------------------------------------------->
let CanvasCheatMenu = document.getElementById("CanvasCheatMenu")
let OneFinish = document.getElementById("OneFinish")
let TwoFinish = document.getElementById("TwoFinish")
let ThreeFinish = document.getElementById("ThreeFinish")
let OneBtn = document.getElementById("OneBtn")
let TwoBtnv = document.getElementById("TwoBtn")
let ThreeBtnv = document.getElementById("ThreeBtn")
let LevelGame = document.getElementById("LevelGame")
let ConditionGame = document.getElementById("ConditionGame")
let ProgressBarGame = document.getElementById("DisplayProggresBar")
let ResetGameAllToZero = document.getElementById("ResetGameAllToZero")
ResetGameAllToZero.onclick = function () {
    OneFinish.innerHTML = "Uncompleted"
    TwoFinish.innerHTML = "Uncompleted"
    ThreeFinish.innerHTML = "Uncompleted"
}
function CheatOne() {
    OneFinish.innerHTML = "Level 1 Finish"
}
function CheatTwo() {
    TwoFinish.innerHTML = "Level 2 Finish"
}
function CheatThree() {
    ThreeFinish.innerHTML = "Level 3 Finish"
}
function CheatMenuOpen() {
    CanvasCheatMenu.style.visibility = "visible"
    LevelGame.style.visibility = "visible"
    ConditionGame.style.visibility = "visible"
    ResetGameAllToZero.style.visibility = "visible"
    OneBtn.style.visibility = "visible"
    TwoBtnv.style.visibility = "visible"
    ThreeBtnv.style.visibility = "visible"
    OneFinish.style.visibility = "visible"
    TwoFinish.style.visibility = "visible"
    ThreeFinish.style.visibility = "visible"
}
function CheatMenuClose() {
    CanvasCheatMenu.style.visibility = "hidden"
    LevelGame.style.visibility = "hidden"
    ConditionGame.style.visibility = "hidden"
    ResetGameAllToZero.style.visibility = "hidden"
    OneBtn.style.visibility = "hidden"
    TwoBtnv.style.visibility = "hidden"
    ThreeBtnv.style.visibility = "hidden"
    OneFinish.style.visibility = "hidden"
    TwoFinish.style.visibility = "hidden"
    ThreeFinish.style.visibility = "hidden"
}
//<--------------------------------------------- End Cheat Menu -------------------------------------------------------->

//<----------------------------------------------- Level Game ---------------------------------------------------------->
const left = 37
const right = 39
const up = 38
const down = 40
const w = 87
const a = 65
const s = 83
const d = 68

let CanvasLevel = document.getElementById("CanvasLevelGame")
let DrawLevel = CanvasLevel.getContext("2d")
let CanvasLevelWidth = CanvasLevel.width
let CanvasLevelHeight = CanvasLevel.height
//Clear Canvas
function ClearDrawLevel() {
    DrawLevel.clearRect(0, 0, CanvasLevelWidth, CanvasLevelHeight)
}
let LevelOne
let LevelTwo
let LevelThree
//Play Game
function StartLevel() {
    if (LevelGame.innerHTML == "Level 1") {
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(LevelOneGame, 10)
    }
    if (LevelGame.innerHTML == "Level 2") {
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(LevelTwoGame, 10)
    }
    if (LevelGame.innerHTML == "Level 3") {
        if (LevelThree) clearInterval(LevelThree)
        LevelThree = setInterval(LevelThreeGame, 10)
    }
}
//Pause Game
function PauseLevel() {
    if (LevelGame.innerHTML == "Level 1") {
        clearInterval(LevelOne)
    }
    if (LevelGame.innerHTML == "Level 2") {
        clearInterval(LevelTwo)
    }
    if (LevelGame.innerHTML == "Level 3") {
        clearInterval(LevelThree)
    }
}
//Resume Game
function ResumeLevel() {
    if (LevelGame.innerHTML == "Level 1") {
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(LevelOneGame, 10)
    }
    if (LevelGame.innerHTML == "Level 2") {
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(LevelTwoGame, 10)
    }
    if (LevelGame.innerHTML == "Level 3") {
        if (LevelThree) clearInterval(LevelThree)
        LevelThree = setInterval(LevelThreeGame, 10)
    }
}
//Stop Game
function StopLevel() {
    if (LevelGame.innerHTML == "Level 1") {
        if (LevelOne) clearInterval(LevelOne)
    }
    if (LevelGame.innerHTML == "Level 2") {
        if (LevelTwo) clearInterval(LevelTwo)
    }
    if (LevelGame.innerHTML == "Level 3") {
        if (LevelThree) clearInterval(LevelThree)
    }
}
//Restart Game
function RestartLevel() {
    if (LevelGame.innerHTML == "Level 1") {
        if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(LevelOneGame, 10)
        ObjectLevel()
    }
    if (LevelGame.innerHTML == "Level 2") {
        if (LevelTwo) clearInterval(LevelTwo)
        LevelTwo = setInterval(LevelTwoGame, 10)
        ObjectLevel()
    }
    if (LevelGame.innerHTML == "Level 3") {
        if (LevelThree) clearInterval(LevelThree)
        LevelThree = setInterval(LevelThreeGame, 10)
        ObjectLevel()
    }
}

//GameInterval
function ComponentLevelOne() {
    Moon = new Object(0, 0, 150, 150, "Moon.png", "image")
    // FinishedLevel = new Object(500, 25, 450, 550, "Finish.png", "image")
    FinishedLevel = new Object(5000, 25, 450, 550, "Finish.png", "image")
    LightSaber1 = new Object(900, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber2 = new Object(1200, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber3 = new Object(1500, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber4 = new Object(1800, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber5 = new Object(2100, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber6 = new Object(2400, 0, 350, 120, "LightSaberHo.png", "image")
    LightSaber7 = new Object(2400, 240, 350, 120, "LightSaberHo.png", "image")
    LightSaber8 = new Object(2400, 480, 350, 120, "LightSaberHo.png", "image")
    Meteor1 = new Object(2800, 110, 150, 150, "Meteor.png", "image")
    LightSaber9 = new Object(3000, 120, 350, 120, "LightSaberHo.png", "image")
    LightSaber10 = new Object(3000, 360, 350, 120, "LightSaberHo.png", "image")
    LightSaber11 = new Object(3550, 250, 120, 350, "LightSaberGap3.png", "image")
    LightSaber13 = new Object(3550, 0, 120, 150, "LightSaberGap4.png", "image")
    LightSaber12 = new Object(3850, 0, 120, 350, "LightSaberGap5.png", "image")
    LightSaber15 = new Object(3850, 450, 120, 150, "LightSaberGap6.png", "image")
    LightSaber16 = new Object(4150, 130, 120, 470, "LightSaberGap7.png", "image")
    LightSaber14 = new Object(4450, 0, 120, 470, "LightSaberGap8.png", "image")
    LightSaber17 = new Object(4750, 350, 120, 250, "LightSaberGap1.png", "image")
    LightSaber18 = new Object(4750, 0, 120, 250, "LightSaberGap2.png", "image")
}
function ComponentLevelTwo() {
    var rand1 = Math.random();
    var Chos1
    var Chos2
    var Chos3
    if (rand1 < 0.34) {
        Chos1 = 350
        Chos2 = 0
        Chos3 = 120
    } else if (rand1 >= 0.34) {
        Chos1 = 110
        Chos2 = 450
        Chos3 = 360
    } else if (rand1 < 0.67) {
        Chos1 = 110
        Chos2 = 450
        Chos3 = 360
    } else {
        Chos1 = 350
        Chos2 = 0
        Chos3 = 120
    }
    Moon = new Object(525, 0, 150, 150, "Moon.png", "image")
    // FinishedLevel = new Object(1500, 25, 450, 550, "Finish.png", "image")
    FinishedLevel = new Object(10100, 25, 450, 550, "Finish.png", "image")
    LightSaber1 = new Object(500, 0, 1200, 120, "LightSaberHS.png", "image")
    LightSaber2 = new Object(500, 240, 1200, 120, "LightSaberHS.png", "image")
    LightSaber3 = new Object(500, 480, 1200, 120, "LightSaberHS.png", "image")
    Meteor1 = new Object(1600, Chos1, 150, 150, "Meteor.png", "image")

    Meteor2 = new Object(1900, 0, 150, 150, "Meteor.png", "image")
    Meteor4 = new Object(1900, 225, 150, 150, "Meteor.png", "image")
    Meteor6 = new Object(1900, 450, 150, 150, "Meteor.png", "image")

    Meteor3 = new Object(2200, 110, 150, 150, "Meteor.png", "image")
    Meteor5 = new Object(2200, 350, 150, 150, "Meteor.png", "image")

    LightSaber4 = new Object(2400, Chos3, 350, 120, "LightSaberHo.png", "image")
    Meteor11 = new Object(2500, Chos2, 150, 150, "Meteor.png", "image")
    Meteor8 = new Object(2500, 225, 150, 150, "Meteor.png", "image")

    Meteor7 = new Object(2900, 451, 150, 150, "Meteor.png", "image")
    Meteor9 = new Object(3300, 225, 150, 150, "Meteor.png", "image")
    Meteor10 = new Object(3700, 451, 150, 150, "Meteor.png", "image")

    LightSaber5 = new Object(3900, 0, 120, 470, "LightSaberGap8.png", "image")

    LightSaber6 = new Object(4200, 0, 120, 350, "LightSaberGap5.png", "image")
    LightSaber7 = new Object(4200, 450, 120, 150, "LightSaberGap6.png", "image")

    LightSaber8 = new Object(4500, 0, 120, 250, "LightSaberGap2.png", "image")
    LightSaber9 = new Object(4500, 350, 120, 250, "LightSaberGap1.png", "image")

    LightSaber10 = new Object(4800, 0, 120, 350, "LightSaberGap5.png", "image")
    LightSaber11 = new Object(4800, 450, 120, 150, "LightSaberGap6.png", "image")

    LightSaber12 = new Object(5100, 0, 120, 470, "LightSaberGap8.png", "image")

    Komet1 = new Object(1250, 480, 400, 120, "Komet.png", "image")

    Stick1 = new Object(5500, 0, 120, 80, "StickTop.png", "image")
    LightSaber13 = new Object(5500, 0, 120, -1, "LightSaberHeight.png", "image")
    Stick2 = new Object(5800, 520, 120, 80, "StickBottom.png", "image")
    LightSaber14 = new Object(5797, 0, 120, -1, "LightSaberHeight.png", "image")
    Komet2 = new Object(1250, 240, 400, 120, "Komet.png", "image")

    Meteor12 = new Object(7200, 0, 150, 150, "Meteor.png", "image")
    Meteor13 = new Object(7200, 150, 150, 150, "Meteor.png", "image")
    Meteor16 = new Object(7400, 200, 150, 150, "Meteor.png", "image")
    Meteor17 = new Object(7400, 350, 150, 150, "Meteor.png", "image")

    Meteor18 = new Object(7750, 450, 150, 150, "Meteor.png", "image")
    Meteor19 = new Object(7750, 300, 150, 150, "Meteor.png", "image")
    Meteor20 = new Object(7950, 250, 150, 150, "Meteor.png", "image")
    Meteor21 = new Object(7950, 100, 150, 150, "Meteor.png", "image")

    Meteor22 = new Object(8300, 0, 150, 150, "Meteor.png", "image")
    Meteor23 = new Object(8300, 150, 150, 150, "Meteor.png", "image")
    Meteor24 = new Object(8500, 200, 150, 150, "Meteor.png", "image")
    Meteor25 = new Object(8500, 350, 150, 150, "Meteor.png", "image")

    Meteor14 = new Object(6200, -1, 150, 150, "Meteor.png", "image")
    Meteorit1 = new Object(6400, 25, 530, 175, "Meteorit.png", "image")
    Meteorit2 = new Object(6400, 400, 530, 175, "Meteorit.png", "image")
    Meteor15 = new Object(6930, 601, 150, 150, "Meteor.png", "image")

    LightSaber15 = new Object(7900, 420, 350, 120, "LightSaberHo.png", "image")
    LightSaber16 = new Object(7400, 40, 350, 120, "LightSaberHo.png", "image")

    LightSaber17 = new Object(9100, 500, 350, 120, "LightSaberHo.png", "image")
    LightSaber18 = new Object(9100, 160, 350, 120, "LightSaberHo.png", "image")

    LightSaber19 = new Object(9400, 420, 350, 120, "LightSaberHo.png", "image")
    LightSaber20 = new Object(9400, 80, 350, 120, "LightSaberHo.png", "image")

    LightSaber21 = new Object(9700, 340, 350, 120, "LightSaberHo.png", "image")
    LightSaber22 = new Object(9700, 0, 350, 120, "LightSaberHo.png", "image")

    LightSaber23 = new Object(8700, -1, 350, 120, "LightSaberHo.png", "image")
    LightSaber24 = new Object(8700, 200, 350, 120, "LightSaberHo.png", "image")
}
function ObjectLevel() {
    SpeedLevel = 1
    LimitObject = 1
    BackgroundLevel = new Object(0, 0, 1200, 600, "Background Level.png", "background")
    if (Character.innerHTML == "T-01") {
        Player = new Object(100, 250, 150, 75, "T-01 Jet.png", "image")
    }
    if (Character.innerHTML == "T-02") {
        Player = new Object(100, 250, 150, 75, "T-02 Ufo.png", "image")
    }
    if (LevelGame.innerHTML == "Level 1") {
        ComponentLevelOne()
    }
    if (LevelGame.innerHTML == "Level 2") {
        ComponentLevelTwo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        ComponentLevelThree()
    }
}
function Object(x, y, width, height, color, type) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.loopX = 0
    this.loopY = 0
    this.GoX = 0
    this.GoY = 0
    this.heightY = 0
    this.widthX = 0
    this.metX = 0
    this.metY = 0
    this.toX = 0
    this.toY = 0
    this.LigX = 0
    this.LigY = 0
    this.mX = 0
    this.mY = 0
    this.type = type
    //Detection Type of object
    if (type == "image" || type == "background") {
        this.image = new Image();
        const basePath = "assets/images/";  // Base path for images
        this.image.src = basePath + color;
    }
    //To add Object
    this.UpdateObject = function () {
        ctx = DrawLevel
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height)
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
    this.BackgroundLoop = function () {
        this.x += this.loopX
        this.y += this.loopY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    this.MovementMeteor1 = function () {
        this.x += this.metX
        this.y += this.metY
        var rocktopMet = this.height - this.height
        if (this.y < rocktopMet) {
            this.metY = 3.5
        }
        var rockbottomMet = CanvasLevelHeight - this.height
        if (this.y > rockbottomMet) {
            this.metY = -3.5
        }
    }
    this.MovementMeteor2 = function () {
        this.x += this.mX
        this.y += this.mY
        var myMetRight = (1400 - LimitObject) - this.width
        if (this.x > myMetRight) {
            this.mX = -4
        }
        var myMetLeft = (1000 - LimitObject) - this.width
        if (this.x < myMetLeft) {
            this.mX = 4
        }
    }
    this.MovementMeteor3 = function () {
        this.x += this.mX
        this.y += this.mY
        var myMetRight = (1400 - LimitObject) - this.width
        if (this.x > myMetRight) {
            this.mX = -5
        }
        var myMetLeft = (1000 - LimitObject) - this.width
        if (this.x < myMetLeft) {
            this.mX = 5
        }
    }
    this.MovementLightSaber1 = function () {
        this.x += this.LigX
        this.y += this.LigY
        var rocktoplig = this.height - this.height
        if (this.y < rocktoplig) {
            this.LigY = 2
        }
        var rockbottomlig = CanvasLevelHeight - this.height
        if (this.y > rockbottomlig) {
            this.LigY = -2
        }
    }
    this.MovementLightSaber2 = function () {
        this.x += this.LigX
        this.y += this.LigY
        var rocktoplig = this.height - this.height
        if (this.y < rocktoplig) {
            this.LigY = 2
        }
        var rockbottomlig = CanvasLevelHeight - this.height
        if (this.y > rockbottomlig) {
            this.LigY = -2
        }
    }
    this.HeightLightSaber1 = function () {
        this.width += this.widthX
        this.height += this.heightY
        var TopCanvas = 0
        if (this.height < TopCanvas) {
            this.heightY = 3.5
        }
        var BottomCanvas = 600
        if (this.height > BottomCanvas) {
            this.heightY = -3.5
        }
    }
    //Movement Character
    this.MovementPlayer = function () {
        this.x += this.GoX
        this.y += this.GoY
        var rocktop = this.height - this.height
        if (this.y < rocktop) {
            this.y = rocktop
        }
        var rockbottom = CanvasLevelHeight - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
        var rockRight = CanvasLevelWidth - this.width
        if (this.x > rockRight) {
            this.x = rockRight
        }
        var rockLeft = this.width - this.width
        if (this.x < rockLeft) {
            this.x = rockLeft
        }
    }
    this.MovementFinish = function () {
        this.x += this.toX
        this.y += this.toY
        var FnishRock = 700
        if (this.x < FnishRock) {
        	this.x = FnishRock
        }
    }
    this.ShowKomet1 = function (kometObj) {
        var hitRight = this.x + this.width - 40
        var kometLeft = kometObj.x
        if (hitRight >= kometLeft) {
            Komet1.UpdateObject()
            Komet1.x += -10
        }
    }
    this.ShowKomet2 = function (kometObj1) {
        var hitRight1 = this.x + this.width - 40
        var kometLeft1 = kometObj1.x
        if (hitRight1 >= kometLeft1) {
            Komet2.UpdateObject()
            Komet2.x += -10
        }
    }
    this.GameOverGame = function (objectover) {
        var playerleft = this.x
        var playerright = this.x + this.width - 40
        var playertop = this.y
        var playerbottom = this.y + this.height - 30
        var overleft = objectover.x
        var overright = objectover.x + objectover.width - 40
        var overtop = objectover.y
        var overbottom = objectover.y + objectover.height - 30
        if (playerright >= overleft &&
            playerleft <= overright &&
            playerbottom >= overtop &&
            playertop <= overbottom) {
            ConditionGame.innerHTML = "Game Over"
        }
    }
    this.FinishedGame = function (objectfinish) {
        var myplayerleft = this.x
        var myplayerright = this.x + this.width
        var myplayertop = this.y
        var myplayerbottom = this.y + this.height
        var finishleft = objectfinish.x
        var finishright = objectfinish.x + objectfinish.width
        var finishtop = objectfinish.y
        var finishbottom = objectfinish.y + objectfinish.height
        if (myplayerright >= finishleft &&
            myplayerleft <= finishright &&
            myplayerbottom >= finishtop &&
            myplayertop <= finishbottom) {
            ConditionGame.innerHTML = "Finish"
        }
    }
    this.ProgressBarLevelOne = function (objectfinish) {
        var myplayerleft = this.x
        var myplayerright = this.x + this.width
        var finishleft = objectfinish.x
        var finishright = objectfinish.x + objectfinish.width
        const maxX = 5000;
        var percentage = 0
        if (myplayerright >= finishleft && myplayerleft <= finishright) {
            percentage = 100
        } else {
            percentage = 100 - ((finishleft - myplayerright) / (maxX - myplayerright)) * 100
        }
        console.log(Math.floor(percentage))
        ProgressBarGame.innerHTML = Math.floor(percentage) + "%"
    }
    this.ProgressBarLevelTwo = function (objectfinish) {
        var myplayerleft = this.x
        var myplayerright = this.x + this.width
        var finishleft = objectfinish.x
        var finishright = objectfinish.x + objectfinish.width
        const maxX = 10100;
        var percentage = 0
        if (myplayerright >= finishleft && myplayerleft <= finishright) {
            percentage = 100
        } else {
            percentage = 100 - ((finishleft - myplayerright) / (maxX - myplayerright)) * 100
        }
        console.log(Math.floor(percentage))
        ProgressBarGame.innerHTML = Math.floor(percentage) + "%"
    }
}
//All Content Level One
function LevelOneGame() {
    // document.body.style.cursor = "none"
    ClearDrawLevel()
    BackgroundLevel.loopX = -SpeedLevel
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    Moon.UpdateObject()
    LightSaber1.UpdateObject()
    LightSaber1.x += -SpeedLevel
    LightSaber2.UpdateObject()
    LightSaber2.x += -SpeedLevel
    LightSaber3.UpdateObject()
    LightSaber3.x += -SpeedLevel
    LightSaber4.UpdateObject()
    LightSaber4.x += -SpeedLevel
    LightSaber5.UpdateObject()
    LightSaber5.x += -SpeedLevel
    LightSaber6.UpdateObject()
    LightSaber6.x += -SpeedLevel
    LightSaber7.UpdateObject()
    LightSaber7.x += -SpeedLevel
    LightSaber8.UpdateObject()
    LightSaber8.x += -SpeedLevel
    LightSaber9.UpdateObject()
    LightSaber9.x += -SpeedLevel
    LightSaber10.UpdateObject()
    LightSaber10.x += -SpeedLevel
    LightSaber11.UpdateObject()
    LightSaber11.x += -SpeedLevel
    LightSaber12.UpdateObject()
    LightSaber12.x += -SpeedLevel
    LightSaber13.UpdateObject()
    LightSaber13.x += -SpeedLevel
    LightSaber14.UpdateObject()
    LightSaber14.x += -SpeedLevel
    LightSaber15.UpdateObject()
    LightSaber15.x += -SpeedLevel
    LightSaber16.UpdateObject()
    LightSaber16.x += -SpeedLevel
    LightSaber17.UpdateObject()
    LightSaber17.x += -SpeedLevel
    LightSaber18.UpdateObject()
    LightSaber18.x += -SpeedLevel
    Meteor1.UpdateObject()
    Meteor1.x += -SpeedLevel
    FinishedLevel.UpdateObject()
    FinishedLevel.MovementFinish()
    FinishedLevel.toX = -SpeedLevel
    Player.MovementPlayer()
    Player.UpdateObject()
    Player.GameOverGame(LightSaber1)
    Player.GameOverGame(LightSaber2)
    Player.GameOverGame(LightSaber3)
    Player.GameOverGame(LightSaber4)
    Player.GameOverGame(LightSaber5)
    Player.GameOverGame(LightSaber6)
    Player.GameOverGame(LightSaber7)
    Player.GameOverGame(LightSaber8)
    Player.GameOverGame(LightSaber9)
    Player.GameOverGame(LightSaber10)
    Player.GameOverGame(LightSaber11)
    Player.GameOverGame(LightSaber12)
    Player.GameOverGame(LightSaber13)
    Player.GameOverGame(LightSaber14)
    Player.GameOverGame(LightSaber15)
    Player.GameOverGame(LightSaber16)
    Player.GameOverGame(LightSaber17)
    Player.GameOverGame(LightSaber18)
    Player.GameOverGame(Meteor1)
    Player.FinishedGame(FinishedLevel)
    if (ConditionGame.innerHTML == "Game Over") {
        StopLevel()
        GameOverLevel()
        Player.ProgressBarLevelOne(FinishedLevel)
    }
    if (ConditionGame.innerHTML == "Finish") {
        StopLevel()
        CompletedGameLevel()
        OneFinish.innerHTML = "Level 1 Finish"
    }
}
function LevelTwoGame() {
    // document.body.style.cursor = "none"
    ClearDrawLevel()
    BackgroundLevel.loopX = -SpeedLevel
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    Moon.UpdateObject()
    FinishedLevel.UpdateObject()
    FinishedLevel.MovementFinish()
    FinishedLevel.toX = -SpeedLevel
    Player.FinishedGame(FinishedLevel)
    Meteor1.UpdateObject()
    Meteor1.x += -SpeedLevel
    Meteor2.UpdateObject()
    Meteor2.x += -SpeedLevel
    Meteor3.UpdateObject()
    Meteor3.x += -SpeedLevel
    Meteor4.UpdateObject()
    Meteor4.x += -SpeedLevel
    Meteor5.UpdateObject()
    Meteor5.x += -SpeedLevel
    Meteor6.UpdateObject()
    Meteor6.x += -SpeedLevel
    Meteor8.UpdateObject()
    Meteor8.x += -SpeedLevel
    Meteor7.UpdateObject()
    Meteor7.MovementMeteor1()
    Meteor7.metX = -SpeedLevel
    Meteor9.UpdateObject()
    Meteor9.x += -SpeedLevel
    Meteor10.UpdateObject()
    Meteor10.MovementMeteor1()
    Meteor10.metX = -SpeedLevel
    Meteor11.UpdateObject()
    Meteor11.x += -SpeedLevel
    Meteor12.UpdateObject()
    Meteor12.x += -SpeedLevel
    Meteor13.UpdateObject()
    Meteor13.x += -SpeedLevel
    Meteor14.UpdateObject()
    Meteor14.MovementMeteor1()
    Meteor14.metX = -SpeedLevel
    Meteor15.UpdateObject()
    Meteor15.MovementMeteor1()
    Meteor15.metX = -SpeedLevel
    Meteor16.UpdateObject()
    Meteor16.x += -SpeedLevel
    Meteor17.UpdateObject()
    Meteor17.x += -SpeedLevel
    Meteor18.UpdateObject()
    Meteor18.x += -SpeedLevel
    Meteor19.UpdateObject()
    Meteor19.x += -SpeedLevel
    Meteor20.UpdateObject()
    Meteor20.x += -SpeedLevel
    Meteor21.UpdateObject()
    Meteor21.x += -SpeedLevel
    Meteor22.UpdateObject()
    Meteor22.x += -SpeedLevel
    Meteor23.UpdateObject()
    Meteor23.x += -SpeedLevel
    Meteor24.UpdateObject()
    Meteor24.x += -SpeedLevel
    Meteor25.UpdateObject()
    Meteor25.x += -SpeedLevel
    LightSaber1.UpdateObject()
    LightSaber1.x += -SpeedLevel
    LightSaber2.UpdateObject()
    LightSaber2.x += -SpeedLevel
    LightSaber3.UpdateObject()
    LightSaber3.x += -SpeedLevel
    LightSaber4.UpdateObject()
    LightSaber4.x += -SpeedLevel
    LightSaber5.UpdateObject()
    LightSaber5.x += -SpeedLevel
    LightSaber6.UpdateObject()
    LightSaber6.x += -SpeedLevel
    LightSaber7.UpdateObject()
    LightSaber7.x += -SpeedLevel
    LightSaber8.UpdateObject()
    LightSaber8.x += -SpeedLevel
    LightSaber9.UpdateObject()
    LightSaber9.x += -SpeedLevel
    LightSaber10.UpdateObject()
    LightSaber10.x += -SpeedLevel
    LightSaber11.UpdateObject()
    LightSaber11.x += -SpeedLevel
    LightSaber12.UpdateObject()
    LightSaber12.x += -SpeedLevel
    Player.ShowKomet1(LightSaber12)
    LightSaber13.UpdateObject()
    LightSaber13.x += -SpeedLevel
    LightSaber14.UpdateObject()
    LightSaber14.x += -SpeedLevel
    LightSaber13.HeightLightSaber1()
    LightSaber14.HeightLightSaber1()
    LightSaber14.y = 600 - LightSaber14.height
    Player.ShowKomet2(LightSaber14)
    LightSaber15.UpdateObject()
    LightSaber15.x += -SpeedLevel
    LightSaber16.UpdateObject()
    LightSaber16.x += -SpeedLevel
    LightSaber17.UpdateObject()
    LightSaber17.x += -SpeedLevel
    LightSaber18.UpdateObject()
    LightSaber18.x += -SpeedLevel
    LightSaber19.UpdateObject()
    LightSaber19.x += -SpeedLevel
    LightSaber20.UpdateObject()
    LightSaber20.x += -SpeedLevel
    LightSaber21.UpdateObject()
    LightSaber21.x += -SpeedLevel
    LightSaber22.UpdateObject()
    LightSaber22.x += -SpeedLevel
    LightSaber23.UpdateObject()
    LightSaber23.x += -SpeedLevel
    LightSaber23.LigX = -SpeedLevel
    LightSaber24.UpdateObject()
    LightSaber24.x += -SpeedLevel
    LightSaber24.LigX = -SpeedLevel
    Stick1.UpdateObject()
    Stick1.x += -SpeedLevel
    Stick2.UpdateObject()
    Stick2.x += -SpeedLevel
    Meteorit1.UpdateObject()
    Meteorit1.x += -SpeedLevel
    Meteorit2.UpdateObject()
    Meteorit2.x += -SpeedLevel
    Player.GameOverGame(Meteorit1)
    Player.GameOverGame(Meteorit2)
    Player.GameOverGame(Komet1)
    Player.GameOverGame(Komet2)
    Player.GameOverGame(Stick1)
    Player.GameOverGame(Stick2)
    Player.GameOverGame(Meteor1)
    Player.GameOverGame(Meteor2)
    Player.GameOverGame(Meteor3)
    Player.GameOverGame(Meteor4)
    Player.GameOverGame(Meteor5)
    Player.GameOverGame(Meteor6)
    Player.GameOverGame(Meteor7)
    Player.GameOverGame(Meteor8)
    Player.GameOverGame(Meteor9)
    Player.GameOverGame(Meteor10)
    Player.GameOverGame(Meteor11)
    Player.GameOverGame(Meteor12)
    Player.GameOverGame(Meteor13)
    Player.GameOverGame(Meteor14)
    Player.GameOverGame(Meteor15)
    Player.GameOverGame(Meteor16)
    Player.GameOverGame(Meteor17)
    Player.GameOverGame(Meteor18)
    Player.GameOverGame(Meteor19)
    Player.GameOverGame(Meteor20)
    Player.GameOverGame(Meteor21)
    Player.GameOverGame(Meteor22)
    Player.GameOverGame(Meteor23)
    Player.GameOverGame(Meteor24)
    Player.GameOverGame(Meteor25)
    Player.GameOverGame(LightSaber1)
    Player.GameOverGame(LightSaber2)
    Player.GameOverGame(LightSaber3)
    Player.GameOverGame(LightSaber4)
    Player.GameOverGame(LightSaber5)
    Player.GameOverGame(LightSaber6)
    Player.GameOverGame(LightSaber7)
    Player.GameOverGame(LightSaber8)
    Player.GameOverGame(LightSaber9)
    Player.GameOverGame(LightSaber10)
    Player.GameOverGame(LightSaber11)
    Player.GameOverGame(LightSaber12)
    Player.GameOverGame(LightSaber13)
    Player.GameOverGame(LightSaber14)
    Player.GameOverGame(LightSaber15)
    Player.GameOverGame(LightSaber16)
    Player.GameOverGame(LightSaber17)
    Player.GameOverGame(LightSaber18)
    Player.GameOverGame(LightSaber19)
    Player.GameOverGame(LightSaber20)
    Player.GameOverGame(LightSaber21)
    Player.GameOverGame(LightSaber22)
    Player.GameOverGame(LightSaber23)
    Player.GameOverGame(LightSaber24)
    if (ConditionGame.innerHTML == "Game Over") {
        StopLevel()
        GameOverLevel()
        Player.ProgressBarLevelTwo(FinishedLevel)
    }
    if (ConditionGame.innerHTML == "Finish") {
        StopLevel()
        CompletedGameLevel()
        TwoFinish.innerHTML = "Level 2 Finish"
    }
    Player.MovementPlayer()
    Player.UpdateObject()
}
function ComponentLevelThree() {
    Moon = new Object(1050, 0, 150, 150, "Moon.png", "image")
    // FinishedLevel = new Object(1500, 25, 450, 550, "Finish.png", "image")
    FinishedLevel = new Object(17000, 25, 450, 550, "Finish.png", "image")
    Komet1 = new Object(1200, 240, 400, 120, "Komet.png", "image")
    Komet2 = new Object(1200, 0, 400, 120, "Komet.png", "image")
    Komet3 = new Object(1200, 480, 400, 120, "Komet.png", "image")

    LightSaber1 = new Object(1400, -1, 350, 120, "LightSaberHo.png", "image")
    LightSaber2 = new Object(1400, 481, 350, 120, "LightSaberHo.png", "image")

    LightSaber3 = new Object(2000, 350, 120, 250, "LightSaberGap1.png", "image")
    LightSaber4 = new Object(2000, 0, 120, 250, "LightSaberGap2.png", "image")

    LightSaber5 = new Object(2300, 0, 120, 350, "LightSaberGap5.png", "image")
    LightSaber6 = new Object(2300, 450, 120, 150, "LightSaberGap6.png", "image")

    LightSaber7 = new Object(2600, 250, 120, 350, "LightSaberGap3.png", "image")
    LightSaber8 = new Object(2598, 0, 120, 150, "LightSaberGap4.png", "image")

    LightSaber9 = new Object(2900, 0, 120, 470, "LightSaberGap8.png", "image")
    LightSaber10 = new Object(3200, 130, 120, 470, "LightSaberGap7.png", "image")

    LightSaber11 = new Object(3450, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber12 = new Object(3700, 260, 120, 340, "LightSaberV.png", "image")

    LightSaber13 = new Object(3950, 0, 120, 470, "LightSaberGap8.png", "image")
    LightSaber14 = new Object(4200, 130, 120, 470, "LightSaberGap7.png", "image")

    Meteor1 = new Object(1201, 0, 150, 150, "Meteor.png", "image")
    Meteor2 = new Object(1201, 225, 150, 150, "Meteor.png", "image")
    Meteor3 = new Object(1201, 450, 150, 150, "Meteor.png", "image")
}
function LevelThreeGame() {
    ClearDrawLevel()
    BackgroundLevel.loopX = -SpeedLevel
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    LimitObject += 1
    Moon.UpdateObject()

    Komet1.UpdateObject()
    Komet1.x -= 14
    Komet2.UpdateObject()
    Komet2.x -= 10
    Komet3.UpdateObject()
    Komet3.x -= 13

    Meteor1.UpdateObject()
    Meteor1.MovementMeteor3()
    Meteor2.UpdateObject()
    Meteor2.MovementMeteor2()
    Meteor3.UpdateObject()
    Meteor3.MovementMeteor3()

    LightSaber1.UpdateObject()
    LightSaber1.LigX = -SpeedLevel
    LightSaber1.MovementLightSaber2()
    LightSaber2.UpdateObject()
    LightSaber2.LigX = -SpeedLevel
    LightSaber2.MovementLightSaber2()

    LightSaber3.UpdateObject()
    LightSaber3.x += -SpeedLevel
    LightSaber4.UpdateObject()
    LightSaber4.x += -SpeedLevel
    LightSaber5.UpdateObject()
    LightSaber5.x += -SpeedLevel
    LightSaber6.UpdateObject()
    LightSaber6.x += -SpeedLevel
    LightSaber7.UpdateObject()
    LightSaber7.x += -SpeedLevel
    LightSaber8.UpdateObject()
    LightSaber8.x += -SpeedLevel
    LightSaber9.UpdateObject()
    LightSaber9.x += -SpeedLevel
    LightSaber10.UpdateObject()
    LightSaber10.x += -SpeedLevel
    LightSaber11.UpdateObject()
    LightSaber11.x += -SpeedLevel
    LightSaber12.UpdateObject()
    LightSaber12.x += -SpeedLevel
    LightSaber13.UpdateObject()
    LightSaber13.x += -SpeedLevel
    LightSaber14.UpdateObject()
    LightSaber14.x += -SpeedLevel

    FinishedLevel.UpdateObject()
    FinishedLevel.MovementFinish()
    FinishedLevel.toX = -SpeedLevel

    Player.MovementPlayer()
    Player.UpdateObject()
    Player.FinishedGame(FinishedLevel)

    Player.GameOverGame(Komet1)
    Player.GameOverGame(Komet2)
    Player.GameOverGame(Komet3)
    Player.GameOverGame(Meteor1)
    Player.GameOverGame(Meteor2)
    Player.GameOverGame(Meteor3)
    Player.GameOverGame(LightSaber1)
    Player.GameOverGame(LightSaber2)
    if (ConditionGame.innerHTML == "Game Over") {
        StopLevel()
        GameOverLevel()
        BackSoundLevelThree.StopVideo()
    }
    if (ConditionGame.innerHTML == "Finish") {
        StopLevel()
        CompletedGameLevel()
        BackSoundLevelThree.StopVideo()
        ThreeFinish.innerHTML = "Level 3 Finish"
    }
}
window.addEventListener("keydown", function () {
    if (Controller.innerHTML == "Key Arrow") {
        ControllerKeyMoveLevel(event)
    }
    if (Controller.innerHTML == "Key WASD") {
        ControllerWASDMoveLevel(event)
    }
})
window.addEventListener("keyup", function () {
    if (Controller.innerHTML == "Key Arrow") {
        ControllerKeyStopLevel(event)
    }
    if (Controller.innerHTML == "Key WASD") {
        ControllerWASDStopLevel(event)
    }
})
function ControllerKeyMoveLevel(event) {
    const keyPressed = event.keyCode
    if (keyPressed == left) {
        Player.GoX = -5
    }
    else if (keyPressed == right) {
        Player.GoX = 5
    }
    else if (keyPressed == up) {
        Player.GoY = -5
    }
    else if (keyPressed == down) {
        Player.GoY = 5
    }
}
function ControllerKeyStopLevel(event) {
    const keyPressed = event.keyCode
    if (keyPressed == left) {
        Player.GoX = 0
    }
    else if (keyPressed == right) {
        Player.GoX = 0
    }
    else if (keyPressed == up) {
        Player.GoY = 0
    }
    else if (keyPressed == down) {
        Player.GoY = 0
    }
}
function ControllerWASDMoveLevel(event) {
    const keyPressed = event.keyCode
    if (keyPressed == a) {
        Player.GoX = -5
    }
    else if (keyPressed == d) {
        Player.GoX = 5
    }
    else if (keyPressed == w) {
        Player.GoY = -5
    }
    else if (keyPressed == s) {
        Player.GoY = 5
    }
}
function ControllerWASDStopLevel(event) {
    const keyPressed = event.keyCode
    if (keyPressed == a) {
        Player.GoX = 0
    }
    else if (keyPressed == d) {
        Player.GoX = 0
    }
    else if (keyPressed == w) {
        Player.GoY = 0
    }
    else if (keyPressed == s) {
        Player.GoY = 0
    }
}
//<--------------------------------------------- End Level Game -------------------------------------------------------->

//<----------------------------------------- Display Condition Game ---------------------------------------------------->
let TittleProggresBarLevel = document.getElementById("TittleProggresBarLevel")
let PausedLevelButton = document.getElementById("PausedLevelButton")
let DisplayPausedGame = document.getElementById("DisplayPaused")
let TittlePausedGame = document.getElementById("TittlePausedGame")
let ButtonResumePaused = document.getElementById("ButtonResumePaused")
let ButtonRestartPaused = document.getElementById("ButtonRestartPaused")
let ButtonMainMenuPaused = document.getElementById("ButtonMainMenuPaused")

function LevelMenuClose() {
    PausedLevelButton.style.visibility = "hidden"
    CanvasLevel.style.visibility = "hidden"
    TittleProggresBarLevel.style.visibility = "hidden"
    TittlePausedGame.style.visibility = "hidden"
}
function LevelMenuOpen() {
    PausedLevelButton.style.visibility = "visible"
    CanvasLevel.style.visibility = "visible"
    TittleProggresBarLevel.style.visibility = "visible"
}
PausedLevelButton.onclick = function () {
    DisplayPausedGame.showModal()
    DisplayPausedGame.classList.toggle("DisplayPaused")
    TittlePausedGame.style.visibility = "visible"
    PauseLevel()
    if (LevelGame.innerHTML == "Level 1") {
        BackSoundLevelOne.StopVideo()
    }
    if (LevelGame.innerHTML == "Level 2") {
        BackSoundLevelTwo.StopVideo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        BackSoundLevelThree.StopVideo()
    }
}
ButtonResumePaused.onclick = function () {
    DisplayPausedGame.close()
    DisplayPausedGame.classList.toggle("DisplayPaused")
    TittlePausedGame.style.visibility = "hidden"
    ResumeLevel()
    if (LevelGame.innerHTML == "Level 1") {
        BackSoundLevelOne.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 2") {
        BackSoundLevelTwo.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        BackSoundLevelThree.PlayVideo()
    }
}
ButtonRestartPaused.onclick = function () {
    DisplayPausedGame.close()
    DisplayPausedGame.classList.toggle("DisplayPaused")
    TittlePausedGame.style.visibility = "hidden"
    RestartLevel()
    if (LevelGame.innerHTML == "Level 1") {
        BackSoundLevelOne.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 2") {
        BackSoundLevelTwo.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        BackSoundLevelThree.PlayVideo()
    }
}
ButtonMainMenuPaused.onclick = function () {
    DisplayPausedGame.close()
    DisplayPausedGame.classList.toggle("DisplayPaused")
    TittlePausedGame.style.visibility = "hidden"
    MainMenuOpen()
    StopLevel()
}
let TittleGameOver = document.getElementById("TittleGameOver")
let DisplayGameOverGame = document.getElementById("DisplayGameOver")
let DisplayProggresBarTittle = document.getElementById("DisplayProggresBarTittle")
let DisplayProggresBar = document.getElementById("DisplayProggresBar")
let ButtonRestartGameOver = document.getElementById("ButtonRestartGameOver")
let ButtonMainMenuGameOver = document.getElementById("ButtonMainMenuGameOver")
ButtonRestartGameOver.onclick = function () {
    DisplayGameOverGame.close()
    DisplayGameOverGame.classList.toggle("DisplayGameOver")
    TittleGameOver.style.visibility = "hidden"
    RestartLevel()
    ConditionGame.innerHTML = "Play"
    if (LevelGame.innerHTML == "Level 1") {
        BackSoundLevelOne.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 2") {
        BackSoundLevelTwo.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        BackSoundLevelThree.PlayVideo()
    }
}
ButtonMainMenuGameOver.onclick = function () {
    DisplayGameOverGame.close()
    DisplayGameOverGame.classList.toggle("DisplayGameOver")
    TittleGameOver.style.visibility = "hidden"
    StopLevel()
    MainMenuOpen()
    ConditionGame.innerHTML = "Play"
}
function GameOverLevel() {
    DisplayGameOverGame.showModal()
    DisplayGameOverGame.classList.toggle("DisplayGameOver")
    TittleGameOver.style.visibility = "visible"
}
let DisplayFinishGame = document.getElementById("DisplayFinish")
let DisplayLevelFinish = document.getElementById("DisplayLevelFinish")

let TittleLevelFinished = document.getElementById("TittleLevelFinished")
let ButtonPlayAgainFinish = document.getElementById("ButtonPlayAgainFinish")
let ButtonMainMenuFinish = document.getElementById("ButtonMainMenuFinish")
function CompletedGameLevel() {
    DisplayFinishGame.showModal()
    DisplayFinishGame.classList.toggle("DisplayFinish")
    if (LevelGame.innerHTML == "Level 1") {
        DisplayLevelFinish.style.backgroundImage = 'url("LevelOneCompleted.png")'
        TittleLevelFinished.innerHTML = "Level 1 Completed"
        if (OneFinish.innerHTML == "Level 1 Finish") {
            TittleLevelFinished.innerHTML = "Level 1 Already Completed"
        }
    }
    if (LevelGame.innerHTML == "Level 2") {
        DisplayLevelFinish.style.backgroundImage = 'url("LevelTwoCompleted.png")'
        TittleLevelFinished.innerHTML = "Level 2 Completed"
        if (TwoFinish.innerHTML == "Level 2 Finish") {
            TittleLevelFinished.innerHTML = "Level 2 Already Completed"
        }
    }
    if (LevelGame.innerHTML == "Level 3") {
        DisplayLevelFinish.style.backgroundImage = 'url("LevelThreeCompleted.png")'
        TittleLevelFinished.innerHTML = "Level 3 Completed"
        if (ThreeFinish.innerHTML == "Level 3 Finish") {
            TittleLevelFinished.innerHTML = "Level 3 Already Completed"
        }
    }
}
ButtonPlayAgainFinish.onclick = function () {
    DisplayFinishGame.close()
    DisplayFinishGame.classList.toggle("DisplayFinish")
    ConditionGame.innerHTML = "Play"
    RestartLevel()
    if (LevelGame.innerHTML == "Level 1") {
        BackSoundLevelOne.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 2") {
        BackSoundLevelTwo.PlayVideo()
    }
    if (LevelGame.innerHTML == "Level 3") {
        BackSoundLevelThree.PlayVideo()
    }
}
ButtonMainMenuFinish.onclick = function () {
    DisplayFinishGame.close()
    DisplayFinishGame.classList.toggle("DisplayFinish")
    ConditionGame.innerHTML = "Play"
    StopLevel()
    MainMenuOpen()
}
//<--------------------------------------- End Display Condition Game -------------------------------------------------->