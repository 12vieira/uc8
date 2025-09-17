export const light = {
    background: '#f0f0f0',
    card: '#ffffff',
    text: '#000000',
    border: '#dddddd',
    shadow: '#000000',
};

export const dark = {
    background: '#121212',
    card: '#1e1e1e',
    text: '#ffffff',
    border: '#333333',
    shadow: '#000000',
};
/**
 * @param {boolean} isHig - Se alvos grandes estão ativados
 * Gera estilos globais baseados nas configurações de acessibilidade
 * @returns {object} Estilos globais
 */

export const makeTheme = (isHighContrast, isDarkMode) => {
    const theme = isDarkMode ? dark : light;
    if (isHighContrast) {
        theme.text = '#ffffff';
        theme.background = '#000000';
        theme.border = '#ffffff';
    }
    return theme;
};
