/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetailes = () => {
    const myToy = useLoaderData();
    const {name} = myToy;
    return (
        <div>
             {name}
        </div>
    );
};

export default ViewDetailes;