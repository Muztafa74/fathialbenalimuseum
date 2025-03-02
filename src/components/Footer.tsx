import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Landmark className="h-6 w-6" />
              <h3 className="text-xl font-bold">متحف فتحي البنعلي</h3>
            </div>
            <p className="mb-4">
              متحف أثري مستقل مدعوم من قبل الهيئة العامة للسياحة والتراث الوطني السعودية، يقع في جنوب شرق بلدة دارين، بمحافظة القطيف.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary transition-colors">عن المتحف</Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-secondary transition-colors">المقتنيات</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">معلومات الاتصال</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} />
                <span>بلدة دارين، محافظة القطيف، المنطقة الشرقية، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span dir="ltr" className="font-mono">+966 54 446 8286</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@fathialbenalimuseum.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={18} />
                <span>مفتوح يومياً: 9:00 ص - 9:00 م</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>© {new Date().getFullYear()} متحف فتحي البنعلي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;