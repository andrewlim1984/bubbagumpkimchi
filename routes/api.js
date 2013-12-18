var data = {
  "posts": [
    {
      "title": "Tofu Kimchi",
      "text": "Tofu Kimchi is very simple to make. All you need is some spicy pork, onions, green onions and tofu and of course, kimchi. First, sautee cook the spicy pork and sautee the onions and green onions. Boil the tofu for 15 minutes, remove it from the water, and slice it into squares. Put the pork, onions and green onions on top, and serve. You can choose to add sesame seeds on top if you like.",
      "username" : "Andrew"
    },
    {
      "title": "Kimchi Stew",
      "text": "Kimchi Stew is exactly what you think it is. Stew made of kimchi. There are many different versions of this stew, but the basic one has kimchi, red bean paste, garlic, and water. Put these ingredients together and cook it on medium heat for 2 hours. You may add salt it if it too bland",
      "username" : "Andrew"
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [];
  data.posts.forEach(function (post, i) {
    posts.push({
      id: i,
      title: post.title,
      text: post.text.substr(0, 50) + '...',
      username: post.username
    });
  });
  res.json({
    posts: posts
  });
};
exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};
// POST
exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id] = req.body;
    res.json(true);
  } else {
    res.json(false);
  }
};

// DELETE
exports.deletePost = function (req, res) {
  var id = req.params.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};