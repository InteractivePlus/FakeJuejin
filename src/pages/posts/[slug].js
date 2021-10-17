import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getArticles } from "../../api";

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

export default function Post({ post, posts, preview }) {
    const router = useRouter();
    const { slug } = router.query;

    console.log(slug);

    return <div>{slug}</div>;
}
