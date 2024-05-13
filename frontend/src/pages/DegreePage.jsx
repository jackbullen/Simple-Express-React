import React, { useEffect, useState } from 'react';
import Table from '../components/Data/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DegreePage() {
    const [degrees, setDegrees] = useState(null);
    // columns = columns.filter(column =>
    //     column !== 'notes' &&
    //     column !== 'pid' &&
    //     column !== 'course_number' &&
    //     column !== 'credit' &&
    //     column !== 'link' &&
    //     column !== 'hours');
    return (
        <div className="degree-container">
            <Table
                columns={['name', 'age']}
                data={[
                    { name: 'Alice', age: 25 },
                    { name: 'Bob', age: 30 },
                ]}
            />
        </div>

    );
}

export default DegreePage;
