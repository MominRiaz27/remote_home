import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    hotelName: {
      type: String,
    },
    roomId: {
      type: String,
    },
    dates: {
      type:[],
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", UserSchema);