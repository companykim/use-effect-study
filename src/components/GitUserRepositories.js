import React from 'react'
import Fetch from "components/toolbox/Fetch.js";
import RepoMenu from "components/RepoMenu"

const loadReadme = async (loginId, repo) => {
    const uri = `https://api.github.com/repos/${loginId}/${loginId}/${repo}/readme`;
    const {download_url} = await fetch(uri).then(res =>res.json());
    const markdown = await fetch(download_url).then(res =>res.text());
    
}
function GitUserRepositories({loginId,
    onSelect = f=>f 
    }) {
    const uri = `https://api.github.com/users/${loginId}/repos`;

    return <Fetch uri={uri} renderSuccess={ // 두번째 HTTP 요청
        (repositoryInfo)=>{
            return <RepoMenu loginId ={loginId} repositories={repositoryInfo.data} onSelect={onSelect} > </RepoMenu>    
    }} />;
}

export {GitUserRepositories};