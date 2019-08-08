let container = document.createElement("div");

const mapContainerToMousePosition = (e) => {
    let { pageX, pageY } = e;
    container.style.top = `${pageY + 20}px`;
    container.style.left = `${pageX + 20}px`;
}

const createContainer = () => {
    container.id = 'wanker123';
    container.style.position = 'absolute';
    container.style.background = 'green';
    container.style.width = '200px';
    container.style.height = '200px';
    container.style.pointerEvents = 'none';


    document.getElementsByTagName("body")[0].appendChild(container);
};

window.addEventListener('mouseover', (e) => {
    let { target } = e;
    if (target.tagName == 'A') {
        window.addEventListener("mousemove", mapContainerToMousePosition);
        let { href, target } = e;
        let opensInString = 'This Window';
        if (target == '_blank') {
            opensInString = 'New Tab'
        };
    } else {
        window.removeEventListener("mousemove", mapContainerToMousePosition);
    }
});

createContainer();
