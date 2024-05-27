import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    id: '',
    img: '',
    title: '',
    subtitle: '',
    content: '',
    order: 0,
    buildLink: '',
    repoLink: '',
    render: true,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:3000/me3870/portfolio/admin/api/projects');
      //console.log(response.data.projects);
      setProjects(response.data.projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setError('Error fetching projects');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({
      id: '',
      img: '',
      title: '',
      subtitle: '',
      content: '',
      order: 0,
      buildLink: '',
      repoLink: '',
      render: true,
    });
  };

  const removeProject = (id) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, render: false } : project
    );
    setProjects(updatedProjects);
  };

  const updateProjects = async () => {
    try {
      await axios.post('http://localhost:3000/me3870/portfolio/admin/api/projects', { projects });
      alert('Projects updated successfully');
    } catch (error) {
      console.error('Error updating projects:', error);
      setError('Error updating projects');
    }
  };

  const handleOrderChange = (id, newOrder) => {
    const updatedProjects = projects.map((project) =>
      project.id === id ? { ...project, order: newOrder } : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="admin-panel">
      <h2>Manage Projects</h2>
      {error && <p className="error">{error}</p>}
      <div className="project-list">

        {projects.length > 0 &&
          projects
            .filter((project) => project.render)
            .sort((a, b) => a.order - b.order)
            .map((project) => (
              <div key={project.id} className="project-item">
                <img src={project.img} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <button onClick={() => removeProject(project.id)}>Remove</button>
                  <label>
                    Order:
                    <input
                      type="number"
                      value={project.order}
                      onChange={(e) => handleOrderChange(project.id, parseInt(e.target.value))}
                    />
                  </label>
                </div>
              </div>
            ))}
      </div>
      <div className="add-project">
        <h3>Add New Project</h3>
        <input
          type="text"
          name="id"
          value={newProject.id}
          onChange={handleInputChange}
          placeholder="ID"
        />
        <input
          type="text"
          name="img"
          value={newProject.img}
          onChange={handleInputChange}
          placeholder="Image"
        />
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="subtitle"
          value={newProject.subtitle}
          onChange={handleInputChange}
          placeholder="Subtitle"
        />
        <textarea
          name="content"
          value={newProject.content}
          onChange={handleInputChange}
          placeholder="Content"
        />
        <input
          type="number"
          name="order"
          value={newProject.order}
          onChange={handleInputChange}
          placeholder="Order"
        />
        <input
          type="text"
          name="buildLink"
          value={newProject.buildLink}
          onChange={handleInputChange}
          placeholder="Build Link"
        />
        <input
          type="text"
          name="repoLink"
          value={newProject.repoLink}
          onChange={handleInputChange}
          placeholder="Repo Link"
        />
        <button onClick={addProject}>Add Project</button>
      </div>
      <button onClick={updateProjects}>Save Changes</button>
    </div>
  );
};

export default AdminPanel;
