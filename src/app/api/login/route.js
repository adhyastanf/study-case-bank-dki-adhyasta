import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient(); // Inisialisasi PrismaClient

export async function POST(request) {
  const { email, pin } = await request.json();

  // Validasi input
  if (!email || !pin) {
    return NextResponse.json({ error: 'Semua field harus diisi' }, { status: 400 });
  }

  try {
    // Cari pengguna berdasarkan email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: 'Pengguna tidak ditemukan' }, { status: 404 });
    }

    // Verifikasi PIN
    const isMatch = await bcrypt.compare(pin, user.pin);
    if (!isMatch) {
      return NextResponse.json({ error: 'PIN tidak valid' }, { status: 401 });
    }

    // Jika PIN valid, lanjutkan dengan login
    return NextResponse.json({ message: 'Login berhasil!', user });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan saat login' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Menutup koneksi Prisma
  }
}
