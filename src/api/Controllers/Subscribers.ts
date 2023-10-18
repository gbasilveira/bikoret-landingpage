import { NextRequest, NextResponse } from "next/server";
import isValidEmail from "@/Utils/Validation/isValidEmail";



import prisma from '@/Config/Database'
import Subscriber from "../Models/Subscriber";
 

export const CreateSubscriber = async (req: NextRequest) => {
    try {
        const {email, gdpr, marketing}: Partial<Subscriber> = await req.json() ;

        if(!email || !isValidEmail(email)){
            return NextResponse.json({
                error: true,
                message: "The email is not valid."
            })
        }

        const newSubscriber = await prisma.subscriber.create({
            data:{email, gdpr, marketing}
        });

        return NextResponse.json({
            success: true,
            message: "Subscriber created successfully."
        });
    } catch (error: any) {
        return NextResponse.json({
            error: true,
            message: error.message || "Internal server error."
        }, {
            status: 500
        });
    }
};
