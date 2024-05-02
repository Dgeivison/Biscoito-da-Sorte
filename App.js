import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function app(){
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  const frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Se você se sente só é porque construiu muros ao invés de pontes.',
    'O amor está mais próximo do que você imagina.',
    'A vida coloca em nossa frente opções.',
    'Você é do tamanho do seu sonho.',
    'Pare de procurar eternamente, a felicidade está bem ao seu lado.',
    'Conhecimento é a única virtude e ignorância é o único vício.',
    'O nosso primeiro e último amor é… o amor-próprio.',
    'Deixe de lado as preocupações e seja feliz.',
    'A sorte favorece a mente bem preparada.',
    'A paciência na adversidade é o sinal de um coração sensível.',
    'Todo mundo é capaz de denominar uma dor, exceto quem a sente.',
    'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
    'Amizade e Amor são coisas que podem virar uma só num piscar de olhos.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'É mais fácil conseguir o perdão do que a permissão.',
    'Você é jovem apenas uma vez. Depois precisa inventar outra desculpa.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
  ]


  function quebraBiscoito(){
    const numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextoFrase('');
  }

  return(
    <View style={style.container}>
      
      <Image
      source={img}
      style={style.img}
      />
    
    <Text style={style.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={style.botao} onPress={quebraBiscoito}>
        <View style={style.btnArea}>
          <Text style={style.btnTexto}>Quebre o biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[style.botao, {marginTop: 15, borderColor: 'black' } ]} onPress={reiniciarBiscoito}>
        <View style={style.btnArea}>
          <Text style={[style.btnTexto, {color: 'black'}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>



    </View>
  );
}

const style =StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  },
})
export default app;
