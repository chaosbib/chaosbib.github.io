import React from 'react';

const Footer = () => {
    return (
        <footer className='bottom' style={footerStyle}>
            <br/>
            <div className='row' style={{margin: '0'}}>
                <div className='col'>
                    <p>
                        version 0.3.6
                    </p>    
                </div>
            </div>
            <div className='row' style={{margin: '0'}}>
                <div className='col' style={{textAlign: 'right', fontSize: '75%'}}>
                    <p>
                        Background image by 
                            <a style={{color:'white'}}
                            href="https://pixabay.com/users/3mikey5000-2607969/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2426328"
                                target='_blank' rel='noopener noreferrer'>
                                &nbsp;3mikey5000
                            </a> from
                            <a style={{color:'white'}}
                            href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2426328"
                                target='_blank' rel='noopener noreferrer'>
                                &nbsp;Pixabay
                            </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px',
    fontSize: '75%',
}


export default Footer