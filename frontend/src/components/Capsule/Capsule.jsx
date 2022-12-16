import React, { useEffect, useState } from "react";
import styles from "./Capsule.module.css";
import axios from "axios";

export const Capsule = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const getdata = () => {
    axios
      .get(`https://api.spacexdata.com/v3/capsules?status=${status}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata(status);
  }, [status]);

  const fichange = (e) => {
    setStatus(e.target.value);
  };
  const filterfun = (x) => {
    axios
      .get(`https://api.spacexdata.com/v3/capsules?type=${x}`)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    filterfun(type);
  }, [type]);
  const typechange = (e) => {
    setType(e.target.value);
  };

  const Datehandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className={styles.filters}>
        <input type="date" onChange={Datehandle} />

        <select onChange={typechange}>
          <option value="">Type 🎯</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
        <select onChange={fichange}>
          <option value="">Filter By Status 🎯</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className={styles.box}>
        {data?.map((e) => {
          return (
            <div>
              <img
                src="https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Desktop_5ebdeb0c6c.webp"
                alt=""
                width="100%"
              />
              <div style={{ textAlign: "center" }}>
                <p>capsule_id : {e.capsule_id}</p>
                <p>capsule_serial : {e.capsule_serial}</p>
                <p>type : {e.type}</p>
                <p>landings : {e.landings}</p>
                <p>original_launch : {e.original_launch}</p>
                <p>status :{e.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
