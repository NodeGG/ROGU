import path from 'path';
import fs from 'fs';

import { Component } from 'react';
import FileItem from '../FileItem';

export default class extends Component {
  constructor(props) {
    super(props);
    this.fileList = [];
    this.state = {
      fileList: [],
      directory: null,
    };
  }
  componentDidMount() {
    this.handlePath();
  }
  cleanPath = () => {
    if (e.target.files[0].name !== undefined) {
      const dirtyFileName = e.target.files[0].name;
      const dirtyPath = e.target.files[0].path;
      const cleanPath = dirtyPath.substring(
        dirtyPath.indexOf(dirtyPath),
        dirtyPath.indexOf(dirtyFileName)
      );
      this.setState({ directory: cleanPath }, this.handlePath(this.directory));
    }
  };
  handlePath(cleanPath) {
    fs.readdir(
      path.join(cleanPath || localStorage['filePath']),
      (err, files) => {
        if (files) {
          files.forEach(file => {
            // Gets files from directory
            this.fileList.push(file);
          });
          this.setState({ fileList: this.fileList });
        } else {
          console.log('Files Not Found...');
        }
      }
    );
  }
  render() {
    return (
      <div id="FileViewer">
        <style jsx>
          {`
            #FileViewer {
              height: 100%;
              width: 12.5rem;
              background-color: #eee;
              border-left: 0.125rem #000 solid;
              border-right: 0.125rem #000 solid;
              text-align: center;
            }
            input[type='file'] {
              width: 12rem;
              height: 1.5625rem;
              opacity: 0;
            }
            #val {
              width: 12rem;
              height: 1.5625rem;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 0.8125rem;
              line-height: 1.5625rem;
              text-indent: 0.625rem;
              pointer-events: none;
            }
            #button {
              cursor: pointer;
              display: block;
              width: 5.625rem;
              background-color: Black;
              height: 1.5625rem;
              color: white;
              position: absolute;
              left: 0;
              top: 0;
              font-size: 0.6875rem;
              line-height: 1.5625rem;
              text-align: center;
              -webkit-transition: 500ms all;
              -moz-transition: 500ms all;
              transition: 500ms all;
            }

            #button:hover {
              background-color: blue;
            }
            .file-item-container {
              height: calc(100% - 1.5625rem);
            }
          `}
        </style>
        <div>
          <input
            id="fileInput"
            type="file"
            placeholder="Files"
            className="viewer-input btn"
            webkitdirectory=""
            directory=""
            onChange={(e, value) => {
              this.handlePath(e);
            }}
          />
          <span id="val"></span>
          <span
            id="button"
            onClick={() => {
              document.querySelector('#fileInput').click();
            }}>
            Select File
          </span>
        </div>
        <div className="file-item-container pt-3">
          {this.state.fileList.map((file, i) => {
            return <FileItem key={i} filePath={file || 'filename'} />;
          })}
        </div>
      </div>
    );
  }
}
