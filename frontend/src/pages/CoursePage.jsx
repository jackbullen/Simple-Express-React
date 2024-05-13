import React, { useEffect, useState } from 'react';
import Table from '../components/Data/Table';
import axios from 'axios';

function CoursePage() {
    const [courses, setCourses] = useState(null);
    const [columns, setColumns] = useState(null);

    const fetchCourses = (page, limit) => {
        axios.get(`http://localhost:3000/api/courses?page=${page}&limit=${limit}`)
            .then((response) => {
                let cols = Object.keys(response.data.courses[0]);
                cols = cols.filter(col =>
                    col !== 'notes' &&
                    col !== 'pid' &&
                    col !== 'course_number' &&
                    col !== 'credit' &&
                    col !== 'link' &&
                    col !== 'hours');
                setCourses(response.data.courses);
                setColumns(cols);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchCourses(1, 10);
    }, []);

    return (
        <div className="course-container">
            <Table
                columns={columns}
                data={courses}
                fetchCourses={fetchCourses}
            />
        </div>
    );
}

export default CoursePage;
