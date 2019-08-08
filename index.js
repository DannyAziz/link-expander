let container = document.createElement("div");
let textContent = document.createElement("p");
let opensSpan = document.createElement("span");
textContent.textContent = ' ';
opensSpan.textContent = 'Opens: ';
opensSpan.style.color = '#7D7C7A';
textContent.style.fontFamily = 'Helvetica';
textContent.style.color = '#E7E7E7';
textContent.style.fontSize = '15px';
textContent.style.lineHeight = '30px';
textContent.style.margin = 'inherit'

textContent.prepend(opensSpan);
container.appendChild(textContent);

const mapContainerToMousePosition = (e) => {
    let { pageX, pageY } = e;
    var rt = (window.innerWidth - (pageX + 150));
    container.style.top = `${pageY + 20}px`;
    container.style.left = `${pageX + 20 - (rt < 0 ? 150 : 0)}px`;
}

const createContainer = () => {
    container.style.position = 'absolute';
    container.style.background = '#0F0F0F';
    container.style.boxShadow = '0px 3px 10px rgba(0, 0, 0, 0.2)'
    container.style.minWidth = '105px';
    container.style.height = '30px';
    container.style.padding = '0 10px';
    container.style.pointerEvents = 'none';
    container.style.borderRadius = '2px';
    container.style.zIndex = '16777271';
    container.style.whiteSpace = 'nowrap';
    container.style.display = 'none';

    document.getElementsByTagName("body")[0].appendChild(container);
};

window.addEventListener('mouseover', (e) => {
    let { path } = e;
    aTagPresent = false;

    for (elem of path) {
        if (elem.tagName === 'A') {
            aTagPresent = true;
            break;
        }
    }

    if (aTagPresent) {
        window.addEventListener("mousemove", mapContainerToMousePosition);
        let { href, target } = e;
        let opensInString = 'This Window';
        if (target == '_blank') {
            opensInString = 'New Tab'
        };
        textContent.childNodes[1].nodeValue = opensInString;
        container.style.display = 'block';
    } else {
        window.removeEventListener("mousemove", mapContainerToMousePosition);
        container.style.display = 'none';
    }
});

createContainer();
