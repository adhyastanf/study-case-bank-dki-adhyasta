// app/api/register/route.js

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Inisialisasi PrismaClient

// Endpoint untuk registrasi
export async function POST(request) {
  const { name, email, phone, birthDate, birthPlace } = await request.json(); // Mendapatkan body dari request

  // Validasi input
  if (!name || !email || !phone || !birthDate || !birthPlace) {
    return NextResponse.json(
      { message: 'Semua field harus diisi' },
      { status: 400 }
    );
  }

  try {
    // Cek apakah pengguna sudah ada
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Pengguna dengan email atau nomor telepon ini sudah terdaftar.' },
        { status: 400 }
      );
    }

    // Simpan data pengguna di database tanpa PIN
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        birthDate: new Date(birthDate), // Pastikan format tanggal benar
        birthPlace,
        pin: null, // PIN tidak disimpan sampai pengguna mengkonfirmasi
      },
    });

    return NextResponse.json({
      status: 200,
      message: 'Registrasi berhasil! Silakan masukkan PIN untuk melanjutkan.',
      userId: newUser.id,
    });
  } catch (error) {
    console.error(error); // Logging error untuk debugging
    return NextResponse.json(
      { message: 'Terjadi kesalahan saat registrasi' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect(); // Menutup koneksi Prisma
  }
}
