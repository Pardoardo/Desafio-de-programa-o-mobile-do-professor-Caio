<h1>🎯 Desafio: Calculadora de Gasto Calórico Diário (TMB)
Atividade em Dupla</h1>
<b>📌 Objetivo</b>
Atividade em 3
Crie um aplicativo React Native com Expo que permita ao usuário calcular sua Taxa Metabólica Basal (TMB) e o gasto calórico diário com base no nível de atividade física.
<p></p>
<b>🚀 Requisitos do Desafio</b>
✅ O usuário deve inserir idade, peso, altura e sexo.
✅ O app deve calcular a TMB com base na fórmula de Mifflin-St Jeor:
Homens: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) + 5
Mulheres: TMB = (10 × peso) + (6.25 × altura) - (5 × idade) - 161
✅ Após calcular a TMB, o usuário escolhe um nível de atividade física:
Sedentário (TMB × 1.2)
Leve (TMB × 1.375)
Moderado (TMB × 1.55)
Intenso (TMB × 1.725)
Muito Intenso (TMB × 1.9)
✅ O app exibe o gasto calórico diário estimado.
✅ Utilizar Alert.alert() para exibir o resultado.
✅ Validar os inputs para evitar valores inválidos (NaN, negativos ou vazios).
<p></p>
<b>💡 Dicas</b>
🔹 Utilize useState para armazenar os valores dos inputs.
🔹 Crie um Picker ou Modal para selecionar o nível de atividade.(Pesquisar)
🔹 Siga o mesmo fluxo do App do IMC para manter a organização.
<p></p>
<b>🎯 Desafio Extra (Opcional)</b>
✅ Permitir que o usuário salve seu resultado e veja um histórico.
