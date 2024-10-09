import { useEffect, useState } from 'react';


const VisitCount = () => {

        const [visitCount, setVisitCount] = useState(0);
      
        useEffect(() => {
          const visitCounter = localStorage.getItem("page_view");
      
          if (visitCounter) {
            const newCount = Number(visitCounter) + 1;
            localStorage.setItem("page_view", newCount);
            setVisitCount(newCount);
          } else {
            localStorage.setItem("page_view", 1);
            setVisitCount(1);
          }
        }, []);
      

    return (

          <div className="mt-4">
            <div className="text-lg footer-title text-red-600">Total Visit Count</div>
            <div className="website-counter bg-red-500 text-slate-100 font-bold text-xl h-12 w-20 flex items-center justify-center rounded-full mt-2">{visitCount}</div>
          </div>
    );
};

export default VisitCount;