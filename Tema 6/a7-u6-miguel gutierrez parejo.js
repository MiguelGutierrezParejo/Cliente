const showDomButton = document.getElementById("showDomButton");
const domContainer = document.getElementById("domContainer");

showDomButton.addEventListener("click", function () {
    domContainer.innerHTML = "";

    function displayNode(node, level) {
        let prefix = "";
        for (let i = 0; i < level; i++) {
            prefix += "  ";
        }

        let nodeHtml = prefix + "<div>" + node.nodeName;
        if (node.childNodes.length === 0) {
            nodeHtml += ": " + node.nodeValue;
        }
        nodeHtml += "</div>";

        domContainer.innerHTML += nodeHtml;

        for (let i = 0; i < node.childNodes.length; i++) {
            displayNode(node.childNodes[i], level + 1);
        }
    }

    displayNode(document, 0);
});
