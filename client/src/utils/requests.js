import axios from "axios";

const baseUrl = "http://localhost:4000";

//get all data
export const getAllUsersData = async () => {
   try {
      const res = await axios.get(`${baseUrl}/api/allUsers`);
      return res.data;
   } catch (err) {
      console.log(err);
   }
};

//post new data
export const postNewUser = async (formData) => {
   try {
      const res = await axios.post(`${baseUrl}/api/allUsers/new`, formData)
      return res.data
   } catch (err) {
      console.log(err.message)
   }
}

//delete selected data

export const deleteUser = async (dataId) => {
   try {
      const res = await axios.delete(`${baseUrl}/api/allUsers/delete/${dataId}`)
      return res.data
   } catch (err) {
      console.log(err.message)
   }
}

//edit selected data

export const editUser = async (id, body) => {
   try {
      const res = await axios.put(`${baseUrl}/api/allUsers/edit/${id}`, body)
      console.log(res.data)
      return res.data;
   } catch (err) {
      console.log(err.message)
   }
}