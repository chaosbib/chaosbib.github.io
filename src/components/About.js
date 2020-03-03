import React from 'react';
import MetaTags from 'react-meta-tags';


export const About = () => {
    return (
      <div className="About">
        <MetaTags>
            <title>chaosbib</title>
            <meta name='description' content='Find out more about Ariel aka chaosbib as he develop the website of his dreams.' />
            <meta property='og:title' content='chaosbib' />
            <meta id='og-url' property="og:url" content='http://www.chaosbib.com/'/>
            <meta id='og-type' property='og:type' content='homepage'/>
        </MetaTags>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='container'>
          <h3 style={{textAlign: 'center', backgroundColor: '#333', borderRadius: '15%'}}>
            <br/>
            <p>
              This website is created to showcase my skills and abilities in web development.
            </p>
            <p>
              Any feedback and suggestions? Feel free to contact me at chaosbib@gmail.com
            </p>
            <p>
              For work and businesses, please contact me at ariel4job@gmail.com
            </p>
            <br/>
          </h3>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>
    )
}

export default About;
