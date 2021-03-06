import { View, 
  Text, 
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonIcon } from '../../components/ButtonIcon';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    // @ts-ignore
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>

      <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>

        <Text style = {styles.title}>
          {'Conecte-se\ne organize suas \njogatinas'}
        </Text>

        <Text style = {styles.subtitle}>
          {'Crie grupos para jogar seus games\nfavoritos com seus amigos'}
        </Text>

        <ButtonIcon 
          title='Entrar com Discord' 
          onPress={handleSignIn}
        />
      </View>
    </View>
  )
}