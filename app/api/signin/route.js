import User from "@/models/User";
import connectdb from "@/lib/connectdb";
import { NextResponse } from "next/server";
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export async function POST(req) {
    try {
        await connectdb();
        const body = await req.json();

        if (!body.email) {
            return NextResponse.json({ message: "Invalid email" }, { status: 400 });
        }

        const existingUsers = await User.find({ email: body.email });
        if (existingUsers.length > 0) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await argon2.hash(body.password);
        const newUser = new User({ ...body, password: hashedPassword });
        await newUser.save();

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined");
        }

        const token = jwt.sign(
            { email: body.email, username: body.username },
            process.env.JWT_SECRET,
            { expiresIn: '7d' } 
        );

        // Set the token as an HTTP-only cookie
        const response = NextResponse.json({
            message: "User created successfully",
            user: {
                email: body.email,
                username: body.username
            }
        }, { status: 200 });

        response.cookies.set('auth-token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set to true in production
            maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
            path: '/' // Available on all routes
        });

        return response;

    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
