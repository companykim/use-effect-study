import React, { useState, useEffect, useCallback } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function GitRepositoryReadme ({loginId, repo}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState("");

    const loadReadme = useCallback(async (loginId, repo) => {
        setLoading(true);

        const uri = `https://api.github.com/repos/${loginId}/${repo}/readme`;
        const {download_url} = await fetch(uri).then(res =>res.json());
        setMarkdown(await fetch(download_url).then(res =>res.text()));
        setLoading(false);
    });

    useEffect(() =>{
        if (!repo || !loginId) return;
        loadReadme(loginId, repo).catch(setError);
    }, [repo]);

    if (loading) return <p>loading...</p>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>; 

    return (
        <ReactMarkdown source={markdown} />
    )
}