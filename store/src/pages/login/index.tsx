import {View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import back2 from '../../../assets/img/back2.jpeg'

export default function Login(){
    const navigation = useNavigation<NavigationProp<any>>()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn(){
            if(email == '' || password === ''){
                Alert.alert("Atenção", "Preencha todos os campos.");
                return;
            }
    
            if(!email.includes('@')){
                Alert.alert("Erro", "Insira um e-mail válido.");
                return;
            }
    
            if(password.length < 6){
                Alert.alert("Erro", "A senha deve conter pelo menos 6 caracteres.");
                return;
            }
            
            navigation.navigate("BottomRoutes")

        }

    return(
        <View style={styles.container}>
            <ImageBackground
            source={back2} blurRadius={6} style={styles.container}>
            <View style={styles.boxTop}>
                {/*<Image style={styles.imagem} 
                resizeMode='contain' 
                source={imgTeste}/>*/}
                {/*<Text style={styles.texto}>
                    Garimpe barato. Venda sem custo. 
                    Dê nova vida às peças.
                    </Text>*/}
            </View>
            <View style={styles.boxMid}>

                <Text style={styles.texto}>
                    Garimpe barato.
                    Venda sem custo.{"\n"} 
                    Dê nova vida às peças.
                </Text>

                <Text style={styles.title}>Acesse sua conta.</Text>

                <Text style={styles.label}>Endereço de e-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail} 
                />

                <Text style={styles.label}>Insira sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry 
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.boxBottom}>
                {/*<Text style={styles.title}>Acesse sua conta.</Text>

                <Text style={styles.label}>Endereço de e-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="exemplo@email.com"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail} 
                />

                <Text style={styles.label}>Insira sua senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Sua senha"
                    placeholderTextColor="#999"
                    secureTextEntry 
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>*/}

            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxTop: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxMid: {
        height:Dimensions.get('window').height/4,
        width: '100%',
        //backgroundColor: 'green',
        alignItems: 'center',
        marginTop: 30
    },

    boxBottom: {
        height:Dimensions.get('window').height/3,
        width: '100%',
        //backgroundColor: 'blue',
        alignItems: 'center',
    },

    texto: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
        color: '#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        marginTop: -19,
        marginBottom: 8,
        textAlign: 'center'
    },

    label: {
        fontSize: 14,
        color: '#ffffff',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        marginBottom: 4,
        marginLeft: 38,
        alignSelf: 'flex-start',
        textAlign: 'left',
    },

    input: {
        backgroundColor: '#F3F3F3',
        height: 40,
        width: 320,
        borderRadius: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },

    button: {
        backgroundColor: '#ff0051', 
        height: 50,
        width: 90,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
    },
    buttonText: {
        color: '#3c3c3c',
        fontSize: 15,
        fontWeight: 'bold',
    }
})