import React, {useState} from 'react';
// Codemirror css
import 'codemirror/lib/codemirror.css';
//Editor css
import 'codemirror/theme/material.css';
// Languages
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';
// Editor
import {Controlled as ControlledEditor} from "react-codemirror2";
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';




const Editor = (props) => {

    const {
        displayName,
        language,
        value,
        onChange
    } = props;

    const [open, setOpen] = useState(true);

   function handleChange (editor, data, value){
       onChange(value)
   }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'

                }}
            />
        </div>
    );
};

export default Editor;
