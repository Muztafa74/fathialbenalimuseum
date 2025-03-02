import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Ship, Anchor, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src=".\src\images\home.jpg" 
            alt="متحف فتحي البنعلي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">متحف فتحي البنعلي</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            رحلة عبر تاريخ وتراث المملكة العربية السعودية في قلب محافظة القطيف
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center gap-2">
              <span>اكتشف المتحف</span>
              <ArrowLeft size={18} />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-6 py-3 rounded-md transition-all duration-300">
              زيارة المتحف
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="section-title">عن المتحف</h2>
              <p className="mb-6 text-lg">
                متحف فتحي البنعلي هو متحف أثري مستقل مدعوم من قبل الهيئة العامة للسياحة والتراث الوطني السعودية، يقع في جنوب شرق بلدة دارين، بمحافظة القطيف، من المنطقة الشرقية للمملكة العربية السعودية. متحف دارين هو المتحف الوحيد في القطيف بعد توقف متحف القطيف الحضاري.
              </p>
              <p className="mb-6 text-lg">
                في عام 1420هـ، قرر صاحب المتحف فتحي البنعلي البحث عن موقع تراثي يضم مقتنياته التي جمعها كهاوٍ للتحف الأثرية. وقع اختياره على بيت كان لأحد النواخذة البحارة المحليون ببلدة دارين.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                <span>المزيد عن المتحف</span>
                <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src=".\src\images\about.jpg" 
                alt="متحف فتحي البنعلي" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">مقتنيات المتحف</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="museum-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src=".\src\images\ship.jpg" 
                  alt="السفن الخليجية التراثية" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Ship size={20} />
                  <h3 className="text-xl font-bold">السفن الخليجية التراثية</h3>
                </div>
                <p className="mb-4">
                  مجموعة من مجسمات السفن الخليجية التراثية التي كانت تستخدم في الصيد والتجارة.
                </p>
                <Link to="/collections" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  <span>عرض المزيد</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>

            <div className="museum-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src=".\src\images\tool.jpg" 
                  alt="أدوات الصيد" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Anchor size={20} />
                  <h3 className="text-xl font-bold">أدوات الصيد</h3>
                </div>
                <p className="mb-4">
                  مجموعة متنوعة من أدوات الصيد التقليدية التي استخدمها الصيادون في الخليج العربي.
                </p>
                <Link to="/collections" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  <span>عرض المزيد</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>

            <div className="museum-card">
              <div className="h-64 overflow-hidden">
                <img 
                  src=".\src\images\piece.jpg" 
                  alt="القطع النادرة" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <MapPin size={20} />
                  <h3 className="text-xl font-bold">القطع النادرة</h3>
                </div>
                <p className="mb-4">
                  مجموعة من القطع المندثرة النادرة التي تعكس تاريخ وثقافة المنطقة الشرقية.
                </p>
                <Link to="/collections" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                  <span>عرض المزيد</span>
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/collections" className="btn-primary inline-flex items-center gap-2">
              <span>عرض جميع المقتنيات</span>
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Info */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">زيارة المتحف</h2>
              <p className="mb-6 text-lg">
                يقع متحف فتحي البنعلي في بيت تراثي يتجاوز عمره الـ200 عام على مساحة 550 متر مربع. يجاور المبنى قصر محمد بن عبد الوهاب الفيحاني، ويُقابل ميناء دارين.
              </p>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold mb-3">ساعات العمل</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>السبت - الخميس:</span>
                    <span>9:00 ص - 9:00 م</span>
                  </li>
                  <li className="flex justify-between">
                    <span>الجمعة:</span>
                    <span>4:00 م - 10:00 م</span>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="bg-white text-primary hover:bg-opacity-90 px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2">
                <span>احجز زيارتك الآن</span>
                <ArrowLeft size={18} />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src=".\src\images\Museum.jpg" 
                  alt="زيارة متحف فتحي البنعلي" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;