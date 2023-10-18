import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    const { email } = await request.json(); // Assuming the email is sent in the request body

    // Insert a new email into the subscribers table using parameterized query
    const result = await sql`INSERT INTO subscribers (email) VALUES (${email}) RETURNING *`;

    return NextResponse.json({ message: 'Email inserted successfully.', data: result.rows[0] }, { status: 201 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
