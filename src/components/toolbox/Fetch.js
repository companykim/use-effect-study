import { useFetch } from "hooks/useFetch.js";

export default function Fetch({uri, renderSuccess,
    loadingFallBack = <p>loading...</p>, 
    renderError = err =>{<pre>{JSON.stringify(err, null, 2)}</pre>}}) {
    const {loading, data, error} = useFetch(uri);
    
    if (loading) return loadingFallBack;
    if (error) return renderError(error);
    if (data) {
        return renderSuccess({data})
    };
}