import pxToRem from "./utils/pxToRem.js"

const rootSelector = '[data-js-expandable-content]'

class ExpandableContent {
    selectors = {
        root: rootSelector,
        button: '[data-js-expandable-content-button]'
    }

    stateClass = {
        isExpanded: 'is-expanded',
    }

    animationParams = {
        duration: 500,
        easing: 'ease',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.buttonElements = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    expand() {
        const { offsetHeight, scrollHeight } = this.rootElement
        this.rootElement.classList.add(this.stateClass.isExpanded)
        this.rootElement.animate([
            {
                maxHeight: `${pxToRem(offsetHeight)}rem`
            },
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`
            },
        ], this.animationParams)
    }

    onButtonClick = () => {
        this.expand()
    }


    bindEvents() {
        this.buttonElements.addEventListener('click', this.onButtonClick)
    }
}

class ExpandableContentCollections {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new ExpandableContent(element)
        })
    }
}

export default ExpandableContentCollections