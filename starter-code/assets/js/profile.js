const saveButton = document.querySelector('.save');
saveButton.addEventListener('click', () => {
    const platformElements = document.querySelectorAll('.user-info');

    platformElements.forEach((platformElement, index) => {
        const firstName = platformElement.querySelector('.First.Name')?.value;
        const lastName = platformElement.querySelector('.Last.Name')?.value;
        const email = platformElement.querySelector('.email')?.value;

        localStorage.setItem(`firstName`, firstName);
        localStorage.setItem(`lastName`, lastName);
        localStorage.setItem(`email`, email);
    });
});

