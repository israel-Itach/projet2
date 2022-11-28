import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

const File = ({data , idx, setCurFile,setInfo}) => {
    const [name, setName] = useState("");

    const send = (path, method) => {
        fetch(`http://localhost:3002/${path}`, {
          method: method,
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({"name":name}),
        });
      };

    return (
        <div style={{
            border: "solid 1px black", display: "inline-block",
            margin: "10px", borderRadius: "8px"
        }}>
            <h1>{data.name}</h1>
            <Button
                key={idx}
                variant="primary"
                onClick={() => { setCurFile(data.name); setInfo("") }}
            >Show file </Button>
            <Button
                key={idx}
                variant="primary"
                onClick={() => { setCurFile(""); setInfo(data.stats) }}
            >info </Button>
                <Button
               key={idx}
               variant="primary"
               onClick={() => send(data.name, "POST")}
           >copy </Button>
                <Button
               key={idx}
               variant="primary"
               onClick={() => send(data.name, "DELETE")}
           >delete </Button>
            <Button
                key={idx}
                variant="primary"
                onClick={() => { setCurFile(""); setInfo(""); send(data.name, "PUT") }}
            >rename </Button>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default File