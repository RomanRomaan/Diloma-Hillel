import React, { useEffect, useState } from "react";
import './main.styles.css';
import SELECT from "@mui/material/Select";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";

export default () => {
    const [currentDest, setCurentDest] = useState(null)
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        axios.get('https://myserver.free.beeceptor.com/destinations')
            .then(resp => setDestinations(resp.data));
    }, []);

    const onDestChanged = e => {
        setCurentDest(destinations.find(d => d.id === e.target.value));
    }
    return <div className="main">
        <div className="search">
            <SELECT value={currentDest?.id}
                onChange={onDestChanged} >{destinations.map(dest => {
                    return <MenuItem key={dest.id} value={dest.id}>{dest.label}</MenuItem>
                })}</SELECT>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Сheck in" />
            </LocalizationProvider>
            <SELECT />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Сheck out" />
            </LocalizationProvider>
            <TextField label="Adults" variant="outlined" />
            <TextField label="Children" variant="outlined" />
            <Button variant="contained" color="warning" size="small">Submit</Button>
        </div>
    </div>
}
