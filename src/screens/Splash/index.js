import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Animated,
    ActivityIndicator,
} from 'react-native';
import {Container} from '../Splash/styles'
import Logo from '../../images/logo.png';


export default function SplashScreen({ navigation }) {
    const [LogoAnime, setLogoAnime] = useState(new Animated.Value(0))
    const [LogoText, setLogoText] = useState(new Animated.Value(0))
    // const [loadingSpinner, setloadingSpinner] = useState(false)
    const switchToAuth = () => {
        navigation.navigate('HomeScreen')
    };
    useEffect(() => {
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
            }).start(),

            Animated.timing(LogoText, {
                toValue: 1,
                duration: 1200,
            }),
        ]).start(() => {
            // setloadingSpinner(true)

            setTimeout(switchToAuth, 1500);
        });
    }, [])
    return (
        <Container>
            <Animated.View
                style={{
                    opacity: LogoAnime,
                    top: LogoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [80, 0],
                    }),
                }}>
                <Image source={Logo} />

                {/* {loadingSpinner ? (
                    <ActivityIndicator
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        size="large"
                        color="#5257f2"
                    />
                ) : null} */}
            </Animated.View>
        </Container>
    )

}

