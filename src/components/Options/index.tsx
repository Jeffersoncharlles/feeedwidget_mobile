
import React from 'react';
import { Text, View } from 'react-native';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';
import { FeedBackType } from '../Widget';

import { styles } from './styles';

interface Props {
    onFeedChange: (feedbackType: FeedBackType) => void;
}

export const Options = ({ onFeedChange }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Deixe seu feedback
            </Text>
            <View style={styles.options}>
                {Object.entries(feedBackTypes).map(([key, valor]) => {

                    return (
                        <Option key={key} title={valor.title} image={valor.image.source} onPress={() => onFeedChange(key as FeedBackType)} />
                    )
                })}
            </View>
            <Copyright />
        </View>
    );
}