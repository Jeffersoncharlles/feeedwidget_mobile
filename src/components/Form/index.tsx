import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native'; import { TouchableOpacity } from 'react-native-gesture-handler';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { Button } from '../Button';
import { FeedBackType } from '../Widget';
import { ScreenShot } from './ScreenShot';
import { styles } from './styles';
import * as FileSystem from 'expo-file-system'


interface Props {
    feedbackType: FeedBackType
    onCanceled: () => void;
    onSend: () => void;
}



export const Form = ({ feedbackType, onCanceled, onSend }: Props) => {
    const feedInfo = feedBackTypes[feedbackType]
    const [isLoading, setIsLoading] = useState(false)
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const handleSend = async () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true)

        const screenshotBase64 = screenshot && FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })

        try {

            await api.post('/feedbacks', {
                type: feedInfo.title,
                screenshot: `data:image/png;base64,${screenshotBase64}`,
                comment
            })
            onSend()
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const handleScreenShot = () => {
        captureScreen({
            format: 'png',
            quality: 0.8
        }).then(uri => setScreenshot(uri)).catch(err => console.log(err))
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={onCanceled}>
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
                autoCorrect={false}
                onChangeText={setComment}
            />
            <View style={styles.footer}>
                <ScreenShot onRemove={() => setScreenshot(null)} onShot={handleScreenShot} screenshot={screenshot} />
                <Button isLoading={isLoading} onPress={handleSend} />
            </View>
        </View>
    );
}