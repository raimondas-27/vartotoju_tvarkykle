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