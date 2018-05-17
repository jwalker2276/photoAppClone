// Increment
export const increment = index => {
  return {
    type: "INCREMENT_LIKES",
    index: index
  };
};

// Add comment
export const addComment = (postId, author, comment) => {
  return {
    type: "ADD_COMMENT",
    postId: postId,
    author: author,
    comment: comment
  };
};

// Remove comment
export const removeComment = (postId, index) => {
  return {
    type: "REMOVE_COMMENT",
    index: index,
    postId: postId
  };
};
