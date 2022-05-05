
import React, { useRef } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { styles } from './styles';
import { Options } from '../Options';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { Form } from '../Form';

export type FeedBackType = keyof typeof feedBackTypes


const Widget = () => {

    const bottomSheetRef = useRef<BottomSheet>(null)

    const handleOpen = () => {
        bottomSheetRef.current?.expand();
    }

    return (
        < >
            <TouchableOpacity
                style={styles.button}
                onPress={handleOpen}
            >


                <ChatTeardropDots
                    size={24}
                    weight="bold"
                    color={theme.colors.text_on_brand_color}
                />

            </TouchableOpacity>
            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={[1, 280]}//botão para arrastar e abrir algo
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
            >
                {/* <Options /> */}
                <Form
                    feedbackType='BUG'

                />

            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)