<h1>🎯 Desafio: Calculadora de Gasto Calórico Diário (TMB)
Atividade em Dupla</h1>
<b>📌 Objetivo</b>
<p></p>
Atividade em 3
Crie um aplicativo React Native com Expo que permita ao usuário calcular sua Taxa Metabólica Basal (TMB) e o gasto calórico diário com base no nível de atividade física.
<p></p>
<b>🚀 Requisitos do Desafio</b>
<ol>
  <li>O usuário deve inserir idade, peso, altura e sexo.</li>
  <li>O app deve calcular a TMB com base na fórmula de Mifflin-St Jeor:
  Homens: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) + 5
  Mulheres: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) - 161</li>
  <li>Após calcular a TMB, o usuário escolhe um nível de atividade física:
  Sedentário (TMB × 1.2)
  Leve (TMB × 1.375)
  Moderado (TMB × 1.55)
  Intenso (TMB × 1.725)
  Muito Intenso (TMB × 1.9)</li>
  <li>O app exibe o gasto calórico diário estimado.</li>
  <li>Utilizar Alert.alert() para exibir o resultado.</li>
  <li>Validar os inputs para evitar valores inválidos (NaN, negativos ou vazios).</li>
</ol>

<p></p>
<b>💡 Dicas</b>
<ul>
  <li>Utilize useState para armazenar os valores dos inputs.</li>
  <li>Crie um Picker ou Modal para selecionar o nível de atividade.(Pesquisar)</li>
  <li>Siga o mesmo fluxo do App do IMC para manter a organização.</li>
</ul>

<p></p>
<b>🎯 Desafio Extra (Opcional)</b>
<ul>
  <li>Permitir que o usuário salve seu resultado e veja um histórico.</li>
</ul>
