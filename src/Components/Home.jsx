import React, { useState } from 'react';
import './Home.css'

const Home = () => {
  const [fileContent, setFileContent] = useState([]);
  const [username , setname] = useState("")
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const content = event.target.result;
        const lines = content.split('\n');

        const messages = lines.map((line) => {
          const [timestamp, rest] = line.split(' - ');

          // Check if rest is defined before further processing
          if (rest) {
            const [name, message] = rest.split(': ');

            // Check if both name and message are defined before using trim
            if (name && message) {
              return { name: name.trim(), message: message.trim() };
            }
          }

          return null; // Return null for lines that don't match the expected format
        }).filter(Boolean); // Filter out any null values
        
        console.log("Hello : " , messages[0].name);
        setname(messages[0].name);
        setFileContent(messages);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <div>
        <h3>File Content:</h3>
          <h3>Whatsapp Chat parser</h3>
        <div className="main">

           {
           fileContent.map((i)=>{
               console.log("hi - > " , username);
               
               const messageClass = i.name === username ? "message Hero" : "message";
               const authorclass = i.name === "Krushna Nagare" ? "author aHero" : "author";
               return (
                   
                <div className={messageClass}>
                <div className={authorclass}>{i.name}</div>
                <div className="content">{i.message}</div>
              </div>
                  ) 
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
