import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 lg:px-10 py-6 ">
    <h1 className="text-green-400 text-xl font-bold">चरन्मार्गान्विजानाति। <span className='text-white text-sm font-extralight'> -  महाभारत, आदि पर्व १३३-२३</span></h1>
    <div>
    <ul className="hidden md:flex space-x-6 text-gray-400">
      <li className="hover:text-green-400 cursor-pointer">Home</li>
      <li className="hover:text-green-400 cursor-pointer">Publications</li>
      <li className="hover:text-green-400 cursor-pointer">Talks</li>
      <li className="hover:text-green-400 cursor-pointer">Projects</li>
      <li className="hover:text-green-400 cursor-pointer">Blog</li>
    </ul>
    {/* <button className="bg-green-400 text-black px-4 py-2 rounded-lg">
      Contact Now
    </button> */}
    </div>

  </nav>
  );
};

export default Navbar;
