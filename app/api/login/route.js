import User from "@/models/User";
import connectdb from "@/lib/connectdb";
import { NextResponse } from "next/server";
import argon2 from "argon2";
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        await connectdb();
        const body = await req.json();

        if (!body.email || !body.password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        const user = await User.findOne({ email: body.email });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const isMatch = await argon2.verify(user.password, body.password);

        if (isMatch) {
            const token = jwt.sign(
                { email: user.email, username: user.username },
                process.env.JWT_SECRET, // Secret key from environment variables
                { expiresIn: '7d' }    // Token expiration
            );

            // Return the token and user info
            return NextResponse.json({
                message: "Login successful",
                user: {
                    email: user.email,
                    username: user.username
                },
                token: token
            }, 
            { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid password" }, { status: 401 });
        }
    } catch (err) {
        console.error('Error during authentication:', err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
