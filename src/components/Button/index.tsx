import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from 'react-native'; import { theme } from '../../theme';
;
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    isLoading: boolean;
}

export const Button = ({ isLoading, ...rest }: Props) => {

    return (
        <TouchableOpacity {...rest} style={styles.container}>
            {isLoading ?
                <ActivityIndicator
                    color={theme.colors.brand}
                />
                :
                <Text

                >Enviar Feedback</Text>}
        </TouchableOpacity>
    );
}