# Instruções para Favicon

## 🔧 Para converter o favicon.png para .ico:

### Opção 1: Online (Recomendado)
1. Acesse: https://convertio.co/png-ico/
2. Faça upload do arquivo `assets/img/favicon.png`
3. Baixe o arquivo `favicon.ico`
4. Coloque o arquivo na raiz do projeto (mesmo nível do index.html)

### Opção 2: Photoshop/GIMP
1. Abra o `assets/img/favicon.png`
2. Redimensione para 16x16, 32x32, 48x48 pixels
3. Salve como `favicon.ico` na raiz

### Opção 3: Ferramentas Online
- https://favicon.io/
- https://www.favicon-generator.org/
- https://realfavicongenerator.net/

## 📱 Ícones PWA

O `manifest.json` já está configurado com todos os tamanhos necessários:
- 16x16, 32x32, 48x48, 72x72, 96x96
- 128x128, 144x144, 152x152, 192x192
- 384x384, 512x512

## ✅ Após a conversão:

1. O favicon aparecerá na aba do navegador
2. O ícone do PWA será exibido corretamente
3. O app instalado terá o ícone da Farmafórmula

## 🎯 Resultado:

- ✅ Favicon na aba do navegador
- ✅ Ícone no PWA instalado
- ✅ Ícone na tela inicial do celular
- ✅ Compatibilidade total com todos os navegadores 