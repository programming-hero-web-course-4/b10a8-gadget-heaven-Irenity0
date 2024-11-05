import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="bg-purple-600 py-24 relative text-white">
              <div className="w-11/12 mx-auto space-y-3">
                <h1 className="text-4xl font-bold text-center">Dashboard</h1>
                <p className="text-center">
                  Explore the latest gadgets that will take your experience to the next level. From smart devices to the
                  coolest accessories, we have it all!
                </p>
                <div className="flex justify-center gap-4">
                <Link to={'/dashboard/cart'}><button className="btn btn-outline rounded-full px-6 border-white border-2 text-white">Cart</button></Link>
                <Link to={'/dashboard/wishlist'}><button className="btn btn-outline rounded-full px-6 border-white border-2 text-white">Wish List</button></Link>
                </div>
              </div>
            </div>

            <Outlet></Outlet>
        </>
    );
};

export default Dashboard;