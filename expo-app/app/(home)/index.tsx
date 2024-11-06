import { SignedIn, SignedOut, useUser, useAuth } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { useState } from 'react'

export default function Page() {
    const { user } = useUser()
    const { getToken } = useAuth()
    const [userData, setUserData] = useState<any>(null)
    const [error, setError] = useState<string>('')

    const fetchProtectedData = async () => {
        try {
            const token = await getToken()

            console.log('Token available:', !!token) // For debugging

            const response = await fetch('http://192.168.20.220:3000/api/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            })

            console.log('Response status:', response.status) // For debugging

            if (!response.ok) {
                const errorData = await response.json()
                console.log('Error response:', errorData) // For debugging
                throw new Error(errorData.error || 'Failed to fetch data')
            }

            const data = await response.json()
            console.log('Success response:', data) // For debugging
            setUserData(data)
            setError('')
        } catch (err) {
            console.error('Fetch error:', err) // For debugging
            setError(err.message || 'Error fetching data')
        }
    }

    return (
        <View style={styles.container}>
            <SignedIn>
                <View style={styles.content}>
                    <Text style={styles.welcomeText}>
                        Hello {user?.emailAddresses[0].emailAddress}
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={fetchProtectedData}
                    >
                        <Text style={styles.buttonText}>Fetch Protected Data</Text>
                    </TouchableOpacity>

                    {error ? (
                        <Text style={styles.errorText}>{error}</Text>
                    ) : null}

                    {userData && (
                        <View style={styles.dataContainer}>
                            <Text style={styles.dataText}>User ID: {userData.userId}</Text>
                            <Text style={styles.dataText}>Email: {userData.email}</Text>
                            {userData.message && (
                                <Text style={styles.dataText}>Message: {userData.message}</Text>
                            )}
                        </View>
                    )}
                </View>
            </SignedIn>

            <SignedOut>
                <View style={styles.authLinks}>
                    <Link href="/(auth)/sign-in" style={styles.link}>
                        <Text style={styles.linkText}>Sign In</Text>
                    </Link>
                    <Link href="/(auth)/sign-up" style={styles.link}>
                        <Text style={styles.linkText}>Sign Up</Text>
                    </Link>
                </View>
            </SignedOut>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        gap: 16,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#2563eb',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    dataContainer: {
        backgroundColor: '#f3f4f6',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    dataText: {
        fontSize: 14,
        marginBottom: 8,
    },
    errorText: {
        color: '#dc2626',
        marginTop: 8,
    },
    authLinks: {
        gap: 12,
    },
    link: {
        backgroundColor: '#f3f4f6',
        padding: 12,
        borderRadius: 8,
    },
    linkText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },
})