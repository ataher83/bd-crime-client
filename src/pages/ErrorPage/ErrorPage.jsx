import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-red-100 text-center text-2xl text-red-600 flex flex-col justify-center items-center py-10">
            <img className="w-96 rounded-lg" src="https://i.postimg.cc/mkmNFb32/vector-illustration-404-error-page-260nw-1367223953.jpg" alt="" />
            <h1>দুঃখিত!!!</h1>
            <h3>পেইজটি খুজে পাওয়া যায়নি,</h3>
            <>একটি অপ্রত্যাশিত ভুল হয়েছে।</>
            <p>
                {/* {error.statusText || error.message} */}
                {
                    error.status === 404 && <div>
                        {/* <h3>Page not found</h3> */}
                        {/* <p>Go back where you form.</p> */}
                        <Link to ="/"><button className="btn btn-error font-bold text-2xl  mt-5">
                            {/* Go to Home */}
                            হোমে ফিরে যান
                        </button></Link>
                    </div>
                }
            </p>
        </div>
    );
};

export default ErrorPage;