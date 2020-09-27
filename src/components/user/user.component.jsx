import React, { useEffect, useState } from 'react';

import Card from '../card/card.component';

const User = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
            const resJson = await res.json();
            setUser(resJson[0]);
        }

        fetchUser();
    })

    return (
        <Card>
            {user ? (
                <div>
                    <h3>{user.username}</h3>
                    <p>{user.name}</p>
                </div>
            ) : (
                <p>User not found.</p>
            )}
        </Card>
    );
};

export default User;