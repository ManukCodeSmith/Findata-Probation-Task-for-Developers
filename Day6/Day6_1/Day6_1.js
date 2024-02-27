const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    }
  ];
  
  document.addEventListener('DOMContentLoaded', function () {
      const commentsContainer = document.getElementById('commentsContainer');
      renderComments(comments, commentsContainer, 0);
  });
  
  function renderComments(comments, container, nestingLevel) {
      comments.forEach(comment => {
          const commentDiv = createCommentElement(comment, nestingLevel);
          container.appendChild(commentDiv);
  
          if (comment.replies.length > 0) {
              const repliesContainer = document.createElement('div');
              repliesContainer.classList.add('replies-container');
              container.appendChild(repliesContainer);
              renderComments(comment.replies, repliesContainer, nestingLevel + 1);
          }
      });
  }
  
  function createCommentElement(comment, nestingLevel) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.style.marginLeft = nestingLevel * 50 + 'px';
  
      const commentText = document.createElement('p');
      commentText.textContent = comment.text;
      commentDiv.appendChild(commentText);
  
      return commentDiv;
  }
  