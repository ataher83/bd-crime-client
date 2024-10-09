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
    const [crimeFilter, setCrimeFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortPrice, setSortPrice] = useState('');
    const [sortDate, setSortDate] = useState('newest');  // Default to "Newest First"
    const [showPriceRange, setShowPriceRange] = useState(false); // Control visibility of price range input fields

    const { data: informations = [], isLoading, refetch } = useQuery({
        queryKey: ['informations', searchTerm, crimeFilter, categoryFilter, minPrice, maxPrice, sortPrice, sortDate],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:3000/informations', {
            // const { data } = await axios.get('http://localhost:3000/products', {
            // const { data } = await axios.get('https://natural-agro-server.vercel.app/products', {
                params: {
                    search: searchTerm,
                    crimeFilter: crimeFilter,
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
    const handleCrimeFilter = (e) => { setCrimeFilter(e.target.value); refetch(); };
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
                        placeholder='অপরাধীর নাম দিয়ে খুজুন'
                        className='input input-bordered w-full max-w-xs'
                        value={searchTerm}
                        onChange={handleSearch}
                    />

                    <select className='select select-bordered' value={crimeFilter} onChange={handleCrimeFilter}>
                        <option value="">অপরাধের ধরন</option>
                        <option value="">সকল ধরনের অপরাধ</option>
                        <option value="রাষ্ট্রদ্রোহ/ রাষ্ট্র বিরোধী কার্যক্রম">রাষ্ট্রদ্রোহিতা/ রাষ্ট্র বিরোধী কার্যক্রম / রাষ্ট্রদ্রোহীকে সমর্থন </option>
                        <option value="স্বৈরাচার/ স্বৈরাচারকে সমর্থন">স্বৈরাচার/ স্বৈরাচারকে সমর্থন</option>
                        <option value="ধর্মবিদ্বেষ">ধর্মবিদ্বেষ/ ধর্মীয় উস্কানি/ ধর্ম অবমাননা</option>
                        <option value="সাম্প্রদায়িক উস্কানি">সাম্প্রদায়িক বিদ্বেষ/ সাম্প্রদায়িক উস্কানি</option>
                        <option value="সন্ত্রাস">সন্ত্রাস</option>
                        <option value="চাঁদাবাজি">চাঁদাবাজি</option>
                        <option value="ইভটিজিং">ইভটিজিং</option>
                        <option value="শিশু নির্যাতন">শিশু নির্যাতন</option>
                        <option value="নারী নির্যাতন">নারী নির্যাতন</option>
                        <option value="পুরুষ নির্যাতন">পুরুষ নির্যাতন</option>
                        <option value="যৌন নির্যাতন">যৌন নির্যাতন</option> 
                        <option value="ধর্ষণ">ধর্ষণ</option>
                        <option value="বলাৎকার">বলাৎকার</option>
                        <option value="মানবপাচার">মানবপাচার</option>
                        <option value="অপহরণ">অপহরণ</option>
                        <option value="গুম/ নিখোঁজ">গুম/ নিখোঁজ</option>
                        <option value="শারীরিক নির্যাতন">শারীরিক নির্যাতন</option>
                        <option value="মানসিক নির্যাতন">মানসিক নির্যাতন</option>
                        <option value="ভাংচুর/ সম্পত্তি ধ্বংস">ভাংচুর/ সম্পত্তি ধ্বংস</option>
                        <option value="হত্যা">হত্যা</option>
                        <option value="ডাকাতি/ লুটপাট">ডাকাতি/ লুটপাট</option>
                        <option value="ছিনতাই">ছিনতাই</option>
                        <option value="চুরি">চুরি</option>
                        <option value="কর্ম ফাঁকি">কর্মে অবহেলা/ কর্ম ফাঁকি</option>
                        <option value="ঘুষ">ঘুষ</option>
                        <option value="মানি লন্ডারিং">মানি লন্ডারিং</option>
                        <option value="কর ফাঁকি">কর ফাঁকি</option>
                        <option value="প্রতারণা">প্রতারণা</option>
                        <option value="জাল মুদ্রা সরবরাহ">জাল মুদ্রা তৈরি/ সরবরাহ</option>
                        <option value="জাল সার্টিফিকেট সরবরাহ">জাল সার্টিফিকেট তৈরি</option>
                        <option value="বিপণন প্রতারণা">বিপণন প্রতারণা</option>
                        <option value="পণ্যে ভেজাল দেওয়া">পণ্যে ভেজাল দেওয়া</option>
                        <option value="জালিয়াতি">জালিয়াতি</option>
                        <option value="আত্মসাৎ">আত্মসাৎ</option>
                        <option value="দুর্নীতি">দুর্নীতি</option>
                        <option value="মাদক পাচার">মাদক পাচার</option>
                        <option value="মাদক ব্যবসা">মাদক ব্যবসা</option>
                        <option value="নেশা/মাদক সেবন">নেশা/মাদক সেবন</option>
                        <option value="জুয়া">জুয়া</option>
                        <option value="পতিতাব্যবসা">পতিতাবৃত্তি/ পতিতাব্যবসা</option>
                        <option value="বন উজাড় করা">অবৈধভাবে বন উজাড় করা</option>
                        <option value="অবৈধ শিকার">অবৈধ শিকার</option>
                        <option value="পরিবেশ দূষণ">পরিবেশ দূষণ</option>
                        <option value="শব্দ দূষণ">শব্দ দূষণ</option>
                        <option value="বন্যপ্রাণী পাচার">বন্যপ্রাণী পাচার</option>
                        <option value="মিথ্যা তথ্য ছড়ানো">গুজব/ মিথ্যা তথ্য ছড়ানো</option>
                        <option value="ডিজিটাল ক্রাইম">ডিজিটাল ক্রাইম</option>
                        <option value="অন্যান্য">অন্যান্য</option>
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
