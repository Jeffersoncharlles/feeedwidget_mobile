
import React, { useRef, useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { theme } from '../../theme';
import { styles } from './styles';
import { Options } from '../Options';
import { feedBackTypes } from '../../utils/feedBackTypes';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedBackType = keyof typeof feedBackTypes


const Widget = () => {
    const bottomSheetRef = useRef<BottomSheet>(null)
    const [feedType, setFeedType] = useState<FeedBackType | null>(null)
    const [feedSend, setFeedSend] = useState(false)

    const handleOpen = () => {
        bottomSheetRef.current?.expand();
    }
    const handleReset = () => {
        setFeedType(null)
        setFeedSend(false)
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

                {feedSend ?
                    <Success onReset={handleReset} /> :

                    <>
                        {feedType ?
                            <Form feedbackType={feedType} onCanceled={handleReset} onSend={() => setFeedSend(true)} />
                            :
                            <Options onFeedChange={setFeedType} />
                        }

                    </>
                }



            </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)