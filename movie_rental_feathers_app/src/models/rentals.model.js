// rentals-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const modelName = "rentals";
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      customer: new Schema({
        name: {
          type: String,
          required: true,
          minLength: 5,
          maxLength: 50,
        },
        phone: {
          type: String,
          required: true,
          minLength: 7,
          maxLength: 10,
        },
      }),
      movie: {
        type: new Schema({
          title: {
            type: String,
            minlength: 3,
            maxlength: 50,
          },
          dailyRentalRate: {
            type: Number,
            required: true,
            minlength: 0,
            maxlength: 225,
          },
        }),
      },
      dateOut: {
        type: Date,
        default: Date.now,
      },
      dateIn: {
        type: Date,
        default: null,
      },
      rentalFee: {
        type: Number,
        minlength: 0,
        maxlength: 10000,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
};
