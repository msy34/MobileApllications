import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token =Config.accessToken;
  const cookie=Config.cookie;  
  const header={ headers: {"Authorization" : 'Bearer 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' } };

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(Config.apiGateway+url,header);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {data,loading,error};
};

export default useFetch;
