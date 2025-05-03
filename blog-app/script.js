document.getElementById('submit-comment').addEventListener('click', function() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        // Create a new comment element
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <p>${commentText}</p>
            <span>Posted just now</span>
        `;

        // Append the new comment to the comments list
        document.getElementById('comments-list').appendChild(commentDiv);

        // Clear the textarea
        commentInput.value = '';
    }
});

console.log("Feature: Added comment functionality");

