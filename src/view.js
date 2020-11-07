import { 
    createNodeElement,
    createPreTag,
    createH1Tag,
    createButton,
    inputGroup,
    button,
    buttonGroup
} from './helpers'

const appContainer = (children) => createNodeElement('main', ['main-container', 'mw6', 'center'], null, children)

const tableContainer = (children) => createNodeElement('div', ['table-container'], null, children)

const formContainer = (children) => { 
    const form = createNodeElement('form', ['form-container', 'w-100', 'mv2'], null, children)
    return form 
}

function formView(dispatch, model) {
    const { description, calories } = model

    const handleClick = (event) => {
        event.preventDefault()
        console.log(event.target.getAttribute('data-id'))
    }

    if (model.showForm) {
        return formContainer([
            inputGroup('Meal', description),
            inputGroup('Calories', calories || ''),
            buttonGroup([
                button('Save', 'submit', 'add', handleClick),
                button('Cancel', 'button', 'cancel', handleClick),
            ])
        ])
    }

    else {
        return buttonGroup([
            button('Add Meal', 'button', 'showForm', handleClick),
        ]) 
    }
    

}

export default function view(dispatch, model) {
    return appContainer([
        createH1Tag('Calorie Counter'),
        formView(dispatch, model),
        createPreTag(JSON.stringify(model)),
    ]);
}

