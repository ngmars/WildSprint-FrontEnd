
import React, { useEffect, useRef } from 'react';
import { DyteMeeting, Meeting } from "dyte-client";

import axios from 'axios';

export default function DyteMeet() {
    React.useEffect(() => {
        const options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '069fe49b1f4c0d45b4b4'
              },
              body: JSON.stringify({authorization: {waitingRoom: false}, title: 'TestMeeting'})
          }
        axios.post('https://api.cluster.dyte.in/v1/organizations/959e35cc-d5bd-4fcd-9fc2-c0d3690d5f97/meeting',options)
        .then(res=>{
         console.log("NEWWW RESPONSE",res.data)
        
                }).catch(err=>{
                   console.log('ERROR',err)
                })
    },[])

    return (
        <div className="App">
            <DyteMeeting
                    onInit={(meeting) => Meeting}
                    clientId="959e35cc-d5bd-4fcd-9fc2-c0d3690d5f97"
                     uiConfig={{
                                    header:false
                                }}
                    meetingConfig={{
                        roomName: 'TestMeeting',
                        authToken: '069fe49b1f4c0d45b4b4',
                        showSetupScreen: true
                    }}
            />
        </div>
        );
}