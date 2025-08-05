// Babel.config.js
// Este arquivo é usado para configurar o Babel, que é uma ferramenta de transpilação de JavaScript.
module.exports = function (api) {
  // O Babel é uma ferramenta que permite transformar código JavaScript moderno em uma versão compatível com navegadores mais antigos ou ambientes específicos.
  // O arquivo Babel.config.js é usado para configurar o comportamento do Babel em um projeto.  
  api.cache(true);
  // A função `api.cache` é usada para otimizar o desempenho do Babel, armazenando em cache os resultados da transformação.
  // O parâmetro `api` é um objeto que contém informações sobre o ambiente de execução
  return {
    // Defina os presets que você deseja usar
    // Aqui estamos usando o preset do Expo, que é comum em projetos React Native
    presets: ['babel-preset-expo'],
    // Adicione o plugin de animação
    plugins: ['react-native-reanimated/plugin'], // 👈 isso é obrigatório
  };
};