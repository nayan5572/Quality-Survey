import { useEffect, useState } from "react";
import useAuth from "../../../components/Hooks/useAuth";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { FaBookOpen, FaDollarSign, FaUsers, FaVoteYea } from "react-icons/fa";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [serveUser, setServeUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosSecure.get('/serveUser');
                setServeUser(res.data);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [axiosSecure]);


    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome: </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div>
                <section className="p-6 my-6 bg-gray-800 dark:text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaUsers className="text-4xl"></FaUsers>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">{serveUser.length}</p>
                                <p className="capitalize">Users</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaBookOpen className="text-4xl"></FaBookOpen>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">12</p>
                                <p className="capitalize">Total Survey</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaVoteYea className="text-4xl"></FaVoteYea>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">172</p>
                                <p className="capitalize">Total Votes</p>
                            </div>
                        </div>
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
                                <FaDollarSign></FaDollarSign>
                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leadi">$ 2000</p>
                                <p className="capitalize">Total Bounce</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default AdminHome;