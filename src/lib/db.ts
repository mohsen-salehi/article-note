// src/lib/db.ts
import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'articles.db');

const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  )
`);

export function getDbSize(): number {
    const stats = fs.statSync(dbPath);
    return stats.size;
}

export function getDbCapacity(): number {
    // For SQLite, we'll set an arbitrary capacity of 1GB
    return  3 *  1024 * 1024 * 1024;
}

export default db;

//
//
// // src/lib/db.ts
// import fs from 'fs';
// import path from 'path';
//
// // const dbPath = path.join(process.cwd(), 'articles.db');
//
// export function getDbSize(): number {
//     const stats = fs.statSync(dbPath);
//     return stats.size;
// }
//
// export function getDbCapacity(): number {
//     // For SQLite, we'll set an arbitrary capacity of 1GB
//     return  3 *  1024 * 1024 * 1024;
// }
//
// type Article = {
//     id: number;
//     title: string;
//     content: string;
//     created_at: string;
//     user_id: number;
// };
//
// type User = {
//     id: number;
//     email: string;
//     password: string;
//     token: string | null;
// };
//
// class InMemoryDB {
//     private articles: Article[] = [];
//     private users: User[] = [];
//     private articleId = 1;
//     private userId = 1;
//
//     addArticle(title: string, content: string, user_id: number): Article {
//         const article: Article = {
//             id: this.articleId++,
//             title,
//             content,
//             created_at: new Date().toISOString(),
//             user_id,
//         };
//         this.articles.push(article);
//         return article;
//     }
//
//     getArticles(user_id: number): Article[] {
//         return this.articles.filter(article => article.user_id === user_id);
//     }
//
//     getArticle(id: number, user_id: number): Article | undefined {
//         return this.articles.find(article => article.id === id && article.user_id === user_id);
//     }
//
//     deleteArticle(id: number, user_id: number): boolean {
//         const index = this.articles.findIndex(article => article.id === id && article.user_id === user_id);
//         if (index !== -1) {
//             this.articles.splice(index, 1);
//             return true;
//         }
//         return false;
//     }
//
//     addUser(email: string, password: string): User {
//         const user: User = {
//             id: this.userId++,
//             email,
//             password,
//             token: null,
//         };
//         this.users.push(user);
//         return user;
//     }
//
//     getUserByEmail(email: string): User | undefined {
//         return this.users.find(user => user.email === email);
//     }
//
//     getUserByToken(token: string): User | undefined {
//         return this.users.find(user => user.token === token);
//     }
//
//     updateUserToken(userId: number, token: string): void {
//         const user = this.users.find(user => user.id === userId);
//         if (user) {
//             user.token = token;
//         }
//     }
// }
//
// const db = new InMemoryDB();
//
// export default db;