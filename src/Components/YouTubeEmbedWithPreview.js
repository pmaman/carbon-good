import React from 'react'
import harvestImg from "../images/Harvest-v4.png"
import playTriangle from "../svg/playTriange.svg"
import Grid from '@mui/material/Grid'
import { useState } from 'react';


function YouTubeEmbedWithPreview(videoId ) {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <Grid 
            container
            sx={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <Grid
                item
                sx={{ width: '100%', height: 'auto', position: 'relative', cursor: 'pointer' }}
                onClick={() => setIsPlaying(true)}  // Replace image with iframe on click
            >
                {!isPlaying ? (
                    <div style={{ position: 'relative', paddingBottom: '56.25%%', width: '100%' }}> //56.25% reflects a 16:9 aspect ratio
                        <img
                            src={harvestImg}
                            alt="CarbonGood YouTube Preview"
                            sx={{ width: '100%', height: 'auto', objectFit: 'cover', cursor: 'pointer'}}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <img
                                src={playTriangle}
                                onClick={() => setIsPlaying(true)}
                            />
                        </div>
                    </div>
                ) : (   
                    <div style={{ position: 'relative', paddingBottom: '56.25%',  width: '100%'}}>
                        <iframe
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: '0',
                            }}
                            src="https://www.youtube.com/embed/vkteemwYEvw?si=niZIqchOlHJuw363&amp;controls=0"
                            title="CarbonGood MIT SOLVE" 
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                            > 
                        </iframe>
                    </div>
                )}
            </Grid>
        </Grid>
    )
}

export default YouTubeEmbedWithPreview