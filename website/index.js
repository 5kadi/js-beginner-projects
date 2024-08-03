class TaskNode{
    static id = 1;
    constructor(text) {
        this.text = text
        this.id = TaskNode.id
        TaskNode.id++
    }
    create() {
        let taskHTML = `
            <label for="${this.id + "Btn"}">${this.text}</label>
            <button id="${this.id + "Btn"}">X</button>
        `
        let tasksContainer = document.getElementById("tasksContainer")
        let newDiv = document.createElement("div")
        newDiv.id = this.id
        newDiv.innerHTML = taskHTML
        tasksContainer.append(newDiv)
        document.getElementById(this.id + "Btn").onclick = () => this.remove()
    }
    remove() {
        document.getElementById(this.id).remove()
    }
}

let submitBtn = document.getElementById("submitBtn")


submitBtn.onclick = () => {
    let inputArea = document.getElementById("inputArea")
    let text = inputArea.value
    inputArea.style.borderColor = "black"
    if (text != "") {
        let newNode = new TaskNode(text)
        newNode.create()
        inputArea.style.borderColor = "lightgreen"
        inputArea.value = ""
        return
    }
    inputArea.style.borderColor = "red";
    

}


























