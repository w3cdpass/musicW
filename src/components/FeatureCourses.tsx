"use client";
import CourseData from '../data/music_courses.json'
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import Link from 'next/link';

interface Course {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
};

const FeatureCourses = () => {
    const featuredCourses = CourseData?.courses.filter((course: Course) => course.isFeatured)
  
    return (
        <div className="py-12 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-black dark:text-white">
                        Featured Courses
                    </h2>
                    <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
                        Learn with the best
                    </p>
                </div>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {featuredCourses.map((item, index) => (
                        <BackgroundGradient
                            className="rounded-[22px] max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col h-full"
                            key={index}
                        >
                            <div className="relative aspect-square overflow-hidden rounded-t-[22px]">
                                <Image
                                    src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"
                                    alt={item.title}
                                    height="400"
                                    width="400"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-black dark:text-neutral-200 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                                    {item.description}
                                </p>
                                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 w-fit">
                                    <span>Buy now </span>
                                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                        ${item.price}
                                    </span>
                                </button>
                                <Link href={`/courses/${item.slug}`}>LeanMore</Link>
                            </div>
                        </BackgroundGradient>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default FeatureCourses;