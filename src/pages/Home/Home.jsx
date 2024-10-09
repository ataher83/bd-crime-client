import { Helmet } from "react-helmet-async";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Slide } from "react-awesome-reveal";
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortPrice, setSortPrice] = useState('');
    const [sortDate, setSortDate] = useState('newest');  // Default to "Newest First"
    const [showPriceRange, setShowPriceRange] = useState(false); // Control visibility of price range input fields

    const { data: informations = [], isLoading, refetch } = useQuery({
        queryKey: ['informations', searchTerm, brandFilter, categoryFilter, minPrice, maxPrice, sortPrice, sortDate],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/informations', {
            // const { data } = await axios.get('http://localhost:3000/products', {
            // const { data } = await axios.get('https://natural-agro-server.vercel.app/products', {
                params: {
                    search: searchTerm,
                    brandFilter: brandFilter,
                    categoryFilter: categoryFilter,
                    minPrice: minPrice,
                    maxPrice: maxPrice,
                    sortPrice: sortPrice,
                    sortDate: sortDate,
                },
            });
            return data;
        },
    });

    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleBrandFilter = (e) => { setBrandFilter(e.target.value); refetch(); };
    const handleCategoryFilter = (e) => { setCategoryFilter(e.target.value); refetch(); };
    const handleSortPrice = (e) => { setSortPrice(e.target.value); refetch(); };
    const handleSortDate = (e) => { setSortDate(e.target.value); refetch(); };
    const handlePriceRangeClick = () => setShowPriceRange(!showPriceRange);
    const handleFindClick = () => refetch();

    return (
        <div>
            <Helmet>
                <title>BD Crime | Home</title>
            </Helmet>

            <div className="py-16">
                <p className="text-center text-2xl font-bold text-red-600 py-4">
                    অপরাধ ও বৈষম্যমূলক বাংলাদেশ গঠনে চলুন সবাই ঐক্যবদ্ধ হই 
                </p>
                <p className="text-center text-2xl font-bold text-red-600">
                    <Slide>
                        <h1>Crime Report || ক্রাইম রিপোর্ট </h1>
                    </Slide>
                </p>

                <div className='flex justify-between items-center mb-4'>
                    <input
                        type='text'
                        placeholder='Search by product name'
                        className='input input-bordered w-full max-w-xs'
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <select className='select select-bordered' value={brandFilter} onChange={handleBrandFilter}>
                        <option value=''>Brand Name</option>
                        <option value=''>All Brand</option>
                        <option value='ACI'>ACI</option>
                        <option value='ACME'>ACME</option>
                        <option value='Akij'>Akij</option>
                        <option value='Square'>Square</option>
                        <option value='Faizan'>Faizan</option>
                    </select>

                    <select className='select select-bordered' value={categoryFilter} onChange={handleCategoryFilter}>
                        <option value=''>Category</option>
                        <option value=''>All Category</option>
                        <option value='Drinks'>Drinks</option>
                        <option value='Juice'>Juice</option>
                        <option value='Honey'>Honey</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Rice'>Rice</option>
                        <option value='Oil'>Oil</option>
                        <option value='Meat'>Meat</option>
                        <option value='Fish'>Fish</option>
                        <option value='Vegetable'>Vegetable</option>
                        <option value='Fruits'>Fruits</option>
                    </select>

                    <div className="relative">
                        <button className='btn btn-outline' onClick={handlePriceRangeClick}>
                            Price Range
                        </button>
                        {showPriceRange && (
                            <div className=" absolute top-full left-0 mt-2 bg-white p-4 rounded shadow-lg z-10">
                                <input
                                    type='number'
                                    placeholder='Min Price'
                                    className='input input-bordered w-full mb-2'
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                                <input
                                    type='number'
                                    placeholder='Max Price'
                                    className='input input-bordered w-full mb-2'
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                />
                                <button className='btn btn-success w-full' onClick={handleFindClick}>
                                    Find
                                </button>
                            </div>
                        )}
                    </div>

                    <select className='select select-bordered' value={sortPrice} onChange={handleSortPrice}>
                        <option value=''>Sort by Price</option>
                        <option value='asc'>Low to High</option>
                        <option value='desc'>High to Low</option>
                    </select>

                    <select className='select select-bordered' value={sortDate} onChange={handleSortDate}>
                        <option value='newest'>Newest First</option>
                        <option value='oldest'>Oldest First</option>
                    </select>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto ">
                    {
                        informations.map((info, index) => (
                            <div key={index} className="card bg-base-100 shadow-xl mt-4">
                                <figure><img className="w-full h-72" src={info.criminalPhoto} alt="Criminal Picture" /></figure>

                                <div className="flex justify-between px-2 pt-1 font-semibold">
                                    {/* <p className="flex items-center"><FcRating className="text-blue-400" /> {info.productRating}</p> */}
                                    <p className="flex items-center">{info.criminalProfession}</p>
                                    <p className="flex items-center">{info.productPrice}<span className="text-green-500">{info.criminalAge} বছর</span></p>
                                    <p className="bg-green-200 rounded capitalize px-1"><span>{info.crimeType}</span></p>
                                </div>

                                <div className="card-body px-1">
                                    <div className="flex gap-2 items-center justify-center">
                                        <h2 className="lg:card-title text-center text-green-500 font-bold">{info.criminalName}</h2>
                                    </div>

                                    <p className="text-center text-green-500">({info.involvationOfCriminal} এর সাথে জড়িত)</p>
                                    <p className="text-center pb-2">{info.crimeDetails}</p>

                                    <div className="card-actions justify-center items-center">
                                        <div className="badge badge-outline bg-green-400 font-semibold text-white border-green-500">
                                            Product Created at: {info.currentDateAndTime}
                                        </div>
                                    </div>

                                    <div className="text-center mt-5">
                                        <Link to={`/crimeDetails/${info._id}`}>
                                            <button className="btn btn-success text-s w-1/3">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
