import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const ToolList = ({ tools = [], onDelete, onUpdate }) => {
  let [editingId, setEditingId] = useState(null);
  let [editingProgress, setEditingProgress] = useState(0);

  let getLevelFromProgress = (progress) => {
    if (progress <= 30) return "Beginner";
    if (progress <= 70) return "Intermediate";
    return "Advanced";
  };

  let startEdit = (tool) => {
    setEditingId(tool.id);
    setEditingProgress(tool.progress);
  };

  let saveEdit = (id) => {
    onUpdate(id, editingProgress, getLevelFromProgress(editingProgress));
    setEditingId(null);
  };

  return (
    <>
      <div className="tool-list">
        {tools.length === 0 ? (
          <div className="no-tools" style={{ textAlign: "center", padding: "20px", color: "var(--text-secondary)" }}>
            <h3>No tools to monitor</h3>
          </div>
        ) : (
          tools.map((tool) => (
            <div key={tool.id} className="tool-card">
              <div className="card-header">
                <h3>{tool.tool}</h3>
                <span className="level">{tool.level}</span>
              </div>

              <ProgressBar progress={tool.progress} />

              <div className="card-actions">
                {editingId === tool.id ? (
                  <div className="edit-mode" style={{ width: '100%' }}>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={editingProgress}
                      onChange={(e) =>
                        setEditingProgress(Number(e.target.value))
                      }
                    />
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button className="btn-save" onClick={() => saveEdit(tool.id)}>
                        Save
                      </button>
                      <button className="btn-edit" onClick={() => setEditingId(null)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => startEdit(tool)}>
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(tool.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ToolList;
