module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      // eslint-disable-next-line quotes
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      // eslint-disable-next-line quotes
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      // eslint-disable-next-line quotes
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  }
};
