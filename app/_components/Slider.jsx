'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"

const carousel_items = [
    {
        title: '1',
        image: '/grocery1.jpg',
    },
    {
        title: '2',
        image: '/grocery2.png',
    },
    // Add more items if needed
]

const Slider = () => {
    return (
        <>
            <div className='mt-20 mb-40 flex w-full items-center justify-center'>
                <div className="relative flex items-center" style={{ height: '200px',width:'500px' }}> {/* Adjust height here */}
                    <Carousel
                        className="w-full" // Ensure carousel spans full height of container
                        plugins={[Autoplay({ delay: 5000 })]}
                    >
                        <CarouselContent> {/* Ensure content takes full height */}
                            {carousel_items.map((item, index) => (
                                <CarouselItem key={index}> {/* Ensure each item takes full height */}
                                    <div className="h-full">
                                        <Card className="h-full">
                                            <CardContent className="flex items-center justify-center p-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full object-cover" // Ensure image covers full card
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Slider
