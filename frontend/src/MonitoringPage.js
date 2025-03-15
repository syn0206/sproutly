import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { Card, Tab, Tabs, Button } from 'react-bootstrap';

const MonitoringPage = () => {

    // TODO: add actual plant data later
    const [plants, setPlants] = React.useState([
        { id: 1, name: 'Basil', species: 'Basil', health_status: 'Healthy' },
        { id: 2, name: 'Toma', species: 'Tomato', health_status: 'Unhealthy' },
    ]);

    const [selectedPlant, setSelectedPlant] = React.useState(plants[0]);  // default

    const selectPlant = (plant) => {
        setSelectedPlant(plant);
    }
    
    let navigate = useNavigate();

    return (
        <div className="monitoring-page container d-flex flex-column vh-100">
          <div className="d-flex justify-content-between align-items-center mb-4">

            <Tabs activeKey={selectedPlant ? selectedPlant.id.toString() : null} onSelect={(key) => {
                const plant = plants.find(p => p.id.toString() === key);
                if (plant) selectPlant(plant);
            }} className="flex-grow-1">
            {plants.map((plant) => (
            <Tab
                key={plant.id}
                eventKey={plant.id.toString()}
                title={plant.name}
            />
            ))}
            </Tabs>
          </div>
          <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center">
                {selectedPlant && (
                <div className="d-flex align-items-center">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h2 className="mb-3">{selectedPlant.name} Live Feed</h2>

                            {/* TODO: add live video feed */}

                        </Card.Body>
                    </Card>
                </div>)}

                    <div className="d-flex justify-content-center mb-4">
                        <Button onClick={() => navigate('/')}>
                            <i className="bi bi-arrow-left"></i>
                            Back to Home
                        </Button>
                    </div>

            </div>
        </div>
      );
};


export default MonitoringPage;