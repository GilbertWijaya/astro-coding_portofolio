
const products = [


  {
    id: 1,
    name: 'Marketplace API',
    href: '#',
    imageSrc: '/laravel_api.png',
    imageAlt: "laravel api.",
    color: 'With PHP and Javascript Stack Technology',
  },
  {
    id: 2,
    name: 'Fullstack MarketPlace',
    href: 'https://ejournal.uby.ac.id/index.php/jitu/article/view/1813',
    imageSrc: '/marketplace_app.png',
    imageAlt: "Marketplace App.",
    // price: '$35',
    color: 'With MERN(MySQL, ExpressJS,ReactJS,NodeJS) Stack Technology ',
  },
  {
    id: 3,
    name: 'accommodation management',
    href: '#',
    imageSrc: '/acomodation.png',
    imageAlt: "Accommodation management",
    // price: '$35',
    color: 'With NextJS stack technology',
  },
  {
    id: 4,
    name: 'Anything else',
    href: '#',
    imageSrc: '/icon.png',
    imageAlt: "More",
    // price: '$35',
    color: 'For More Info Contact Us',
  },
  // More products...
]

const PortofolioComp = () => {
    return (
        <>

             <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">Our Portofolio</h2>
                    <p className="textsm font-bold tracking-tight text-gray-900">Check out some examples of projects we have completed</p>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                        <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div className="mt-4 flex justify-between">
                            <div>
                            <h3 className="text-sm text-gray-700 font-bold">
                                <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default PortofolioComp