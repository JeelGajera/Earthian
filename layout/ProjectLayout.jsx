import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import BgObjects from '../components/BgObjects';
import Frame from '../components/utils/Frame';
import Footer from '../components/Footer';
import { GiQuillInk } from 'react-icons/gi';
import { MdOutlineDescription, MdDateRange } from 'react-icons/md';
import { TbListDetails } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi';
import { FaTools } from 'react-icons/fa';
import { GiCampfire } from 'react-icons/gi';
import { LeftToRight, ImgFadeOut, IconFadeOutHover, TextDown } from '../components/utils/FrameMotion';

const ProjectLayout = ({ project }) => {

    const Icons = ({ children, type }) => {
        const config = {
            primary: 'bg-teal-400 text-red-500',
            secondary: 'bg-red-500 text-teal-400',
            yellow: 'text-[#f8b34b] bg-red-500',
        }

        return (
            <IconFadeOutHover>
                <div className={`m-2 ${config[type]} bg-opacity-10 rounded-full p-1`}>
                    {children}
                </div>
            </IconFadeOutHover>
        );
    };

    const DataTitle = ({ title }) => {
        return (
            <TextDown>
                <h2 className="mb-2 text-red-500 decoration-teal-400 underline underline-offset-4">
                    {title}
                </h2>
            </TextDown>
        );
    };

    const ProjectUI = () => {
        return (
            <>
                <div className="m-1 flex items-center justify-center md:flex-none">
                    <ImgFadeOut>
                        <Image src={project?.projectUi} height="300" width="450" />
                    </ImgFadeOut>
                </div>
            </>
        );
    };

    const Description = () => {
        return (
            <>
                <div className="flex text-xl items-center">
                    <Icons type="secondary"><MdOutlineDescription /></Icons><DataTitle title="Description :" />
                </div>
                <div className="ml-10">
                    <artical className="pl-10 text-gray-300 text-md">
                        {project?.description}
                    </artical>
                </div>
            </>
        );
    };

    const Date = () => {
        return (
            <>
                <div className="flex items-center text-md">
                    <Icons type="yellow"><MdDateRange /></Icons>
                    Date :
                    <p className="pl-1 text-gray-300">{project?.date}</p>
                </div>
            </>
        );
    };

    const GitHub = () => {
        return (
            <>
                <div className="flex items-center text-md">
                    <Icons type="yellow"><FiGithub /></Icons>
                    GitHub&nbsp;:
                    <Link href={project?.github} passHref >
                        <a target="_blank" rel="noopener noreferrer" className="pl-1 text-gray-300 cursor-pointer">{"github.com/JeelGajera/" + project?.slug}</a>
                    </Link>
                </div>
            </>
        );
    };
    const Live = () => {
        return (
            <>
                <div className="flex items-center text-md">
                    <Icons type="yellow"><GiCampfire className="animate-pulse" /></Icons>
                    Live&nbsp;:
                    <Link href={project?.live} passHref >
                        <a target="_blank" rel="noopener noreferrer" className="pl-1 text-gray-300 cursor-pointer">{project?.live}</a>
                    </Link>
                </div>
            </>
        );
    };

    const Tools = () => {
        return (
            <>
                <div className="flex items-center text-md">
                    <Icons type="yellow"><FaTools /></Icons>
                    Tools&nbsp;:
                    <div className="pl-1 text-gray-300">
                        {project?.tools.map((i) => {
                            return <span className="m-1 px-2 py-1 rounded-full inline-block bg-gray-700">{i}</span>
                        })}
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <Head>
                <title>{"Jeel Gajera | " + project?.title + " 🪄"}</title>
                <link type="image/png" sizes="96x96" rel="icon" href="/icon.png" />
                <meta charSet='utf-8' />
                <meta content="width=device-width, initial-scale=1.0" name='viewport' />
                <meta name="theme-color" content="#0F1625" />
                <meta name="description" content="Hello! 😎 Welcome to my NextJS base Portfolio Site." />
                <meta name={project?.title} content={project?.description} />
            </Head>
            <BgObjects />
            <Navbar section={"Portfolio 🪄"} />
            <Frame>
                <main className="mt-4 p-4 bg-white rounded-lg bg-opacity-10 backdrop-blur-md">
                    <LeftToRight>
                        <h1 className="mb-4 flex items-center justify-center text-2xl text-[#f8b34b] capitalize">
                            <Icons>
                                <GiQuillInk className="animate-pulse" />
                            </Icons>
                            {project?.title}
                        </h1>
                    </LeftToRight>
                    <div className="flex gap-4 flex-col md:flex-row">
                        {project?.projectUi && <ProjectUI />}
                        <div className="m-1 flex-col">
                            <div>
                                {project?.description && <Description />}
                            </div>
                            <div>
                                <div className="flex text-xl items-center">
                                    <Icons type="secondary"><TbListDetails /></Icons><DataTitle title="Info :" />
                                </div>
                                <div>
                                    {project?.date && <Date />}
                                    {project?.github && <GitHub />}
                                    {project?.live && <Live />}
                                    {project?.tools && <Tools />}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Frame>
            <Footer />
        </>
    );
};

export default ProjectLayout;