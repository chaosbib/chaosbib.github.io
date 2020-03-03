import React from 'react';
import MetaTags from 'react-meta-tags';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const Portfolio = () => {
    return (
      <div className="Portfolio">
        <MetaTags>
          <title>Ariel's Portfolio</title>
          <meta name='description' content='Find more about my works and projects.' />
          <meta property='og:title' content="Ariel's Portfolio" />
          <meta id='og-url' property="og:url" content='http://www.chaosbib.com/portfolio'/>
          <meta id='og-type' property='og:type' content='portfolio'/>
        </MetaTags>
        <br/><br/>
        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                chaosbib.com
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2020 — Current
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                I have been developing this website myself with Visual Studio Code, using NPM, NodeJS, ReactJS, HTML, CSS, and Bootstrap.
                This website is hosted and deployed on heroku because it is easy-to-use and a platform-as-a-service tool.
              </p>
            </div>
          </div>
          <br/>
        </div>
        

        <br/><br/>


        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                Alien Invasion Project
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2019
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                Written in OpenGL and C++ with Visual Studio (Windows) and Geany (Linux). The project utilizes basic GLUT functions to create basic geometrical shapes
                to piece together creating desired 3D models to use. The project was challenging and were too low-level but it is fulfilling as this was my childhood dream.
              </p>
            </div>
          </div>
          <div className='row' style={imageGallery}>
            <div className='col-md-1'/>
            <div className='col-md-10'>
              <AwesomeSlider>
                <div data-src={require('../photos/projects/c/fig1.jpg')} style={images} />
                <div data-src={require('../photos/projects/c/fig2.jpg')} style={images} />
                <div data-src={require('../photos/projects/c/fig3.png')} style={images} />
              </AwesomeSlider>
            </div>
            <div className='col-md-1'/>
          </div>
          <br/>
        </div>


        <br/><br/>


        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                Travel Site Advisor
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2019
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                The project was created using the MVVM pattern. It utilizes NodeJS, VueJS, Javascript, HTML, CSS, and SQL, with JetBrains Webstorm IDE and Postman for testing.
                It also used a free online database (phpMyAdmin) by University of Canterbury which is now offline.
                Hence, the broken images on the testing site as they are not able to be loaded as shown in the pictures below.
                It has 2 parts (Client and Server), the Client was VueJS and the Server was a RESTful API.
              </p>
            </div>
          </div>
          <div className='row' style={imageGallery}>
            <div className='col-md-1'/>
            <div className='col-md-10'>
              <AwesomeSlider>
                <div data-src={require('../photos/projects/js/tsa/example1.png')} style={images} />
                <div data-src={require('../photos/projects/js/tsa/example2.png')} style={images} />
                <div data-src={require('../photos/projects/js/tsa/example3.png')} style={images} />
                <div data-src={require('../photos/projects/js/tsa/example4.png')} style={images} />
              </AwesomeSlider>
            </div>
            <div className='col-md-1'/>
          </div>
          <br/>
        </div>


        <br/><br/>


        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                Auckland Transport API
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2017
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                The project used PHP through PHPStorm IDE and was tested using Apache HTTP Server. This project was a work of a 4 man team with different nationalities and was also of strangers.
                It takes advantage of the <a href="https://dev-portal.at.govt.nz/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Auckland Transport API</a> which tracks the current location of public buses in Auckland.
                The map will show the location of each bus travelling on a bus route and refreshes every 30 seconds.
              </p>
            </div>
          </div>
          <div className='row' style={imageGallery}>
            <div className='col-md-1'/>
            <div className='col-md-10'>
              <AwesomeSlider>
                <div data-src={require('../photos/projects/js/ata/ex1.jpg')} style={images} />
                <div data-src={require('../photos/projects/js/ata/ex2.png')} style={images} />
              </AwesomeSlider>
            </div>
            <div className='col-md-1'/>
          </div>
          <br/>
        </div>


        <br/><br/>


        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                Interstellar Adventures
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2019
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                The project was written and developed in JAVA by a 2-man team with an unexpected events occured half-way of the project.
                Due to this event, I was left alone by myself to develop the partially built GUI using SWING through Eclipse IDE.
                The project was following a UML Diagram with some modification throughout the development due to limitations of coding.
                It also has good documentation on how each object (classes) works with date and the initial author of the code.
              </p>
            </div>
          </div>
          <br/>
        </div>
        

        <br/><br/>


        <div className='container' style={container}>
          <br/>
          <div className='row' style={title}>
            <p>
              <strong>
                RIP Routing Simulation
              </strong>
            </p>
          </div>
          <div className='row' style={date}>
            <p>
              2019
            </p>
          </div>
          <div className='row' style={bodyDescription}>
            <div className='col'>
              <p>
                This project was written in Python by a 2-man team, taking inspiration on RIP (Routing Information Protocol).
                The project relied heavily on socket and itertools modules within Python.
                The simulation features a router and a packet class to be passed around by multiple simulated routers.
              </p>
            </div>
          </div>
          <br/>
        </div>

        <br/><br/><br/><br/><br/>
      </div>

    )
}

const container = {
  textAlign: 'center',
  fontSize: '130%',
  borderStyle: 'solid',
  borderColor: 'black',
  borderRadius: '10%',
  backgroundColor: '#777',
}

const title = {
  fontSize: '120%',
  textAlign: 'left',
  marginLeft: '5%',
  marginTop: '2%',
  marginBottom: '0%'
}

const date = {
  textAlign: 'left',
  color: '#bbb',
  fontSize: '80%',
  marginLeft: '5%',
  marginTop: '-2%'
}

const bodyDescription = {
  textAlign: 'justify',
  textJustify: 'inter-word',
  fontSize: '75%',
  marginLeft: '10%',
  marginRight: '10%',
  marginBottom: '1%'
}

const imageGallery = {
  textAlign: 'center',
  paddingLeft: '5%',
  paddingRight: '5%',
  paddingBottom: '10%',
}

const images = {
  borderRadius: '10%',
  borderStyle: 'solid',
  borderColor: 'black'
}


export default Portfolio;
