function donate(land) {
    const confirmation = confirm(`Are you sure you want to donate to conserve ${land}?`);
    if (confirmation) {
        alert(`Thank you for your generous donation towards conserving ${land}!`);
    }
}
