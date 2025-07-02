# Sistema LGPD - Farmafórmula

## 📋 O que foi implementado

### 1. **Banner de Cookies**
- Aparece automaticamente na primeira visita
- Design responsivo e moderno
- Opções de "Aceitar" e "Recusar"
- Link direto para a Política de Privacidade

### 2. **Política de Privacidade**
- Página completa e detalhada
- Linguagem clara e acessível
- Informações sobre coleta e uso de dados
- Direitos do usuário conforme LGPD

### 3. **Sistema de Consentimento**
- Cookie que lembra a escolha do usuário
- Validade de 1 ano
- Notificações de confirmação
- Animações suaves

## 🔧 Como funciona

### Banner de Cookies
```javascript
// Aparece automaticamente se o usuário não escolheu antes
window.lgpdManager = new LGPDManager();

// Verificar se aceitou
if (window.lgpdManager.hasAcceptedCookies()) {
    // Usuário aceitou os cookies
}
```

### Estrutura de Arquivos
```
├── index.html (página principal)
├── politica-privacidade.html (política completa)
├── js/
│   ├── lgpd.js (sistema de cookies)
│   └── slider.js (slider de produtos)
└── LGPD_README.md (esta documentação)
```

## 📱 Funcionalidades

### ✅ Implementado
- [x] Banner de cookies responsivo
- [x] Política de privacidade completa
- [x] Sistema de consentimento
- [x] Notificações de confirmação
- [x] Animações CSS
- [x] Compatibilidade mobile
- [x] Link no footer

### 🎯 Benefícios
- **Conformidade LGPD**: Atende aos requisitos da lei
- **Experiência do usuário**: Interface amigável
- **Transparência**: Informações claras sobre dados
- **Flexibilidade**: Usuário pode aceitar ou recusar

## 🚀 Como testar

1. **Primeira visita**: Banner aparece automaticamente
2. **Aceitar cookies**: Banner desaparece + notificação
3. **Recusar cookies**: Banner desaparece + aviso
4. **Segunda visita**: Banner não aparece (cookie salvo)
5. **Política de privacidade**: Link no footer

## 📞 Contato para dúvidas LGPD

- **WhatsApp**: 62 99191-6000
- **E-mail**: farmaformulagoiania@gmail.com
- **Endereço**: AV. Dr Ismerino Soares de Carvalho N. 646 - Setor Aeroporto Goiânia - GO

## 🔄 Atualizações

Para atualizar a política de privacidade:
1. Edite `politica-privacidade.html`
2. Atualize a data no topo da página
3. Teste o banner novamente

---

**Última atualização**: Janeiro 2024
**Versão**: 1.0 