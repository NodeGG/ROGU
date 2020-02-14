import React, { useState } from 'react';
import { Canvas, FileViewer, TextEditor } from '../components';

const Index = () => (
  <div id="ROGU">
    <style global jsx>
      {`
        html,
        body,
        body > div,
        #ROGU {
          height: 100%;
        }

        .rogu-container {
          display: flex;
          flex-direction: row;
        }
      `}
    </style>
    <div className="h-100 rogu-container">
      <div className="">
        <FileViewer />
      </div>
      <div className="d-flex flex-column w-100 justify-content-between">
        <Canvas css="w-100" />
        <TextEditor css="w-100 flex-fill" />
      </div>
    </div>
  </div>
);

export default Index;
