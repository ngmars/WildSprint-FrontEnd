
import React, { useEffect, useRef, useState } from 'react';
import { DyteMeeting, Meeting } from "dyte-client";

import axios from 'axios';

export default function DyteMeet() {
    const [roomDeet,setRoomDeet] = useState({});
    const [roomName,setRoomName] = useState(null);
    useEffect(() => {
        const fetch = require('node-fetch');

const url = 'https://api.cluster.dyte.in/v1/organizations/959e35cc-d5bd-4fcd-9fc2-c0d3690d5f97/meeting';

const options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '069fe49b1f4c0d45b4b4'
  },
  body: JSON.stringify({authorization: {waitingRoom: false}, title: 'TestMeetingNew'})
};

fetch(url, options)
  .then(res => res.json())
  .then(json => {
      console.log(json)
      setRoomDeet(json.data.meeting);
      setRoomName(json.data.meeting.roomName)
    })
  .catch(err => console.error('error:' + err));
    },[])
    let DyteComponent;
if(roomName!==null){
    console.log('ROOM NAME',roomName)
    DyteComponent= (
<DyteMeeting
                    onInit={(meeting) => Meeting}
                    clientId={roomDeet.id}
                     uiConfig={{
                                    header:false
                                }}
                    meetingConfig={{
                        roomName: {roomName},
                        authToken: '069fe49b1f4c0d45b4b4',
                        showSetupScreen: true
                    }}
            />
    )
}
    return (
        <div className="App">
            {DyteComponent}
        </div>
        );
}