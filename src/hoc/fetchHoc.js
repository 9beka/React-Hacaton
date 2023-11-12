import React, { useState, useEffect } from "react";
import { axiosAPI } from "../Components/configi/axios";
import { useParams } from "react-router-dom";

const fetchHoc = (Component, url) => (props) => {
  const [dataState, setDataState] = useState({
    data: [],
    loading: true,
    error: null,
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axiosAPI.get(url ? (id ? url + id : url) : "");
        setDataState((prev) => ({
          ...prev,
          data: response.data,
          loading: false,
          error: null,
        }));
      } catch (e) {
        setDataState((prev) => ({
          ...prev,
          loading: false,
          error: null,
        }));
      }
    };
    fetchAPI();
  }, [id]);

  return (
    <Component {...props} state={dataState.data} loading={dataState.loading} />
  );
};

export default fetchHoc;
