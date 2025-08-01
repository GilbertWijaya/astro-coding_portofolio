

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [

  { name: 'Dashboard', href: '/' },
  { name: 'Product', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Portofolio', href: '/portofolio' },

]

const products = [

  {
    id: 1,
    name: 'Marketplace API',
    href: '#',
    imageSrc: '/mpapi.png',
    imageAlt: "laravel api.",
    color: 'With PHP and Javascript Stack Technology',
  },
  {
    id: 2,
    name: 'Fullstack MarketPlace',
    href: 'https://ejournal.uby.ac.id/index.php/jitu/article/view/1813',
    imageSrc: '/mpweb.png',
    imageAlt: "Marketplace App.",
    color: 'With MERN(MySQL, ExpressJS,ReactJS,NodeJS) Stack Technology ',
  },
  {
    id: 3,
    name: 'accommodation management',
    href: '#',
    imageSrc: '/accweb.png',
    imageAlt: "Accommodation management",
    color: 'With NextJS and laravel stack technology',
  },
  {
    id: 4,
    name: 'Anything else',
    href: '#',
    imageSrc: '/icon.png',
    imageAlt: "More",
    color: 'For More Info Contact Us',
  },
]

const PortofolioComp = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>

             <div className="bg-white">

                <header className="absolute inset-x-0 top-0 z-50">
                  <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                  <div className="flex lg:flex-1">
                      {/* <a href="#" className="-m-1.5 p-1.5">
                      <span className="font-bold text-3xl">AstroCoding</span>
                      </a> */}
                  </div>
                  <div className="flex lg:hidden">
                      <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                      >
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                      </button>
                  </div>
                  <div className="hidden lg:flex lg:gap-x-12">
                      {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                          {item.name}
                      </a>
                      ))}
                  </div>
                  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                      
                  </div>
                  </nav>
                  <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                  <div className="fixed inset-0 z-50" />
                  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                      <div className="flex items-center justify-between">
                      <a href="#" className="-m-1.5 p-1.5">
                          <span className="font-bold text-2xl">AstroCoding</span>
                      </a>
                      <button
                          type="button"
                          onClick={() => setMobileMenuOpen(false)}
                          className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      >
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                      </div>
                      <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="space-y-2 py-6">
                          {navigation.map((item) => (
                              <a
                              key={item.name}
                              href={item.href}
                              className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                              >
                              {item.name}
                              </a>
                          ))}
                          </div>
                          <div className="py-6">
                          
                          </div>
                      </div>
                      </div>
                  </DialogPanel>
                  </Dialog>
                </header>

                <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">Our Portofolio</h2>
                    <p className="textsm font-bold tracking-tight text-gray-900">Check out some examples of projects we have completed</p>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                        <img
                            alt={product.imageAlt}
                            src={product.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-200 object-fill group-hover:opacity-75 lg:aspect-auto lg:h-80"
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