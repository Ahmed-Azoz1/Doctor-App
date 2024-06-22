import axios from "axios"


const BASE_URL ='http://192.168.1.4:1337/api'

const API_KEY = '97d40ebecd23f4cd18d4b9cbc089f4c50a7baf9911b752b501892abbddc671c92b35262c172d40fe893d9535f78f2fdea474269e981fdfb71ebd7a6206d309d3a669390ea0ac396f6e9101c2f5f32e6d156fe8eabb5112f83e86d8e1f7c1608e5b4b95cd329cd1c76846e0329569e0368d3b1e434a793571c5fdbb66dfe31860'

const AxiosInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization:`Bearer ${API_KEY}`
    }
})

const getSlider = ()=>AxiosInstance.get('/sliders?populate=*');
const getCategories = ()=>AxiosInstance.get('/categories?populate=*');
const getTopDoctors = ()=>AxiosInstance.get('/doctors?populate=*');
const getDoctorsByCategory = (category)=>AxiosInstance.get(`/doctors?filters[category][name][$in]=${category}&populate=*`)


const makeAppointment = (data)=>AxiosInstance.post("/appointments",data);

// const getUserAppointment =(email)=> AxiosInstance.get(`/appointments?filters[email][$eq]=${email}&populate=*`);
const getUserAppointment = (email)=> AxiosInstance.get(`/appointments?filters[email][$eq]=${email}&populate[doctors][populate]=*`);
const deleteAppointment = (id)=> AxiosInstance.get(`/appointments/${id}`);
// const getUserAppointmentByDoctor =(email)=> AxiosInstance.get(`/doctors?filters[appointments][email][$eq]=${email}&populate=*`);

export default {getSlider,getCategories,getTopDoctors,getDoctorsByCategory,makeAppointment,getUserAppointment,deleteAppointment}