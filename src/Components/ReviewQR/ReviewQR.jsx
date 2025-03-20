import { QRCodeCanvas } from "qrcode.react";

const ReviewQR = () => {
  const reviewLink = "https://g.page/r/Cd_jAqnuGaSwEBE/review"; // Your Google Review Link

  return (
   <>
      <span className="subheading">Leave Us a Review</span>
      
      <div 
        className="p-4 bg-gray-100 rounded-xl cursor-pointer hover:scale-105 transition-transform"
        onClick={() => window.open(reviewLink, "_blank")}
      >
        <QRCodeCanvas value={reviewLink} size={250} />
      </div>

      <p className="text-gray-600 text-sm mt-3">
        Scan the QR Code or{" "}  
        <a 
          href={reviewLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 font-medium hover:underline"
        >
          click here
        </a>  {" "}
        to leave a review!
      </p>
      </>
  );
};

export default ReviewQR;

