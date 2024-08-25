import Product from "@/models/Products";
import connectdb from "@/lib/connectdb";
import { NextResponse } from "next/server";
export async function POST(req, res) {
    try{
        await connectdb();
        const body = await req.json();
        console.log(body);

        const product = await Product.create(body);
        if(product){
            return NextResponse.json({message:"Product was created successfully"},{status : 200})
        }
        else{
            return NextResponse.json({message:"Failed to create product"},{status : 500})
        }
    }catch(err){
        console.log("Error",err);
        return NextResponse.json({message:"An error occurred"},{status : 404})
    }
}

