import React, { useState, useEffect } from 'react'

export const withData = params => Component => ({ children, ...props }) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const returnAs = Object.keys(params)[0];
    const url = params[returnAs];

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => {
                setData(resp);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })
    }, [])


    const fetchResult = {
        [returnAs]:
        {
            response: data,
            error,
            isLoading
        }
    }

    return (
        <Component {...props} {...fetchResult}>{children}</Component>
    )
}
