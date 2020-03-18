import React from 'react';
import { div} from 'react-bootstrap';
import { InterestForm } from './InterestForm';

export const Masthead = () => (
    <React.Fragment>
    <header className="masthead text-white text-center">
        <div className="overlay"></div>
            <InterestForm />
    </header>
    </React.Fragment>
)

