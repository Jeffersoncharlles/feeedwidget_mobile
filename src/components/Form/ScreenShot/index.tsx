import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../../theme';

import { styles } from './styles';

interface Props {
    screenshot: string | null;
    onShot: () => void;
    onRemove: () => void;
}

export const ScreenShot = ({ screenshot, onRemove, onShot }: Props) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshot ? onRemove : onShot}
        >
            {screenshot ?
                <>
                    <Image
                        style={styles.Image}
                        source={{ uri: screenshot }}

                    />

                    <Trash
                        size={22}
                        color={theme.colors.text_secondary}
                        weight="fill"
                        style={styles.removeIcon} />
                </>

                :
                <Camera
                    size={24}
                    color={theme.colors.text_secondary}
                    weight="bold"
                    style={styles.camera}
                />}

        </TouchableOpacity>
    );
}