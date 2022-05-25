module.exports = function () {
  return async (context) => {
    const rentalId = context.id;
    const rentalService = context.app.service("rentals");
    const rental = await rentalService.get(rentalId);
    context.params.movie = rental.movie;
    return context;
  };
};
