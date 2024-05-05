import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { alpha } from "@mui/material";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1IjoicG1hbWFuMjAiLCJhIjoiY2ttYXhma2x2MXRsajJxb2M5cmN0em11cSJ9.Nu4NV4JptOOIdvzu8dGV1w';

const Legend = styled(Box)(({ theme }) => ({
    // padding: theme.spacing(2),
    backgroundColor: alpha('#fff', 0.85),
    position:'fixed',
    bottom:'20px',
    right:'20px',
    borderRadius:'5px'
}));

const MapCont = styled(Box)(() => ({
    position:'fixed',
    borderRadius:'5px',
    width:'100vw',
    height:'100vh',
    borderRadius:'5px'
}));

function MapLoc({ latval, lngval, zoomval }){
    const lng = lngval;
    const lat =  latval;
    const zoom = zoomval;

    return (
        <Legend>
            <Typography
                variant="h6"
            >
                Longitude: {lng} | Latitude: {lat} Zoom: {zoom}
            </Typography>
        </Legend>
    );
}


const BaseMap = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-118.2064);
    const [lat, setLat] = useState(34.0222);
    const [zoom, setZoom] = useState(9.5);
    const [layers, setLayers] = useState([]);
    let nextId = 0;
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        map.current.on('load', () => {
        
            map.current.addSource('opportunity-zones-ca', {
                type: 'geojson',
                data: 'https://pmaman.github.io/Reactuts/src/data/Opportunity_Zones_CA.geojson'
            });

            map.current.addLayer({
                'id': 'opportunity-zones-fill',
                type: 'fill', 
                source: 'opportunity-zones-ca',
                'paint':{
                    'fill-color': '#000000',
                    'fill-opacity': 0.25
                },
                'layout':{
                    'visibility': 'visible',
                }
            }, 'building-number-label');
            
            setLayers(
                [
                    ...layers,
                    { nextId: nextId++, id: 'opportunity-zones-fill' }
                ]  
            );
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            
        });

        map.current.on('click', (e) => {
            //console.log('clicked', e.point)
            const feat = map.current.queryRenderedFeatures(e.point, {
                layers: ['opportunity-zones-fill']
            });
            if (feat[0] == null){
                window.alert("No data for selected loction.")
            } else{
                //implement MUI popper here
                window.alert("Census Tract: " + feat[0].properties.CENSUSTRAC)
            }
        });
    });
    
    // testing whether layers array is updated
    /* for (let i = 0; i < layers.length; i++){
        console.log("new arr:" + " " + i + " " + layers[i].id);
    } */
    
    return (
        <div>
            <MapCont ref={mapContainer} />
            <MapLoc 
                latval = {lat} 
                lngval = {lng} 
                zoomval = {zoom}
            >
            </MapLoc>
            
        </div>
    );    
};

export default BaseMap;