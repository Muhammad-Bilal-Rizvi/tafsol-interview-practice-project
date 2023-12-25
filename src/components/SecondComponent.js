import React from 'react'

const SecondComponent = ({ data }) => {
    return (
        <div className="grid grid-rows-1 grid-flow-col">
            <div className="row-span-3 col-span-1 ... bg-sky-300">
                <h3 class="mx-8 my-3 mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
                <ul class="mx-5 my-5 w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="vue-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="react-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="angular-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Angular</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                        </div>
                    </li>
                </ul>

            </div>
            {/* Second Div For Displaying Cards: */}
            {/* <div className="row-span-3 col-span-8 ... bg-teal-600 px-5 py-5"> */}
            {/* <div className="row-span-3 col-span-8 ... bg-teal-600 px-5 py-5 six-cards"> */}
            <div className="grid grid-cols-3 gap-3 bg-indigo-400">
                {data.map(({ product, price, description }) =>
                    // <div className='mt-6 w-96 bg-gray-100 px-3 py-3 rounded-lg'>
                    <div className='bg-teal-600 px-5 py-5 mx-2 my-2 rounded-md'>
                        <div className=''>
                            <h1><b className='text-zinc-950'>Product Name: </b>{product}</h1>
                        </div>
                        <p className=''>
                            <b className='text-zinc-950'>Product Price: </b>{price}
                        </p>
                        <p className=''>
                            <b className='text-zinc-950'>Product Description: </b><br></br>
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SecondComponent
