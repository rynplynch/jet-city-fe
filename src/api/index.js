import axios from 'axios'

// var apiPort = process.env.BACKEND_SERVICE_PORT
// var apiHost = process.env.BACKEND_SERVICE_HOST
// const connectString = `http://${apiHost}:${apiPort}/api`
const connectString = 'http://127.0.0.1:3000/api'
console.log(connectString)
const api = axios.create({
    baseURL: connectString,
})
//client api functions
export const createClient = payload => api.post(`/client`, payload)
export const getAllClients = () => api.get(`/clients`)
export const updateClientById = (id, payload) => api.put(`/client/${id}`, payload)
export const deleteClientById = id => api.delete(`/client/${id}`)
export const getClientById = id => api.get(`/client/${id}`)

//project api functions
export const createProject = payload => api.post(`/project`, payload)
export const getAllProjects = () => api.get(`/projects`)
export const updateProjectById = (id, payload) => api.put(`/project/${id}`, payload)
export const deleteProjectById = id => api.delete(`/project/${id}`)
export const getProjectById = id => api.get(`/project/${id}`)
export const getProjectsByClient = id => api.get(`/client/project/${id}`)

//workstation api functions
export const createWorkstation = payload => api.post(`/workstation`, payload)
export const getAllWorkstations = () => api.get(`/workstations`)
export const updateWorkstationById = (id, payload) => api.put(`/workstation/${id}`, payload)
export const deleteWorkstationById = id => api.delete(`/workstation/${id}`)
export const getWorkstationById = id => api.get(`/workstation/${id}`)
export const getWorkstationsByProject = id => api.get(`/project/workstations/${id}`)
const apis = {
    createClient, getAllClients, updateClientById, deleteClientById, getClientById,
    createProject, getAllProjects, updateProjectById, deleteProjectById, getProjectById, getProjectsByClient,
    createWorkstation, getAllWorkstations, updateWorkstationById, deleteWorkstationById, getWorkstationById, getWorkstationsByProject,

}

export default apis