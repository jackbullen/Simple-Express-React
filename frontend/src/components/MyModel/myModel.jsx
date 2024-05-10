import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyModel() {
  const [modelName, setmodelName] = useState('');
  const [createdMyModel, setCreateMyModel] = useState(null);
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios
        .get('http://127.0.0.1:3000/api/models')
        .then((response) => {
        setModels(response.data);
        })
        .catch((error) => {
        console.error('Error fetching models:', error);
        });
    }, []);
  
    const handleCreateMyModel = () => {
        axios
          .post(`http://127.0.0.1:3000/api/models`, { name: modelName })
          .then((response) => {
            setCreateMyModel(response.data);
            setmodelName('');
            setModels(prevmodels => [...prevmodels, response.data]);
          })
          .catch((error) => {
            console.error('Error creating model:', error);
          });
      };

  return (
    <div>
      <h2>Create Model</h2>
      <input
        type="text"
        placeholder="Model Name"
        value={modelName}
        onChange={(e) => setmodelName(e.target.value)}
      />
      <button onClick={handleCreateMyModel}>Create</button>
    <h2>models</h2>
    <ul>
        {models.map((model) => (
        <li key={model.id}>{model.name}</li>
        ))}
    </ul>

    </div>
  );
}

export default MyModel;
