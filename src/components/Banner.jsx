import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <div className="hero bg-[#9538E2] w-11/12 mx-auto text-white pb-56 mb-4 rounded-b-2xl relative">
  <div className="hero-content text-center">
    <div className="max-w-5xl">
      <h1 className="text-5xl font-bold">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="py-6 max-w-3xl mx-auto">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="btn rounded-full text-[#9538E2] bg-white">
        <Link to={'/dashboard'}>Shop Now</Link>
      </button>
    </div>
  </div>
</div>

<div className="p-3 bg-white/60 border-2 border-white relative -mt-48 w-8/12 rounded-2xl mx-auto">
  <img
    className="rounded-3xl h-96 w-full shadow-lg object-cover object-center"
    src="https://i.pinimg.com/564x/3b/b3/c9/3bb3c986883164fc0ec7d5d3b920212e.jpg"
    alt="audio"
  />
</div>


        </>
    );
};

export default Banner;
// 