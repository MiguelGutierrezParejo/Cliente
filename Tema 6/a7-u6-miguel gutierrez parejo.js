function anyadirNodos(nodo, lista) {
    if (nodo.nodeType === Node.ELEMENT_NODE) {
      const nodeItem = document.createElement('li');
      nodeItem.textContent = nodo.nodeName;

      if (nodo.hasChildNodes()) {
        const childList = document.createElement('ul');
        nodeItem.appendChild(childList);

        for (let i = 0; i < nodo.childNodes.length; i++) {
          const childNode = nodo.childNodes[i];
          anyadirNodos(childNode, childList);
        }
      }

      lista.appendChild(nodeItem);
    }
  }

  const nodoPrincipal = document.documentElement;
  const listaDOM = document.getElementById('lista');
  anyadirNodos(nodoPrincipal, listaDOM);
