import connectdb from "@/lib/connectdb";
import Product from "@/models/Products";
import { NextResponse } from "next/server";

export async function GET() {
    await connectdb();
    try {
        const products = await Product.find({}, 'image title price').lean();
        return NextResponse.json({ body: products }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
