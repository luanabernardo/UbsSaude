# UbsSaúde+

FOCO:Postos de sáude

*Este é um aplicativo que tem como objetivo diminuir as filas de marcação,vacinas,as de pegar medicamento, procurar unidades, dando uma alternativa para tudo isso por meio de funções em aplicativos*

>Explicando o código

 *É apresentado um menu de opções (Agendamento, Vacinas, Remédios, Perfil e Ubs) que, quando clicadas, mostram um texto relacionado à opção selecionada. Além disso, o aplicativo tem um campo de pesquisa que, se o usuário escrever "Vacina", mostra uma mensagem informando que a opção de vacina está na segunda posição do menu.*

**O código usa os seguintes componentes do React Native:**


* para separar as funcionalidades e facilitar a estilização `View`


* para renderizar a lista de opções `FlatList`


*  para tornar cada item da lista clicável `TouchableOpacity`


* para criar um campo de pesquisa `TextInput `


* para permitir que o texto mostrado na tela seja rolado, se necessário `ScrollView `


* Para mostrar onde está localizado o que o usuário escrever `onChangeText`


*  criar elementos clicávei, botoes, junto do onpress para dar alguma funcionalidade aos botoes `TouchableComponents e Button - OnPress`


* para exibir o texto na tela `Text `


* @expo/vector-icons para mostrar ícones das opções na lista `Icon `

## **código também usa o estado do React para gerenciar o conteúdo exibido na tela:**



* para definir o estado das variáveis value, showMessage, op, selectedItem e mostrando`useState `



 * para executar a lógica de mostrar ou ocultar a mensagem quando o usuário escreve algo no campo de pesquisa`useEffect`
