
import React from 'react';
import { Text, View } from 'react-native';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { Copyright } from '../Copyright';
import { Option } from '../Option';

import { styles } from './styles';

export const Options = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Deixe seu feedback
            </Text>
            <View style={styles.options}>
                {Object.entries(feedBackTypes).map(([key, valor]) => {

                    return (
                        <Option key={key} title={valor.title} image={valor.image.source} />
                    )
                })}
            </View>
            <Copyright />
        </View>
    );
}