module.exports = function () {
  return (context) => {
    const movie = context.data.movie;
    context.data.rentalFee = movie.dailyRentalRate * 10;
    return context;
  };
};
