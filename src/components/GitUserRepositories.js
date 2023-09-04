import React from 'react'
import Fetch from "components/toolbox/Fetch.js";
import RepoMenu from "components/RepoMenu"

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