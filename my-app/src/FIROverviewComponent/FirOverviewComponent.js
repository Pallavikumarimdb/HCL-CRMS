import React, { useState, useEffect } from 'react'
import "./FIROverviewStyle.css"
// import Loading from './loading';
import Complaint from "./FIROverviewStructure";
import * as Realm from 'realm-web'


// FIRST INSTALL THIS TO USE ATLUS API
// npm install --save realm-web

export default function FirOverviewComponent(){


      const [users, setDataSet] = useState([]);
      const [loading, setLoading] = useState(true);

       const getUsers = async () => {
       const app = new Realm.App({ id: "crms-api-wbmcy" });
       const credentials = Realm.Credentials.anonymous();
       try {
       const user = await app.logIn(credentials);
       const allData = await user.functions.getFIRDoc()
       setDataSet(allData)
       } catch(err) {
       console.error("Failed to log in", err);
       }
     }





       // CODE FOR FETCHING DATA FROM 3RD PARTY INTERNET API PROVIDER

     // const [users, setUsers] = useState([]);
     // const [loading, setLoading] = useState(true);
      // const getUsers = async () => {
      //     try {
      //         const response = await fetch('https://api.github.com/users');
      //          setLoading(false);
      //         setUsers(await response.json());
      //     } catch (error) {
      //         setLoading(false);
      //         console.log("my error is "+ error);
      //     }
      // }



      useEffect(() => {
          getUsers();
      }, []);

      // if (loading) {
      //     return <Loading />
      // }
          console.log(users)

  return(
    <>
      <Complaint users={users}/>
    </>

  )
}
