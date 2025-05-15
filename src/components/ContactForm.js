import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Ad Soyad zorunludur'),
    email: Yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta zorunludur'),
    message: Yup.string().required('Mesaj zorunludur'),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Burada form verilerini işleyebilirsiniz (örn: API'ye gönderme)
    console.log(values);
    alert('Mesajınız gönderildi!');
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ fullName: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 max-w-lg mx-auto">
          <div>
            <label htmlFor="fullName" className="block text-gray-300 mb-2">
              Ad Soyad
            </label>
            <Field
              type="text"
              name="fullName"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              E-posta
            </label>
            <Field
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Mesaj
            </label>
            <Field
              as="textarea"
              name="message"
              rows="4"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm; 