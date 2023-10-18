import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const AUTH_TOKEN = process.env.HTTP_AUTH_TOKEN;

export async function GET(request: Request) {
  const authToken = request.headers.get('Authorization');

  if (authToken !== AUTH_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Query to describe the database schema
    const schemaDescription = await sql`
      SELECT table_name, column_name, data_type
      FROM information_schema.columns
      WHERE table_schema = 'public';
    `;

    return NextResponse.json({ schema: schemaDescription.rows }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
