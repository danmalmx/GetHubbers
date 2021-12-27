import React from 'react';
import { useTranslation } from 'react-i18next';
import citiesSweden from '../../citiesSweden';

function TextSearch(props) {
    const { t } = useTranslation();

    const countryName = localStorage.getItem('countryName');

    const cityInfo = () => {
        return `${t('citiesList_1')} ${citiesSweden.length} ${t('citiesList_2')} ${countryName === "United Kingdom" ? `The ${countryName}` : countryName}. ${t('citiesList_3')}`
    }

    return (
        <div>
            <span className="search">
                <h3 className="search-heading">{t('searchCoders').toLowerCase()}</h3>
                {/* <h3 style={textSearchStyle}>{t('searchCoders').toLowerCase()}</h3> */}
                <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder={cityInfo()} />
                <input className="btn" type="submit" value={t('searchButton')} style={{fontWeight: 'bold'}}/>
            </span>

        </div>
    )
}

const textSearchStyle = {
    // position: 'absolute',
    // top: '15rem',
    // left: '50%',
    // transform: 'translateX(-50%)',
    color: '#F7F9F9',
    marginBottom: '10rem',
    margin: '0 auto',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadow: '1px 1px 5px black',
    fontSize: '2rem'
}


export default TextSearch

