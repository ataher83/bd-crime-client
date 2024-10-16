
import VisitCount from "../../../components/VisitCount";


const Footer = () => {

  return (
    <div className="container mx-auto">
      <footer className="footer p-10 bg-base-300 text-red-600">
        <aside>
          <img className="w-24 rounded-xl" src="https://i.imgur.com/r5tF8qi.png" alt="Alt Products Logo" />
          <p className="font-semibold text-red-500">
            <span className="text-2xl font-bold text-red-600">BD Crime</span><br />Uncovering the Truth
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-red-600">Services</h6>
          <a className="link link-hover">Crime Reporting</a>
          <a className="link link-hover">Crime Info Finding </a>
          <a className="link link-hover">Alertness about Crime</a>
          <a className="link link-hover">Advising</a>
        </nav>
        <nav>
          <h6 className="footer-title text-red-600">Get in touch</h6>
          <a className="link link-hover">Bd Crime</a>
          <a className="link link-hover">123 XYZ Road, Dhaka</a>
          <a className="link link-hover">Tel: 01100-000000</a>
          <a className="link link-hover">Email: info@bdcrime.com</a>
        </nav>
        <nav>
          <h6 className="footer-title text-red-600">Social</h6>
          <div className="grid grid-flow-col gap-4 text-blue-600">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            <a><svg fill="#2563EB" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve"><g id="XMLID_801_"><path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/><path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/><path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/></g></svg></a>
          </div>

          <VisitCount></VisitCount>

        </nav>

      </footer>
      <p className="text-sm font-semibold text-red-600 bg-base-300 text-center pb-5">Copyright © 2024 - All right reserved by BD Crime</p>
    </div>
  );
};

export default Footer;
