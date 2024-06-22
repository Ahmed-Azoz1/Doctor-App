import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';

import { useClerk } from '@clerk/clerk-expo';
import Dashboard from './Dashboard';


const Profile = () => {
    const { user } = useUser();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
        setUserData({
            name: user?.fullName,
            email: user?.primaryEmailAddress.emailAddress,
            image: user?.imageUrl
        });
    }
    }, [user]);

    if (!userData) {
        return <Text>Loading...</Text>;
    }

    const { signOut } = useClerk();

    const handleLogout = async () => {
        try {
            await signOut();
            // Handle successful logout
            console.log('User logged out successfully');
            // Navigate to login screen or perform other actions as needed
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };


    return (
        // <View style={styles.container}>
        //     <Text style={{ textAlign: 'center' }}>
        //         Good morning {user.firstName} {user.lastName}!
        //     </Text>

        //     <View style={styles.container}>
        //         <Image source={{ uri:userData.image }} style={styles.avatar} />
        //         <Text style={styles.name}>{userData.name}</Text>
        //         <Text style={styles.email}>{userData.email}</Text>
        //     </View>

        //     <View style={{marginTop:20}}>
        //         <Button title="Logout" onPress={handleLogout} />
        //     </View>
        // </View>
        <Dashboard />
    );
};



export default Profile;