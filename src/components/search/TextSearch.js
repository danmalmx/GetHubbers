import React from 'react';
import { useTranslation } from 'react-i18next';
import citiesSweden from '../../citiesSweden';

function TextSearch(props) {
    const { t } = useTranslation();

    const countryName = localStorage.getItem('countryName');

    const cityInfo = () => {
        return `${t('citiesList_1')} ${citiesSweden.length} ${t('citiesList_2')} ${countryName === "United Kingdom" ? `the ${countryName}` : countryName}. ${t('citiesList_3')}`
    }

    return (
    <span className="search">
        <h3 style={textSearchStyle}>{t('searchCoders').toLowerCase()}</h3>
        <input className="searchBox" type="text" value={props.region} onChange={props.onType} placeholder={cityInfo()} />
        <input className="btn" type="submit" value={t('searchButton')} style={{fontWeight: 'bold'}}/>
    </span>
    )
}

const textSearchStyle = {
    verticalAlign: 'middle',
    paddingTop: '3rem',
    color: '#F7F9F9',
    marginBottom: '3rem',
    textTransform: 'uppercase',
    textShadow: '1px 1px 5px black',
    fontSize: '2rem'
}


export default TextSearch

