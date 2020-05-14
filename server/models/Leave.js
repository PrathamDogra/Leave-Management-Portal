const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { leaveTypes, leaveStatuses } = require('../data');

//leave type
//1 -- Earn Leave -- el15
//2 -- Earn leave -- el30
//3 -- Casual Leave -- cl 
//4 -- Medical Leave -- ml
//5 -- Maternity Leave -- mal
//6 -- Special Leave for conf -- SCLC
//7 -- Special Leave for PHD -- SCLP
//4 -- Sabbatical Leave -- sl
//9 -- On Duty -- ond

//create schema
const LeaveSchema = new Schema({
  leaveId: {
    type: String,
    required: true,
    unique: true
  },
  staff: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  leaveType: {
    type: String,
    enum: Object.values(leaveTypes),
    required: true
  },
  noOfDays: {
    type: Number,
    required: true
  },
  ]
});

Object.assign(LeaveSchema.statics, { leaveTypes });

module.exports = Leave = mongoose.model('leaves', LeaveSchema);
