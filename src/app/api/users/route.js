import connectMongoDB from "../../utils/db";
import user from "../../../../models/model";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name , email , password} = await request.json();
    await connectMongoDB();
    await user.create({name , email , password});
    return NextResponse.json({message: 'user created'} , {status: 201})
}