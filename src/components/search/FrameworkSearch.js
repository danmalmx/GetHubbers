import React from 'react'

function FrameworkSearch(props) {

    return (
    <span  className="langCheck">
        <span style={{padding:' 1rem 0'}}>
            <span className="sideBox">
                <input type="text" id="lang" style={{display: 'none'}}/>
                <label htmlFor="lang">Ramverk
                <h6>(tillval)</h6>
                </label>
            </span>
            <span style={boxStyle}>
            <input type="checkbox" value='angular' onChange={props.onChangeFrame} name="angular" id="angular" style={{display: 'none'}}/>
                <label htmlFor="angular" className="devicon-angularjs-plain text-lg" style={{cursor: 'pointer', hover:'JavaScript'}}>
                    <p className="logoFontSize">Angular</p></label>
                <input type="checkbox" value='react' onChange={props.onChangeFrame} name='react' id="react" style={{display: 'none'}}/>
                <label htmlFor="react" className="devicon-react-original text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">React</p></label>
                <input type="checkbox" value='vue' onChange={props.onChangeFrame} name="vue" id="vue" style={{display: 'none'}}/>
                <label htmlFor="vue" className="devicon-vuejs-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Vue</p></label>
                <input type="checkbox" value='express' onChange={props.onChangeFrame} name="express" id="express" style={{display: 'none'}}/>
                    <label htmlFor="express" className="devicon-express-original text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Express</p></label>
                <input type="checkbox" value='.net' onChange={props.onChangeFrame} name="dotnet" id="dotnet" style={{display: 'none'}}/>
                <label htmlFor="dotnet" className="devicon-dot-net-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">.NET</p>
                </label>
                <input type="checkbox" value='rails' onChange={props.onChangeFrame} name="rails" id="rails" style={{display: 'none'}}/>
                    <label htmlFor="rails" className="devicon-rails-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Rails</p>
                </label>
                <input type="checkbox" value='laravel' onChange={props.onChangeFrame} name="laravel" id="laravel" style={{display: 'none'}}/>
                <label htmlFor="laravel" className="devicon-laravel-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Laravel</p>
                </label>
                <input type="checkbox" value='django' onChange={props.onChangeFrame} name="django" id="django" style={{display: 'none'}}/>
                <label htmlFor="django" className="devicon-django-plain text-lg" style={{cursor: 'pointer'}} >
                    <p className="logoFontSize">Django</p>
                </label>
            </span>
        </span>
    </span>
    )
}

const boxStyle = {
    padding: '1.5rem 0',
    // paddingTop: '.5rem',
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    margin: 'auto'
}

export default FrameworkSearch