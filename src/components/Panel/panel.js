
import React, { useRef, useState } from "react";
import {
    FileUploadContainer,
    FormField,
    DragDropText,
    UploadFileBtn,
    FilePreviewContainer,
    ImagePreview,
    PreviewContainer,
    PreviewList,
    FileMetaData,
    RemoveFileIcon,
    InputLabel,
    StoneName,
    StoneType,
    TextInputs,
    TypeOfStone,
    SendAllButton
} from "./panel.styles";
import './panel.css'
import {UploadStone} from '../../redux/actions/productUploadActions'
import {useDispatch} from 'react-redux'
const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 1500000;

const convertNestedObjectToArray = (nestedObj) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE);

const Panel = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    const fileInputField = useRef(null);
    const [files, setFiles] = useState({});
    const [stone_type, setStoneType] = useState("Quartz")
    const [stone_name,setStoneName] = useState(null)
    const [stone_color,setStoneColor] = useState(null)
    const [buttons, changeButtons] = useState({
        openTypes: false
    })
    const handleUploadBtnClick = () => {
        fileInputField.current.click();
    };
    const dispatch = useDispatch();

    const addNewFiles = (newFiles) => {
        for (let file of newFiles) {
            if (file.size < maxFileSizeInBytes) {
                if (!otherProps.multiple) {
                    return { file };
                }
                files[file.name] = file;
                console.log(file.size)
            }
        }
        return { ...files };
    };

    const callUpdateFilesCb = (files) => {
        const filesAsArray = convertNestedObjectToArray(files);
        //updateFilesCb(filesAsArray);
    };

    const handleNewFileUpload = (e) => {
        const { files: newFiles } = e.target;
        if (newFiles.length) {
            let updatedFiles = addNewFiles(newFiles);
            setFiles(updatedFiles);
            callUpdateFilesCb(updatedFiles);
        }
    };

    const removeFile = (fileName) => {
        delete files[fileName];
        setFiles({ ...files });
        callUpdateFilesCb({ ...files });
    };
    const changeType = (e) => {
        setStoneType(e)
    }
    const sendStone = () => {
        dispatch(UploadStone({
            photos:files,
            stone_name: stone_name,
            stone_type: stone_type,
            stone_color: stone_color
       }))
    }
    console.log(files)

    return (
        <>
            <TextInputs>
                <StoneName placeholder="Stone Name" onChange={(e)=> setStoneName(e.target.value)} value={stone_name}/>
                <StoneName placeholder="Stone Color" onChange={(e) => setStoneColor(e.target.value)} calue={stone_color} />
                <div className="select-box">
                    <div className="select-box__current" tabindex="1" onClick={() => changeButtons(prevState => ({ openTypes: !prevState.openTypes }))}>
                        <div className="select-box__value" >
                            <input className="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked" />
                            <p className="select-box__input-text">{stone_type}</p>
                        </div>
                        {/* <div className="select-box__value">
                            <input className="select-box__input" type="radio" id="1" value="2" name="Ben" />
                            <p className="select-box__input-text">Cheese</p>
                        </div>
                        <div className="select-box__value">
                            <input className="select-box__input" type="radio" id="2" value="3" name="Ben" />
                            <p className="select-box__input-text">Milk</p>
                        </div>
                        <div className="select-box__value">
                            <input className="select-box__input" type="radio" id="3" value="4" name="Ben" />
                            <p className="select-box__input-text">Honey</p>
                        </div>
                        <div className="select-box__value">
                            <input className="select-box__input" type="radio" id="4" value="5" name="Ben" />
                            <p className="select-box__input-text">Toast</p>
                        </div>*/}
                        <img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true" />
                    </div>
                    {buttons.openTypes &&
                        <ul className="select-box__list">
                            <li onClick={(e) => changeType("Quartz")}>
                                <label className="select-box__option" for="0" aria-hidden="aria-hidden" >Quartz</label>
                            </li >
                            <li onClick={(e) => changeType("Kehribar")}>
                                <label className="select-box__option" for="1" aria-hidden="aria-hidden">Kehribar</label>
                            </li>
                            <li onClick={(e) => changeType("Diğerleri")}>
                                <label className="select-box__option" for="2" aria-hidden="aria-hidden">Diğerleri</label>
                            </li>
                            <li onClick={(e) => changeType("Diğerleri")}>
                                <label className="select-box__option" for="3" aria-hidden="aria-hidden">Dİğerleri</label>
                            </li>

                        </ul>}
                </div>
            </TextInputs>

            <FileUploadContainer>
                <InputLabel>{label}</InputLabel>

                <DragDropText>Drag and drop your files anywhere or</DragDropText>
                <UploadFileBtn type="input" onClick={handleUploadBtnClick} onDrop={handleNewFileUpload}>
                    <i className="fas fa-file-upload" />
                    <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
                </UploadFileBtn>
                <FormField
                    type="file"
                    ref={fileInputField}
                    onChange={handleNewFileUpload}

                    title=""
                    value=""
                    {...otherProps}
                />
            </FileUploadContainer>
            <FilePreviewContainer>
                <span>To Upload</span>
                <PreviewList>
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName];
                        let isImageFile = file.type.split("/")[0] === "image";
                        return (
                            <PreviewContainer key={fileName}>
                                <div>
                                    {isImageFile && (
                                        <ImagePreview
                                            src={URL.createObjectURL(file)}
                                            alt={`file preview ${index}`}
                                        />
                                    )}
                                    <FileMetaData isImageFile={isImageFile}>
                                        <span>{file.name}</span>
                                        <aside>
                                            <span>{convertBytesToKB(file.size)} kb</span>
                                            <RemoveFileIcon
                                                className="fas fa-trash-alt"
                                                onClick={() => removeFile(fileName)}
                                            />
                                        </aside>
                                    </FileMetaData>
                                </div>
                            </PreviewContainer>
                        );
                    })}
                </PreviewList>
                
            </FilePreviewContainer>
            <SendAllButton  title="Send" onClick={() => sendStone()}>Send</SendAllButton>
        </>
    );
};

export default Panel;