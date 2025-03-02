import React, { useState } from 'react';
import { Ship, Anchor, Compass, Map, Shell, Palmtree } from 'lucide-react';

type Category = 'all' | 'ships' | 'fishing' | 'navigation' | 'maps' | 'artifacts' | 'traditional';

interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<Category, 'all'>;
  icon: React.ReactNode;
}

const CollectionsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const collections: Collection[] = [
    {
      id: 1,
      title: "السفينة الشراعية التقليدية",
      description: "نموذج مصغر للسفينة الشراعية التقليدية التي كانت تستخدم في الخليج العربي للتجارة والصيد.",
      image: "/images/ship.jpg",
      category: "ships",
      icon: <Ship size={20} />
    },
    {
      id: 2,
      title: "البوم الكويتي",
      description: "نموذج للبوم الكويتي، وهو نوع من السفن الشراعية الكبيرة التي استخدمت في رحلات التجارة الطويلة.",
      image: "/images/ships.jpg",
      category: "ships",
      icon: <Ship size={20} />
    },
    {
      id: 3,
      title: "شباك الصيد التقليدية",
      description: "مجموعة من شباك الصيد التقليدية المستخدمة من قبل صيادي الأسماك في الخليج العربي.",
      image: "/images/fish.jpg",
      category: "fishing",
      icon: <Anchor size={20} />
    },
    {
      id: 4,
      title: "القراقير",
      description: "أقفاص صيد الأسماك التقليدية المصنوعة من سعف النخيل والأسلاك المعدنية.",
      image: "/images/fishing.jpg",
      category: "fishing",
      icon: <Anchor size={20} />
    },
    {
      id: 5,
      title: "البوصلة البحرية",
      description: "بوصلة بحرية قديمة استخدمها البحارة في تحديد الاتجاهات أثناء الإبحار.",
      image: "/images/navigation.jpg",
      category: "navigation",
      icon: <Compass size={20} />
    },
    {
      id: 6,
      title: "الإسطرلاب",
      description: "أداة فلكية قديمة استخدمت في الملاحة البحرية وتحديد المواقع.",
      image: "/images/navigation1.jpg",
      category: "navigation",
      icon: <Compass size={20} />
    },
    {
      id: 7,
      title: "خرائط بحرية قديمة",
      description: "مجموعة من الخرائط البحرية القديمة التي توضح طرق التجارة والملاحة في الخليج العربي.",
      image: "/images/maps.jpg",
      category: "maps",
      icon: <Map size={20} />
    },
    {
      id: 8,
      title: "أدوات منزلية تقليدية",
      description: "مجموعة من الأدوات المنزلية التقليدية التي كانت تستخدم في المنازل قديماً.",
      image: "/images/artifacts.jpg",
      category: "artifacts",
      icon: <Shell size={20} />
    },
    {
      id: 9,
      title: "الملابس التقليدية",
      description: "عرض للملابس التقليدية التي كان يرتديها سكان المنطقة الشرقية قديماً.",
      image: "/images/traditional.jpg",
      category: "traditional",
      icon: <Palmtree size={20} />
    }
  ];

  const filteredCollections = activeCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', name: 'الكل', icon: null },
    { id: 'ships', name: 'السفن', icon: <Ship size={20} /> },
    { id: 'fishing', name: 'أدوات الصيد', icon: <Anchor size={20} /> },
    { id: 'navigation', name: 'أدوات الملاحة', icon: <Compass size={20} /> },
    { id: 'maps', name: 'الخرائط', icon: <Map size={20} /> },
    { id: 'artifacts', name: 'القطع الأثرية', icon: <Shell size={20} /> },
    { id: 'traditional', name: 'التراث التقليدي', icon: <Palmtree size={20} /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/home2.jpg" 
            alt="مقتنيات متحف فتحي البنعلي" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">مقتنيات المتحف</h1>
          <p className="text-xl max-w-2xl">
            اكتشف مجموعة متنوعة من المقتنيات التاريخية والتراثية النادرة
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-12">المقتنيات والمعروضات</h2>
          
          {/* Categories Filter */}
          <div className="mb-12 overflow-x-auto">
            <div className="flex space-x-4 space-x-reverse pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === category.id 
                      ? 'bg-primary text-white' 
                      : 'bg-background hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory(category.id as Category)}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCollections.map(item => (
              <div key={item.id} className="museum-card">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    {item.icon}
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-primary">معلومات عن المقتنيات</h2>
            <div className="space-y-4">
              <p>
                يحتوي متحف فتحي البنعلي على مجموعة متنوعة من المقتنيات التاريخية والتراثية التي تعكس تاريخ وثقافة المنطقة الشرقية من المملكة العربية السعودية، وخاصة بلدة دارين ومحافظة القطيف.
              </p>
              <p>
                تشمل المقتنيات مجسمات السفن الخليجية التراثية وأدوات الصيد، والقطع المندثرة النادرة، بالإضافة إلى مجموعة من الأدوات والأغراض التي كانت تستخدم في الحياة اليومية قديماً.
              </p>
              <p>
                يتم تحديث المعروضات بشكل دوري، ويسعى المتحف دائماً إلى إضافة قطع جديدة ونادرة إلى مجموعته، للحفاظ على التراث الثقافي للمنطقة وتوثيقه للأجيال القادمة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;