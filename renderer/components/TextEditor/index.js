import { Component } from 'react';
// import CodeMirror from 'codemirror/lib/codemirror.js';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/monokai.css');
require('codemirror/addon/hint/show-hint.css');
require('codemirror/addon/lint/lint.css');
export default class extends Component {
  componentDidMount() {
    let CodeMirror = null;
    if (
      typeof window !== 'undefined' &&
      typeof window.navigator !== 'undefined'
    ) {
      CodeMirror = require('codemirror/lib/codemirror.js');
      require('codemirror/mode/javascript/javascript.js');
      require('codemirror/addon/hint/show-hint.js');
      require('codemirror/addon/hint/javascript-hint.js');
      require('codemirror/addon/lint/lint.js');
      require('codemirror/addon/lint/json-lint.js');
      require('codemirror/addon/lint/javascript-lint.js');
    }
    const textEditor = document.body.getElementsByClassName('text-editor')[0];
    var myCodeMirror = CodeMirror(textEditor, {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      tabSize: 2,
      lineWrapping: true,
      lineNumbers: true,
    });
    textEditor.children[0].classList.add('h-100');
    textEditor.children[0].children[1].classList.add('d-none');
  }
  render() {
    return (
      <div
        className={`text-editor  ${
          this.props.css !== undefined ? this.props.css : ''
        }`}>
        <style gloval jsx>
          {`
            .text-editor {
              height: 50%;
              min-height: 15.625rem;
            }
          `}
        </style>
      </div>
    );
  }
}
