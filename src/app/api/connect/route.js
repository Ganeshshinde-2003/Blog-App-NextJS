import Connect from "@/models/Connect";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  const newConnect = new Connect({ 
    name,
    email,
    message,
  });

  try {
    await newConnect.save();
    return new NextResponse("Message has been sent", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};