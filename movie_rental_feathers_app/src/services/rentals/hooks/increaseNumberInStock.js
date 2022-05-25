module.exports = function () {
  return async (context) => {
    const movie = context.params.movie;
    const movieService = context.app.service("movies");
    await movieService.patch(movie._id, { $inc: { numberInStock: 1 } });
    return context;
  };
};
