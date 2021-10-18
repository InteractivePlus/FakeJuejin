import { useRouter } from "next/router";
import ErrorPage from "next/error";

import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";

import JuejinArticleContentItem from "../../components/juejinArticleContentItem";

import JuejinCenterContainer from "../../components/juejinCenterContainer";

import { isEmpty } from "../../utils/commonutils";
import { getArticles, getArticleById } from "../../api";

// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import MoreStories from '../../components/more-stories'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import SectionSeparator from '../../components/section-separator'
// import Layout from '../../components/layout'
// import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
// import PostTitle from '../../components/post-title'
// import Head from 'next/head'
// import { CMS_NAME } from '../../lib/constants'
// import Tags from '../../components/tags'

// export default function Post({ post, posts, preview }) {
//   const router = useRouter()
//   const morePosts = posts?.edges

//   if (!router.isFallback && !post?.slug) {
//     return <ErrorPage statusCode={404} />
//   }

//   return (
//     <Layout preview={preview}>
//       <Container>
//         <Header />
//         {router.isFallback ? (
//           <PostTitle>Loading…</PostTitle>
//         ) : (
//           <>
//             <article>
//               <Head>
//                 <title>
//                   {post.title} | Next.js Blog Example with {CMS_NAME}
//                 </title>
//                 <meta
//                   property="og:image"
//                   content={post.featuredImage?.node?.sourceUrl}
//                 />
//               </Head>
//               <PostHeader
//                 title={post.title}
//                 coverImage={post.featuredImage?.node}
//                 date={post.date}
//                 author={post.author?.node}
//                 categories={post.categories}
//               />
//               <PostBody content={post.content} />
//               <footer>
//                 {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
//               </footer>
//             </article>

//             <SectionSeparator />
//             {morePosts.length > 0 && <MoreStories posts={morePosts} />}
//           </>
//         )}
//       </Container>
//     </Layout>
//   )
// }

// export default function Post({ post, posts, preview }) {
//     const router = useRouter();
//     // const morePosts = posts?.edges

//     if (!router.isFallback && !post?.slug) {
//         return <ErrorPage statusCode={404} />;
//     }
//   console.log(this.props.match.params.slug);

//     return (
//         <div>{router.isFallback ? <div>Loading…</div> : <div>{post}</div>}</div>
//     );
// }

export default function Post(props) {
    const router = useRouter();
    const { articleid } = router.query;
    // let [content, setContent] = React.useState('');
    // let [authorInfo, setAuthorInfo] = React.useState("");
    let [articleFullInfo, setArticleFullInfo] = React.useState("");
    // console.log(articleid);

    useEffect(() => {
        if (!isEmpty(articleid)) {
            getArticleById(articleid).then(
                (response) => {
                    console.log(response.data);
                    // setContent(response.data["article"]["article_content"]);
                    // setAuthorInfo(response.data["author_user_info"]);
                    setArticleFullInfo(response.data);
                },
                (err) => {}
            );
        }
    }, [articleid]);

    return (
        <div>
            <JuejinCenterContainer>
                <ul>
                    {isEmpty(articleFullInfo) ? (
                        <div></div>
                    ) : (
                        <JuejinArticleContentItem
                            articleFullInfo={articleFullInfo}
                        />
                    )}
                </ul>
            </JuejinCenterContainer>
        </div>
    );
}
