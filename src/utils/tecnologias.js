
import react from '../assets/icons/reactjs.svg';
import html from '../assets/icons/html5.svg';
import css from '../assets/icons/css3.svg';
import js from '../assets/icons/js.svg';
import mongo from '../assets/icons/mongo.svg';
import mysql from '../assets/icons/mysql.svg';
import next from '../assets/icons/next.svg';
import bootstrap from '../assets/icons/bootstrap.svg';
import express from '../assets/icons/expressjs.svg';

export const TECNOLOGIAS = [ 
    {
        name: 'HTML',
        url: html
    },

    {
        name: 'CSS',
        url: css
    },

    {
        name: 'JavaScript',
        url: js,
        styles: {
            light: {backgroundColor: '#000'},
            dark: {backgroundColor: '#000'}
        }
    },

    {
        name: 'React',
        url: react
    },
    
    {
        name: 'Next js',
        url: next,
        styles: {
            dark: {filter: 'invert(0.7)'}
        }
    },

    {
        name: 'Express',
        url: express,
        styles: {
            dark: {filter: 'invert(0.7)'}
        }
    },

    {
        name: 'MongoDB',
        url: mongo
    },

    {
        name: 'MySQL',
        url: mysql
    },
    
    {
        name: 'Bootstrap',
        url: bootstrap
    },
];