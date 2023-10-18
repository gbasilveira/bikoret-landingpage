import path from "path";
import sqlite3 from 'sqlite3';

const dbPath = path.resolve(__dirname, '../data.db');
const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}

export async function POST(request: Request) {
    const data = await request.json();

    const email = data.email
    if (!email) return Response.error();

    const userEmail: string = email;
    if (isValidEmail(userEmail)) {

        const db = new sqlite3.Database(dbPath);

        try {
            db.run('INSERT INTO subscriptions (email) VALUES (?)', [data.email], (err: any) => { });

            db.close();

            return Response.json({});
        } catch {}
    } else { return Response.error(); }

}

// import { sql } from "@vercel/postgres";

// export default async function Cart({
//   params
// } : {
//   params: { user: string }
// }): Promise<JSX.Element> {
//   const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// }