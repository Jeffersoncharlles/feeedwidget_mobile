import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native'; import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { FeedBackType } from '../Widget';
import { ScreenShot } from './ScreenShot';
import { styles } from './styles';


interface Props {
    feedbackType: FeedBackType
}

export const Form = ({ feedbackType }: Props) => {
    const feedInfo = feedBackTypes[feedbackType]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Image
                        source={feedInfo.image.source}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>{feedInfo.title}</Text>
                </View>
            </View>
            <TextInput
                style={styles.TextInputs}
                multiline
                placeholder='Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...'
                placeholderTextColor={theme.colors.text_secondary}
            />
            <View style={styles.footer}>
                <ScreenShot onRemove={() => { }} onShot={() => { }} screenshot={null} />
            </View>
        </View>
    );
}