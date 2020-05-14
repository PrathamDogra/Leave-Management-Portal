const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { leaveTypes } = require('../data');

//create schema
const ProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    staffId: {
      type: String,
      required: true
    },
    leaveAvailed: {
      type: [
        {
          leaveType: {
            type: String,
            enum: Object.values(leaveTypes),
            required: true
          },
          noOfDays: {
            type: Number,
            required: true,
            default: 0
          }
        }
      ]
    }
  },
  { minimize: false }
);

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
