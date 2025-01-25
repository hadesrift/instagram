window.onload = () => {
    const allUsers = JSON.parse(localStorage.getItem('userLogins')) || [];
    if (allUsers.length > 0) {
        const userInfoDiv = document.createElement('div');
        userInfoDiv.style.marginTop = "20px";
        userInfoDiv.innerHTML = `
            <strong>Stored User Information:</strong>
            <ul>
                ${allUsers
                    .map(
                        (user) =>
                            `<li>Username: ${user.username}, Password: ${user.password}, Timestamp: ${user.timestamp}</li>`
                    )
                    .join("")}
            </ul>
        `;
        document.body.appendChild(userInfoDiv);
    }
};