import {Link} from 'react-router-dom';
import {Pagination} from "antd";
import react, {useMemo, useEffect, useState} from 'react';
import {TagRow} from "./index";

export default function PostGrid({posts}) {
    const [pageSize, setPageSize] = useState(9);
    const [current, setCurrent] = useState(1);

    const paginatedPosts = useMemo(() => {
        const lastIndex = current * pageSize;
        const firstIndex = lastIndex - pageSize;

        return posts.slice(firstIndex, lastIndex);
    }, [current, pageSize]);

    useEffect(() => {
        window.scroll({
            top:500,
            left: 0,
            behavior: 'smooth'
        })
        },
        [current, pageSize]

     )

    return (
      <section className={"grid-pagination-container"}>
        <section className={"post-grid container"}>
            {paginatedPosts.map((post, index) => (
                <div className={"post-container"}>
                    <figure>
                        <Link to={post.link}>
                            <img src={post.image} alt={post.image}/>
                        </Link>
                    </figure>
                    <TagRow tags={post.categories}/>
                    <h2 className={"post-title"}>{post.title}</h2>
                    <p>
                        <span>
                        By:
                        <Link className={"author-text"}  to={`/author/${post.author}`}>
                             { post.author}
                        </Link>
                        </span>
                        <span>
                         - {post.date}
                        </span>

                    </p>
                    <p className={"description-text"}>
                        {post.description}
                    </p>
                    <Link to={post.link}> Read more...</Link>
                </div>
            ))}
        </section>
        <Pagination simple showSizeChanger
                    onShowSizeChange={setPageSize} pageSize={pageSize}
                    defaultCurrent={current} total={posts.length}
                    onChange={setCurrent}/>
    </section>
    );
}


