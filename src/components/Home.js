import React from 'react';
import MetaTags from 'react-meta-tags';

const ProfilePicture = require('../photos/profile_picture.jpg');
const UCPicture = 'https://www.canterbury.ac.nz/engineering/facilities--equipment/carousel-images/1521673357133_Engineering-Core--orig.jpg'
const PCPicture = require('../photos/pc.jpg');

export const Home = () => {
    return (
        <div className='Home'>
            <MetaTags>
                <title>chaosbib</title>
                <meta name='description' content='Find out more about Ariel aka chaosbib as he develop the website of his dreams.' />
                <meta property='og:title' content='chaosbib' />
                <meta id='og-url' property="og:url" content='http://www.chaosbib.com/'/>
                <meta id='og-type' property='og:type' content='homepage'/>
            </MetaTags>
            <br/>
            <h1 style={welcomeStyle}>WELCOME</h1>
            <br/>
            <br/>
            <div className='container' style={container}>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <br/><br/>
                        <p style={personalDesc}>
                            My name is Ariel, a Student, PC Enthusiast, Gamer, Anime fan, and especially an Aspiring Developer.
                        </p>
                        <br/>
                    </div>
                    <div className='col-md-3'>
                        <img style={imgStyle} src={ProfilePicture} alt='' width='85%' height='auto'></img>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                <br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <br/>
                        <img style={imgStyle} src={UCPicture} alt='' width='100%' height='auto'></img>
                    </div>
                    <div className='col-md-3'>
                        <br/>
                        <p style={personalDesc}>
                            As a student, I have studied Computer Science at University of Canterbury in New Zealand.
                            I have learned here the fundamentals of programming, software and web development.
                        </p>
                        <br/>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                <br/><br/><br/><br/><br/>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className='col-md-4'>
                        <br/>
                        <p style={personalDesc}>
                            Being a PC Enthusiast, which is an expensive hobby, I have built my own 3 PCs to date in which I have planned carefully and
                            taught myself to assemble and piece together computer hardwares.
                        </p>
                        <br/>
                    </div>
                    <div className='col-md-4'>
                        <img style={{borderRadius: '35%'}} src={PCPicture} alt='' width='85%' height='auto'></img>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <br/><br/><br/>
                <br/><br/><br/>
            </div>
        </div>
    )
}

const welcomeStyle = {
    textAlign: 'center',
}

const container = {
    textAlign: 'center',
    fontSize: '130%'
}

const personalDesc = {
    verticalAlign: 'middle',
    textStrokeWidth: '10%',
    textStrokeColor: 'black',
}

const imgStyle = {
    borderRadius: '50%'
}

export default Home;
