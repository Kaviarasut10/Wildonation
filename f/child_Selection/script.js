function donate(category) {
    const confirmation = confirm(`Are you sure you want to donate to support ${category}?`);
    if (confirmation) {
        alert(`Thank you for your generous donation towards helping ${category}!`);
    }
}
