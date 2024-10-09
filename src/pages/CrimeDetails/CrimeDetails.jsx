import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoLogoUsd } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const CrimeDetails = () => {
    const informations =useLoaderData();
    const {id} = useParams()

    const information = informations.find(i => i._id == id) 

    return (
            <div className="bg-base-100 shadow-xl mt-4 text-center">

                    <h2 className=" text-red-500 font-bold text-xl">{information.criminalName}</h2>
                    <p className=" ">({information.involvationOfCriminal} এর সাথে জড়িত)</p>
                    <h1 className="bg-red-200 rounded font-semibold">অপরাধঃ {information.crimeType}</h1>
                <figure className="flex justify-center py-2">
                    <img className="w-96 h-72 rounded-lg" src={information.criminalPhoto} alt="Criminal Picture" />
                </figure>

                <div className="flex justify-center gap-5 font-semibold">
                    <p className="flex items-center">পেশাঃ {information.criminalProfession}</p>
                    <p className="flex items-center">{information.productPrice}<span className="">বয়সঃ {information.criminalAge} বছর</span></p>
                 </div>

                <div className="flex flex-col gap-2 mt-5">
                    <p className="">অপরাধের বর্ণনাঃ {information.crimeDetails}</p>
                    <p className="">অপরাধের তারিখ-সময়ঃ {information.currentDateAndTime}</p>
                    <p className="">অপরাধের স্থানঃ {information.crimePlace}</p>

                   <div className="py-4">
                        <p className="">অপরাধ/ ঘটনার ছবিঃ</p>
                        <figure className=" md:flex  justify-center ">
                            <img className="w-96 h-72 rounded-lg p-2" src={information.crimePicture1} alt="Criminal Picture " />
                            <img className="w-96 h-72 rounded-lg p-2" src={information.crimePicture2} alt="Criminal Picture" />
                            <img className="w-96 h-72 rounded-lg p-2" src={information.crimePicture3} alt="Criminal Picture" />
                        </figure>
                    </div>
                   {/* <div className="py-2">
                        <p className="">অপরাধ/ ঘটনার অনলাইন লিংকঃ</p>
                        <p className="">লিংক-১ঃ {information.crimeLink1}</p>
                        <p className="">লিংক-২ঃ {information.crimeLink2}</p>
                        <p className="">লিংক-৩ঃ {information.crimeLink3}</p>
                    </div> */}
                    <div className="py-2">
                        <p>অপরাধ/ ঘটনার অনলাইন লিংকঃ</p>
                        {information.crimeLink1 && <p>লিংক-১ঃ <a href={information.crimeLink1} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{information.crimeLink1}</a></p>}
                        {information.crimeLink2 && <p>লিংক-২ঃ <a href={information.crimeLink2} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{information.crimeLink2}</a></p>}
                        {information.crimeLink3 && <p>লিংক-৩ঃ <a href={information.crimeLink3} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{information.crimeLink3}</a></p>}
                    </div>

                    <p>অপরাধীর ফেইসবুক/ সোসাল মিডিয়া লিংকঃ
                        <a href={information.criminalSocialLink} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer"> {information.criminalSocialLink}</a>
                    </p>
                    <p className="">অপরাধীর পিতার নামঃ {information.criminalFatherName}</p>
                    <p className="">অপরাধীর বর্তমান ঠিকানাঃ {information.criminalCurrentAddress}</p>
                    <p className="">অপরাধীর স্থায়ী ঠিকানাঃ {information.criminalPermanentAddress}</p>
                    <p className="">অপরাধীর পরিবার/ আত্মীয়/ বন্ধুদের বর্ণনাঃ {information.criminalRelatives}</p>


                

                    <div className="justify-center items-center">
                        <div className="badge badge-outline bg-green-400 font-semibold text-white border-green-500">
                        অপরাধের তারিখ-সময়: {information.currentDateAndTime}
                        </div>
                    </div>
                    <Link to="/addInfo">
                        <div className="justify-center items-center">
                            <div className="badge badge-outline bg-red-500 font-semibold text-white border-red-500 ">
                                {/* <p>অপরাধ ও অপরাধীর তথ্য দিয়ে আইন-শৃঙ্খলা বাহিনিকে সহায়তা করুন, </p>  */}
                                <p>অপরাধ ও অপরাধীর তথ্য দিন, </p> 
                            </div>
                            <div className="badge badge-outline bg-red-500 font-semibold text-white border-red-500 ">
                                <p>দেশকে অপরাধমুক্ত এবং শক্তিশালী করুন।</p>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
    );
};

export default CrimeDetails;