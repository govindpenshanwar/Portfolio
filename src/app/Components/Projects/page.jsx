"use client"
import Image from 'next/image'
import React from 'react'
import { ProjectList } from '@/helpers/Projects'
import { otherProjectsList } from '@/helpers/otherProjects';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

export default function Projects() {
    const myFontStyle = {
        fontFamily: 'Saira Extra Condensed', // Font family name
        fontWeight: '700',
        fontSize: '3rem'
    };
    return (
        <div className='ml-72 py-40 mb-40'>
            
            <div className="mt-10 flex" id='projects'>

                {ProjectList.map((project) => (

                    <div key={project.id} className="max-w-sm  rounded overflow-hidden shadow-xl m-4">
                <Card sx={{maxWidth:345 , }}>
                    <CardActionArea>
                       <CardMedia >
                        <Image
                        src={project.img}
                        className='w-full h-[290px]'
                        alt='bg-image'
                        />
                       </CardMedia>
                        <CardContent>
                        <div className="font-bold text-xl mb-2">{project.name}</div>
                        <p className="text-gray-700 text-base">
                                {project.stack}
                            </p>
                        </CardContent>
                    </CardActionArea>
                </Card>

                    </div>
                ))}
            </div>
            <p className='uppercase text-center mt-10' style={myFontStyle}>Other Projects</p>
            <div className='mt-10 text-zinc-700 flex flex-row gap-14 justify-center items-center'>
                {otherProjectsList.map((project) => (
                    <p key={project.id} className='text-2xl font-bold rounded w-56 h-10 cursor-pointer text-center shadow-md hover:scale-105 transition-all'>{project.name}</p>
                ))}

            </div>

        </div>
    )
}
