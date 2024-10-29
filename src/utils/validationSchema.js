import * as yup from 'yup';

const validationSchema = yup.object().shape({
  // Langkah 1: Validasi untuk input nomor telepon
  phone: yup.string().required('Nomor telepon wajib diisi').matches(/^[0-9]+$/, 'Hanya angka yang diperbolehkan'),
  // Langkah 3: Validasi untuk input nama, tanggal lahir, tempat lahir, dan email
  name: yup.string().required('Nama wajib diisi'),
  birthDate: yup.date().required('Tanggal lahir wajib diisi').nullable(),
  birthplace: yup.string().required('Tempat lahir wajib diisi'),
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  // Langkah 4: Validasi untuk input PIN
  pin: yup.string().required('PIN wajib diisi').min(6, 'PIN harus terdiri dari minimal 6 karakter'),
  confirmPin: yup.string()
    .oneOf([yup.ref('pin'), null], 'PIN tidak cocok')
    .required('Konfirmasi PIN wajib diisi'),
});
