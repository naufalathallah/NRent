//feed
const nameuser = document.getElementById('name');
const email = document.getElementById('email');
const messageuser = document.getElementById('message');
const btFeedback = document.getElementById('btFeedback');

const database = firebase.database();
const rootRef = database.ref('feedback');

btFeedback.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        name: nameuser.value,
        email: email.value,
        message: messageuser.value
    });
    alert("Success")
    window.location.reload();
});