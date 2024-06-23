import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useUser } from '@clerk/clerk-expo';
import { useClerk } from '@clerk/clerk-expo';
import Colors from '../../utils/Colors';

const Profile = () => {
    const { user } = useUser();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            setUserData({
                name: user.fullName,
                email: user.primaryEmailAddress.emailAddress,
                image: user.imageUrl
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
            console.log('User logged out successfully');
            // Handle navigation or other actions after logout
        } catch (error) {
            console.error('Error logging out:');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.greetingText}>
                Good morning, {user.firstName}!
            </Text>

            <View style={styles.profileContainer}>
                <Image source={{ uri: userData.image }} style={styles.avatar} />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.email}>{userData.email}</Text>
            </View>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    greetingText: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 20,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    email: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
    },
    logoutButton: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    logoutText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        paddingVertical: 12,
    },
});

export default Profile;
