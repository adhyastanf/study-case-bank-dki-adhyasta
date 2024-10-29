import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient(); // Inisialisasi PrismaClient

// Endpoint untuk meng-update PIN
export async function PUT(request) {
  const { userId, pin } = await request.json();

  // Validasi input
  if (!userId || !pin) {
    return NextResponse.json({ error: 'User ID dan PIN harus diisi' }, { status: 400 });
  }

  try {
    // Hashing PIN
    const hashedPin = await bcrypt.hash(pin, 10);

    // Update pengguna dengan PIN yang baru
    await prisma.user.update({
      where: { id: userId },
      data: { pin: hashedPin },
    });

    return NextResponse.json({ message: 'PIN berhasil disimpan.' });
  } catch (error) {
    return NextResponse.json({ error: 'Terjadi kesalahan saat menyimpan PIN' }, { status: 500 });
  } finally {
    await prisma.$disconnect(); // Menutup koneksi Prisma
  }
}
