import { useEffect, useState } from "react";

const MostLatest = ({ latest, postId }) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userLiked, setUserLiked] = useState(false);

    // const handleLike = () => {
    //     if (!userLiked) {
    //         setLikes(likes + 1);
    //         setUserLiked(true);
    //         // Here, you would typically send a request to your server to record the like
    //     }
    // };

    // const handleDislike = () => {
    //     if (!userLiked) {
    //         setDislikes(dislikes + 1);
    //         setUserLiked(true);
    //         // Here, you would typically send a request to your server to record the dislike
    //     }
    // };

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
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={latest.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracki uppercase dark:text-violet-400"><span className="font-bold">Category:</span> {latest.category}</span>
                    <h2 className="text-xl font-semibold tracki">{latest.title}</h2>
                </div>
                <p className="dark:text-gray-100">{latest.description}</p>
                <div className="flex justify-between py-4">
                    <button onClick={handleLike} disabled={userLiked} className="btn-small border px-2 bg-green-300">Like {likes}</button>
                    <button onClick={handleDislike} disabled={userLiked} className="btn-small border px-2 bg-red-300">Dislike {dislikes}</button>
                    <button className="btn-small px-4 border">Comments</button>
                </div>
            </div>
        </div>
    );
};

export default MostLatest;