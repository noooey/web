import { useEffect, useState } from "react";
import { useParams } from  "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setInfo(json.data.movie);
        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>{info.title}</h1>
            <img src={info.large_cover_image} alt="title" />
            <p>{info.description_intro}</p>
            <div>{info.genres.map((genre) => <i key={genre}>{genre} </i>)}</div>
            <div><strong>{info.rating}</strong></div>
            <div>❤️{info.like_count}</div>
            <div>download {info.download_count}</div>
            <div>{info.year}</div>
            <div>runtime {info.runtime}</div>
        </div>
    );
}

export default Detail;