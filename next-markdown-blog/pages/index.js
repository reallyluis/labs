import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <h3 key={index}>
            {post.frontmatter.title}
          </h3>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(file => {
    // Create slug
    const slug = file.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', file), 'utf-8')

    const {data:frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
