import styles from "../styles/HelloWorld.module.css";
import { useEffect, useState } from "react";

export default function HelloWorld() {

    const [cred, setCred] = useState({});
    const [loggedIn , setLoggedIn] = useState(false);

    async function login() {
        let response = null;

        let password = document.getElementById("password").value;
        let username = document.getElementById("username").value;

        try {
            response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    'Authorization': 'Basic ' + window.btoa(username + ":" + password),
                    'Content-Type': 'application/json'
                },
                // credentials: "include"
            })
            if (response.status == 200) {
                setCred({ username: username })
                setLoggedIn(true);
            }
        }catch(e) {
            console.log(e);
        }
    }
    

    return(
        <section>
            {!loggedIn && 
                <div>
                    <label>username</label>
                    <input type="text" id="username" />
                    <label>password</label>
                    <input type="password" id="password" />
                    <button type="button" onClick={login}>submit</button>
                </div>
            }
            {loggedIn && cred &&
                <div>
                    <p>You are logged in as {cred.username}</p>
                </div>
            }
        </section>
    );
}