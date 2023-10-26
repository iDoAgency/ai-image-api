// import the logic controller
import Post from '../models/post';

exports.getPosts = (req, res, next) => {
  // return array of existing posts
  Post.find().then(foundPosts => {
    res.json({
      message: "All posts",
      posts: foundPosts
    });
  });
}
exports.createPost = (req, res, next) => {
  const name = req.body.name;
  const prompt = req.body.prompt;
  const imageUrl = req.body.imageUrl;

  // create a new Post instance
  const post = new Post({
    name: name,
    prompt: prompt,
    imageUrl: imageUrl
  });

  // save the instance to the database
  post
    .save()
    .then(postSaved => {
      res.status(201).json({
        message: 'Post created successfully!',
        post: postSaved
      });
    })
    .catch(err => console.log('err', err));
}