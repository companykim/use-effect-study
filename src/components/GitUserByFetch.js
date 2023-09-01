import Fetch from "components/toolbox/Fetch.js";
import {GitUserRepositories} from "./GitUserRepositories";

export default function GitUserByFetch({ loginId }) { // 첫번째 HTTP 요청
    const uri = `https://api.github.com/users/${loginId}`;
    return <Fetch uri={uri} renderSuccess={RenderSuccess} />;
}

function RenderSuccess({ data }) {
    return (<div>
        <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
        <div>
            <h1>{data.login}</h1>
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
        </div>
        <GitUserRepositories loginId={data.login}/>
    </div>);
}