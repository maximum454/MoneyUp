/**
 * Created by maxim on 2/2/19.
 */
import _ from 'lodash';
import './style.css';
function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./index.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}