module.exports = function (app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true, minlength: 3, maxlength: 50 },
    },
    {
      timestamps: true,
    }
  );
  return schema;
};
