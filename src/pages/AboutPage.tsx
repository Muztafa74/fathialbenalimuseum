import React from 'react';
import { Calendar, MapPin, Building, User } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about.jpeg" 
            alt="عن متحف فتحي البنعلي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">عن المتحف</h1>
          <p className="text-xl max-w-2xl">
            تعرف على قصة متحف فتحي البنعلي وتاريخه وأهميته الثقافية
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="section-title">تاريخ المتحف</h2>
              <div className="space-y-6 text-lg">
                <p>
                  متحف فتحي البنعلي هو متحف أثري مستقل مدعوم من قبل الهيئة العامة للسياحة والتراث الوطني السعودية، يقع في جنوب شرق بلدة دارين، بمحافظة القطيف، من المنطقة الشرقية للمملكة العربية السعودية. متحف دارين هو المتحف الوحيد في القطيف بعد توقف متحف القطيف الحضاري.
                </p>
                <p>
                  في عام 1420هـ، قرر صاحب المتحف فتحي البنعلي البحث عن موقع تراثي يضم مقتنياته التي جمعها كهاوٍ للتحف الأثرية. وقع اختياره على بيت كان لأحد النواخذة البحارة المحليون ببلدة دارين. حينئذٍ، كان البيت مرخصاً للهدم حينها إلا أن فتحي البنعلي اشترى البيت وعمد لامتلاكه بسبب مشابهته لبيت النوخذة راشد بن فاضل البنعلي، على حد تعبيره.
                </p>
                <p>
                  وراشد البنعلي هو أحد تجار ونواخذة جزيرة دارين البارزين ومؤلف الكتاب المرشد «مجاري الهداية - النايلة البحرية». عمل فتحي البنعلي على ترميم البيت وإنقاذه من السقوط وتهالك جدرانه. فيما سعى لترخيصه من قبل وزارة السياحة لمدة تقرب 10 سنوات.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="sticky top-24">
                <img 
                  src="/images/about.jpg" 
                  alt="تاريخ متحف فتحي البنعلي" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar size={20} />
                      <h3 className="font-bold">سنة التأسيس</h3>
                    </div>
                    <p>1420هـ</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin size={20} />
                      <h3 className="font-bold">الموقع</h3>
                    </div>
                    <p>بلدة دارين، القطيف</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building size={20} />
                      <h3 className="font-bold">مساحة المتحف</h3>
                    </div>
                    <p>550 متر مربع</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <User size={20} />
                      <h3 className="font-bold">المؤسس</h3>
                    </div>
                    <p>فتحي البنعلي</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-title text-center mx-auto mb-12">مبنى المتحف</h2>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="/images/about.jpeg" 
                alt="مبنى متحف فتحي البنعلي" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="space-y-6 text-lg">
                <p>
                  يقع متحف دارين في بيت تراثي يتجاوز عمره الـ200 عام على مساحة 550 متر مربع. يجاور المبنى قصر محمد بن عبد الوهاب الفيحاني، ويُقابل ميناء دارين.
                </p>
                <p>
                  يتميز المبنى بطرازه المعماري التقليدي الذي يعكس الهندسة المعمارية للمنطقة الشرقية في المملكة العربية السعودية. تم ترميم المبنى بعناية للحفاظ على طابعه التاريخي مع إضافة التجهيزات الحديثة اللازمة لعرض المقتنيات والتحف الأثرية.
                </p>
                <p>
                  يتكون المبنى من عدة أقسام تضم قاعات العرض المختلفة، بالإضافة إلى فناء داخلي يعكس التصميم التقليدي للبيوت في المنطقة. كما يضم المبنى مكتبة صغيرة تحتوي على مراجع ومصادر تاريخية عن المنطقة وتراثها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">رسالة المتحف</h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl mb-8">
              يهدف متحف فتحي البنعلي إلى الحفاظ على التراث الثقافي والتاريخي للمنطقة الشرقية من المملكة العربية السعودية، وتوثيق تاريخ بلدة دارين ومحافظة القطيف، وإبراز دورها في تاريخ المملكة.
            </p>
            <p className="text-xl">
              كما يسعى المتحف إلى نشر الوعي الثقافي والتاريخي بين أفراد المجتمع، وتعزيز الهوية الوطنية، وتوفير مصدر معرفي وتعليمي للأجيال القادمة عن تاريخ وتراث المنطقة.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;