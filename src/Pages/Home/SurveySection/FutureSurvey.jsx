import { useEffect, useState } from "react";


const FutureSurvey = ({ fedData, postId }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);

    useEffect(() => {
        fetch(`https://assignment-12-server-one-tan.vercel.app/likes/${postId}/counts`)
            .then((res) => res.json())
            .then((data) => {
                setLikes(data.likes);
                setDislikes(data.dislikes);
            })
            .catch((error) => console.error('Error fetching counts:', error));
    }, [postId]);

    const handleLike = () => {
        if (!userLiked) {
            setLikes(likes + 1);
            setUserLiked(true);

            // Update likes on the server
            fetch(`https://assignment-12-server-one-tan.vercel.app/likes/${postId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, action: 'like' }),
            })
                .then((res) => res.json())
                .then((data) => console.log('Like recorded:', data))
                .catch((error) => console.error('Error recording like:', error));
        }
    };

    const handleDislike = () => {
        if (!userLiked) {
            setDislikes(dislikes + 1);
            setUserLiked(true);

            // Update dislikes on the server
            fetch(`https://assignment-12-server-one-tan.vercel.app/likes/${postId}/dislike`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ postId, action: 'dislike' }),
            })
                .then((res) => res.json())
                .then((data) => console.log('Dislike recorded:', data))
                .catch((error) => console.error('Error recording dislike:', error));
        }
    };


    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={fedData.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-4 space-y-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracki">{fedData.title}</h2>
                    <p className="dark:text-gray-100 font-bold">{fedData.category}</p>
                    <p className="dark:text-gray-100">{fedData.description}</p>
                    <div className="flex justify-between py-4">
                        <button onClick={handleLike} disabled={userLiked} className="btn-small border px-2 bg-green-300">Like {likes}</button>
                        <button onClick={handleDislike} disabled={userLiked} className="btn-small border px-2 bg-red-300">Dislike {dislikes}</button>
                        <button className="btn-small px-4 border">Comments</button>
                    </div>
                    <p className="dark:text-gray-100"><span className="font-bold">Total Votes:</span> {fedData.totalVotes}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900 border bg-green-200">View Details</button>
            </div>
        </div>
    );
};

export default FutureSurvey;