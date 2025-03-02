import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    visitDate: '',
    visitTime: '',
    visitors: '1'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      visitDate: '',
      visitTime: '',
      visitors: '1'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="./src/images/home2.jpg" 
            alt="اتصل بمتحف فتحي البنعلي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">اتصل بنا</h1>
          <p className="text-xl max-w-2xl">
            تواصل معنا للاستفسارات أو لحجز زيارتك للمتحف
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <h2 className="section-title">معلومات الاتصال</h2>
              
              <div className="bg-background p-6 rounded-lg shadow-md mb-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <MapPin size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">العنوان</h3>
                      <p>بلدة دارين، محافظة القطيف، المنطقة الشرقية، المملكة العربية السعودية</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">رقم الهاتف</h3>
                      <p dir="ltr" className="ms-2">+966 54 446 8286</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">البريد الإلكتروني</h3>
                      <p>info@fathialbenalimuseum.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={24} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">ساعات العمل</h3>
                      <p>السبت - الخميس: 9:00 ص - 9:00 م</p>
                      <p>الجمعة: 4:00 م - 10:00 م</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">تعليمات الزيارة</h3>
                <ul className="space-y-3 list-disc list-inside">
                  <li>يفضل حجز الزيارة مسبقاً لضمان تجربة أفضل.</li>
                  <li>مدة الجولة الإرشادية حوالي ساعة واحدة.</li>
                  <li>يمكن للمجموعات الكبيرة (أكثر من 10 أشخاص) طلب جولة خاصة.</li>
                  <li>يرجى الالتزام بتعليمات المتحف وعدم لمس المعروضات.</li>
                  <li>يسمح بالتصوير الفوتوغرافي للاستخدام الشخصي فقط.</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="section-title">نموذج الاتصال</h2>
              
              <div className="bg-background p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        الاسم الكامل <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        البريد الإلكتروني <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        رقم الهاتف
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="visitors" className="block mb-2 font-medium">
                        عدد الزوار
                      </label>
                      <select
                        id="visitors"
                        name="visitors"
                        value={formData.visitors}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                        <option value="more">أكثر من 10</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="visitDate" className="block mb-2 font-medium">
                        تاريخ الزيارة
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="visitTime" className="block mb-2 font-medium">
                        وقت الزيارة
                      </label>
                      <select
                        id="visitTime"
                        name="visitTime"
                        value={formData.visitTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">اختر الوقت</option>
                        <option value="9:00">9:00 صباحاً</option>
                        <option value="10:00">10:00 صباحاً</option>
                        <option value="11:00">11:00 صباحاً</option>
                        <option value="12:00">12:00 ظهراً</option>
                        <option value="13:00">1:00 مساءً</option>
                        <option value="14:00">2:00 مساءً</option>
                        <option value="15:00">3:00 مساءً</option>
                        <option value="16:00">4:00 مساءً</option>
                        <option value="17:00">5:00 مساءً</option>
                        <option value="18:00">6:00 مساءً</option>
                        <option value="19:00">7:00 مساءً</option>
                        <option value="20:00">8:00 مساءً</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium">
                      الرسالة <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 mr-auto"
                  >
                    <span>إرسال الرسالة</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
  <div className="container-custom">
    <h2 className="section-title mb-8">موقع المتحف</h2>
    
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.35991658848013!2d50.07641645313877!3d26.543745234029057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e4a01f352076cf1%3A0xf9bfe21d6b2af2fd!2z2YXYqtit2YEg2YHYqtit2Yog2KfZhNio2YbYudmE2Yog2KjYr9in2LHZitmGINin2YTYtNix2YLZitip!5e1!3m2!1sen!2seg!4v1740952982253!5m2!1sen!2seg" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع متحف فتحي البنعلي على الخريطة"
        ></iframe>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default ContactPage;