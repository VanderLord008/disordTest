import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useEffect, useState } from "react";
import "./ServerBar.css";
import db from "./firebase";
import Server from "./Server";

function ServerBar() {

    const [servers, setServers] = useState([]);

    useEffect(() => {
        db.collection("servers").onSnapshot((snapshot) =>
          setServers(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              server: doc.data(),
            }))
          )
        );
      }, []);



  const handleAddServer = () => {
    const serverName = prompt("enter a new server");
    if (serverName) {
      db.collection("servers").add({
        serverName: serverName,
      });
    }
  };

  return (
    <div className="serverbar">
      <div className="serverbar__top">
        <p>Top</p>
      </div>
      <div className="serversList">
      {servers.map(({ id, server }) => (
            <Server
              key={id}
              id={id}
              serverName={server.serverName}
            />
          ))}
      </div>
      <div className="addServer">
        <AddCircleIcon fontSize="large" onClick={handleAddServer} />
      </div>
    </div>
  );
}

export default ServerBar;
