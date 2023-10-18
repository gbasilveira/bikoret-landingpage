import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


const AUTH_TOKEN = process.env.HTTP_AUTH_TOKEN;

export async function GET(request: Request) {
  const authToken = request.headers.get('Authorization');

  if (authToken !== AUTH_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255),
        gpdr BOOLEAN DEFAULT false,
        marketing BOOLEAN DEFAULT false,
        is_user BOOLEAN DEFAULT false,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    return NextResponse.json({ message: 'Database migration completed successfully.' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
