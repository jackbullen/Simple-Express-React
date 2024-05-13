import React, { useEffect, useState } from 'react';

function Table({ columns, data, fetchCourses }) {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        fetchCourses(page, limit);
    }, [page, limit]);

    if (!columns || !data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center"> 
                    <button onClick={() => setPage(prevPage => prevPage - 1)} disabled={page === 1} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-2 rounded-l">
                        Previous
                    </button>
                    <button onClick={() => setPage(prevPage => prevPage + 1)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                        Next
                    </button>
                </div>
                <div>
                    <label htmlFor="limit" className="mr-2">Records per page:</label>
                    <select id="limit" value={limit} onChange={(e) => setLimit(e.target.value)} className="form-select block w-full mt-1">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
            <table className="w-full text-left table-collapse">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="text-sm font-semibold border-b border-blue-600 px-10">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} onClick={() => row.link && window.open(row.link, "_blank")} className="hover:bg-blue-100">
                            {columns.map((column, colIndex) => (
                                column === 'description' ?
                                    <td key={colIndex} className="border-b border-blue-200 py-4 px-6">{row[column].substring(0, 150).slice(3, -3)}...</td> :
                                    <td key={colIndex} className="border-b border-blue-200 py-4 px-6">{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
