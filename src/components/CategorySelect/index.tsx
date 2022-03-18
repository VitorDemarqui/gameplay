import { View } from "react-native"

import { ScrollView } from "react-native-gesture-handler"
import { styles } from "./styles"

export function CategorySelect() {
    return (
        <ScrollView 
            horizontal
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >

        </ScrollView>
    )
}