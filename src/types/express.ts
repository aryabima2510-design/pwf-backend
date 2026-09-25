// src/types/express.d.ts
import type { JwtUserPayload } from './auth'; // Sesuaikan path ini dengan lokasi JwtUserPayload milikmu

declare global {
  namespace Express {
    export interface Request {
      user: JwtUserPayload; // Kita buat wajib agar tidak perlu tanda seru (!) di controller
    }
  }
}

export {}; // Wajib ada agar TypeScript mengenali file ini sebagai modul global