const mongoose = require("../services/mongoose").mongoose;

const Schema = mongoose.Schema;

const CounterModel = new Schema(
  {
    updated_at: {
      type: Date,
    },
  },
  { strict: true },
  {
    collection: "counters",
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("counters", CounterModel);
