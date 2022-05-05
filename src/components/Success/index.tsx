import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';;
import { styles } from './styles';

import SuccessImg from '../../assets/Success.png'
import { Copyright } from '../Copyright';

interface Props {
    onReset: () => void;
}

export const Success = ({ onReset }: Props) => {

    return (
        <View style={styles.container}>
            <Image
                source={SuccessImg}
                style={styles.Image}
            />
            <Text style={styles.title}>
                Agradecemos o Feedback
            </Text>
            <TouchableOpacity style={styles.button} onPress={onReset}>
                <Text style={styles.buttonText}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>
            <Copyright />
        </View>
    );
}