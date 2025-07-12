const stats = [


//   { id: 1, name: 'Landing Page & Frontend', value: 'IDR 200.000.00' },
//   { id: 2, name: 'Backend Or Fullstack', value: 'IDR 500.000.00' },
  { id: 1, name: 'Machine Learning Or Something Like That', value: 'in negotiations',img:"/mlimage.png" },
  { id: 2, name: 'basic to intermediate custom projects', value: 'in negotiations',img:"/projecticon.png" },
  { id: 3, name: 'Project Contract', value: 'in negotiations' ,img:"/contract.png"},
  { id: 4, name: 'IT Support', value: 'in negotiations',img:"/support.png" },
]

const ProductComp = () => {
    return (
        <>

            <div className="flex h-full justify-center w-full items-center flex-col ">
                <h1 className="text-5xl font-bold">transparent project cost estimates starting from</h1>
                <p className="mt-10 font-medium">Get a transparent starting price without any additional costs starting from</p>
            </div>



            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {stats.map((stat) => (
                        <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <img src={stat.img} alt={stat.value} />
                        <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {stat.value}
                        </dd>
                        </div>
                    ))}
                    </dl>
                </div>
            </div>
        
        </>
    )
}

export default ProductComp