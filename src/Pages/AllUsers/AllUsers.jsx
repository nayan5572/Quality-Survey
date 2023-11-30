import { useQuery } from "react-query";
import useAxiosSecure from "../../components/Hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: serveUser = [] } = useQuery({
        queryKey: ['serveUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/serveUser');
            return res.data;
        }
    })


    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {serveUser?.length}</h2>
            </div>
        </div>
    );
};

export default AllUsers;