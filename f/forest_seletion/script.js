function donate(category) {
    const confirmation = confirm(`Are you sure you want to donate to support the ${category}?`);
    if (confirmation) {
        alert(`Thank you for your generous donation towards protecting the ${category}!`);
    }
}
