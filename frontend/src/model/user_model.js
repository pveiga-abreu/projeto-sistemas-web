const axios = require('axios');

const URL = "http://127.0.0.1:3003";

module.exports = {

  get_users: async () => {

    try {

      const response = await axios({
        method: 'GET',
        url: `${URL}/user`
      });
      
      if(response.status == 200) return response.data;
      else return null;

    } catch (err) {

      return null;

    }

  },
  get_user_by_id: async id => {

    try {

      const response = await axios({
        method: 'GET',
        url: `${URL}/user/search/${id}`
      });

      if(response.status == 200) return response.data;
      else return null;
    
    } catch (err) {

      return null;

    }

  },
  create_user: async data => {

    const response = await axios({
      method: 'POST',
      url: `${URL}/user`,
      data: data,
      headers: {
        'content-type': 'application/json'
      }
    });
    
    if(response.status == 201) {}


  },
  update_user: async (id, data) => {

    const response = await axios({
      method: 'PUT',
      url: `${URL}/user/${id}`,
      data: data,
      headers: {
        'content-type': 'application/json'
      }
    });

    if(response.status == 201) {}


  },
  delete_user: async id => {

    const response = await axios({
      method: 'DELETE',
      url: `${URL}/user/${id}`
    });

    if(response.status == 200) {}


  }

}
