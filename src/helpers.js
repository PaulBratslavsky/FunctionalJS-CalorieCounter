export function createNodeElement(tag, className, value, children) {
    const data = document.createElement(tag);

    if (className) {
        className.forEach(item => data.classList.add(item))
    }

    if (value) {
        data.appendChild(document.createTextNode(value))
    }
    
    if (children) {
        children.forEach(child => data.appendChild(child))
    }
    
    return data
}

export function createPreTag(data) {
    return createNodeElement('pre', null, data, null)
}

export function createH1Tag(text) {
    return createNodeElement('tag', ['f2', 'pv2', 'bb'], text, null) 
} 

export function createButton(className, type, value, onClick, btnId) {
    let buttonNode = createNodeElement('button', className, value, null)

    if (onClick) {
        buttonNode.onclick = onClick;
    }

    if (btnId) {
        buttonNode.dataset.id = btnId
    }

    if (type) {
        buttonNode.type = type
    }
    return buttonNode;
}

export function createLabel(value) {
    const label = createNodeElement('label', ['label', 'db', 'mb1'], null, null)
    label.innerHTML = value ;
    return label
}

export function createInput(value) {
    const input = createNodeElement('input', ['input', 'pa2', 'input-reset', 'ba', 'w-100', 'mb2'], null, null)
    input.type = 'text'
    input.value = value
    return input
}

export function createInputGroup(children) {
    return createNodeElement('div', ['input-group'], null, children)
}

export const inputGroup = (labelText, inputValue) => createInputGroup([
    createLabel(labelText),
    createInput(inputValue),
])

export const button = (name, type, id, onClick) => createButton(['f3', 'pv1', 'ph2', 'bg-blue', 'white', 'bn'], type, name, onClick, id)

export const buttonGroup = (children) => createNodeElement('div', ['button-group'], null, children)


