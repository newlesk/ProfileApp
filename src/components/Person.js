import { View, Text} from "react-native" 
export default function Person(props){
    return(
        <View>
            <Text>ข้อมูลประชากร</Text>
            <Text>ชื่อ {props.name}</Text>
            <Text>อายุ {props.age} ปี</Text>
        </View>
    )
}

