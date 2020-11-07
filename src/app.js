export default function app(initialModel, update, view, node) {

    let model = initialModel
    let currentView = view(dispatch, model)

    node.appendChild(currentView)

    // Dispatch function triggers update
    function dispatch(msg) {
        model = update(msg, model)

        // Updates HTML veiw
        const updatedView = view(dispatch, model)

        // Replaces Old HTML view in the DOM
        node.replaceChild(updatedView, currentView)

        // Sets current view to updated view
        currentView = updatedView
    }
}


