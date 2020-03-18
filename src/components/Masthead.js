import React from 'react';
import { header, div, h1, form, input } from 'react-bootstrap';
import { InterestForm } from './InterestForm';

export const Masthead = () => (
    <header className="masthead text-white text-center">
        <div className="overlay"></div>
            <React.Fragment>
            <InterestForm />
            </React.Fragment>
    </header>
)

