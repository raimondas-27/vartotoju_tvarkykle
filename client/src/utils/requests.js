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