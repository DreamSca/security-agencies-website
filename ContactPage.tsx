import { useOutletContext } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import MotionWrap from '../../components/animations/MotionWrap';
import AppButton from '../../components/shared/AppButton';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

interface CompanyData {
  id: string;
  colors: { primary: string; accent: string };
  content: {
    contact: { email: string; phone: string; address: string; mapUrl: string };
  };
}

const ContactPage = () => {
  const { company } = useOutletContext<{ company: CompanyData }>();
  const { contact } = company.content;
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    alert('Form submitted! Check the console for data.');
  };

  const inputStyle = "w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2";

  return (
    <MotionWrap>
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input id="name" {...register("name", { required: "Name is required" })} className={`${inputStyle} ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input id="email" type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className={`${inputStyle} ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={4} {...register("message", { required: "Message is required" })} className={`${inputStyle} ${errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>
              <div>
                <AppButton type="submit" company={company}>Send Message</AppButton>
              </div>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-center"><FiMail className="mr-3" style={{ color: company.colors.accent }} /> {contact.email}</p>
                <p className="flex items-center"><FiPhone className="mr-3" style={{ color: company.colors.accent }} /> {contact.phone}</p>
                <p className="flex items-center"><FiMapPin className="mr-3" style={{ color: company.colors.accent }} /> {contact.address}</p>
              </div>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src={contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
};

export default ContactPage;