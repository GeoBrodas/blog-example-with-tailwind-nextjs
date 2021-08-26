import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'database');

// fetch the file names from database directory
export function getPostFileNames() {
  return fs.readdirSync(postsDirectory);
}

// gets the specific data of a given file ONLY! SINGLE FILE ONLY!!
// works when exported and also when called by any other function for eg: getAllPosts ,
// replace function will not execute if the fileName still does'nt contain the .md extension
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

// gets the data of all the posts together using the above function
export function getAllPosts() {
  const postFiles = getPostFileNames(); // get file name from database -> .md files
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
