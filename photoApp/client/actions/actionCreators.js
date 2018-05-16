// Actions

// Increment likes
export const increment = index => {
  {
    type: "INCREMENT_LIKES";
    index: index;
  }
};

// Add comment
export const addComment = (postId, author, comment) => {
  {
    type: "ADD_COMMENT";
    postId: postId;
    author: author;
    comment: comment;
  }
};

// Remove comment
export const removeComment = (postId, index) => {
  {
    type: "ADD_COMMENT";
    index: index;
    postId: postId;
  }
};
