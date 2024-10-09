import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { AuthContext } from "../../providers/AuthProvider";
import { imageUpload } from '../../api/utils';

const AddInfo = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const handleAddInfo = async (event) => {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);

        try {
            setLoading(true);

            // Upload images and get URLs
            const criminalPhoto_url = await imageUpload(formData.get('criminalPhoto'));
            const criminalPhotoID_url = await imageUpload(formData.get('criminalPhotoID'));
            const crimePicture1_url = await imageUpload(formData.get('crimePicture1'));
            const crimePicture2_url = await imageUpload(formData.get('crimePicture2'));
            const crimePicture3_url = await imageUpload(formData.get('crimePicture3'));
            const informerPhoto_url = await imageUpload(formData.get('informerPhoto'));

            const response = await fetch('http://localhost:3000/informations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    crimeType: formData.get('crimeType'),
                    criminalAge: formData.get('criminalAge'),
                    criminalName: formData.get('criminalName'),
                    criminalFatherName: formData.get('criminalFatherName'),
                    criminalPhone: formData.get('criminalPhone'),
                    criminalSocialLink: formData.get('criminalSocialLink'),
                    crimePlace: formData.get('crimePlace'),
                    crimeTime: formData.get('crimeTime'),
                    criminalProfession: formData.get('criminalProfession'),
                    involvationOfCriminal: formData.get('involvationOfCriminal'),
                    crimeDetails: formData.get('crimeDetails'),
                    criminalCurrentAddress: formData.get('criminalCurrentAddress'),
                    criminalPermanentAddress: formData.get('criminalPermanentAddress'),
                    criminalRelatives: formData.get('criminalRelatives'),
                    criminalPhoto: criminalPhoto_url,
                    criminalPhotoID: criminalPhotoID_url,
                    crimePicture1: crimePicture1_url,
                    crimePicture2: crimePicture2_url,
                    crimePicture3: crimePicture3_url,
                    crimeLink1: formData.get('crimeLink1'),
                    crimeLink2: formData.get('crimeLink2'),
                    crimeLink3: formData.get('crimeLink3'),
                    informerName: formData.get('informerName'),
                    informerPhone: formData.get('informerPhone'),
                    informerEmail: formData.get('informerEmail'),
                    informerProfession: formData.get('informerProfession'),
                    informerPhoto: informerPhoto_url,
                    currentDateAndTime: formData.get('currentDateAndTime'),
                }),
            });

            if (response.ok) {
                toast.success('আপনার দেয়া তথ্য সফল ভাবে সংরক্ষিত হয়েছে !');
                form.reset(); // Optional: Reset the form after submission
            } else {
                throw new Error('Failed to save information');
            }
        } catch (err) {
            console.error(err);
            toast.error(err.message || 'An unexpected error occurred');
        } finally {
            setLoading(false);
        }
    }

//     return (
//         <>
//             <Helmet>
//                 <title>Add Information</title>
//             </Helmet>
//             {/* Your form JSX here */}
//             <form onSubmit={handleAddInfo}>
//                 {/* form fields */}
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Saving...' : 'Save Information'}
//                 </button>
//             </form>
//         </>
//     );
// }

// export default AddInfo;



    return (
        <div>
            <Helmet>
                <title>তথ্য দিন | BD Crime</title>
            </Helmet>

            {/* Add Product Section */}
            <div className="bg-[#F4F3F0] p-2 md:p-24">
                <h2 className="text-xl font-extrabold text-center text-red-600"><span className="bg-green-300 text-2xl px-4">অপরাধ ও অপরাধীর তথ্য ফর্ম পূরণ করুন</span> <br /> অপরাধ, অন্যায়-অনাচার, শোষণ-নির্যাতন, দুর্নীতিমুক্ত বৈষম্যহীন বাংলাদেশ গঠনে এগিয়ে আসুন </h2>

                <form onSubmit={handleAddInfo}  className="bg-red-200 rounded-xl p-5 font-semibold">

                    {/* অপরাধের ধরন + অপরাধীর বয়স */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2 ">
                            <label className='label-text ' htmlFor='crimeType'>
                                অপরাধের ধরন
                            </label>
                            <select 
                                className=' w-full px-4 py-3 text-gray-800 border border-red-300 focus:outline-red-500 rounded-md '
                                name='crimeType'
                                id='crimeType'
                                required
                                >
                                <option value="">-- অপরাধের ধরন নির্বাচন করুন --</option>
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
                        </div>


                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="">
                                <span className="label-text">অপরাধীর বয়স</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalAge" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    
                    {/* অপরাধীর নাম + অপরাধীর পিতার নাম */}
                    <div className="md:flex mb-8">


                        <div className="form-control md:w-1/2">
                            <label className="">
                                <span className="label-text">অপরাধীর নাম</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalName" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                        
                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="">
                                <span className="label-text">অপরাধীর পিতার নাম</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalFatherName" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর মোবাইল + অপরাধীর ফেইসবুক/ সোসাল মিডিয়া লিংক */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">অপরাধীর মোবাইল</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalPhone" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">অপরাধীর ফেইসবুক/ সোসাল মিডিয়া লিংক</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalSocialLink" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধের স্থান + অপরাধের তারিখ-সময় */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">অপরাধের স্থান</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="crimePlace" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">অপরাধের তারিখ-সময়</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="crimeTime" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর পেশা + অপরাধীর বিশেষ কোন ব্যক্তি/ দল/ সংগঠনের সাথে জড়িত থাকলে তার নাম */}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">অপরাধীর পেশা</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalProfession" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">অপরাধীর বিশেষ কোন ব্যক্তি/ দল/ সংগঠনের সাথে জড়িত থাকলে তার নাম</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="involvationOfCriminal" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধের বিস্তারিত বর্ণনা */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">অপরাধের বিস্তারিত বর্ণনা</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="crimeDetails" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর বর্তমান ঠিকানা */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">অপরাধীর বর্তমান ঠিকানা</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalCurrentAddress" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর স্থায়ী ঠিকানা */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">অপরাধীর স্থায়ী ঠিকানা</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalPermanentAddress" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর পরিবার/ আত্মীয়/ বন্ধুদের বর্ণনা (নাম-ঠিকানা-ফোন সহ দিতে পারলে ভাল) */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 lg:w-full">
                            <label className="label">
                                <span className="label-text">অপরাধীর পরিবার/ আত্মীয়/ বন্ধুদের বর্ণনা (নাম-ঠিকানা-ফোন সহ দিতে পারলে ভাল)</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="criminalRelatives" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* অপরাধীর ছবি + অপরাধীর NID/ DL/ ফটো আই ডি*/}
                    <div className="md:flex mb-8">

                        <div className="form-control md:w-1/2">
                            <label className="label" htmlFor='criminalPhoto'>
                                <span className="label-text">অপরাধীর ছবি</span>
                            </label>

                            <input type="file" accept='image/*' name="criminalPhoto" id='criminalPhoto' placeholder="" className="input input-bordered w-full px-0 py-2" />
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label" htmlFor='criminalPhotoID'>
                                <span className="label-text">অপরাধীর NID/ DL/ ফটো আই ডি</span>
                            </label>

                            <input type="file" accept='image/*' name="criminalPhotoID" id='criminalPhotoID' placeholder="" className="input input-bordered w-full px-0 py-2" />
                        </div>
                    </div>

                    {/* অপরাধ/ ঘটনার ছবি ১+২+৩*/}
                    <div className="mb-8">
                        <label className="label">
                            <span className="label-text">অপরাধ/ ঘটনার ছবি</span>
                        </label>

                        <div className="md:flex justify-between md:space-x-4">
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimePicture1'>
                                    <span className="label-text">ছবি-১</span>
                                </label>
                                <input type="file" accept='image/*' name="crimePicture1" id='crimePicture1' className="input input-bordered w-full px-0 py-2" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimePicture2'>
                                    <span className="label-text">ছবি-২</span>
                                </label>
                                <input type="file" accept='image/*' name="crimePicture2" id='crimePicture2' className="input input-bordered w-full px-0 py-2" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimePicture3'>
                                    <span className="label-text">ছবি-৩</span>
                                </label>
                                <input type="file" accept='image/*' name="crimePicture3" id='crimePicture3' className="input input-bordered w-full px-0 py-2" />
                            </div>
                        </div>
                    </div>
                    
                    {/* অপরাধ/ ঘটনার অনলাইন লিংক ১+২+৩ */}
                    <div className="mb-8">
                        <label className="label">
                            <span className="label-text">অপরাধ/ ঘটনার অনলাইন লিংক</span>
                        </label>

                        <div className="md:flex justify-between md:space-x-4">
                            <div className="md:w-1/3">
                                <label className="label">
                                    <span className="label-text">লিংক-১</span>
                                </label>
                                <input type="text" name="crimeLink1" placeholder="এখনে URL-link লিখুন/ পেষ্ট করুন" className="input input-bordered w-full" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label">
                                    <span className="label-text">লিংক-২</span>
                                </label>
                                <input type="text" name="crimeLink2" placeholder="এখনে URL-link লিখুন/ পেষ্ট করুন" className="input input-bordered w-full" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label">
                                    <span className="label-text">লিংক-৩</span>
                                </label>
                                <input type="text" name="crimeLink3" placeholder="এখনে URL-link লিখুন/ পেষ্ট করুন" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>

                    {/* পরে করবো  */}
                    {/* অপরাধ/ ঘটনা সম্পর্কে কোন ডকুমেন্ট/ ফাইল ১+২+৩ */}
                    {/* <div className="mb-8">
                        <label className="label">
                            <span className="label-text">অপরাধ/ ঘটনা সম্পর্কে কোন ডকুমেন্ট/ ফাইল থাকলে আপলোড করুন</span>
                        </label>

                        <div className="md:flex justify-between md:space-x-4">
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimeFile1'>
                                    <span className="label-text">ফাইল-১</span>
                                </label>
                                <input type="file" name="crimeFile1" id='crimeFile1' className="input input-bordered w-full px-0 py-2" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimeFile2'>
                                    <span className="label-text">ফাইল-২</span>
                                </label>
                                <input type="file" name="crimeFile2" id='crimeFile2' className="input input-bordered w-full px-0 py-2" />
                            </div>
                            <div className="md:w-1/3">
                                <label className="label" htmlFor='crimeFile3'>
                                    <span className="label-text">ফাইল-৩</span>
                                </label>
                                <input type="file" name="crimeFile3" id='crimeFile3' className="input input-bordered w-full px-0 py-2" />
                            </div>
                        </div>
                    </div> */}


                    {/* অভিযোগ/ তথ্য প্রদানকারীর বর্ণনা */}

                        <p className=" text-center py-4 ">অভিযোগ/ তথ্য প্রদানকারী সম্পর্কে বর্ণনা (গোপন রাখা হবে)</p>
                   

                    {/* তথ্য প্রদানকারীর নাম + মোবাইল নং */} 
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">তথ্য প্রদানকারীর নাম</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="informerName" placeholder="" defaultValue={user?.displayName} disabled={user?.displayName ? true : false} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">তথ্য প্রদানকারীর মোবাইল নং</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="informerPhone" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    {/* তথ্য প্রদানকারীর ইমেইল + পেশা */}  
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">তথ্য প্রদানকারীর ইমেইল</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="informerEmail" placeholder="" defaultValue={user?.email} disabled={user?.displayName ? true : false} className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">তথ্য প্রদানকারীর পেশা</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="informerProfession" placeholder="" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    {/* Just Show User Image/তথ্য প্রদানকারীর প্রফাইল ছবি (লগইন করা থাকলে দেখাবে)*/}
                    <div className="flex justify-center " >
                        <img className="w-24 rounded-2xl" src={user?.photoURL} />   
                    </div>

                    {/* তথ্য প্রদানকারীর ছবি + অভিযোগ/ তথ্য প্রদানের তারিখ-সময় */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label" htmlFor='informerPhoto'>
                                <span className="label-text">তথ্য প্রদানকারীর ছবি</span>
                            </label>
                            <input 
                            type={user ? "text" : "file"} 
                            accept='image/*' 
                            name="informerPhoto" 
                            id='informerPhoto' 
                            placeholder="" 
                            defaultValue={user ? user.photoURL : ""} 
                            disabled={user? true : false}
                            // disabled={!!user}   // চেক কর 
                            className="input input-bordered w-full px-0 py-2" 
                            />

                        </div>

                        <div className="form-control md:w-1/2 md:ml-4">
                            <label className="label">
                                <span className="label-text">তথ্য প্রদানের সময়</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="currentDateAndTime" placeholder="" defaultValue={new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) + ', ' + new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })} disabled className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="জমা দিন" className="btn btn-block btn-error text-xl" />

                </form>


            </div>
            
        </div>
    );
};

export default AddInfo;