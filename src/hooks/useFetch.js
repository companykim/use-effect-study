import React, { useState, useEffect, useMemo } from 'react';

function useFetch(url) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        if (!url) return;

        fetch(url)
            .then(response => response.json())
            .then(setData)
            .then(setLoading(false))
            .catch(setError);
    }, [url]);
    return { loading, data, error };
}

export {useFetch};