const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { accountTypes, staffTypes } = require('../data');

//account type
//0 -- admin
//1 -- hod
//2 -- director
//3 -- developer
//4 -- faculty

//staff type
//0 -- regular teaching -- rt
//1 -- regular non teaching -- rnt
//2 -- lab assistants -- las
//3 -- multi-tasking staff -- mts

//create schema
const UserSchema = new Schema(
  {
    staffId: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    email: {
      type: String,
      default: 'example@example.com',
      required: true
    },
    password: {
      type: String,
      default: 'Msit@12345',
      required: true
    },
    accountType: {
      type: String,
      enum: Object.values(accountTypes),
      default: accountTypes.STAFF
    },
    staffType: {
      type: String,
      enum: Object.values(staffTypes)
    },
    OTToken: {
      type: String,
      default: ''
    },
    resetPasswordToken: {
      type: String,
      default: ''
    },
    // resetPasswordExpires: {
    //   type: Number,
    //   default: -1
    // },
  },
  { minimize: false }
);

Object.assign(UserSchema.statics, { accountTypes, staffTypes });

module.exports = User = mongoose.model('users', UserSchema);
