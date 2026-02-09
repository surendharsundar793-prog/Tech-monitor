import React, { useEffect, useState } from 'react'
import ToolForm from './ToolForm'
import ToolList from './ToolList'
import Dashboard from './Dashboard'
import defaulttools from '../data/defaultTools.js'
import './styles.css'

const DevopsApp = () => {
    let [tools, setTools] = useState(() => {
        let saved = localStorage.getItem("tools");

        if (!saved || saved === "undefined") {
            return defaulttools;
        }

        try {
            return JSON.parse(saved);
        } catch {
            return defaulttools;
        }
    });


    useEffect(() => {
        localStorage.setItem("tools", JSON.stringify(tools))
    }, [tools])

    let deleteTool = (id) => {
        let updateTool = tools.filter((tool) => tool.id !== id)
        setTools(updateTool)
    }

    let updateTool = (id, progress, level) => {
        setTools((prev) =>
            prev.map((tool) =>
                tool.id === id
                    ? { ...tool, progress: Number(progress), level }
                    : tool
            )
        );
    };


    return (
        <>
            <div className="app">
                <h1>Tech Learning Tracker</h1>
                <Dashboard tools={tools} />
                <ToolForm tools={tools} setTools={setTools} />
                <ToolList tools={tools} onDelete={deleteTool} onUpdate={updateTool} />
            </div>
            <footer className="footer">
                <h1>Surendhar.Dev</h1>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </footer>
        </>
    )
}

export default DevopsApp