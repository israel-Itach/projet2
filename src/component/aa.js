import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import File from './file';


const Aa = () => {
    const [files, setFile] = useState();
    const [info, setInfo] = useState("");
    const [curFile, setCurFile] = useState("");
    useEffect(() => {
        fetch('http://localhost:3002')
            .then(res => res.json())
            .then(data => setFile(data))
    }, []);

    function fetchPath(path) {
        fetch(`http://localhost:3002/${path}`)
            .then(res => res.json())
            .then(data => setFile(data))
    }


    return (
        <div>
            {files && files.map((x, idx) => (
                x.isFile ? <File data={x} idx={idx} setCurFile={setCurFile} setInfo={setInfo}/>: 
                    <Button
                        key={idx}
                        variant="info"
                        onClick={() => fetchPath(x)}
                    >
                        {x.name}
                    </Button>)
            )}
            <br />
            {curFile && <iframe src={`http://localhost:3002/${curFile}`}></iframe>}
            <div>{info&&Object.entries(info).map((x, idx)=>
                <div key={idx}>{x[0]} : {x[1]}</div>)}
            </div>
        </div>
            ) }


export default Aa;