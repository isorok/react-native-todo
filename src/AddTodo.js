import React, {useState} from 'react'
import {View,TextInput,StyleSheet,Button,Alert} from 'react-native'

const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()){
            onSubmit(value)
            setValue(' ')
        } else {
            Alert.alert('Todos Name is Empty!')
        }
    }

    return (
        <View  style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={setValue}
                value={value} 
                placeholder={'Enter todos name...'}
                autoCorrect={false}
                autoCapitalize={'none'}
             />
            <Button title='Add' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom: 15

    },
    input: {
        width: '80%',
        padding:10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor:'red'
    }
})
export default AddTodo;