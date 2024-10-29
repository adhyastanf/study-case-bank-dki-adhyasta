import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  phone: yup.string().required('Nomor telepon harus diisi'),
  name: yup.string().required('Nama harus diisi'),
  birthDate: yup.date().required('Tanggal lahir harus diisi'),
  birthPlace: yup.string().required('Tempat lahir harus diisi'),
  email: yup.string().email('Email tidak valid').required('Email harus diisi'),
  pin: yup.string().required('PIN harus diisi'),
  confirmPin: yup.string().required('Konfirmasi PIN harus diisi'),
});

